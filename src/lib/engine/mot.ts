/**
 * MOT failure rates computed from the DVSA anonymised MOT test results (calendar year 2023), rebuilt by
 * `data/build-mot.py`. A "test" is an initial class 4 normal test (cars and light vans) that ended in a pass,
 * a fail or a pass after rectification at the station (PRS). A "failure" is an initial fail: F or PRS, the
 * same definition as DVSA's "initial fail rate". Ages are counted by year of first use: a car first used in
 * 2015 is "8 years old" in the 2023 tests.
 */
import RAW from '../../data/mot.json';

export type Pair = [number, number];
export interface Model { make: string; model: string; label: string; makeLabel: string; n: number; f: number; mi: number; y: Record<string, Pair>; fuel: Record<string, Pair>; cats: Record<string, number>; top: Array<[number, number]> }
export interface Make { make: string; label: string; n: number; f: number; y: Record<string, Pair> }
export const D = RAW as unknown as {
  meta: { testYear: number; tests: number; fails: number; allTests: number; allFails: number; published: string; read: string };
  national: Record<string, Pair>;
  fuel: Record<string, Record<string, Pair>>;
  mileage: Record<string, Record<string, Pair>>;
  areas: Record<string, Record<string, Pair>>;
  cats: Record<string, string>;
  catAge: Record<string, Record<string, number>>;
  rfrNat: Array<[number, number]>;
  rfrDanger: Array<[number, number]>;
  items: Record<string, { n: string; d: string; m: string; c: number; k: string }>;
  models: Model[];
  makes: Make[];
};
export const TEST_YEAR = D.meta.testYear;
export const rate = (p?: Pair | null) => (p && p[0] ? p[1] / p[0] : null);
export const ageOf = (fy: number | string) => TEST_YEAR - Number(fy);
export const yearOf = (age: number) => TEST_YEAR - age;
export const nationalRate = () => D.meta.fails / D.meta.tests;
export const nationalAt = (age: number) => rate(D.national[String(yearOf(age))]);
export const nationalPair = (age: number) => D.national[String(yearOf(age))] ?? null;

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const modelId = (m: Model) => `${slugify(m.make)}-${slugify(m.model)}`;
export const model = (make: string, md: string) => {
  const m = D.models.find((x) => x.make === make && x.model === md);
  if (!m) throw new Error(`No model ${make} ${md} in mot.json`);
  return m;
};
export const make = (mk: string) => {
  const m = D.makes.find((x) => x.make === mk);
  if (!m) throw new Error(`No make ${mk} in mot.json`);
  return m;
};
export const modelsOf = (mk: string, min = 10000) => D.models.filter((m) => m.make === mk && m.n >= min);
/** Model rate at one age (null under 300 tests, too few to read). */
export const modelAt = (m: Model | Make, age: number, min = 300) => { const p = m.y[String(yearOf(age))]; return p && p[0] >= min ? p[1] / p[0] : null; };
export const pairAt = (m: Model | Make, age: number) => m.y[String(yearOf(age))] ?? null;
/** Ages (3 and over) with at least `min` tests, youngest first. */
export const ages = (m: Model | Make, min = 300) => Object.entries(m.y).filter(([, p]) => p[0] >= min).map(([y]) => ageOf(y)).filter((a) => a >= 3).sort((a, b) => a - b);
/** The model's rate set against all cars of the same ages, weighted by its own age mix: > 1 means it fails more often than an average car of the same age. */
export function ageAdjusted(m: Model | Make) {
  let exp = 0, f = 0;
  for (const [y, p] of Object.entries(m.y)) { const a = ageOf(y); if (a < 3) continue; const r = nationalAt(a); if (r == null) continue; exp += p[0] * r; f += p[1]; }
  return exp ? f / exp : null;
}
/** Model rank among models with at least `min` tests, on the age-adjusted ratio (1 = fewest failures). */
export function rankAdjusted(m: Model, min = 50000) {
  const l = D.models.filter((x) => x.n >= min).map((x) => ({ x, r: ageAdjusted(x) ?? 9 })).sort((a, b) => a.r - b.r);
  return { rank: l.findIndex((e) => e.x === m) + 1, of: l.length };
}
export const catName = (c: number | string) => D.cats[String(c)] ?? String(c);
/** Defect groups of a model, most frequent first: share of its failed tests with at least one failure item in the group. */
export const modelCats = (m: Model) => Object.entries(m.cats).map(([c, s]) => ({ c: Number(c), name: catName(c), s })).sort((a, b) => b.s - a.s);
/** Same, for every failed test at a given age (ages in completed years at the test date). */
export function ageCats(age: number) {
  const row = D.catAge[String(age)]; if (!row) return [];
  return Object.keys(D.cats).map((c) => ({ c: Number(c), name: catName(c), s: (row[c] ?? 0) / row.failed, ofTests: (row[c] ?? 0) / row.tests })).sort((a, b) => b.s - a.s);
}
export const item = (r: number) => D.items[String(r)];
const NAME_FIX: Record<string, string> = { 'Rbt (sp)': 'Service brake (roller brake test)', Joints: 'Driveshaft joint', 'Component mounting prescribed areas': 'Structure around a component mounting', 'Registration plate lamp(s)': 'Number plate lamp' };
/** Plain name of a failure item: component, then the defect as DVSA records it ("Coil spring: fractured or broken"). */
export const itemText = (r: number) => {
  const i = item(r); if (!i) return String(r);
  const n = i.n === 'Condition' && i.c === 20449 ? 'Tyre' : NAME_FIX[i.n] ?? i.n;
  return `${n}: ${i.d.replace(/\s+/g, ' ').replace(/\.$/, '')}`;
};
export const fuelRate = (fuel: string, age: number) => rate(D.fuel[fuel]?.[String(yearOf(age))]);
export const fuelPair = (fuel: string, age: number) => D.fuel[fuel]?.[String(yearOf(age))] ?? null;
export const FUELS: Record<string, string> = { PE: 'Petrol', DI: 'Diesel', HY: 'Hybrid', EL: 'Electric' };
export const AGE_BANDS = ['3-5', '6-9', '10-14', '15-19', '20+'];
export const bandLabel = (b: string) => (b === '20+' ? '20 years and over' : `${b.replace('-', ' to ')} years`);
export const mileageRate = (band: number, ab: string) => rate(D.mileage[String(band)]?.[ab]);
export const areaRate = (code: string, ab = 'all') => rate(D.areas[code]?.[ab]);
export const sum = (ps: Array<Pair | null | undefined>): Pair => ps.reduce<Pair>((a, p) => (p ? [a[0] + p[0], a[1] + p[1]] : a), [0, 0]);

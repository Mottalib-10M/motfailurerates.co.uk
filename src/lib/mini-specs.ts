/** Mini-tools of the site (RECETTE §9.3): one per subject, each fed by the DVSA data or the GOV.UK rules.
 *  Named imports from mot.json keep the model table out of the browser bundle. */
import type { MiniSpec } from './mini-types';
import { national, fuel, mileage, areas, cats, catAge, meta } from '../data/mot.json';
import PRM from '../data/params-2026.json';
import { AREA_NAMES } from './areas';
import { CAT_CHECK, GROUP_ID } from './checks';
import { formatMoney, formatNumber, formatPercent } from './format';

type Pair = [number, number];
const TY: number = meta.testYear;
const NAT = national as unknown as Record<string, Pair>;
const FUEL = fuel as unknown as Record<string, Record<string, Pair>>;
const MIL = mileage as unknown as Record<string, Record<string, Pair>>;
const AREAS = areas as unknown as Record<string, Record<string, Pair>>;
const CATS = cats as unknown as Record<string, string>;
const CATAGE = catAge as unknown as Record<string, Record<string, number>>;
const pc = (x: number | null) => (x == null ? 'n/a' : formatPercent(x, 1));
const rt = (p?: Pair | null) => (p && p[0] ? p[1] / p[0] : null);
const n0 = (x: number) => formatNumber(x, 0);
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dstr = (d: Date) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
const utc = (y: number, m: number, d: number) => new Date(Date.UTC(y, m - 1, d));
/** Same day number, n months later; the end of a shorter month when that day does not exist (31 Jan + 1 month = 28 or 29 Feb). */
const addMonths = (d: Date, n: number) => { const y = d.getUTCFullYear(), m = d.getUTCMonth() + n, day = d.getUTCDate(); const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate(); return new Date(Date.UTC(y, m, Math.min(day, last))); };
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * 86400000);

const regYears = Object.entries(NAT).filter(([y, p]) => TY - Number(y) >= 3 && p[0] >= 5000).map(([y]) => Number(y)).sort((a, b) => b - a);
const yearOptions = regYears.map((y) => ({ value: String(y), label: `${y} (${TY - y} years old)` }));
const FUEL_KEYS = ['PE', 'DI', 'HY', 'EL'];
const FUEL_LABEL: Record<string, string> = { PE: 'Petrol', DI: 'Diesel', HY: 'Hybrid', EL: 'Electric' };
const BANDS = ['3-5', '6-9', '10-14', '15-19', '20+'];
const bandOptions = BANDS.map((b, i) => ({ value: String(i), label: b === '20+' ? '20 years or more' : `${b.replace('-', ' to ')} years` }));
const AREA_KEYS = Object.keys(AREAS).filter((a) => AREA_NAMES[a]).sort();
const areaAll = (k: string) => rt(AREAS[k].all);
const gbBand = (b: string) => { let n = 0, f = 0; for (const a of Object.values(AREAS)) { const p = a[b]; if (p) { n += p[0]; f += p[1]; } } return n ? f / n : null; };
const CAT_KEYS = Object.keys(CATS);
const catOptions = CAT_KEYS.map((c, i) => ({ value: String(i), label: CATS[c] }));
const CAT_AGES = Object.keys(CATAGE).map(Number).filter((a) => a >= 3 && a <= 25);
const yesNo = [{ value: '1', label: 'Yes' }, { value: '0', label: 'No' }];
const monthOptions = MONTHS.map((m, i) => ({ value: String(i + 1), label: m }));

const SPECS: Record<string, (lang: string) => MiniSpec> = {
  age: () => ({
    title: 'Failure rate of all cars at one age', cta: 'See every make and model at that age',
    inputs: [{ id: 'year', label: 'Year first registered', def: 2015, options: yearOptions }],
    exemple: (v) => `Example for a car first registered in ${v.year}`,
    run: (v) => {
      const p = NAT[String(v.year)], r = rt(p), r3 = rt(NAT[String(TY - 3)]);
      return { head: [`Cars first registered in ${v.year}: failed the first test`, pc(r)], rows: [['Tests in ' + TY, n0(p?.[0] ?? 0)], ['Initial failures', n0(p?.[1] ?? 0)], ['Cars at their first MOT (3 years)', pc(r3)], ['Times the 3-year rate', r && r3 ? `${formatNumber(r / r3, 1)} ×` : 'n/a']], note: `DVSA anonymised results, class 4 tests in ${TY}.` };
    },
  }),
  fuel: () => ({
    title: 'Petrol, diesel, hybrid or electric: failure rate at one age', cta: 'Check your exact model',
    inputs: [{ id: 'fuel', label: 'Fuel', def: 1, options: FUEL_KEYS.map((k, i) => ({ value: String(i), label: FUEL_LABEL[k] })) }, { id: 'year', label: 'Year first registered', def: 2016, options: yearOptions }],
    exemple: (v) => `Example for a ${FUEL_LABEL[FUEL_KEYS[v.fuel]].toLowerCase()} car first registered in ${v.year}`,
    run: (v) => {
      const k = FUEL_KEYS[v.fuel], p = FUEL[k]?.[String(v.year)];
      const rows: Array<[string, string]> = FUEL_KEYS.filter((x) => x !== k).map((x) => { const q = FUEL[x]?.[String(v.year)]; return [`${FUEL_LABEL[x]}, same year`, q && q[0] >= 500 ? `${pc(rt(q))} of ${n0(q[0])}` : 'too few tests']; });
      return { head: [`${FUEL_LABEL[k]} cars from ${v.year}: failed the first test`, p && p[0] >= 500 ? pc(rt(p)) : 'too few tests'], rows: [['Tests counted', n0(p?.[0] ?? 0)], ...rows], note: 'Fuel as recorded at the test. Under 500 tests a rate is not shown.' };
    },
  }),
  mileage: () => ({
    title: 'Failure rate by mileage and age', cta: 'Check your model',
    inputs: [{ id: 'miles', label: 'Mileage on the clock', def: 75000, unit: 'miles', max: 400000 }, { id: 'band', label: 'Age of the car', def: 1, options: bandOptions }],
    exemple: (v) => `Example for a car with ${n0(v.miles)} miles`,
    run: (v) => {
      const b = Math.min(30, Math.floor(v.miles / 10000)), ab = BANDS[v.band];
      const p = MIL[String(b)]?.[ab], r = rt(p);
      const all = Object.values(MIL).reduce<Pair>((s, x) => (x[ab] ? [s[0] + x[ab][0], s[1] + x[ab][1]] : s), [0, 0]);
      const lo = b * 10000, hi = lo + 9999;
      return { head: [`${b === 30 ? '300,000 miles or more' : `${n0(lo)} to ${n0(hi)} miles`}, ${bandOptions[v.band].label}`, p && p[0] >= 300 ? pc(r) : 'too few tests'], rows: [['Tests in that band', n0(p?.[0] ?? 0)], ['All mileages, same age', pc(rt(all))]], note: 'Mileage recorded by the tester at the 2023 test.' };
    },
  }),
  area: () => ({
    title: 'Failure rate by postcode area', cta: 'Check your model',
    inputs: [{ id: 'area', label: 'Postcode area (first letters)', def: Math.max(0, AREA_KEYS.indexOf('B')), options: AREA_KEYS.map((k, i) => ({ value: String(i), label: `${k}: ${AREA_NAMES[k]}` })) }, { id: 'band', label: 'Age of the car', def: 2, options: bandOptions }],
    exemple: (v) => `Example for ${AREA_NAMES[AREA_KEYS[v.area]]}`,
    run: (v) => {
      const k = AREA_KEYS[v.area], ab = BANDS[v.band], p = AREAS[k]?.[ab];
      return { head: [`${k} ${AREA_NAMES[k]}, cars aged ${bandOptions[v.band].label}`, p && p[0] >= 300 ? pc(rt(p)) : 'too few tests'], rows: [['Tests counted', n0(p?.[0] ?? 0)], ['Great Britain, same age', pc(gbBand(ab))], [`${k}, all ages`, pc(areaAll(k))]], note: 'Postcode area of the test station, as recorded by DVSA.' };
    },
  }),
  cat: () => ({
    title: 'How often each defect group fails a car', cta: 'See the failure reasons of your model',
    inputs: [{ id: 'cat', label: 'Defect group', def: 0, options: catOptions }, { id: 'age', label: 'Age at the test (completed years)', def: 8, options: CAT_AGES.map((a) => ({ value: String(a), label: `${a} years` })) }],
    exemple: (v) => `Example for a car aged ${v.age}`,
    run: (v) => {
      const c = CAT_KEYS[v.cat], row = CATAGE[String(v.age)];
      const s = row ? (row[c] ?? 0) / row.failed : null, t = row ? (row[c] ?? 0) / row.tests : null;
      return { head: [`${CATS[c]}: share of failed tests, cars aged ${v.age}`, pc(s)], rows: [['Share of all tests at that age', pc(t)], ['Failed tests at that age', n0(row?.failed ?? 0)]], note: 'A failed test often has defects in several groups, so the shares add up to more than 100%.' };
    },
  }),
  check: () => ({
    title: 'What the tester checks in each part of the car', cta: 'See which defects fail cars most',
    inputs: [{ id: 'g', label: 'Part of the car', def: 0, options: PRM.categories.rows.map((r, i) => ({ value: String(i), label: String(r[0]) })) }],
    exemple: (v) => `Example for ${String(PRM.categories.rows[v.g][0]).toLowerCase()}`,
    run: (v) => {
      const [name, tests, defects] = PRM.categories.rows[v.g] as [string, number, number];
      const tip = CAT_CHECK[GROUP_ID[name]] ?? '';
      return { head: [`${name}: tests failed on it, ${PRM.national.yearLabel}`, pc(tests)], rows: [['Share of all failure items', pc(defects)], ['Before the test', tip ? tip.charAt(0).toUpperCase() + tip.slice(1) : 'n/a']], note: 'DVSA table DVSA/MOT/03, cars, vans and passenger vehicles up to 12 seats.' };
    },
  }),
  cost: () => ({
    title: 'What the MOT will cost in fees', cta: 'What happens after a fail',
    inputs: [
      { id: 'price', label: 'Price the garage charges', def: 45, unit: '£', max: PRM.fees.car, decimals: 2, help: `The legal maximum for a car is ${formatMoney(PRM.fees.car, 2)}` },
      { id: 'outcome', label: 'Result and what you do next', def: 0, options: [
        { value: '0', label: 'Passes first time' },
        { value: '1', label: 'Fails, left at the garage and retested within 10 working days' },
        { value: '2', label: 'Fails, back by the end of the next working day (listed items)' },
        { value: '3', label: 'Fails, taken away and back within 10 working days' },
        { value: '4', label: 'Fails, back after 10 working days' },
      ] },
      { id: 'partial', label: 'Partial retest fee the garage asks', def: 0, unit: '£', max: PRM.fees.car, decimals: 2, avance: true, showIf: (v) => v.outcome === 3, help: 'Ask the garage: GOV.UK says a fee can be charged' },
    ],
    exemple: (v) => `Example for a garage charging ${formatMoney(v.price, 2)}`,
    run: (v) => {
      const extra = v.outcome === 3 ? v.partial : v.outcome === 4 ? v.price : 0;
      const label = ['No retest', 'Partial retest, free', 'Partial retest, free', 'Partial retest fee', 'Full test fee again'][v.outcome];
      return { head: ['MOT fees paid (repairs not included)', formatMoney(v.price + extra, 2)], rows: [['Test', formatMoney(v.price, 2)], [label, formatMoney(extra, 2)], ['Saved against the maximum fee', formatMoney(Math.max(0, PRM.fees.car - v.price), 2)]], note: 'No VAT is charged on the MOT fee. Repairs are priced separately by the garage.', alert: v.outcome === 4 ? 'After 10 working days the car needs a full test at the full fee.' : undefined };
    },
  }),
  due: () => ({
    title: 'When is my MOT due?', cta: 'Book with a reminder from GOV.UK',
    inputs: [
      { id: 'mode', label: 'I know', def: 1, options: [{ value: '0', label: 'The date the car was first registered (first MOT)' }, { value: '1', label: 'The expiry date of the current MOT' }] },
      { id: 'd', label: 'Day', def: 15, max: 31 },
      { id: 'm', label: 'Month', def: 5, options: monthOptions },
      { id: 'y', label: 'Year', def: 2027, max: 2035 },
    ],
    exemple: (v) => `Example for ${v.d} ${MONTHS[v.m - 1]} ${v.y}`,
    run: (v) => {
      const y = Math.max(1950, v.y), d = Math.min(Math.max(1, v.d), new Date(Date.UTC(y, v.m, 0)).getUTCDate());
      const base = utc(y, v.m, d);
      const due = v.mode === 0 ? addMonths(base, 12 * PRM.rules.firstTestYears) : base;
      const earliest = addDays(addMonths(due, -1), 1);
      return { head: [v.mode === 0 ? 'First MOT due by' : 'Current MOT runs out on', dstr(due)], rows: [['Earliest test that keeps this date', dstr(earliest)], ['Next expiry if passed from that date', dstr(addMonths(due, 12))], ['Fine for driving with no valid MOT', `up to ${formatMoney(PRM.rules.fineNoMot, 0)}`]], note: 'Tested earlier than that, the new MOT runs one year (minus a day) from the pass. Taxis and some vehicles need a test at one year.' };
    },
  }),
  retest: () => ({
    title: 'Failed MOT: can I drive it, and will I pay again?', cta: 'See the most common failures',
    inputs: [
      { id: 'valid', label: 'Is the old MOT still valid?', def: 1, options: yesNo },
      { id: 'danger', label: 'Any defect marked dangerous?', def: 0, options: yesNo },
      { id: 'where', label: 'Where will it be repaired?', def: 0, options: [{ value: '0', label: 'At the test centre, retested within 10 working days' }, { value: '1', label: 'Elsewhere, back by the end of the next working day' }, { value: '2', label: 'Elsewhere, back within 10 working days' }, { value: '3', label: 'Elsewhere, back later' }] },
    ],
    exemple: () => 'Example for a car failed with major defects while its old MOT is valid',
    run: (v) => {
      const drive = v.danger ? 'No: a dangerous defect must be fixed first' : v.valid ? 'Yes, if it is roadworthy' : 'Only to a repair or a booked test';
      const fee = ['Partial retest, no fee', 'Partial retest, no fee for the listed items', 'Partial retest, a fee can be charged', 'Full test, full fee'][v.where];
      return { head: ['Retest', fee], rows: [['Can you drive it away?', drive], ['Fine for an unroadworthy car', `up to ${formatMoney(PRM.rules.fineDangerous, 0)} and ${PRM.rules.pointsDangerous} points`]], note: 'The next-working-day rule covers a GOV.UK list of items such as lamps, tyres, wipers, mirrors and seats.', alert: v.danger ? 'Driving with a dangerous defect is illegal even if the old MOT has not run out.' : undefined };
    },
  }),
  historic: () => ({
    title: 'Is my car exempt from the MOT?', cta: 'What the test checks',
    inputs: [{ id: 'y', label: 'Year built or first registered', def: 1987, max: 2026 }, { id: 'm', label: 'Month', def: 6, options: monthOptions }, { id: 'changed', label: 'Substantial changes (chassis, body, axles, engine)?', def: 0, options: yesNo }],
    exemple: (v) => `Example for a car first registered in ${MONTHS[v.m - 1]} ${v.y}`,
    run: (v) => {
      const from = utc(Math.max(1900, v.y) + PRM.rules.historicYears, v.m, 1);
      return { head: [v.changed ? 'No exemption: substantially changed' : 'Can stop the yearly MOT from', v.changed ? 'MOT needed' : `${MONTHS[from.getUTCMonth()]} ${from.getUTCFullYear()}`], rows: [['Rule', `More than ${PRM.rules.historicYears} years since built or first registered`], ['Still required', 'Roadworthy condition at all times']], note: 'The car stays subject to roadside checks; you can still choose to have an MOT.' };
    },
  }),
};

export function getSpec(kind: string, lang: string): MiniSpec {
  const f = SPECS[kind];
  if (!f) throw new Error(`mini-specs : aucun mini-simulateur « ${kind} » — à décrire dans src/lib/mini-specs.ts`);
  return f(lang);
}

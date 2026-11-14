/**
 * "Will my car pass its MOT?" — make, model and year of first registration → the share of the same cars that
 * failed their MOT at the first attempt in the DVSA 2023 test results, set against every car of the same age,
 * with the three defect groups behind most of that model's failures. Runs in the browser on mot-lite.json.
 * Hydration (RECETTE §17.5): the first render uses the props; link parameters are read in an effect.
 * `compare` shows a second model of the same year side by side.
 */
import { useEffect, useMemo, useState } from 'react';
import SelectField from '../ui/SelectField';
import LITE from '../../data/mot-lite.json';
import PARAMS from '../../data/params-2026.json';
import { formatNumber, formatPercent } from '../../lib/format';
import { readParams, str, num, updateURL } from '../../lib/url-state';

type Pair = [number, number];
type Row = [string, string, Record<string, Pair>, Array<[number, number]>];
const L = LITE as unknown as { testYear: number; national: Record<string, Pair>; cats: Record<string, string>; models: Row[] };
const TY = L.testYear;
const MIN = 100;
/** The year the parameters were read (the year the reader is in): ages are given in TY and now. */
const NOW = PARAMS.year;
const NAT = PARAMS.national;
const FEE = PARAMS.fees.car;
const MAKES = [...new Set(L.models.map((m) => m[0]))].sort();
const modelsOf = (mk: string) => L.models.filter((m) => m[0] === mk).sort((a, b) => a[1].localeCompare(b[1]));
const find = (mk: string, md: string) => L.models.find((m) => m[0] === mk && m[1] === md) ?? modelsOf(mk)[0];
const years = (r: Row) => Object.entries(r[2]).filter(([y, p]) => p[0] >= MIN && TY - Number(y) >= 3).map(([y]) => Number(y)).sort((a, b) => b - a);
const pc = (x: number | null) => (x == null ? 'n/a' : formatPercent(x, 1));
const rt = (p?: Pair) => (p && p[0] ? p[1] / p[0] : null);
const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
/** Makes whose models DVSA files under several names (engine code, series), with the hint shown under Model. */
const NAME_HINT: Record<string, string> = {
  BMW: 'BMW 320d? Try 320, then 3 Series.',
  'Mercedes-Benz': 'Mercedes: try both names, A and A-Class.',
  Mini: 'Minis are split between Mini, Cooper and One: try each.',
};
const norm = (s?: string) => (s ?? '').replace(/\/+$/, '');

interface Props { make?: string; model?: string; year?: number; compare?: boolean; make2?: string; model2?: string; pages?: Record<string, string>; methodHref?: string; dueHref?: string; costHref?: string; currentPath?: string; modelHelp?: string; idPrefix?: string }

function useChoice(mk0: string, md0: string, y0: number) {
  const [mk, setMk] = useState(mk0);
  const [md, setMd] = useState(md0);
  const [y, setY] = useState(y0);
  const row = find(mk, md);
  const ys = years(row);
  const yy = ys.includes(y) ? y : ys.reduce((a, b) => (Math.abs(b - y) < Math.abs(a - y) ? b : a), ys[0]);
  return { mk, md: row[1], y: yy, row, ys, setMk: (v: string) => { setMk(v); setMd(modelsOf(v)[0][1]); }, setMd, setY };
}

export default function MotChecker({ make = 'Ford', model = 'Focus', year = 2015, compare = false, make2 = 'Vauxhall', model2 = 'Astra', pages = {}, methodHref, dueHref, costHref, currentPath, modelHelp, idPrefix = 'c' }: Props) {
  const a = useChoice(make, model, year);
  const b = useChoice(make2, model2, year);
  useEffect(() => {
    const u = readParams(window.location.search);
    if (!u.toString()) return;
    const mk = str(u, 'make', make); if (MAKES.includes(mk)) { a.setMk(mk); a.setMd(str(u, 'model', modelsOf(mk)[0][1])); }
    a.setY(num(u, 'year', year));
  }, []);
  useEffect(() => { updateURL({ make: a.mk, model: a.md, year: a.y }); }, [a.mk, a.md, a.y]);
  const id = (x: string) => `${idPrefix}-${x}`;
  const p = a.row[2][String(a.y)];
  const r = rt(p);
  const nat = rt(L.national[String(a.y)]);
  const age = TY - a.y;
  const diff = r != null && nat != null ? r - nat : null;
  const verdict = diff == null ? '' : Math.abs(diff) < 0.015 ? 'about the same as average for its age' : diff < 0 ? `better than average for its age (${formatNumber(Math.abs(diff) * 100, 1)} percentage points lower)` : `worse than average for its age (${formatNumber(diff * 100, 1)} percentage points higher)`;
  // Age today: the same car is older now than in the test year; show how cars of that age did in TY.
  const ageNow = NOW - a.y;
  const yThen = TY - ageNow;
  const pThen = a.row[2][String(yThen)];
  const rThen = pThen && pThen[0] >= MIN ? rt(pThen) : null;
  const natThen = rt(L.national[String(yThen)]);
  const pb = b.row[2][String(a.y)];
  const rb = rt(pb);
  const page = pages[`${a.row[0]}|${a.row[1]}`];
  const href = page && norm(page) !== norm(currentPath) ? page : undefined;
  const gap = r != null && rb != null ? r - rb : null;
  const opts = (rows: string[]) => rows.map((v) => ({ value: v, label: v }));
  const yOpts = (r0: ReturnType<typeof useChoice>) => r0.ys.map((v) => ({ value: String(v), label: `${v} (aged ${TY - v} in ${TY}, ${NOW - v} now)` }));
  return (
    <div data-chrome className="rechner border border-navy-300 bg-white p-4 sm:p-5">
      <p data-reponse className="mb-4 text-sm text-navy-800">The percentage: share of {TY} MOT tests on these cars that <strong>failed at the first attempt</strong> (retests excluded). That is the first MOT, at three years, only for {TY - 3} cars.</p>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <form className="grid content-start gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-0">
            <SelectField id={id('make')} label="Make" value={a.mk} onChange={a.setMk} options={opts(MAKES)} />
            <SelectField id={id('model')} label="Model" value={a.md} onChange={a.setMd} options={opts(modelsOf(a.mk).map((m) => m[1]))} help={modelHelp} />
          </div>
          {NAME_HINT[a.mk] && <p className="-mt-2 text-xs text-navy-600">{NAME_HINT[a.mk]}</p>}
          <SelectField id={id('year')} label="Year first registered" value={String(a.y)} onChange={(v) => a.setY(Number(v))} options={yOpts(a)} help={`As on the V5C logbook. Cars registered after ${TY - 3} had no MOT yet in ${TY}.`} />
          {compare && (
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 border-t border-navy-200 pt-4 sm:grid-cols-2 sm:gap-y-0">
              <SelectField id={id('make2')} label="Compare with: make" value={b.mk} onChange={b.setMk} options={opts(MAKES)} />
              <SelectField id={id('model2')} label="Compare with: model" value={b.md} onChange={b.setMd} options={opts(modelsOf(b.mk).map((m) => m[1]))} />
            </div>
          )}
        </form>
        <div data-resultat aria-live="polite" className="border-l-4 border-accent-500 bg-accent-50 p-4">
          <p className="text-sm font-medium text-navy-700">{a.mk} {a.md} registered in {a.y}: failed the MOT at the first attempt in {TY}</p>
          <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{pc(r)}</p>
          <p className="mt-1 text-sm text-navy-800">{p ? <>{formatNumber(p[1], 0)} of {formatNumber(p[0], 0)} tests. </> : null}All cars aged {age} in {TY}: {pc(nat)} failed{verdict ? <>. This model did {verdict}</> : null}.</p>
          {compare && <p className="mt-2 text-sm text-navy-800"><strong>{b.mk} {b.md}, {a.y}:</strong> {rb == null ? `fewer than ${MIN} tests at that age` : <><span className="tabular-nums text-lg font-bold text-navy-900">{pc(rb)}</span> of {formatNumber(pb![0], 0)} tests failed at the first attempt</>}.</p>}
          {compare && gap != null && <p className="mt-1 text-sm font-semibold text-navy-900">{Math.abs(gap) < 0.015 ? `The ${a.md} and the ${b.md} registered in ${a.y} failed about as often as each other (${pc(r)} and ${pc(rb)}).` : `The ${a.y} ${a.md} failed ${formatNumber(Math.abs(gap) * 100, 1)} percentage points ${gap < 0 ? 'less' : 'more'} often than the ${a.y} ${b.md} (${pc(r)} against ${pc(rb)}).`}</p>}
          <p className="mt-2 text-sm font-semibold text-navy-900">A rate describes these cars as a group, not your car: tyres, brakes and lights you check before the test change your own odds.</p>
          {a.row[3].length > 0 && <p className="mt-2 text-sm text-navy-800">Most frequent reasons on a failed {a.md}: {a.row[3].map(([c, s]) => `${lower(L.cats[String(c)] ?? '')} ${pc(s)}`).join(', ')} of failed tests (one test can have several).</p>}
          {ageNow !== age && <p className="mt-2 text-sm text-navy-800">Your car is {ageNow} now: in {TY}, {rThen != null ? <>{a.md} cars that age (registered {yThen})</> : <>cars that age (registered {yThen})</>} failed {pc(rThen ?? natThen)}. National rate since: {pc(NAT.q1InitialFailRate)} ({NAT.q1Label}).</p>}
          <div className="mt-2 text-sm text-navy-800">MOT fee: up to £{formatNumber(FEE, 2)} for a car.{costHref && <> <a href={costHref} className="font-medium text-accent-700 underline underline-offset-2">Cost and retests</a></>}{dueHref && <> · <a href={dueHref} className="font-medium text-accent-700 underline underline-offset-2">When is my MOT due?</a></>}</div>
          {href && <a href={href} className="mt-3 inline-block text-sm font-medium text-accent-700 hover:underline">Every age and failure reason for the {a.md} →</a>}
        </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="journal w-full text-sm">
          <caption className="mb-2 text-left text-sm text-navy-600">{a.mk} {a.md}, failure rate at the first attempt by year of first registration, {TY} tests (latest 12 years; older years are in the Year list)</caption>
          <thead><tr>
            <th scope="col" className="px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-navy-700">Registered</th>
            <th scope="col" className="px-2 py-2 text-right text-xs font-semibold uppercase tracking-wide text-navy-700">Tests</th>
            <th scope="col" className="px-2 py-2 text-right text-xs font-semibold uppercase tracking-wide text-navy-700">Failed</th>
            <th scope="col" className="px-2 py-2 text-right text-xs font-semibold uppercase tracking-wide text-navy-700">All cars failed</th>
          </tr></thead>
          <tbody>
            {(a.ys.slice(0, 12).includes(a.y) ? a.ys.slice(0, 12) : [...a.ys.slice(0, 12), a.y]).map((v) => (
              <tr key={v} className={v === a.y ? 'bg-accent-50 font-semibold' : ''}>
                <td className="border-b border-navy-100 px-2 py-2 text-navy-900">{v}</td>
                <td className="tabular-nums border-b border-navy-100 px-2 py-2 text-right">{formatNumber(a.row[2][String(v)][0], 0)}</td>
                <td className="tabular-nums border-b border-navy-100 px-2 py-2 text-right">{pc(rt(a.row[2][String(v)]))}</td>
                <td className="tabular-nums border-b border-navy-100 px-2 py-2 text-right">{pc(rt(L.national[String(v)]))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-navy-600">DVSA (Driver and Vehicle Standards Agency) results, {TY}: a fix made during the test still counts as a fail. Nothing you choose is sent anywhere. {methodHref && <a href={methodHref} className="text-accent-700 underline underline-offset-2">How the rates are counted</a>}</p>
    </div>
  );
}

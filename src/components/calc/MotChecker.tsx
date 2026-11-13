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
import { formatNumber, formatPercent } from '../../lib/format';
import { readParams, str, num, updateURL } from '../../lib/url-state';

type Pair = [number, number];
type Row = [string, string, Record<string, Pair>, Array<[number, number]>];
const L = LITE as unknown as { testYear: number; national: Record<string, Pair>; cats: Record<string, string>; models: Row[] };
const TY = L.testYear;
const MIN = 100;
const MAKES = [...new Set(L.models.map((m) => m[0]))].sort();
const modelsOf = (mk: string) => L.models.filter((m) => m[0] === mk).sort((a, b) => a[1].localeCompare(b[1]));
const find = (mk: string, md: string) => L.models.find((m) => m[0] === mk && m[1] === md) ?? modelsOf(mk)[0];
const years = (r: Row) => Object.entries(r[2]).filter(([y, p]) => p[0] >= MIN && TY - Number(y) >= 3).map(([y]) => Number(y)).sort((a, b) => b - a);
const pc = (x: number | null) => (x == null ? 'n/a' : formatPercent(x, 1));
const rt = (p?: Pair) => (p && p[0] ? p[1] / p[0] : null);
const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

interface Props { make?: string; model?: string; year?: number; compare?: boolean; make2?: string; model2?: string; pages?: Record<string, string>; methodHref?: string; idPrefix?: string }

function useChoice(mk0: string, md0: string, y0: number) {
  const [mk, setMk] = useState(mk0);
  const [md, setMd] = useState(md0);
  const [y, setY] = useState(y0);
  const row = find(mk, md);
  const ys = years(row);
  const yy = ys.includes(y) ? y : ys.reduce((a, b) => (Math.abs(b - y) < Math.abs(a - y) ? b : a), ys[0]);
  return { mk, md: row[1], y: yy, row, ys, setMk: (v: string) => { setMk(v); setMd(modelsOf(v)[0][1]); }, setMd, setY };
}

export default function MotChecker({ make = 'Ford', model = 'Focus', year = 2015, compare = false, make2 = 'Vauxhall', model2 = 'Astra', pages = {}, methodHref, idPrefix = 'c' }: Props) {
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
  const verdict = diff == null ? '' : Math.abs(diff) < 0.015 ? 'about the same as' : diff < 0 ? `${formatNumber(Math.abs(diff) * 100, 1)} points lower than` : `${formatNumber(diff * 100, 1)} points higher than`;
  const pb = b.row[2][String(a.y)];
  const rb = rt(pb);
  const href = pages[`${a.row[0]}|${a.row[1]}`];
  const opts = (rows: string[]) => rows.map((v) => ({ value: v, label: v }));
  const yOpts = (r0: ReturnType<typeof useChoice>) => r0.ys.map((v) => ({ value: String(v), label: `${v} (${TY - v} years old in ${TY})` }));
  return (
    <div data-chrome className="rechner border border-navy-300 bg-white p-4 sm:p-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <form className="grid content-start gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-0">
            <SelectField id={id('make')} label="Make" value={a.mk} onChange={a.setMk} options={opts(MAKES)} />
            <SelectField id={id('model')} label="Model" value={a.md} onChange={a.setMd} options={opts(modelsOf(a.mk).map((m) => m[1]))} />
          </div>
          <SelectField id={id('year')} label="Year first registered" value={String(a.y)} onChange={(v) => a.setY(Number(v))} options={yOpts(a)} help="The year on the V5C logbook, first registration" />
          {compare && (
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 border-t border-navy-200 pt-4 sm:grid-cols-2 sm:gap-y-0">
              <SelectField id={id('make2')} label="Compare with: make" value={b.mk} onChange={b.setMk} options={opts(MAKES)} />
              <SelectField id={id('model2')} label="Compare with: model" value={b.md} onChange={b.setMd} options={opts(modelsOf(b.mk).map((m) => m[1]))} />
            </div>
          )}
        </form>
        <div data-resultat aria-live="polite" className="border-l-4 border-accent-500 bg-accent-50 p-4">
          <p className="text-sm font-medium text-navy-700">{a.mk} {a.md} first registered in {a.y}: failed the first MOT test</p>
          <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{pc(r)}</p>
          <p className="mt-1 text-sm text-navy-800">{p ? <>{formatNumber(p[1], 0)} of {formatNumber(p[0], 0)} tests in {TY}. </> : null}All cars aged {age}: {pc(nat)}{verdict ? <>, so this model was {verdict} the average car of its age</> : null}.</p>
          {compare && <p className="mt-2 text-sm text-navy-800"><strong>{b.mk} {b.md}, {a.y}:</strong> {rb == null ? `fewer than ${MIN} tests at that age` : <>{pc(rb)} of {formatNumber(pb![0], 0)} tests</>}.</p>}
          <p className="mt-2 text-sm font-semibold text-navy-900">A rate describes these cars as a group, not your car: tyres, brakes and lights you check before the test change your own odds.</p>
          {a.row[3].length > 0 && <p className="mt-2 text-sm text-navy-800">Most frequent reasons on a failed {a.md} (all ages): {a.row[3].map(([c, s]) => `${lower(L.cats[String(c)] ?? '')} ${pc(s)}`).join(', ')} of failures.</p>}
          {href && <a href={href} className="mt-3 inline-block text-sm font-medium text-accent-700 hover:underline">Every age and failure reason for the {a.md} →</a>}
        </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="journal w-full text-sm">
          <caption className="mb-2 text-left text-sm text-navy-600">{a.mk} {a.md}, first-time failure rate by year of first registration, {TY} tests</caption>
          <thead><tr>
            <th scope="col" className="px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-navy-700">Registered</th>
            <th scope="col" className="px-2 py-2 text-right text-xs font-semibold uppercase tracking-wide text-navy-700">Tests</th>
            <th scope="col" className="px-2 py-2 text-right text-xs font-semibold uppercase tracking-wide text-navy-700">Failed</th>
            <th scope="col" className="px-2 py-2 text-right text-xs font-semibold uppercase tracking-wide text-navy-700">All cars</th>
          </tr></thead>
          <tbody>
            {a.ys.slice(0, 12).map((v) => (
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
      <p className="mt-3 text-xs text-navy-600">DVSA anonymised MOT results, cars and light vans (class 4), first test of each visit in {TY}; a pass after a repair made during the test counts as a failure, as in DVSA's initial fail rate. Nothing you choose is sent anywhere. {methodHref && <a href={methodHref} className="text-accent-700 underline underline-offset-2">How the rates are counted</a>}</p>
    </div>
  );
}

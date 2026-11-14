/** Writing helpers handed to every page: links, figures read from the DVSA data, tables, sources. */
import { route, ROUTES } from '../i18n/routes';
import { P, type SourceKey } from './engine/params';
import * as E from './engine/mot';
import { formatMoney, formatNumber, formatPercent, displayDate } from './format';
import { pageById } from './guides';
import { verdictOf, nameOf } from './compare';

const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
export function table(headers: string[], rows: Array<Array<string | number>>, caption?: string, align: Array<'l' | 'r'> = []) {
  const al = (i: number) => (align[i] === 'r' ? 'text-right' : 'text-left');
  return `<div class="not-prose my-6 overflow-x-auto"><table class="journal w-full text-sm">${caption ? `<caption class="mb-2 text-left text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((h, i) => `<th scope="col" class="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-navy-700 ${al(i)}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="tabular-nums border-b border-navy-100 px-3 py-2 text-navy-800 ${al(i)}">${typeof c === 'number' ? esc(formatNumber(c, 0)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
const lc = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

export function helpers(strict = false) {
  const m2 = (n: number) => formatMoney(n, 2);
  const m0 = (n: number) => formatMoney(n, 0);
  /** A fraction as a percentage: 0.274 → "27.4%". */
  const pc = (x: number | null | undefined, d = 1) => (x == null ? 'n/a' : formatPercent(x, d));
  const num = (n: number, d = 0) => formatNumber(n, d);
  /** Rate of all cars with the same age mix (same tests, weighted by registration year). */
  const same = (o: E.Model | E.Make) => E.sameAgeRate(o)!;
  /** "21.4% failed, against 24.5% for all cars of the same ages": the only way the site compares a model with the rest. */
  const vs = (o: E.Model | E.Make, what = 'failed') => `${pc(o.f / o.n)} ${what}, against ${pc(same(o))} for all cars of the same ages`;
  /** Short form after "at" or in a list: "21.4% against 24.5% for cars the same age". */
  /** Full model name without a repeated make ("Mini", not "Mini Mini"). */
  const nm = (m: E.Model) => nameOf(m.makeLabel, m.label);
  const at = (o: E.Model | E.Make) => `${pc(o.f / o.n)} against ${pc(same(o))} for cars the same age`;
  /** "better than" / "worse than" / "about the same as" average for its age. */
  const word = (o: E.Model | E.Make) => ({ better: 'better than', worse: 'worse than', same: 'about the same as' })[verdictOf(o.f / o.n, same(o))];
  const a = (id: string, text: string) => {
    if (!ROUTES.some((r) => r.id === id)) { if (strict) throw new Error(`Unknown page id in a link: ${id}`); return text; }
    return `<a href="${route(id, 'en')}">${text}</a>`;
  };
  const src = (k: SourceKey, text?: string) => `<a href="${P.sources[k].url}" rel="nofollow noopener noreferrer" target="_blank">${text ?? P.sources[k].label.en}</a>`;
  const date = (iso: string) => displayDate(iso, 'en-GB');
  const TY = E.TEST_YEAR;
  const gb = { rate: E.nationalRate(), tests: E.D.meta.tests, fails: E.D.meta.fails };
  /** Every figure of a model, ready for a sentence. */
  const M = (mk: string, md: string) => {
    const m = E.model(mk, md);
    const ag = E.ages(m);
    const at = (age: number) => E.modelAt(m, age);
    const adj = E.ageAdjusted(m);
    const cats = E.modelCats(m);
    const byAge = ag.map((x) => ({ age: x, year: E.yearOf(x), r: at(x)!, nat: E.nationalAt(x)!, n: E.pairAt(m, x)![0] }));
    const worstGap = [...byAge].sort((p, q) => (q.r - q.nat) - (p.r - p.nat))[0];
    const bestGap = [...byAge].sort((p, q) => (p.r - p.nat) - (q.r - q.nat))[0];
    const peak = [...byAge].sort((p, q) => q.n - p.n)[0];
    const fuels = Object.entries(m.fuel).filter(([k]) => E.FUELS[k]).sort((p, q) => q[1][0] - p[1][0]);
    return { m, name: nameOf(m.makeLabel, m.label), rate: m.f / m.n, tests: m.n, fails: m.f, miles: m.mi, ages: ag, at, adj, same: E.sameAgeRate(m)!, cats, byAge, worstGap, bestGap, peak, fuels, top: m.top };
  };
  const K = (mk: string) => {
    const k = E.make(mk);
    const models = E.modelsOf(mk).map((m) => ({ m, adj: E.ageAdjusted(m)!, rate: m.f / m.n, same: E.sameAgeRate(m)! })).sort((p, q) => p.adj - q.adj);
    return { k, name: k.label, rate: k.f / k.n, tests: k.n, fails: k.f, adj: E.ageAdjusted(k), same: E.sameAgeRate(k)!, models, ages: E.ages(k, 2000) };
  };
  /** Link to a model page when it exists, else the plain name. */
  const ml = (m: E.Model, text?: string) => { const id = `model-${E.modelId(m)}`; return pageById(id) ? a(id, text ?? nameOf(m.makeLabel, m.label)) : (text ?? nameOf(m.makeLabel, m.label)); };
  const ageTable = (mk: string, md: string, caption?: string) => {
    const x = M(mk, md);
    return table(['First registered', 'Age in ' + TY, 'Tests', `${x.m.label} failed`, 'All cars failed'], x.byAge.slice(0, 14).map((r) => [String(r.year), String(r.age), r.n, pc(r.r), pc(r.nat)]), caption ?? `${x.name}: share of first-attempt MOT tests failed in ${TY}, by year of first registration, against all cars of the same age. DVSA anonymised MOT results.`, ['l', 'r', 'r', 'r', 'r']);
  };
  const catTable = (mk: string, md: string) => {
    const x = M(mk, md);
    return table(['Defect group', `Share of failed ${x.m.label} tests`], x.cats.filter((c) => c.s >= 0.01).map((c) => [c.name, pc(c.s)]), `${x.name}: failed tests with at least one failure item in each group (a failed test can count in several groups), ${TY}.`, ['l', 'r']);
  };
  const topItems = (mk: string, md: string, n = 5) => M(mk, md).top.slice(0, n).map(([r, v]) => [E.itemText(r), lc(E.item(r)?.d ?? ''), v] as [string, string, number]);
  return { E, P, TY, gb, m2, m0, pc, num, same, vs, at, word, nm, a, src, date, M, K, ml, table, ageTable, catTable, topItems, lc };
}
export type Helpers = ReturnType<typeof helpers>;

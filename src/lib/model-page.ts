/**
 * Builds the page of one model from the DVSA counts. The figures, the order of the sections and most sentences
 * depend on that model's own data (which ages it beats the average at, which defect group dominates, its fuel mix);
 * each model file adds its own standfirst, a paragraph written for it, and its FAQ.
 */
import { definePage, type PageDef, type FAQ } from './guide-types';
import type { Helpers } from './helpers';
import * as E from './engine/mot';

import { CAT_CHECK } from './checks';
export { CAT_CHECK };
export interface ModelSpec {
  make: string; model: string; order: number; slug: string; nav: string; card: string; title: string; description: string; h1: string; intro: string;
  /** The citable summary, written for this model (≥ 120 words), shown under the checker. */
  resume: (h: Helpers) => string;
  /** One paragraph written for this model, placed after the table by age. */
  note: (h: Helpers) => string;
  faqs: (h: Helpers) => FAQ[];
  related: string[];
}

export function modelPage(s: ModelSpec): PageDef {
  const id = `model-${s.make.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${s.model.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const m = E.model(s.make, s.model);
  const peak = E.ages(m).map((a) => ({ a, n: E.pairAt(m, a)![0] })).sort((p, q) => q.n - p.n)[0];
  return definePage({
    id, group: 'models', order: s.order,
    tool: { kind: 'checker', props: { make: m.makeLabel, model: m.label, year: E.yearOf(peak.a) } },
    related: s.related, sources: ['dvsa_anon', 'dvsa_stats', 'gov_manual', 'gov_fees', 'gov_history'],
    slug: s.slug, nav: s.nav, card: s.card, title: s.title, description: s.description, h1: s.h1, intro: s.intro,
    resume: s.resume,
    faqs: s.faqs,
    body: (h) => {
      const x = h.M(s.make, s.model);
      const items = h.topItems(s.make, s.model, 8).map((t) => [t[0], t[2]]);
      const fuels = x.fuels.filter((f) => f[1][0] >= 1000).map(([f, v]) => [h.E.FUELS[f], v[0], h.pc(v[0] / x.tests, 0), h.pc(v[1] / v[0])]);
      return `
<h2>${x.name} MOT failure rate by age</h2>
<details class="not-prose my-4 border border-navy-200 bg-white px-4 py-3"><summary class="cursor-pointer font-semibold text-navy-900">Show every year as a table (the checker above gives the same figures year by year)</summary>
${h.ageTable(s.make, s.model)}
</details>
${s.note(h)}
<h2>What fails a ${x.m.label} at the MOT</h2>
${h.catTable(s.make, s.model)}
${h.table(['Failure item', 'Times recorded'], items, `${x.name}: the failure items most often recorded on its first-attempt MOT tests of ${h.TY}, all ages together.`, ['l', 'r'])}
<h2>${x.m.label} by fuel</h2>
${h.table(['Fuel', 'Tests', 'Share of tests', 'Failed'], fuels, `${x.name}: first-attempt MOT tests of ${h.TY} by fuel, all ages together, not adjusted for age.`, ['l', 'r', 'r', 'r'])}
<p>Sources: ${h.src('dvsa_anon', 'DVSA anonymised MOT results')} and ${h.src('dvsa_stats', 'DVSA MOT testing data')}. See also the ${h.a('what-is-checked-in-an-mot', 'MOT checklist')} and the ${h.a('mot-failure-rate-by-fuel', 'rates by fuel at equal age')}.</p>
`;
    },
  });
}

/**
 * Page of one make: its models ranked at equal age, its rate by registration year against all cars, and the
 * make's place among the 25 largest makes. Each make file adds its standfirst, a paragraph and its FAQ.
 */
import { definePage, type PageDef, type FAQ } from './guide-types';
import type { Helpers } from './helpers';
import * as E from './engine/mot';

export interface MakeSpec { make: string; order: number; slug: string; nav: string; card: string; title: string; description: string; h1: string; intro: string; defaultModel: string; resume: (h: Helpers) => string; note: (h: Helpers) => string; faqs: (h: Helpers) => FAQ[]; related: string[] }

/** Rank of a make among the makes with at least 300,000 tests, on the age-adjusted ratio. */
export function makeRank(mk: string) {
  const l = E.D.makes.filter((k) => k.n >= 300000).map((k) => ({ k, r: E.ageAdjusted(k) ?? 9 })).sort((a, b) => a.r - b.r);
  return { rank: l.findIndex((e) => e.k.make === mk) + 1, of: l.length, list: l };
}

export function makePage(s: MakeSpec): PageDef {
  const k = E.make(s.make);
  const dm = E.model(s.make, s.defaultModel);
  return definePage({
    id: `make-${s.make.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, group: 'makes', order: s.order,
    tool: { kind: 'checker', props: { make: k.label, model: dm.label, year: 2015 } },
    related: s.related, sources: ['dvsa_anon', 'dvsa_stats', 'gov_manual', 'gov_history'],
    slug: s.slug, nav: s.nav, card: s.card, title: s.title, description: s.description, h1: s.h1, intro: s.intro,
    resume: s.resume,
    faqs: s.faqs,
    body: (h) => {
      const x = h.K(s.make);
      const rows = x.models.slice(0, 16).map((e) => [h.ml(e.m, e.m.label), e.m.n, h.pc(e.rate), h.ratio(e.adj)]);
      const ages = [3, 5, 8, 10, 12, 15, 18].filter((a) => E.modelAt(x.k, a, 2000) != null);
      const ageRows = ages.map((a) => [String(E.yearOf(a)), String(a), E.pairAt(x.k, a)![0], h.pc(E.modelAt(x.k, a, 2000)), h.pc(E.nationalAt(a))]);
      return `
<h2>${x.name} models ranked at equal age</h2>
${h.table(['Model', 'Tests', 'Failed', 'Ratio at equal age'], rows, `${x.name} models with 10,000 tests or more, first MOT tests of ${h.TY}, from the fewest failures at equal age (ratio under 1) to the most. DVSA anonymised results.`, ['l', 'r', 'r', 'r'])}
${s.note(h)}
<h2>${x.name} MOT failure rate by year of registration</h2>
${h.table(['First registered', 'Age', 'Tests', x.name, 'All makes'], ageRows, `${x.name}: share of first MOT tests failed in ${h.TY}, by year of first registration.`, ['l', 'r', 'r', 'r', 'r'])}
<p>Sources: ${h.src('dvsa_anon', 'DVSA anonymised MOT results')} and ${h.src('dvsa_stats', 'DVSA MOT testing data')}. The ${h.a('cars-least-likely-to-fail-mot', 'ranking of popular models')} sets every make side by side.</p>
`;
    },
  });
}

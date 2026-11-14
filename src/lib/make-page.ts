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
    tool: { kind: 'checker', props: { make: k.label, model: dm.label, year: 2015, modelHelp: `Opens on the ${dm.label}: choose yours.` } },
    related: s.related, sources: ['dvsa_anon', 'dvsa_stats', 'gov_manual', 'gov_history'],
    slug: s.slug, nav: s.nav, card: s.card, title: s.title, description: s.description, h1: s.h1, intro: s.intro,
    resume: s.resume,
    faqs: s.faqs,
    body: (h) => {
      const x = h.K(s.make);
      const rows = x.models.slice(0, 16).map((e) => [h.ml(e.m, e.m.label), e.m.n, h.pc(e.rate), h.pc(e.same)]);
      // Legend written from this make's own figures: a model with a high percentage that still beats cars of its age.
      const ex = x.models.slice(0, 16).filter((e) => e.rate < e.same - 0.005).sort((p, q) => q.rate - p.rate)[0];
      const legend = `All registration years together, ranked against cars the same age: from the model that failed least often compared with all cars of the same ages to the one that failed most often, not by the percentage alone.${ex ? ` The ${ex.m.label}, for example, failed ${h.pc(ex.rate)} of its tests, but all cars of the same ages failed ${h.pc(ex.same)}.` : ''}`;
      const ages = [3, 5, 8, 10, 12, 15, 18].filter((a) => E.modelAt(x.k, a, 2000) != null);
      const ageRows = ages.map((a) => [String(E.yearOf(a)), String(a), E.pairAt(x.k, a)![0], h.pc(E.modelAt(x.k, a, 2000)), h.pc(E.nationalAt(a))]);
      return `
<h2>${x.name} models ranked at equal age</h2>
${h.table(['Model', 'Tests', 'Failed', 'All cars the same age failed'], rows, `${x.name} models with 10,000 tests or more, first-attempt MOT tests of ${h.TY}. ${legend} DVSA anonymised results.`, ['l', 'r', 'r', 'r'])}
${s.note(h)}
<h2>${x.name} MOT failure rate at selected ages</h2>
${h.table(['First registered', 'Age in ' + h.TY, 'Tests', x.name + ' failed', 'All makes failed'], ageRows, `${x.name}: share of first-attempt MOT tests failed in ${h.TY}, at ages 3, 5, 8, 10, 12, 15 and 18 (a selection of years; the checker above gives each year of each model).`, ['l', 'r', 'r', 'r', 'r'])}
<p>Sources: ${h.src('dvsa_anon', 'DVSA anonymised MOT results')} and ${h.src('dvsa_stats', 'DVSA MOT testing data')}. The ${h.a('cars-least-likely-to-fail-mot', 'ranking of popular models')} sets every make side by side.</p>
`;
    },
  });
}

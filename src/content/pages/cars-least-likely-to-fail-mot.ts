import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'cars-least-likely-to-fail-mot',
  group: 'rates',
  order: 15,
  tool: { kind: 'compare', props: { make: 'Toyota', model: 'Yaris', make2: 'Vauxhall', model2: 'Corsa', year: 2015 } },
  related: ['home', 'mot-failure-rate-by-age', 'make-bmw', 'make-renault', 'most-common-mot-failures'],
  sources: ['dvsa_anon', 'dvsa_stats'],
  slug: 'cars-least-likely-to-fail-mot',
  nav: 'Cars least likely to fail',
  card: 'The popular models that fail least and most at the same age, and two models side by side.',
  title: 'Cars Least Likely to Fail the MOT, Ranked at Equal Age',
  description: 'Cars least likely to fail the MOT, and most likely: 148 popular models ranked against cars of the same age from DVSA tests, with two models side by side.',
  h1: 'Cars least likely to fail the MOT',
  intro: 'Which cars are least likely to fail the MOT? Compare two models of the same registration year, ranked at equal age: the share of each that failed its MOT at the first attempt in 2023.',
  resume: (h) => {
    const l = h.E.D.models.filter((m) => m.n >= 50000).map((m) => ({ m, r: h.E.ageAdjusted(m)! })).sort((a, b) => a.r - b.r);
    const b = l[0], w = l[l.length - 1];
    return `Ranked against cars of the same age, the ${h.nm(b.m)} was the popular model least likely to fail its MOT in the ${h.TY} DVSA results: ${h.vs(b.m)}. At the other end, the ${h.nm(w.m)}: ${h.vs(w.m)}. The ranking covers the ${l.length} models with at least 50,000 tests. Each model is compared with all cars of the same ages because its own percentage mostly tells you how old its cars are: a model sold in large numbers fifteen years ago will always fail more than one launched five years ago. Light vans, which take the same MOT as cars (class 4, the test class for cars and vans up to 3,000 kg), sit near the bottom of the list. The compare tool above sets any two models side by side, registration year by registration year.`;
  },
  faqs: (h) => [
    { q: 'Which car is least likely to fail an MOT?', a: (() => { const l = h.E.D.models.filter((m) => m.n >= 50000).map((m) => ({ m, r: h.E.ageAdjusted(m)! })).sort((a, b) => a.r - b.r); return `Among models with at least 50,000 tests in ${h.TY}, the ${h.nm(l[0].m)}, ${h.nm(l[1].m)} and ${h.nm(l[2].m)} did best against cars the same age: ${h.vs(l[0].m)} for the first. Several are young models, compared here with cars of the same age only. The compare tool above puts any two models side by side, year by year.`; })() },
    { q: 'Which make fails the MOT least?', a: (() => { const k = h.E.D.makes.filter((x) => x.n >= 300000).map((x) => ({ x, r: h.E.ageAdjusted(x)! })).sort((a, b) => a.r - b.r); const lo = k[0].x, hi = k[k.length - 1].x; return `Among makes with 300,000 tests or more, ${k[0].x.label}, ${k[1].x.label} and ${k[2].x.label} did best against cars the same age in the ${h.TY} results, and ${k[k.length - 1].x.label}, ${k[k.length - 2].x.label} and ${k[k.length - 3].x.label} worst. ${lo.label}: ${h.vs(lo)}; ${hi.label}: ${h.vs(hi)}. Each make is compared with all cars of the same registration years, so a make selling mostly young cars gets no head start from their age.`; })() },
    { q: 'Why not rank models by their own MOT failure rate alone?', a: 'Because age dominates it. A model whose cars are mostly ten years old fails more than one whose cars are five, whatever their build quality. So each model is set beside the percentage that failed among all cars of the same registration years, and the lists rank models by how far below or above that percentage they are, in proportion to it.' },
  ],
  body: (h) => {
    const l = h.E.D.models.filter((m) => m.n >= 50000).map((m) => ({ m, r: h.E.ageAdjusted(m)! })).sort((a, b) => a.r - b.r);
    const row = (x: (typeof l)[number]) => [h.ml(x.m), x.m.n, h.pc(x.m.f / x.m.n), h.pc(h.same(x.m))];
    const big = l.filter((x) => x.m.n >= 300000);
    return `
<h2>The 20 popular cars least likely to fail the MOT</h2>
<p>Models with at least 50,000 first-attempt MOT tests in ${h.TY}. All registration years of each model together, ranked against cars the same age, not by the percentage alone: an older model that fails 31% can still beat the average for its age, and a young one that fails 10% can do worse than cars as young as itself. "Failed" is the share of the model's tests failed at the first attempt; "All cars the same age failed" is the same share for all cars registered in the same years. That is why a model can come before another with a lower percentage: it is further below its own reference.</p>
${h.table(['Model', 'Tests', 'Failed', 'All cars the same age failed'], l.slice(0, 20).map(row), `First-attempt MOT tests of ${h.TY}, cars and light vans (class 4), all registration years together, ranked against cars the same age. DVSA anonymised MOT results.`, ['l', 'r', 'r', 'r'])}
<h2>The 20 most likely to fail</h2>
<p>Same rule: all registration years together, ranked against cars the same age, from the model furthest above its reference.</p>
${h.table(['Model', 'Tests', 'Failed', 'All cars the same age failed'], l.slice(-20).reverse().map(row), `Same threshold of 50,000 tests, all registration years together.`, ['l', 'r', 'r', 'r'])}
<h2>The most tested cars, side by side</h2>
<p>The ${big.length} models with 300,000 tests or more are the cars most drivers meet. Against cars the same age, the ${h.nm(big[0].m)} did best among them (${h.vs(big[0].m)}) and the ${h.nm(big[big.length - 1].m)} worst (${h.vs(big[big.length - 1].m)}).</p>
${h.table(['Model', 'Tests', 'Failed', 'All cars the same age failed'], big.map(row), `Models with 300,000 tests or more, ${h.TY}, all registration years together, ranked against cars the same age.`, ['l', 'r', 'r', 'r'])}
<h2>Limits of the ranking</h2>
<p>Premium saloons and young SUVs top the list; small vans and pick-ups take many places at the bottom, beside a few small hatchbacks. The comparison fixes the age, not the use: the data has no field for what a vehicle carries, how it is driven or how it is serviced. Some model names group several generations, and DVSA records some makes by engine variant (BMW 118 or 320, for example), which splits them. The ${h.a('method', 'method page')} explains the comparison, and each make page ranks its own models.</p>
<p>Sources: ${h.src('dvsa_anon', 'DVSA anonymised MOT results')} (${h.TY}) and ${h.src('dvsa_stats', 'DVSA MOT testing data')}.</p>
`;
  },
});

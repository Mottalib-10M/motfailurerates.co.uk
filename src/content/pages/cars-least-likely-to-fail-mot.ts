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
    return `Ranked against cars of the same age, the ${b.m.makeLabel} ${b.m.label} was the popular model least likely to fail its MOT in the ${h.TY} DVSA results: its cars failed ${h.pc(1 - b.r, 0)} less often than the average car of the same registration years. At the other end, the ${w.m.makeLabel} ${w.m.label} failed ${h.pc(w.r - 1, 0)} more often. The ranking covers the ${l.length} models with at least 50,000 tests. It uses a ratio at equal age because a raw failure rate mostly tells you how old a model's cars are: a model sold in large numbers fifteen years ago will always fail more than one launched five years ago. Vans tested as class 4 vehicles sit near the bottom of the list. The compare tool above sets any two models side by side, registration year by registration year.`;
  },
  faqs: (h) => [
    { q: 'Which car is least likely to fail an MOT?', a: (() => { const l = h.E.D.models.filter((m) => m.n >= 50000).map((m) => ({ m, r: h.E.ageAdjusted(m)! })).sort((a, b) => a.r - b.r); return `Among models with at least 50,000 tests in ${h.TY}, the ${l[0].m.makeLabel} ${l[0].m.label}, ${l[1].m.makeLabel} ${l[1].m.label} and ${l[2].m.makeLabel} ${l[2].m.label} had the lowest failure rates at equal age. Several are young models, compared here with cars of the same age only. The compare tool above puts any two models side by side, year by year.`; })() },
    { q: 'Which make fails the MOT least?', a: 'Among makes with 300,000 tests or more, BMW, Jaguar and Audi had the lowest ratios at equal age in the 2023 results, and Renault, Citroen and Vauxhall the highest. The ratio compares each make with all cars of the same registration years, so a make selling mostly young cars gets no head start from their age.' },
    { q: 'Why not rank models by their raw MOT failure rate?', a: 'Because age dominates it. A model whose cars are mostly ten years old fails more than one whose cars are five, whatever their build quality. The ratio compares each model with all cars of the same registration years. A ratio of 0.80 means a fifth fewer failures than those cars.' },
  ],
  body: (h) => {
    const l = h.E.D.models.filter((m) => m.n >= 50000).map((m) => ({ m, r: h.E.ageAdjusted(m)! })).sort((a, b) => a.r - b.r);
    const row = (x: (typeof l)[number]) => [h.ml(x.m), x.m.n, h.pc(x.m.f / x.m.n), h.vsAge(x.r)];
    const big = l.filter((x) => x.m.n >= 300000);
    return `
<h2>The 20 popular cars least likely to fail the MOT</h2>
<p>Models with at least 50,000 first-attempt MOT tests in ${h.TY}. Ranked against cars of the same age, not by the raw percentage: an older model that fails 31% can still beat the average for its age, and a young one that fails 10% can do worse than cars as young as itself. "Failed" is the share of tests failed at the first attempt; the last column says how much less or more often the model failed than all cars registered in the same years.</p>
${h.table(['Model', 'Tests', 'Failed', 'Against cars the same age'], l.slice(0, 20).map(row), `First-attempt MOT tests of ${h.TY}, class 4. DVSA anonymised MOT results.`, ['l', 'r', 'r', 'r'])}
<h2>The 20 most likely to fail</h2>
<p>Same rule: ranked against cars of the same age, from the most failures at equal age.</p>
${h.table(['Model', 'Tests', 'Failed', 'Against cars the same age'], l.slice(-20).reverse().map(row), `Same threshold of 50,000 tests.`, ['l', 'r', 'r', 'r'])}
<h2>The most tested cars, side by side</h2>
<p>The ${big.length} models with 300,000 tests or more are the cars most drivers meet. Among them, ${big[0].m.makeLabel} ${big[0].m.label} had the best ratio (${h.ratio(big[0].r)}) and ${big[big.length - 1].m.makeLabel} ${big[big.length - 1].m.label} the worst (${h.ratio(big[big.length - 1].r)}).</p>
${h.table(['Model', 'Tests', 'Failed', 'Against cars the same age'], big.map(row), `Models with 300,000 tests or more, ${h.TY}.`, ['l', 'r', 'r', 'r'])}
<h2>Limits of the ranking</h2>
<p>Premium saloons and young SUVs top the list; small vans and pick-ups take many places at the bottom, beside a few small hatchbacks. The ratio fixes the age, not the use: the data has no field for what a vehicle carries, how it is driven or how it is serviced. Some model names group several generations, and DVSA records some makes by engine variant (BMW 118 or 320, for example), which splits them. The ${h.a('method', 'method page')} explains the ratio, and each make page ranks its own models.</p>
<p>Sources: ${h.src('dvsa_anon', 'DVSA anonymised MOT results')} (${h.TY}) and ${h.src('dvsa_stats', 'DVSA MOT testing data')}.</p>
`;
  },
});

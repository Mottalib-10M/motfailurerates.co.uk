import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'mot-failure-rate-by-age',
  group: 'rates',
  order: 10,
  tool: { kind: 'mini:age', props: { year: 2015 }, cta: 'home' },
  related: ['home', 'mot-failure-rate-by-mileage', 'mot-exemption-40-year-old-cars', 'most-common-mot-failures', 'mot-due-date'],
  sources: ['dvsa_anon', 'dvsa_stats', 'gov_when', 'gov_historic'],
  slug: 'mot-failure-rate-by-age',
  nav: 'Failure rate by age',
  card: 'How the chance of failing climbs from the first MOT to 18 years, then falls again.',
  title: 'MOT Failure Rate by Age of Car: First Test to 40 Years',
  description: 'MOT failure rate by age of car, from the first test at three years to classics over 40, counted from 32 million DVSA test results, with the peak age explained.',
  h1: 'MOT failure rate by age of car',
  intro: 'The MOT failure rate by age of car, from the first test to 40 years: choose the year your car was first registered to see the share of all cars of that year that failed their first MOT test in 2023.',
  resume: (h) => {
    const r3 = h.E.nationalAt(3)!, r10 = h.E.nationalAt(10)!;
    const peak = Array.from({ length: 30 }, (_, i) => i + 3).map((a) => ({ a, r: h.E.nationalAt(a)! })).sort((p, q) => q.r - p.r)[0];
    return `At its first MOT, three years after registration, a car fails ${h.pc(r3)} of the time; at ten years, ${h.pc(r10)}. The rate keeps rising until cars first registered in ${h.E.yearOf(peak.a)}, ${peak.a} years old in the ${h.TY} tests, which failed ${h.pc(peak.r)} of their tests, then falls slowly for older cars. These figures count ${h.num(h.gb.tests)} first MOT tests of cars and light vans in the DVSA anonymised results for ${h.TY}. A failure includes a defect put right during the test, as in DVSA's own initial fail rate. Age is the strongest single factor in the file: it moves the rate more than the make, the fuel or the region. The tool above gives the rate for any year of first registration, and the table below lists every age.`;
  },
  faqs: (h) => [
    { q: 'At what age do cars fail the MOT most?', a: `In the ${h.TY} tests, cars between 15 and 19 years old failed most, around ${h.pc(h.E.nationalAt(17))} of the time. Older cars fail a little less, because those still on the road tend to be the ones their owners keep in good order.` },
    { q: 'How likely is a car to fail its first MOT?', a: `${h.pc(h.E.nationalAt(3))} of cars first registered in ${h.TY - 3} failed their first test in ${h.TY}. Tyres, wipers and screen wash, and lamps are the usual reasons at that age, rather than worn parts underneath. The checker above gives the same figure for your own make and model.` },
    { q: 'Does the failure rate go down for classic cars?', a: `Yes: cars first registered ${h.TY - 35} failed ${h.pc(h.E.nationalAt(35))} of their tests, and those over 40 years old, who no longer need an MOT, still had ${h.pc(h.E.nationalAt(41))} failures when owners chose to test them. Few such cars are tested, so the figures above 35 years rest on far fewer tests than the rest of the table.` },
  ],
  body: (h) => {
    const rows = [3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30, 35, 40].map((a) => { const p = h.E.nationalPair(a)!; return [String(h.E.yearOf(a)), String(a), p[0], h.pc(p[1] / p[0])]; });
    const r5 = h.E.nationalAt(5)!, r8 = h.E.nationalAt(8)!;
    return `
<h2>The MOT failure rate by age, year by year</h2>
<p>The line is steep for the first decade. Between three and eight years the rate rises from ${h.pc(h.E.nationalAt(3))} to ${h.pc(r8)}: each extra year adds a few points, as tyres, brake pads, suspension bushes and springs reach the end of their life. Five-year-old cars failed ${h.pc(r5)} of the time. After ten years the climb slows, and the curve flattens between 15 and 20 years before falling.</p>
${h.table(['First registered', 'Age in ' + h.TY, 'Tests', 'Failed first test'], rows, `All cars and light vans (class 4), first MOT tests in ${h.TY}. DVSA anonymised MOT results.`, ['l', 'r', 'r', 'r'])}
<h2>Why the oldest cars fail less</h2>
<p>A car that is still tested at 25 or 30 is no longer an ordinary used car. Most cars of its year have been scrapped; those left are often second cars, weekend cars or classics, driven little and looked after. The file cannot say who owns them, but it shows the result: cars first registered in ${h.E.yearOf(30)} failed ${h.pc(h.E.nationalAt(30))} of their tests, fewer than ten-year-old cars. From 40 years old, a car no longer needs an MOT at all, as the ${h.a('mot-exemption-40-year-old-cars', 'page on the 40-year exemption')} explains.</p>
<h2>Age against make and model</h2>
<p>Because age weighs so much, a raw failure rate says little about a model. A model sold mostly ten years ago will fail more than one sold mostly five years ago, whatever their quality. That is why every model page on this site compares a model with all cars of the same registration year, and why the ${h.a('cars-least-likely-to-fail-mot', 'ranking of models')} uses a ratio at equal age. The ${h.a('home', 'checker')} does the same for any make, model and year.</p>
<h2>What changes with age</h2>
<p>The reasons for failure move with age too. On cars at their first test, tyres lead, followed by visibility (wipers and screen wash) and lamps; on eight-year-old cars, lamps lead and suspension is second; by fifteen, suspension and brakes take a much larger share, and rust on the body and structure appears. The ${h.a('most-common-mot-failures', 'most common failures page')} shows each group by age. Mileage adds to age but does not replace it: the ${h.a('mot-failure-rate-by-mileage', 'mileage page')} compares cars of the same age with different mileages.</p>
<p>Sources: ${h.src('dvsa_anon', 'DVSA anonymised MOT results')} (${h.TY} tests); for the latest national rate, ${h.pc(h.P.national.initialFailRate)} in ${h.P.national.yearLabel}, ${h.src('dvsa_stats', 'DVSA MOT testing data')}.</p>
`;
  },
});

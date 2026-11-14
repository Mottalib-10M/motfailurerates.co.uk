import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'most-common-mot-failures',
  group: 'rates',
  order: 11,
  tool: { kind: 'mini:cat', props: { cat: 0, age: 8 }, cta: 'home' },
  related: ['what-is-checked-in-an-mot', 'failed-mot-what-next', 'mot-failure-rate-by-age', 'home'],
  sources: ['dvsa_anon', 'dvsa_stats', 'gov_manual'],
  slug: 'most-common-mot-failures',
  nav: 'Most common failures',
  card: 'The defects that fail cars most, from blown bulbs to tyre tread, and how they change with age.',
  title: 'Most Common MOT Failures: the 20 Defects That Fail Cars',
  description: 'Most common MOT failures in Great Britain: the 20 defects testers record most, the share of failed cars for each part of the car, and how it changes with age.',
  h1: 'Most common MOT failures',
  intro: 'The most common MOT failures, part by part: choose a part of the car and an age to see the share of failed MOT tests at that age with at least one defect in that part.',
  resume: (h) => {
    const t = h.P.categories.rows;
    return `Lamps, reflectors and electrical equipment are the most common reason for an MOT failure in Great Britain: ${h.pc(t[0][1] as number)} of all tests in ${h.P.national.yearLabel} failed on at least one of them, according to DVSA. Suspension followed with ${h.pc(t[1][1] as number)} of tests, then tyres at ${h.pc(t[2][1] as number)} and brakes at ${h.pc(t[3][1] as number)}. A failed test carries ${h.num(h.P.categories.defectsPerFailure, 2)} defects on average. Counted one by one in the ${h.TY} anonymised results, the single defect recorded most often is a tyre with a tread below 1.6 mm, ahead of a lamp that does not work and a broken coil spring. Many of these are cheap to put right before the test. Choose a part of the car and an age in the tool above to see how often that part failed cars of that age.`;
  },
  faqs: (h) => [
    { q: 'What is the most common reason for failing an MOT?', a: `Lighting and signalling: ${h.pc(h.P.categories.rows[0][1] as number)} of tests failed on a lamp, a reflector or an electrical item in ${h.P.national.yearLabel} (DVSA). It is also the easiest failure to avoid, by checking every bulb before the test. ${h.P.categories.rows[1][0]} came second, then ${h.lc(String(h.P.categories.rows[2][0]))} and ${h.lc(String(h.P.categories.rows[3][0]))}.` },
    { q: 'Which MOT failures are classed as dangerous?', a: 'In the DVSA defect list, a tyre tread below 1.6 mm, brake pads under 1.5 mm and a tyre with exposed cords are among the defects most often recorded as dangerous. A car with a dangerous defect must not be driven until it is repaired.' },
    { q: 'How many defects does a failed car usually have?', a: `${h.num(h.P.categories.defectsPerFailure, 2)} on average, according to DVSA for ${h.P.national.yearLabel}. That is why the shares by part of the car add up to more than the failure rate itself. A car with a blown bulb and worn tyres, for example, counts once in lamps and once in tyres.` },
  ],
  body: (h) => {
    const cats = h.P.categories.rows.map((r) => [String(r[0]), h.pc(r[1] as number), h.pc(r[2] as number)]);
    const top = h.E.D.rfrNat.slice(0, 20).map(([r, v], i) => [String(i + 1), h.E.itemText(r), v, h.E.item(r)?.k ?? '']);
    const a3 = h.E.ageCats(3), a15 = h.E.ageCats(15);
    return `
<h2>Most common MOT failures by part of the car</h2>
<p>DVSA publishes every quarter the share of tests that failed on each part of the car. The table gives the year ${h.P.national.yearLabel} for cars, vans and passenger vehicles up to 12 seats: the first column counts tests with at least one failure in that part, the second the part's share of all failure items recorded.</p>
${h.table(['Part of the car', 'Share of tests failed on it', 'Share of failure items'], cats, `DVSA table DVSA/MOT/03, classes 3 and 4, ${h.P.national.yearLabel}.`, ['l', 'r', 'r'])}
<h2>The 20 defects recorded most often</h2>
<p>The anonymised file goes further: it names every defect behind a failure. Over the ${h.TY} tests, the twenty below were recorded most often. Several are visible from the kerb in a few minutes: tread depth, cords showing through a tyre, a lamp out, a wiper smearing the screen, an empty washer bottle.</p>
${h.table(['Rank', 'Defect', 'Times recorded', 'DVSA category'], top, `Failure items (fail and repaired-at-test) on class 4 normal tests, ${h.TY}. DVSA anonymised MOT results.`, ['r', 'l', 'r', 'l'])}
<h2>Young cars and old cars fail on different things</h2>
<p>At the first MOT, three years after registration, the leading groups on failed cars are ${h.lc(a3[0].name)} (${h.pc(a3[0].s)} of failures), ${h.lc(a3[1].name)} (${h.pc(a3[1].s)}) and ${h.lc(a3[2].name)} (${h.pc(a3[2].s)}): consumables more than wear. At fifteen years, ${h.lc(a15[0].name)} (${h.pc(a15[0].s)}) and ${h.lc(a15[1].name)} (${h.pc(a15[1].s)}) lead, and ${h.lc(a15[2].name)} follow at ${h.pc(a15[2].s)}, while rust on the body and structure becomes a real cause. The tool above gives the share for any group and age. For a single model, the ${h.a('home', 'checker')} names the three groups behind most of its failures.</p>
<h2>Defects you can fix before the test</h2>
<p>Bulbs, wiper blades, screen wash and tyres account for a large part of the list and cost little next to a retest. The ${h.a('what-is-checked-in-an-mot', 'checklist page')} goes through each part of the car the tester inspects, and the ${h.a('failed-mot-what-next', 'page on failing')} explains when a retest is free.</p>
<p>Sources: ${h.src('dvsa_stats', 'DVSA MOT testing data for Great Britain')}, ${h.src('dvsa_anon', 'DVSA anonymised MOT results')} and the ${h.src('gov_manual', 'MOT inspection manual')}.</p>
`;
  },
});

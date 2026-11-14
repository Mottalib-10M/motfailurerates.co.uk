import { definePage } from '../../lib/guide-types';
import { AREA_NAMES, areaLabel } from '../../lib/areas';

export default definePage({
  id: 'mot-failure-rate-by-postcode-area',
  group: 'rates',
  order: 14,
  tool: { kind: 'mini:area', props: { band: 2 }, cta: 'home' },
  related: ['mot-failure-rate-by-age', 'home', 'mot-cost', 'most-common-mot-failures'],
  sources: ['dvsa_anon', 'dvsa_stats'],
  slug: 'mot-failure-rate-by-postcode-area',
  nav: 'Failure rate by area',
  card: 'From Bromley to Kirkcaldy: the MOT failure rate in each postcode area, at the same age.',
  title: 'MOT Failure Rate by Postcode Area: Where Cars Fail Most',
  description: 'MOT failure rate in each postcode area of England, Scotland and Wales, from 32 million DVSA test results at the same age of car: where cars fail most and least.',
  h1: 'MOT failure rate by postcode area',
  intro: 'Choose a postcode area and an age of car: the share of cars tested there that failed their MOT at the first attempt in 2023, beside Great Britain.',
  resume: (h) => {
    const l = Object.keys(h.E.D.areas).filter((k) => AREA_NAMES[k]).map((k) => ({ k, r: h.E.areaRate(k, '6-9')! })).filter((x) => x.r != null).sort((a, b) => a.r - b.r);
    const lo = l[0], hi = l[l.length - 1];
    return `Where a car is tested changes its chance of failing the MOT, even at the same age. Among cars aged six to nine in the ${h.TY} DVSA results, ${h.pc(lo.r)} failed at the first attempt in the ${areaLabel(lo.k)} postcode area, against ${h.pc(hi.r)} in ${areaLabel(hi.k)}. Outer London areas fill the low end of the table; Scottish areas, led by Dundee, Kirkcaldy and Aberdeen, fill most of the high end. The postcode area recorded by DVSA is that of the test station, which need not be where the car is kept. The file does not explain the gap, and this page does not claim to: it gives the rates, area by area, for each age band. Choose an area and an age band above to compare it with Great Britain as a whole.`;
  },
  faqs: (h) => [
    { q: 'Where in the UK do cars fail the MOT most?', a: 'In the 2023 DVSA results, for cars aged six to nine, the highest rates were in Scottish postcode areas, led by Dundee, Kirkcaldy and Aberdeen, and the lowest in outer London areas such as Twickenham, Southall and Bromley. Northern Ireland is not part of the data.' },
    { q: 'Is the MOT harder in some areas?', a: 'Every tester follows the same DVSA inspection manual. A difference in rates between areas describes the cars tested there, and the data does not say whether roads, weather, mileage or habits explain it. The checker above shows the rate in your own postcode area beside Great Britain.' },
    { q: 'Which postcode area is used for each test?', a: `The area of the test station, as published by DVSA in the anonymised results for ${h.TY}. A car tested away from home counts where it was tested. DVSA publishes only the postcode area, the one or two letters such as B for Birmingham or LS for Leeds, not the full postcode.` },
  ],
  body: (h) => {
    const l = Object.keys(h.E.D.areas).filter((k) => AREA_NAMES[k]).map((k) => ({ k, r: h.E.areaRate(k, '6-9'), all: h.E.D.areas[k].all })).filter((x) => x.r != null).sort((a, b) => (a.r as number) - (b.r as number));
    const row = (x: (typeof l)[number]) => [areaLabel(x.k), x.all[0], h.pc(x.r), h.pc(h.E.areaRate(x.k, '10-14'))];
    return `
<h2>The 15 postcode areas with the lowest MOT failure rate</h2>
<p>Areas are ranked on cars aged six to nine years, an age band large enough in every area. The second rate column, ten to fourteen years, mostly keeps the same order.</p>
${h.table(['Postcode area', 'Tests (all ages)', '6 to 9 years', '10 to 14 years'], l.slice(0, 15).map(row), `First-attempt MOT tests of ${h.TY}, by postcode area of the test station. DVSA anonymised MOT results.`, ['l', 'r', 'r', 'r'])}
<h2>The 15 postcode areas with the highest MOT failure rate</h2>
${h.table(['Postcode area', 'Tests (all ages)', '6 to 9 years', '10 to 14 years'], l.slice(-15).reverse().map(row), `Same data, highest rates first.`, ['l', 'r', 'r', 'r'])}
<h2>Reading the gap between areas</h2>
<p>The gap is large: at six to nine years, roughly twice as many cars failed in the highest areas as in the lowest. Age is fixed within each column, so it is not the age of the local fleet. The data holds no information on roads, salt, weather, mileage by area or how cars are maintained, so it cannot say which of these matters. What it does say is that a car bought from one region and tested in another may meet a different average, while the test itself, set by the DVSA inspection manual, is the same everywhere.</p>
<h2>Your area against your model</h2>
<p>Area moves the rate by a few points; age and model move it by more. The ${h.a('home', 'checker')} gives the rate for a make, model and year, and the ${h.a('mot-failure-rate-by-age', 'age page')} the national curve. Every area of England, Scotland and Wales with at least 20,000 tests is in the tool above; Northern Ireland, tested by the DVA, is not in the DVSA file.</p>
<p>Sources: ${h.src('dvsa_anon', 'DVSA anonymised MOT results')} (${h.TY}) and ${h.src('dvsa_stats', 'DVSA MOT testing data')}.</p>
`;
  },
});

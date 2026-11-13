import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'mot-failure-rate-by-mileage',
  group: 'rates',
  order: 13,
  tool: { kind: 'mini:mileage', props: { miles: 75000, band: 1 }, cta: 'home' },
  related: ['mot-failure-rate-by-age', 'mot-failure-rate-by-fuel', 'home', 'most-common-mot-failures'],
  sources: ['dvsa_anon', 'dvsa_stats'],
  slug: 'mot-failure-rate-by-mileage',
  nav: 'Failure rate by mileage',
  card: 'At the same age, a high-mileage car fails more often: by how much, band by band.',
  title: 'MOT Failure Rate by Mileage: High-Mileage Cars at Equal Age',
  description: 'MOT failure rate by mileage at the same age: how much more often a car with 100,000 miles fails than one with 30,000, band by band, from DVSA test results.',
  h1: 'MOT failure rate by mileage',
  intro: 'The MOT failure rate by mileage, at equal age: enter the mileage and the age of the car to see the share of cars in that band that failed their first MOT test in 2023.',
  resume: (h) => {
    const r = (b: number, ab: string) => h.E.mileageRate(b, ab);
    return `At the same age, mileage raises the chance of failing the MOT, but less than most drivers expect, and only up to a point. Among cars aged six to nine years in the ${h.TY} DVSA results, those with 20,000 to 29,999 miles failed ${h.pc(r(2, '6-9'))} of their first tests, those with 60,000 to 69,999 miles ${h.pc(r(6, '6-9'))} and those with 100,000 to 109,999 miles ${h.pc(r(10, '6-9'))}. Beyond about 120,000 miles the rate barely moves. Among older cars, aged ten to fourteen, the same bands fail more often again. Age still weighs more than mileage: a low-mileage old car fails more often than a high-mileage young one. Enter a mileage and an age above to read the rate for cars like yours, band by band.`;
  },
  faqs: (h) => [
    { q: 'Do high-mileage cars fail the MOT more often?', a: `Yes, at the same age. Six-to-nine-year-old cars with over 100,000 miles failed about ${h.pc(h.E.mileageRate(10, '6-9'))} of their tests in ${h.TY}, against ${h.pc(h.E.mileageRate(2, '6-9'))} for those with 20,000 to 29,999 miles. The table below compares every band at each age, so mileage and age can be read separately.` },
    { q: 'Does low mileage make a car more likely to pass?', a: `Up to a point: cars aged ten to fourteen with 20,000 to 29,999 miles failed ${h.pc(h.E.mileageRate(2, '10-14'))} of the time, still well above young high-mileage cars. Tyres, rubber and lamps age even when a car is not driven. The checker gives the rate for any band and age.` },
    { q: 'Where does the mileage in these figures come from?', a: `From the odometer reading the tester records at each MOT, in the DVSA anonymised file for ${h.TY}. Readings of zero or obviously wrong values sit in the lowest band and are not used in the text. The mileage is that of the test itself, not an average per year.` },
  ],
  body: (h) => {
    const bands = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20];
    const cell = (b: number, ab: string) => { const p = h.E.D.mileage[String(b)]?.[ab]; return p && p[0] >= 300 ? h.pc(p[1] / p[0]) : 'too few'; };
    const rows = bands.map((b) => [`${h.num(b * 10000)} to ${h.num(b * 10000 + 9999)}`, cell(b, '3-5'), cell(b, '6-9'), cell(b, '10-14'), cell(b, '15-19')]);
    return `
<h2>MOT failure rate by mileage band and age</h2>
<p>Each column fixes the age of the car, so the effect of mileage can be read on its own, down the column. The lowest band, under 10,000 miles, mixes real low-mileage cars with odometer readings recorded as zero or close to it, so it is left out.</p>
${h.table(['Miles at the test', '3 to 5 years', '6 to 9 years', '10 to 14 years', '15 to 19 years'], rows, `Share of first MOT tests failed, ${h.TY}, by odometer reading and age by year of first registration. DVSA anonymised MOT results.`, ['l', 'r', 'r', 'r', 'r'])}
<h2>Why the curve flattens</h2>
<p>In every age group the rate climbs quickly over the first 60,000 to 80,000 miles and then levels off. One reading fits the data: the parts that wear with distance, such as brake pads, tyres and suspension joints, fail at the first tests where they are worn and are then replaced, so a very high-mileage car is often carrying newer parts than a medium-mileage one. The file cannot prove it, but the flat top of the curve shows that past a certain distance, mileage alone no longer predicts much.</p>
<h2>Age and mileage together</h2>
<p>Reading across a row shows that age weighs more. With 50,000 to 59,999 miles, a car aged three to five failed ${h.pc(h.E.mileageRate(5, '3-5'))} of its tests, one aged ten to fourteen ${h.pc(h.E.mileageRate(5, '10-14'))}. Rubber perishes, lamps cloud, springs and brake pipes corrode with time whatever the distance. The ${h.a('mot-failure-rate-by-age', 'age page')} shows the full curve.</p>
<h2>Using it when buying a car</h2>
<p>For a used car, the mileage on the advert and the age give a first idea of how likely the next MOT is to find work. The ${h.a('home', 'checker')} adds the make and model, and GOV.UK's MOT history service shows the past results and mileages of the exact car from its number plate.</p>
<p>Sources: ${h.src('dvsa_anon', 'DVSA anonymised MOT results')} (${h.TY}) and ${h.src('dvsa_stats', 'DVSA MOT testing data')}.</p>
`;
  },
});

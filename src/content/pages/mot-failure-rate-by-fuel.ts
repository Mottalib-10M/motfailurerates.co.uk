import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'mot-failure-rate-by-fuel',
  group: 'rates',
  order: 12,
  tool: { kind: 'mini:fuel', props: { fuel: 1, year: 2016 }, cta: 'home' },
  related: ['mot-failure-rate-by-age', 'mot-failure-rate-by-mileage', 'home', 'most-common-mot-failures'],
  sources: ['dvsa_anon', 'dvsa_stats', 'gov_manual'],
  slug: 'mot-failure-rate-petrol-diesel-hybrid-electric',
  nav: 'Petrol, diesel, hybrid, electric',
  card: 'Diesels fail more than petrol cars of the same age; hybrids fail least. Electric cars, year by year.',
  title: 'MOT Failure Rate: Petrol vs Diesel vs Hybrid vs Electric',
  description: 'MOT failure rate of petrol, diesel, hybrid and electric cars compared at the same age, from 32 million DVSA test results: which fuel fails most, and when.',
  h1: 'MOT failure rate of petrol, diesel, hybrid and electric cars',
  intro: 'The MOT failure rate by fuel: choose petrol, diesel, hybrid or electric and a year of first registration to see the share of those cars that failed their MOT at the first attempt in 2023, beside the other fuels.',
  resume: (h) => {
    const f = (k: string, a: number) => h.E.fuelRate(k, a);
    return `Compared at the same age, diesel cars failed their MOT more often than petrol cars in the ${h.TY} DVSA results, and hybrids least of all. At five years old, ${h.pc(f('DI', 5))} of diesels failed at the first attempt, against ${h.pc(f('PE', 5))} of petrol cars and ${h.pc(f('HY', 5))} of hybrids. At ten years the order is the same: ${h.pc(f('DI', 10))}, ${h.pc(f('PE', 10))} and ${h.pc(f('HY', 10))}. Electric cars are still young in the file: at three years, ${h.pc(f('EL', 3))} failed, close to petrol cars, and older electric cars are too few for a firm rate. Comparing fuels without fixing the age misleads, because diesels in the file are on average older than hybrids and electric cars. Choose a fuel and a year above to compare it with the other fuels at the same age, from the same DVSA file.`;
  },
  faqs: (h) => [
    { q: 'Do diesel cars fail the MOT more than petrol cars?', a: `Yes, at equal age: five-year-old diesels failed ${h.pc(h.E.fuelRate('DI', 5))} of their tests in ${h.TY}, petrol cars ${h.pc(h.E.fuelRate('PE', 5))}. Mileage also raises the rate, and the page on mileage looks at it separately. The checker above compares any fuel and year of registration side by side.` },
    { q: 'Do electric cars fail the MOT?', a: `Yes: ${h.pc(h.E.fuelRate('EL', 3))} of electric cars at their first MOT, at three years, failed in ${h.TY}, close to petrol cars. They have no exhaust emissions to test, but the rest of the inspection is the same as for any car. Their tyres, brakes and suspension are tested like those of any other car.` },
    { q: 'Are hybrids less likely to fail the MOT?', a: `In the ${h.TY} results, yes: hybrids failed least at every age with enough tests, for example ${h.pc(h.E.fuelRate('HY', 8))} at eight years against ${h.pc(h.E.nationalAt(8))} for all cars. Part of the gap may come from how hybrids are driven and maintained; the data does not say which.` },
  ],
  body: (h) => {
    const ages = [3, 4, 5, 6, 8, 10, 12];
    const cell = (k: string, a: number) => { const p = h.E.fuelPair(k, a); return p && p[0] >= 500 ? h.pc(p[1] / p[0]) : 'too few'; };
    const rows = ages.map((a) => [String(h.E.yearOf(a)), String(a), cell('PE', a), cell('DI', a), cell('HY', a), cell('EL', a)]);
    return `
<h2>MOT failure rate by fuel and age</h2>
<p>The table sets the four fuels side by side for each registration year. Under 500 tests, a rate is not shown: electric cars registered before 2016 are a few thousand in the file, and their rates move a lot from one year to the next.</p>
${h.table(['First registered', 'Age', 'Petrol', 'Diesel', 'Hybrid', 'Electric'], rows, `Share of first-attempt MOT tests failed, by fuel recorded at the test, ${h.TY}. DVSA anonymised MOT results.`, ['l', 'r', 'r', 'r', 'r', 'r'])}
<h2>Why diesels fail more</h2>
<p>The file does not say why, and this page does not guess beyond what it shows. What the data does show is where the gap sits: it is widest on young cars, ${h.pc(h.E.fuelRate('DI', 3))} against ${h.pc(h.E.fuelRate('PE', 3))} at three years, and narrows as both fleets age, to ${h.pc(h.E.fuelRate('DI', 13))} against ${h.pc(h.E.fuelRate('PE', 13))} at thirteen. Mileage raises the rate at every age (see the ${h.a('mot-failure-rate-by-mileage', 'mileage page')}), and the file records fuel and mileage separately, so the two effects cannot be told apart here. The emissions part of the test differs by fuel: a diesel is checked with a smoke meter, a petrol car with a gas analyser.</p>
<h2>Hybrids and electric cars</h2>
<p>Hybrids had the lowest rate at every age with enough tests. Electric cars start close to petrol cars at their first MOT, at three years; they have no exhaust emissions to measure, but every other section of the inspection manual applies to them, from brakes to tyres, and a tread below 1.6 mm is the defect recorded most often across all fuels. As the electric fleet ages, the rates for older registration years will become readable.</p>
<h2>Fuel against model</h2>
<p>Within one model, petrol and diesel versions can differ, but the rates on each model page are not age-adjusted by fuel. For the rate of your exact make, model and year, use the ${h.a('home', 'checker')}; for the effect of age alone, the ${h.a('mot-failure-rate-by-age', 'age page')}.</p>
<p>Sources: ${h.src('dvsa_anon', 'DVSA anonymised MOT results')} (${h.TY}) and the ${h.src('gov_manual', 'MOT inspection manual')}.</p>
`;
  },
});

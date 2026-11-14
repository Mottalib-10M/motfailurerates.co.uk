import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "HYUNDAI", MD = "I10";

export default modelPage({
  make: MK, model: MD, order: 321,
  slug: 'hyundai-i10-mot-failure-rate',
  nav: "Hyundai i10",
  card: "Hyundai i10: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Hyundai i10 MOT Failure Rate: Every Year and Common Faults",
  description: "Hyundai i10 MOT failure rate for every year from 2008 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Hyundai i10 MOT failure rate by year",
  intro: "The Hyundai i10 MOT failure rate for each year of registration, from the 2023 DVSA results, with all cars of the same age as the benchmark.",
  related: ["home", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Hyundai i10s tested in ${TY} failed at the first attempt, against ${pc(gb.rate)} for all cars. The i10 is a petrol city car with very low mileage, ${num(x.miles)} miles on average at the test, the lowest of the models with a page here. Year by year it sits close to the national line: 2016 cars failed ${pc(Y(2016).r)} against ${pc(Y(2016).nat)}, 2013 cars ${pc(Y(2013).r)} against ${pc(Y(2013).nat)}, and the 2009 to 2011 cars did somewhat better than average. All i10 years together, ${vs(x.m)}. Its failures come from parts an owner can see: wipers that no longer clear the screen are its single most recorded item, ahead of position and stop lamps. Brakes, its second defect group, appear on ${pc(cat('Brakes'), 0)} of failed tests.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `<h2>Brake pipes on the i10</h2>
<p>Brakes are the second defect group on the i10, on ${pc(cat('Brakes'))} of failed tests, and corroded rigid brake pipes were recorded ${num(T(4))} times, a fault not found in the top items of the other small cars here. Visibility comes third, mostly wipers and screen wash. Almost every i10 in the file runs on petrol.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "Is the Hyundai i10 likely to pass its MOT?", a: `Most i10s do: ${pc(1 - x.rate)} passed their MOT at the first attempt in ${TY}. Their failure rate of ${pc(x.rate)} is below the ${pc(gb.rate)} for all cars, and set beside cars of the same ages, ${vs(x.m)}.` },
      { q: "What should i10 owners check before the MOT?", a: `Wiper blades and screen wash first, since a wiper that no longer clears the screen was the i10's most recorded failure in ${TY}, then every lamp, front and rear, with someone watching the stop lamps. Brake pads and corroded brake pipes are next on the list, but they need a garage to inspect.` },
      { q: "Which i10 years fail the MOT least?", a: `At equal age, the 2009 to 2011 cars: i10s registered in 2010 failed ${pc(Y(2010).r)} against ${pc(Y(2010).nat)} for all cars that year. Newer i10s, from 2014 to 2018, sit a little below the national line, and 2012 and 2013 cars a little above it: ${pc(Y(2013).r)} for 2013 cars, against ${pc(Y(2013).nat)}.` },
    ];
  },
});

import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "HONDA", MD = "JAZZ";

export default modelPage({
  make: MK, model: MD, order: 311,
  slug: 'honda-jazz-mot-failure-rate',
  nav: "Honda Jazz",
  card: "Honda Jazz: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Honda Jazz MOT Failure Rate: Every Year and Common Faults",
  description: "Honda Jazz MOT failure rate for every year from 2002 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Honda Jazz MOT failure rate by year",
  intro: "The Honda Jazz MOT failure rate for every year of first registration in the 2023 DVSA results, compared with all cars of the same age.",
  related: ["home", "make-honda", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `Honda Jazz cars failed ${pc(x.rate)} of their ${num(x.tests)} first-attempt MOT tests in ${TY}, against ${pc(gb.rate)} for all cars, and the Jazz has one of the best records at equal age of any popular model: all years together, ${vs(x.m)}. The advantage is large and consistent from 2009 to 2020. Jazz cars registered in 2013 failed ${pc(Y(2013).r)} against ${pc(Y(2013).nat)} for all cars of that year, and 2016 cars ${pc(Y(2016).r)} against ${pc(Y(2016).nat)}. The older generation, from 2002 to 2008, fails at or close to the national rate. Brakes take an unusual share of its failures, on ${pc(cat('Brakes'), 0)} of failed Jazz tests, and structural corrosion around component mountings appears in its top five items. Almost every Jazz in the file runs on petrol; the ${num(FN('HY'))} hybrid tests failed ${pc(F('HY'))}.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `<h2>Brakes and corrosion on the Jazz</h2>
<p>When a Jazz fails, brakes are behind it more often than on most cars: a third of failed Jazz tests had a brake defect, with pads below 1.5 mm and low braking efficiency on the roller test both in its top four items. Corrosion in a prescribed area around a component mounting, which weakens the structure, was recorded ${num(T(4))} times, a defect that needs the car on a lift to see.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "Is the Honda Jazz one of the best cars for passing the MOT?", a: `Among popular models, yes. All Jazz years together, ${vs(x.m)} in ${TY}. Jazz cars from 2009 to 2016 did best: ${pc(Y(2013).r)} of 2013 cars failed, against ${pc(Y(2013).nat)} for all cars registered that year.` },
      { q: "Which defects fail the Honda Jazz most often?", a: `Position lamps that do not work (${num(T(0))} records), wipers that no longer clear the screen (${num(T(1))}) and brake pads below 1.5 mm (${num(T(2))}). Lamps are behind ${pc(x.cats[0].s, 0)} of failed Jazz tests and brakes ${pc(cat('Brakes'), 0)}, more than on most small cars.` },
      { q: "How do 2007 and 2008 Jazz cars do at the MOT?", a: `They fail at close to the national rate for their age: ${pc(Y(2008).r)} of 2008 Jazz cars failed their test in ${TY} against ${pc(Y(2008).nat)} for all cars of that year, and ${pc(Y(2007).r)} of 2007 cars against ${pc(Y(2007).nat)}. The strong record of the Jazz at equal age comes from its newer cars.` },
    ];
  },
});

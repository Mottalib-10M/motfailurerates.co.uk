import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "TOYOTA", MD = "YARIS";

export default modelPage({
  make: MK, model: MD, order: 307,
  slug: 'toyota-yaris-mot-failure-rate',
  nav: "Toyota Yaris",
  card: "Toyota Yaris: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Toyota Yaris MOT Failure Rate: Every Year and Common Faults",
  description: "Toyota Yaris MOT failure rate for every year from 1999 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Toyota Yaris MOT failure rate by year",
  intro: "The Toyota Yaris MOT failure rate for every year of first registration in the 2023 DVSA results, petrol and hybrid together, against all cars.",
  related: ["home", "make-toyota", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `${pc(x.rate)} of Toyota Yaris first-attempt MOT tests in ${TY} ended in a failure, ${num(x.fails)} out of ${num(x.tests)}. That matches the average for all cars, ${pc(gb.rate)}, but the Yaris fleet includes many older cars, and year by year it does better: 2015 cars failed ${pc(Y(2015).r)} against ${pc(Y(2015).nat)}, 2011 cars ${pc(Y(2011).r)} against ${pc(Y(2011).nat)}. Only those registered in 2005 or earlier sit slightly above the national line. All Yaris years together, ${vs(x.m)}. About a fifth of Yaris tests were on hybrids, which failed ${pc(F('HY'))} in the raw figures, against ${pc(F('PE'))} for petrol Yaris. Lamps lead its failures, on ${pc(x.cats[0].s, 0)} of failed tests. The busiest Yaris year in the file is 2015, with ${num(Y(2015).n)} tests, and the cars averaged ${num(x.miles)} miles at the test. Wipers that no longer clear the screen are its second most recorded item.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `<h2>Wipers, washers and lamps</h2>
<p>On the Yaris, failures lean towards the items an owner can check: position lamps that do not work are its most recorded failure item, wipers that no longer clear the screen come second, and stop lamps and headlamp aim also make the top six. Visibility, the group that covers wipers and washers, appears on ${pc(cat('Visibility'))} of failed Yaris tests. A few minutes of checks before the test address most of these.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "Do Toyota Yaris cars pass their MOT more often than average?", a: `At equal age, yes. Taken one registration year at a time, the Yaris failed less often than all cars from 2008 to 2020, the widest margin on 2011 cars: ${pc(Y(2011).r)}, against ${pc(Y(2011).nat)} for all cars of that year. Over all years, ${vs(x.m)}.` },
      { q: "Does a hybrid Yaris fail the MOT less?", a: `In the raw ${TY} figures, hybrid Yaris failed ${pc(F('HY'))} of their first-attempt tests and petrol Yaris ${pc(F('PE'))}. Hybrids may be younger on average in the file, so part of that gap could be age. The fuel page compares petrol, diesel, hybrid and electric cars at equal age.` },
      { q: "What does the Yaris usually fail on?", a: `Lamps first, on ${pc(x.cats[0].s, 0)} of failed tests, then suspension on ${pc(x.cats[1].s, 0)} and visibility on ${pc(cat('Visibility'), 0)}. Position lamps that did not work were recorded ${num(T(0))} times, wipers that no longer cleared the screen ${num(T(1))} times and fractured coil springs ${num(T(2))} times.` },
    ];
  },
});

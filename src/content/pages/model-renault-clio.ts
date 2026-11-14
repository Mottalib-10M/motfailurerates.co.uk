import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "RENAULT", MD = "CLIO";

export default modelPage({
  make: MK, model: MD, order: 312,
  slug: 'renault-clio-mot-failure-rate',
  nav: "Renault Clio",
  card: "Renault Clio: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Renault Clio MOT Failure Rate: Every Year and Common Faults",
  description: "Renault Clio MOT failure rate for every year from 1998 to 2019, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Renault Clio MOT failure rate by year",
  intro: "The Renault Clio MOT failure rate for each registration year, from the 2023 DVSA results, with every car of that year as the yardstick.",
  related: ["home", "make-renault", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `The Renault Clio has the highest failure rate of the popular models covered here: ${pc(x.rate)} of its ${num(x.tests)} first-attempt MOT tests in ${TY} failed, against ${pc(gb.rate)} for all cars. Age does not account for it. Clios registered in 2017 failed ${pc(Y(2017).r)} against ${pc(Y(2017).nat)} for all cars that year, 2016 Clios ${pc(Y(2016).r)} against ${pc(Y(2016).nat)}, and every Clio year from 2003 to 2012 failed more than half its tests. Weighed against cars of the same age, all Clio years together, ${vs(x.m)}. Suspension and lamps share the top of its failures almost equally, and a fractured coil spring was recorded ${num(T(0))} times, the most of any Clio defect. Its busiest year is 2014, with ${num(Y(2014).n)} tests, and Clios averaged ${num(x.miles)} miles at the test.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `<h2>Suspension on the Clio</h2>
<p>Suspension appears on ${pc(cat('Suspension'))} of failed Clio tests, the highest share among the models with a page here. Fractured coil springs lead, worn ball joints follow, and track rod ends with excessive play come fourth. Petrol and diesel Clios failed at almost the same raw rate, ${pc(F('PE'))} and ${pc(F('DI'))}, so the fuel makes little difference.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "Does the Renault Clio fail the MOT more than other cars?", a: `Yes. In ${TY} it failed ${pc(x.rate)} of its first-attempt tests, and the gap remains when age is taken out: all years together, ${vs(x.m)}. Few popular models do worse against cars the same age.` },
      { q: "Which Clio years pass the MOT most often?", a: `The youngest. Clios registered in 2019 failed ${pc(Y(2019).r)} of their tests in ${TY} and passed ${pc(1 - Y(2019).r)} of the time, though even that is above the ${pc(Y(2019).nat)} for all cars of that year. From 2012 back to 2003, Clio failure rates stay just above 50% every year.` },
      { q: "What should I check on a Clio before its MOT?", a: `Have the coil springs and front ball joints inspected if you can, as they are the Clio's two most recorded failure items, and check every lamp yourself, position lamps above all. Then look at headlamp aim after any bulb change, and at tyre tread, which must be at least 1.6 mm across the central part.` },
    ];
  },
});

import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "VAUXHALL", MD = "CORSA";

export default modelPage({
  make: MK, model: MD, order: 302,
  slug: 'vauxhall-corsa-mot-failure-rate',
  nav: "Vauxhall Corsa",
  card: "Vauxhall Corsa: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Vauxhall Corsa MOT Failure Rate: Each Year and Common Faults",
  description: "Vauxhall Corsa MOT failure rate for every year from 1996 to 2019, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Vauxhall Corsa MOT failure rate by year",
  intro: "The Vauxhall Corsa MOT failure rate for each registration year in the 2023 DVSA results, set beside every car of the same age: choose your year above.",
  related: ["home", "make-vauxhall", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `Of the ${num(x.tests)} Vauxhall Corsas that took a first MOT test in ${TY}, ${pc(x.rate)} failed. The Corsa is the third most tested model in the file and one of the few large ones that sits above the national line at every age: with a ratio of ${ratio(x.adj)} it ranks ${num(x.rank)} of ${x.of}. The gap opens early. Corsas registered in 2017 failed ${pc(Y(2017).r)} of the time against ${pc(Y(2017).nat)} for all cars of that year, and 2014 cars ${pc(Y(2014).r)} against ${pc(Y(2014).nat)}. Suspension is the reason that stands out: a fractured coil spring was recorded ${num(T(0))} times, more than twice as often as any other single Corsa defect, and suspension appears on ${pc(cat('Suspension'), 0)} of its failed tests. Petrol Corsas, nine tests in ten, failed ${pc(F('PE'))} in the raw figures and diesel ones ${pc(F('DI'))}.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>The Corsa against the Fiesta</h2>
<p>The Corsa and the Fiesta are the two small cars tested most in Great Britain, and the Corsa fails more at equal age: ${ratio(x.adj)} against ${ratio(h.M('FORD', 'FIESTA').adj)}. Mileage does not explain it, as Corsas averaged ${num(x.miles)} miles at the test, fewer than Fiestas (${num(h.M('FORD', 'FIESTA').miles)}). Brakes sit level with visibility in its defect groups, and a headlamp not working on dipped beam is among its six most recorded items.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "How often does a Vauxhall Corsa fail its MOT?", a: `${pc(x.rate)} of Corsa first tests in ${TY} were failures, ${num(x.fails)} of ${num(x.tests)}. All cars together failed ${pc(gb.rate)}. Because the Corsa is above average at every registration year in the file, its higher rate is not only a matter of age: the age-adjusted ratio of ${ratio(x.adj)} means about ${pc(x.adj! - 1, 0)} more failures than an average car.` },
      { q: "Is a 2015 Vauxhall Corsa likely to pass its MOT?", a: `More likely than not: ${pc(1 - Y(2015).r)} of Corsas first registered in 2015 passed their first MOT test of ${TY} without a failure, and ${pc(Y(2015).r)} failed, against ${pc(Y(2015).nat)} for all cars of that year. 2015 was also the Corsa year with the most tests in the file, ${num(Y(2015).n)}.` },
      { q: "What to check on a Corsa before the MOT?", a: `Have the coil springs looked at when the wheels are off, check that every lamp works including dipped beam and the stop lamps, top up the screen wash and change smeared wiper blades. Broken springs, stop lamps, wipers and washer fluid are four of the six failure items recorded most often on Corsas in ${TY}.` },
    ];
  },
});

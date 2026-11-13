import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "NISSAN", MD = "MICRA";

export default modelPage({
  make: MK, model: MD, order: 318,
  slug: 'nissan-micra-mot-failure-rate',
  nav: "Nissan Micra",
  card: "Nissan Micra: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Nissan Micra MOT Failure Rate: Every Year and Common Faults",
  description: "Nissan Micra MOT failure rate for every year from 1995 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Nissan Micra MOT failure rate by year",
  intro: "The Nissan Micra MOT failure rate for each year of first registration, in the 2023 DVSA results, beside all cars registered the same year.",
  related: ["home", "make-nissan", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Nissan Micras tested in ${TY} failed their first MOT of the year, against ${pc(gb.rate)} for all cars. A large part of the gap is age: the Micra's busiest year in the file is 2006, with ${num(Y(2006).n)} tests, and many cars from the early 2000s are still tested. Year by year, Micras from 2008 to 2016 fail at or slightly below the national rate, ${pc(Y(2010).r)} for 2010 cars against ${pc(Y(2010).nat)}, while the 2017 and 2018 cars sit above it. Older Micras, from 2005 back to the mid-1990s, sit four to eleven points above the line. The age-adjusted ratio is ${ratio(x.adj)}, rank ${num(x.rank)} of ${x.of}. Half of failed Micras had a lamp defect, and a number plate lamp that does not work is among its five most recorded items.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Lamps on the Micra</h2>
<p>Lamps appear on ${pc(cat('Lamps, reflectors and electrical equipment'))} of failed Micra tests, one of the highest shares in the file. Position lamps, headlamp aim and the number plate lamp all feature in its top five items, and wipers that no longer clear the screen come second, recorded ${num(T(1))} times. Most of these take minutes to check at home before the test.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Do Nissan Micras fail the MOT more than other small cars?", a: `In raw terms yes, ${pc(x.rate)} in ${TY}, but the Micra fleet is old. At equal age the Micra is close to average, a ratio of ${ratio(x.adj)}, better than the Vauxhall Corsa (${ratio(h.M('VAUXHALL', 'CORSA').adj)}) and the Ford Fiesta (${ratio(h.M('FORD', 'FIESTA').adj)}), and behind the Toyota Yaris (${ratio(h.M('TOYOTA', 'YARIS').adj)}).` },
      { q: "Which lamps fail a Micra at the MOT?", a: `Position lamps most of all, recorded ${num(T(0))} times in ${TY}, then incorrect headlamp aim and the number plate lamp, which must light the plate at night. Walking round the car with the lights on, and with someone pressing the brake pedal, catches most of them before the tester does.` },
      { q: "How did 2017 Micras do at the MOT?", a: `Less well than the years around them. Micras first registered in 2017 failed ${pc(Y(2017).r)} of their tests in ${TY}, against ${pc(Y(2017).nat)} for all cars of that year and ${pc(Y(2016).r)} for 2016 Micras. The figure rests on ${num(Y(2017).n)} tests, enough to show that the dip is not a matter of chance.` },
    ];
  },
});

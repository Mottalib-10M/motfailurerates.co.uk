import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "FIAT", MD = "500";

export default modelPage({
  make: MK, model: MD, order: 313,
  slug: 'fiat-500-mot-failure-rate',
  nav: "Fiat 500",
  card: "Fiat 500: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Fiat 500 MOT Failure Rate: Every Year and Common Faults",
  description: "Fiat 500 MOT failure rate for every year from 2008 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Fiat 500 MOT failure rate by year",
  intro: "The Fiat 500 MOT failure rate for every year since 2008, from the 2023 DVSA results, compared with all cars of the same registration year.",
  related: ["home", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Fiat 500s tested in ${TY} failed their first MOT of the year, against ${pc(gb.rate)} for all cars. The 500 is a low-mileage petrol city car, ${num(x.miles)} miles on average at the test, yet it fails more often than the average car from its fifth year: 2016 cars failed ${pc(Y(2016).r)} against ${pc(Y(2016).nat)}, 2015 cars ${pc(Y(2015).r)} against ${pc(Y(2015).nat)}. Only the 2019 and 2020 cars sit below the national line. Its age-adjusted ratio of ${ratio(x.adj)} ranks it ${num(x.rank)} of ${x.of}. Suspension dominates its failures, on ${pc(x.cats[0].s, 0)} of failed tests, with worn pins and bushes and worn shock absorber bushes the two most recorded items, well ahead of the lamp failures that lead on most small cars. Visibility, mostly wipers and washers, appears on ${pc(cat('Visibility'), 0)} of its failed tests.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>The 500's suspension</h2>
<p>Suspension is ahead of lamps on the 500, which is unusual for a small petrol car: lamps lead on the Fiesta, the Corsa and the Micra. Shock absorbers appear twice in its top five items, for a worn bush and for a serious fluid leak. Wipers and screen wash also feature, two failures that cost little to put right before the test.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Are Fiat 500s more likely to fail the MOT?", a: `Yes, at equal age. A Fiat 500 failed ${pc(x.adj! - 1, 0)} more often than an average car of the same registration year in ${TY}, and ${pc(x.rate)} of all its first tests failed. Cars from 2017 back to 2008 all sit above the national line, by two to seven points.` },
      { q: "What do Fiat 500s usually fail on?", a: `Suspension above all: worn pins and bushes were recorded ${num(T(0))} times on 500s in ${TY}, and shock absorbers with a worn bush ${num(T(1))} times. Wipers that do not clear the screen, tyre tread below 1.6 mm and leaking shock absorbers follow. Lamps, the first group on most small cars, come second here.` },
      { q: "Does mileage explain the Fiat 500 failure rate?", a: `No. The 500 covered only ${num(x.miles)} miles on average by the test, one of the lowest figures among popular models, and still failed more than average at its age. Low mileage does not stop rubber bushes and dampers from ageing; the mileage page shows that cars of the same age with few miles still fail often.` },
    ];
  },
});

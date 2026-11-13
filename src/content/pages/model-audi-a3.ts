import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "AUDI", MD = "A3";

export default modelPage({
  make: MK, model: MD, order: 309,
  slug: 'audi-a3-mot-failure-rate',
  nav: "Audi A3",
  card: "Audi A3: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Audi A3 MOT Failure Rate: Every Year and Common Faults",
  description: "Audi A3 MOT failure rate for every year from 1998 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Audi A3 MOT failure rate by year",
  intro: "The Audi A3 MOT failure rate for each year of first registration, in the 2023 DVSA results, side by side with all cars of the same age.",
  related: ["home", "make-audi", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Audi A3s that took a first MOT test in ${TY} failed it, against ${pc(gb.rate)} for all cars. The A3 does markedly better than average on its younger years: 2016 cars failed ${pc(Y(2016).r)} against ${pc(Y(2016).nat)} for all cars of that year, and 2015 cars ${pc(Y(2015).r)} against ${pc(Y(2015).nat)}. The advantage narrows on older cars and is gone by 2006, while A3s from 2004 and earlier fail slightly more often than average. Overall, the age-adjusted ratio is ${ratio(x.adj)}, rank ${num(x.rank)} of ${x.of}. Tyres count for more of its failures than on most hatchbacks, ${pc(cat('Tyres'), 0)} of failed tests, and tread below 1.6 mm is its most recorded single item, just ahead of fractured coil springs. Hybrid A3s, ${num(FN('HY'))} tests in all, failed ${pc(F('HY'))}, the lowest raw rate of its three fuels.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Petrol and diesel A3s</h2>
<p>Diesel A3s outnumber petrol ones only slightly in the file, ${num(FN('DI'))} tests against ${num(FN('PE'))}, but they failed more in raw terms, ${pc(F('DI'))} against ${pc(F('PE'))}. The two are not adjusted for age or mileage here. Split ball joint dust covers and driveshaft boots, two rubber parts, both appear among its five most recorded items.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "How reliable is the Audi A3 at its MOT?", a: `Better than average at equal age. Compared year by year with all cars, A3s failed about ${pc(1 - x.adj!, 0)} less often in ${TY}, and ${pc(x.rate)} of all A3 first tests ended in a failure. The margin is widest on cars registered from 2013 to 2016, at six or seven points.` },
      { q: "Which tyre problems fail an Audi A3?", a: `Two of the A3's six most recorded failure items are tyres: tread below 1.6 mm, recorded ${num(T(0))} times in ${TY}, and a tyre with ply or cords exposed. DVSA classes both as dangerous defects. Tyres appear on ${pc(cat('Tyres'), 0)} of failed A3 tests, more than on the Fiesta or the Polo.` },
      { q: "Is a 2015 Audi A3 likely to pass the MOT?", a: `${pc(1 - Y(2015).r)} of A3s first registered in 2015 passed their MOT test in ${TY} without a failure, on ${num(Y(2015).n)} tests, the A3 year with the most tests in the file. Their failure rate of ${pc(Y(2015).r)} compares with ${pc(Y(2015).nat)} for all cars of that year.` },
    ];
  },
});

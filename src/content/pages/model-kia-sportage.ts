import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "KIA", MD = "SPORTAGE";

export default modelPage({
  make: MK, model: MD, order: 320,
  slug: 'kia-sportage-mot-failure-rate',
  nav: "Kia Sportage",
  card: "Kia Sportage: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Kia Sportage MOT Failure Rate: Every Year and Common Faults",
  description: "Kia Sportage MOT failure rate for every year from 2005 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Kia Sportage MOT failure rate by year",
  intro: "The Kia Sportage MOT failure rate by year of first registration, from the 2023 DVSA results, compared with all cars of the same age.",
  related: ["home", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Kia Sportages tested in ${TY} failed their first MOT of the year, below the ${pc(gb.rate)} for all cars because most Sportages on the road are young: 2016 to 2019 are its busiest years in the file. At equal age the Sportage is almost exactly average, with a ratio of ${ratio(x.adj)}, rank ${num(x.rank)} of ${x.of}. It sits on the national line for most years, ${pc(Y(2017).r)} for 2017 cars against ${pc(Y(2017).nat)}, slightly above it for 2012 and 2013 cars, and well above it for the few older cars still tested. What sets it apart is its defects: the Sportage is the only model with a page here whose failures are led by brakes, on ${pc(x.cats[0].s, 0)} of failed tests.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Brakes and tyres on the Sportage</h2>
<p>Brake pads below 1.5 mm were recorded ${num(T(1))} times on Sportages, and brake efficiency below the requirement on the roller test also makes its top five. Tyres come second as a group, and tread below 1.6 mm is its single most recorded item. Six Sportage tests in ten were on diesel cars, which failed more often than petrol ones in the raw figures, ${pc(F('DI'))} against ${pc(F('PE'))}.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Does the Kia Sportage fail the MOT more than other SUVs?", a: `At equal age the Sportage fails about as often as the average car, a ratio of ${ratio(x.adj)} in ${TY}. Among the SUVs with a page here, that is better than the Nissan Qashqai (${ratio(h.M('NISSAN', 'QASHQAI').adj)}) and Juke (${ratio(h.M('NISSAN', 'JUKE').adj)}) but behind the Ford Kuga (${ratio(h.M('FORD', 'KUGA').adj)}).` },
      { q: "How often do Kia Sportages fail on brakes?", a: `Brakes appear on ${pc(x.cats[0].s, 0)} of failed Sportage tests in ${TY}, more than any other group and more than on any other model with a page here. Pads below 1.5 mm and low braking efficiency on the roller test are the two brake items recorded most. Checking pad wear at a service before the MOT avoids the most frequent one.` },
      { q: "How did 2019 Sportages do at the MOT?", a: `Sportages first registered in 2019 failed ${pc(Y(2019).r)} of their MOT tests in ${TY}, on ${num(Y(2019).n)} tests, against ${pc(Y(2019).nat)} for all cars registered that year. In other words ${pc(1 - Y(2019).r)} got through at the first attempt, close to the share for every 2019 car.` },
    ];
  },
});

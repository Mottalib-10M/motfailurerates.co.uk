import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "BMW", MD = "3 SERIES";

export default modelPage({
  make: MK, model: MD, order: 308,
  slug: 'bmw-3-series-mot-failure-rate',
  nav: "BMW 3 Series",
  card: "BMW 3 Series: failure rate for each year, against all cars, and the faults behind fails.",
  title: "BMW 3 Series MOT Failure Rate: Every Year and Common Faults",
  description: "BMW 3 Series MOT failure rate for every year from 1987 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "BMW 3 Series MOT failure rate by year",
  intro: "The BMW 3 Series MOT failure rate for every year of first registration, in the 2023 DVSA results, set against all cars of the same age.",
  related: ["home", "make-bmw", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `${pc(x.rate)} of BMW 3 Series first-attempt MOT tests in ${TY} were failures, ${num(x.fails)} of ${num(x.tests)}, below the ${pc(gb.rate)} for all cars. The 3 Series combines the highest average mileage of the models with a page here, ${num(x.miles)} miles at the test, with one of the best records at equal age: a ratio of ${ratio(x.adj)}, rank ${num(x.rank)} of ${x.of}. The margin is widest on cars from the 2000s. 3 Series registered in 2007 failed ${pc(Y(2007).r)} against ${pc(Y(2007).nat)} for all cars that year, and 2005 cars ${pc(Y(2005).r)} against ${pc(Y(2005).nat)}. Only the 2020 cars, on few tests, fail above the line. Tyre tread below 1.6 mm and shock absorbers with a serious fluid leak are its two most recorded failure items. Hybrid versions, ${num(FN('HY'))} tests in all, failed only ${pc(F('HY'))} in the raw figures, the lowest of its fuels.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Older 3 Series still on test</h2>
<p>The file holds 3 Series from the late 1980s onwards, and even those cars failed less often than the average car of their year. DVSA records some 3 Series under the engine variant, such as 320 or 330, which appear as separate models in the checker. Tyres come level with suspension in its failures, and tread under 1.6 mm, a defect DVSA classes as dangerous, is its most recorded item.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Is the BMW 3 Series good at passing the MOT?", a: `At equal age, it is one of the better large models. In ${TY} it failed ${pc(1 - x.adj!, 0)} less often than average cars of the same registration years, with ${pc(x.rate)} of its first-attempt tests failing overall. The gap is widest on cars registered from 2003 to 2010, seven to ten points below the national line.` },
      { q: "What are the most common 3 Series MOT failures?", a: `Tyre tread below 1.6 mm (${num(T(0))} records in ${TY}), shock absorbers with a serious fluid leak (${num(T(1))}) and position lamps that do not work (${num(T(2))}). Tyres with ply or cords exposed come fourth, and brake efficiency below the requirement on the roller test fifth.` },
      { q: "Do diesel 3 Series fail more than petrol ones?", a: `No, the other way round, though only just: diesel 3 Series failed ${pc(F('DI'))} of their first-attempt tests in ${TY} and petrol ones ${pc(F('PE'))}. Diesels make up about six tests in ten. The figures are not adjusted for age, so older petrol cars in the fleet may explain part of it.` },
    ];
  },
});

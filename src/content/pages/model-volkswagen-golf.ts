import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "VOLKSWAGEN", MD = "GOLF";

export default modelPage({
  make: MK, model: MD, order: 303,
  slug: 'volkswagen-golf-mot-failure-rate',
  nav: "Volkswagen Golf",
  card: "Volkswagen Golf: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Volkswagen Golf MOT Failure Rate: By Year and Common Faults",
  description: "Volkswagen Golf MOT failure rate for every year from 1983 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Volkswagen Golf MOT failure rate by year",
  intro: "The Volkswagen Golf MOT failure rate by year of first registration, from the DVSA results of every Golf tested in 2023, against all cars of the same age.",
  related: ["home", "make-volkswagen", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `${pc(x.rate)} of Volkswagen Golfs failed their MOT at the first attempt in ${TY}, out of ${num(x.tests)} tests. That is below the ${pc(gb.rate)} for all cars even though Golfs covered ${num(x.miles)} miles on average by the test, a high figure for a family hatchback. Year by year, the Golf beats the national line on every registration from 2007 to 2020: cars registered in 2015 failed ${pc(Y(2015).r)} against ${pc(Y(2015).nat)}, and 2013 cars ${pc(Y(2013).r)} against ${pc(Y(2013).nat)}. Older Golfs, from 2006 and before, move back to or above the line. With an age-adjusted ratio of ${ratio(x.adj)}, the Golf ranks ${num(x.rank)} of ${x.of}. The file also holds tests of Golfs from the 1980s, which owners still bring in for an MOT although cars over 40 years old no longer need one.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Suspension first on the Golf</h2>
<p>On the Golf, suspension rather than lamps is the first defect group: ${pc(cat('Suspension'))} of failed Golf tests had a suspension defect. A fractured coil spring was its most recorded item, ${num(T(0))} times, ahead of tyre tread below 1.6 mm. Diesels and petrols each account for about half of the Golf tests, and hybrid and electric Golfs already add ${num(FN('HY') + FN('EL'))} tests.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Do Volkswagen Golfs fail the MOT often?", a: `Less often than most cars of their age. ${pc(x.rate)} of Golfs failed at the first attempt in ${TY}, against ${pc(gb.rate)} for all cars, and compared year by year with cars of the same age the Golf failed about ${pc(1 - x.adj!, 0)} less often. Only Golfs registered in 2006 or earlier fail as often as the average car, or slightly more.` },
      { q: "Which Golf year is the most reliable at the MOT?", a: `Against all cars of the same age, the 2013 to 2016 Golfs show the widest margin, seven to nine points below the national line: 2015 cars failed ${pc(Y(2015).r)} and 2013 cars ${pc(Y(2013).r)}. A failure rate describes the cars of a year as a group; condition and maintenance matter more for any one car.` },
      { q: "Do diesel Golfs fail the MOT more?", a: `In the raw figures, yes: diesel Golfs failed ${pc(F('DI'))} of their first-attempt tests in ${TY} and petrol Golfs ${pc(F('PE'))}. The figures are not adjusted for age or mileage, which may differ between the two, so the gap is not a measure of the engine alone. Hybrid Golfs failed ${pc(F('HY'))}.` },
    ];
  },
});

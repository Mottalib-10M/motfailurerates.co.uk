import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "HONDA", MD = "CIVIC";

export default modelPage({
  make: MK, model: MD, order: 314,
  slug: 'honda-civic-mot-failure-rate',
  nav: "Honda Civic",
  card: "Honda Civic: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Honda Civic MOT Failure Rate: Every Year and Common Faults",
  description: "Honda Civic MOT failure rate for every year from 1995 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Honda Civic MOT failure rate by year",
  intro: "The Honda Civic MOT failure rate for each registration year, from the 2023 DVSA results, against every car registered in the same year.",
  related: ["home", "make-honda", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Honda Civics tested in ${TY} failed their first MOT of the year, against ${pc(gb.rate)} for all cars. The Civic's record falls into two halves. Civics registered from 2012 to 2020 failed well below the national line, ${pc(Y(2014).r)} for 2014 cars against ${pc(Y(2014).nat)}, and ${pc(Y(2012).r)} for 2012 cars against ${pc(Y(2012).nat)}. From 2011 back, the Civic sits on or a few points above the line. Its busiest year in the file is 2007, with ${num(Y(2007).n)} tests, which is why the overall rate looks high. Age-adjusted, the ratio is ${ratio(x.adj)}, rank ${num(x.rank)} of ${x.of}. Lamps dominate its failures more than on any other model with a page here: ${pc(x.cats[0].s, 0)} of failed Civic tests. The checker gives the rate for any Civic year, from the mid-1990s to 2020.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Headlamps on the Civic</h2>
<p>Lamps appear on more than half of failed Civic tests, often for headlamp aim rather than a blown bulb: incorrect aim was recorded ${num(T(1))} times, second only to position lamps. A headlamp pointing too high or too low can only be confirmed with the garage's beam setter, so it is worth asking for the aim to be checked if the car has had a new headlamp unit or bulb.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Do older Honda Civics fail the MOT a lot?", a: `More than newer ones, like all cars. Civics registered from 2001 to 2011 failed between ${pc(Y(2011).r, 0)} and ${pc(Y(2003).r, 0)} of their first tests in ${TY}, slightly above the national rates for those years. Civics from 2012 onwards did much better than average, eight points below on 2012 cars.` },
      { q: "What is the most common MOT failure on a Honda Civic?", a: `A position lamp that does not work, recorded ${num(T(0))} times in ${TY}, ahead of incorrect headlamp aim (${num(T(1))}) and a stop lamp not working (${num(T(2))}). Lamps are behind ${pc(x.cats[0].s, 0)} of failed Civic tests, so checking every bulb and the beam pattern on a wall before the test is time well spent.` },
      { q: "How did diesel Civics do at the MOT?", a: `Diesel Civics failed ${pc(F('DI'))} of their first tests in ${TY} and petrol Civics ${pc(F('PE'))}, on ${num(FN('DI'))} and ${num(FN('PE'))} tests. The two figures mix cars of different ages, so they are not a like-for-like comparison of the engines; the fuel page compares fuels at equal age.` },
    ];
  },
});

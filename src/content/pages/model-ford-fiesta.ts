import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "FORD", MD = "FIESTA";

export default modelPage({
  make: MK, model: MD, order: 300,
  slug: 'ford-fiesta-mot-failure-rate',
  nav: "Ford Fiesta",
  card: "Ford Fiesta: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Ford Fiesta MOT Failure Rate: Every Year and Common Faults",
  description: "Ford Fiesta MOT failure rate for every year from 1988 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Ford Fiesta MOT failure rate by year",
  intro: "The Ford Fiesta MOT failure rate for each year of registration, from the 2023 DVSA results: choose your year to compare it with every car of the same age.",
  related: ["home", "make-ford", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Ford Fiestas that took their first MOT test of ${TY} failed it, against ${pc(gb.rate)} for all cars. No other model comes close to that number of tests, so the Fiesta figures are among the most solid in the file. The age profile is what stands out: Fiestas registered in 2016 failed ${pc(Y(2016).r)} of the time while the average car of that year failed ${pc(Y(2016).nat)}, and the Fiesta stays above the national line for every year back to 1996, with ${pc(Y(2001).r)} against ${pc(Y(2001).nat)} for 2001 cars. Only the 2018 and 2019 Fiestas did slightly better than average. Weighted by age, the Fiesta ranks ${num(x.rank)} of ${x.of} models with 50,000 tests or more, with a ratio of ${ratio(x.adj)}. A stop lamp that did not work was its most recorded failure item.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>What sets the Ford Fiesta apart</h2>
<p>Fiesta tests make up about one in every ${num(Math.round(gb.tests / x.tests))} car MOTs of ${TY}. Lamps lead its failures more clearly than on most cars: ${pc(cat('Lamps, reflectors and electrical equipment'), 0)} of failed Fiesta tests had a lamp or electrical defect, and a stop lamp not working was recorded ${num(T(0))} times. Bulbs are cheap and quick to replace, which makes this the easiest Fiesta failure to avoid. Worn ball joints come next, a fault only visible from under the car.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "What percentage of Ford Fiestas fail their MOT?", a: `${pc(x.rate)} of Fiesta first tests in ${TY} ended in a failure, ${num(x.fails)} out of ${num(x.tests)}. That is above the ${pc(gb.rate)} for all cars, and age is only part of the reason: compared year by year with cars of the same age, the Fiesta failed ${pc(x.adj! - 1, 0)} more often than average.` },
      { q: "Which Fiesta years fail the MOT most?", a: `Among years with 20,000 tests or more, Fiestas registered in 2005 and 2006 failed most, ${pc(Y(2006).r)} for 2006 cars. Against cars of their own age, the widest gap is on older Fiestas: ${pc(Y(1999).r)} for 1999 cars against ${pc(Y(1999).nat)} for all cars of that year, though those years rest on far fewer tests.` },
      { q: "What should I check on a Fiesta before its MOT?", a: `Start with every lamp, with someone pressing the brake pedal: a dead stop lamp was the single most recorded Fiesta failure in ${TY}. Then look at tyre tread, which must be at least 1.6 mm, and listen for knocks from the front suspension over bumps, as worn ball joints and track rod ends come next on its list.` },
    ];
  },
});

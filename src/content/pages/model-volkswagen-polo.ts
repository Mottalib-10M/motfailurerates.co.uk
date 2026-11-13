import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "VOLKSWAGEN", MD = "POLO";

export default modelPage({
  make: MK, model: MD, order: 305,
  slug: 'volkswagen-polo-mot-failure-rate',
  nav: "Volkswagen Polo",
  card: "Volkswagen Polo: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Volkswagen Polo MOT Failure Rate: By Year and Common Faults",
  description: "Volkswagen Polo MOT failure rate for every year from 1996 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Volkswagen Polo MOT failure rate by year",
  intro: "The Volkswagen Polo MOT failure rate for each year of registration, read from the 2023 DVSA test results and set against all cars of that year.",
  related: ["home", "make-volkswagen", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `Volkswagen Polos failed ${pc(x.rate)} of their ${num(x.tests)} first MOT tests in ${TY}, against ${pc(gb.rate)} for all cars. The Polo is mostly a petrol car, nine tests in ten, and averaged ${num(x.miles)} miles at the test. Polos from 2015 and 2016 sit on the national line: 2015 cars failed ${pc(Y(2015).r)}, the same rate as all cars of that year. From 2009 back, the gap opens wide, and Polos from 2003 to 2006 failed about half their tests, ${pc(Y(2004).r)} for 2004 cars against ${pc(Y(2004).nat)}. The age-adjusted ratio of ${ratio(x.adj)} ranks it ${num(x.rank)} of ${x.of}, behind the Golf at ${ratio(h.M('VOLKSWAGEN', 'GOLF').adj)}. Tyre tread below 1.6 mm and worn suspension pins and bushes are its two most recorded failure items. The 2016 Polos are the most numerous in the file, ${num(Y(2016).n)} tests, and failed ${pc(Y(2016).r)}.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Polo and Golf, side by side</h2>
<p>The Polo and the Golf come from the same maker but not the same MOT record: at equal age the Polo failed more often, and the difference is largest on cars from the mid-2000s. The file cannot say why, whether the cars are kept, driven or built differently. On Polos, wipers that no longer clear the screen and incorrect headlamp aim are both among the five most recorded items, failures that a quick check before the test can catch.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Are Volkswagen Polos likely to fail their MOT?", a: `A third of them failed in ${TY}: ${pc(x.rate)} of Polo first tests, against ${pc(gb.rate)} for every car. Most of the difference comes from older Polos, especially those registered before 2010. Polos from 2015 and 2016 failed about as often as all cars of their age, and the newest ones slightly more.` },
      { q: "Which Polo years fail the MOT most?", a: `Polos registered from 2003 to 2006 failed most often, slightly over half of their tests in ${TY}: ${pc(Y(2003).r)} for 2003 cars and ${pc(Y(2006).r)} for 2006 cars. All cars of those years failed about ${pc(Y(2004).nat, 0)}, so the Polo's gap there is seven to ten points.` },
      { q: "How can a Polo owner avoid the most common MOT failures?", a: `Check tyre tread across the whole width, as tread below 1.6 mm is the Polo's most recorded failure, then the wipers and screen wash, every lamp and the headlamp aim if a unit has been replaced. Worn suspension bushes and split driveshaft boots also feature high on its list, but those need the car lifted.` },
    ];
  },
});

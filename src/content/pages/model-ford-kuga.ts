import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "FORD", MD = "KUGA";

export default modelPage({
  make: MK, model: MD, order: 317,
  slug: 'ford-kuga-mot-failure-rate',
  nav: "Ford Kuga",
  card: "Ford Kuga: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Ford Kuga MOT Failure Rate: Every Year and Common Faults",
  description: "Ford Kuga MOT failure rate for every year from 2008 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Ford Kuga MOT failure rate by year",
  intro: "The Ford Kuga MOT failure rate by year of registration, from the 2023 DVSA test results, beside every car of the same age.",
  related: ["home", "make-ford", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `Ford Kugas failed ${pc(x.rate)} of their ${num(x.tests)} first MOT tests in ${TY}, the lowest raw rate of the 24 models with a page on this site. That low figure is mostly youth. Kugas registered in 2019, the busiest year in the file with ${num(Y(2019).n)} tests, failed ${pc(Y(2019).r)} against ${pc(Y(2019).nat)} for all cars of that year, and relatively few Kugas older than 2013 are still tested. Set against cars of the same ages, the Kuga still does slightly better than average, with a ratio of ${ratio(x.adj)} and rank ${num(x.rank)} of ${x.of}. Eight Kuga tests in ten were on diesel cars. Brake pads under 1.5 mm and tyre tread below 1.6 mm were recorded almost exactly as often, at the top of its failure items.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Kuga by year</h2>
<p>The Kuga sits below the national line for every year from 2013 to 2019, by one to five points, then level with it or slightly above for 2009 to 2012 cars. Its failures are spread differently from the hatchbacks: suspension, the first or second group on most cars, comes only fifth on the Kuga, at ${pc(cat('Suspension'), 0)}, behind lamps, tyres, visibility and brakes.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Does the Ford Kuga fail the MOT often?", a: `Less than most cars: ${pc(x.rate)} of Kuga first tests failed in ${TY}, against ${pc(gb.rate)} for all cars. The Kuga is a young fleet, which helps, but even compared with cars of the same age it fails slightly less often, ${pc(1 - x.adj!, 0)} fewer failures than average.` },
      { q: "What are the common MOT failures on a Kuga?", a: `Brake pads below 1.5 mm, tyre tread below 1.6 mm, wipers that no longer clear the screen and position lamps that do not work, in that order, each recorded between ${num(T(3))} and ${num(T(0))} times in ${TY}. Brakes appear on ${pc(cat('Brakes'), 0)} of failed Kuga tests, and tyres on ${pc(cat('Tyres'), 0)}.` },
      { q: "How did 2016 Kugas do at the MOT?", a: `Kugas first registered in 2016 failed ${pc(Y(2016).r)} of their MOT tests in ${TY}, below the ${pc(Y(2016).nat)} for all cars registered that year, on ${num(Y(2016).n)} tests. ${pc(1 - Y(2016).r)} passed at the first attempt. Pick another year in the checker to see how other Kugas fared.` },
    ];
  },
});

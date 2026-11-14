import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "MERCEDES-BENZ", MD = "C";

export default modelPage({
  make: MK, model: MD, order: 310,
  slug: 'mercedes-c-class-mot-failure-rate',
  nav: "Mercedes-Benz C-Class",
  card: "Mercedes-Benz C-Class: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Mercedes C-Class MOT Failure Rate: By Year and Common Faults",
  description: "Mercedes C-Class MOT failure rate for every year from 1994 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Mercedes-Benz C-Class MOT failure rate by year",
  intro: "The Mercedes C-Class MOT failure rate for every year of first registration in the 2023 DVSA results, against all cars of the same age.",
  related: ["home", "make-mercedes-benz", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `${pc(x.rate)} of Mercedes-Benz C-Class first-attempt MOT tests in ${TY} ended in a failure, ${num(x.fails)} of ${num(x.tests)}, against ${pc(gb.rate)} for all cars. At equal age the C-Class does clearly better than average: all years together, ${vs(x.m)}. The margin widens with age up to the late 2000s: 2015 cars failed ${pc(Y(2015).r)} against ${pc(Y(2015).nat)}, 2010 cars ${pc(Y(2010).r)} against ${pc(Y(2010).nat)}, and 2008 cars ${pc(Y(2008).r)} against ${pc(Y(2008).nat)}. The C-Class failures are led by suspension and tyres rather than lamps, and tread below 1.6 mm, which DVSA classes as dangerous, is its most recorded item, just ahead of worn ball joints. Six C-Class tests in ten were on diesels, and ${num(FN('HY'))} on hybrids. Its cars averaged ${num(x.miles)} miles on the clock at the test.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `<h2>How DVSA names the C-Class</h2>
<p>DVSA records the C-Class simply as "C" in the results file; the checker shows it as C-Class. Lamps come only third in its failures, behind suspension and tyres, the reverse of the order on small hatchbacks. Corroded rigid brake pipes are in its top four items, recorded ${num(T(3))} times.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "Is the Mercedes C-Class reliable at the MOT?", a: `More than most cars of the same age. In ${TY}, all C-Class years together, ${vs(x.m)}. The gap is clearest on cars registered from 2007 to 2015: 2010 cars failed ${pc(Y(2010).r)}, against ${pc(Y(2010).nat)} for all cars of that year.` },
      { q: "Do hybrid C-Class cars fail the MOT less?", a: `In the raw figures, yes: hybrid C-Class cars failed ${pc(F('HY'))} of their first-attempt tests in ${TY}, against ${pc(F('DI'))} for diesels and ${pc(F('PE'))} for petrol cars. Hybrid versions may be younger on average, so part of the gap may be age; the figures are not adjusted for it.` },
      { q: "Which C-Class year has the most MOT tests?", a: `2017, with ${num(Y(2017).n)} tests in ${TY}. Those cars failed ${pc(Y(2017).r)} of the time against ${pc(Y(2017).nat)} for all cars of that year. The file holds C-Class tests back to the mid-1990s, and even those older cars failed less often than average cars of their year.` },
    ];
  },
});

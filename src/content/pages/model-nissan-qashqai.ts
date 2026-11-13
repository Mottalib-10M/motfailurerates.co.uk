import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "NISSAN", MD = "QASHQAI";

export default modelPage({
  make: MK, model: MD, order: 306,
  slug: 'nissan-qashqai-mot-failure-rate',
  nav: "Nissan Qashqai",
  card: "Nissan Qashqai: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Nissan Qashqai MOT Failure Rate: Each Year and Common Faults",
  description: "Nissan Qashqai MOT failure rate for every year from 2007 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Nissan Qashqai MOT failure rate by year",
  intro: "The Nissan Qashqai MOT failure rate by year of first registration, from the 2023 DVSA results, compared with all cars of the same age.",
  related: ["home", "make-nissan", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Nissan Qashqais that had a first MOT test in ${TY} failed it. The headline looks close to the ${pc(gb.rate)} for all cars, but only because the Qashqai fleet is young: no Qashqai year before 2007 has enough tests in the file to count. Year by year, the story splits in two. Qashqais from 2015 to 2020 failed at or below the national rate, ${pc(Y(2017).r)} for 2017 cars against ${pc(Y(2017).nat)}. Those from 2013 and earlier failed far more, ${pc(Y(2010).r)} for 2010 cars against ${pc(Y(2010).nat)} and ${pc(Y(2009).r)} for 2009 cars. Taken over every year, the ratio is ${ratio(x.adj)}, rank ${num(x.rank)} of ${x.of}. Steering and suspension parts dominate: worn track rod ends and ball joints are its two most recorded items.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>The two Qashqais</h2>
<p>The break between older and newer Qashqais is one of the sharpest in the file: cars registered in 2013 failed ${pc(Y(2013).r)}, those from 2015 ${pc(Y(2015).r)}, a fall far steeper than the national curve over the same two years, from ${pc(Y(2013).nat)} to ${pc(Y(2015).nat)}. Diesels take about half of the Qashqai tests. Brake pads below 1.5 mm, a defect DVSA classes as dangerous, are its third most recorded item.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Is the Nissan Qashqai prone to failing its MOT?", a: `It depends on the year. Qashqais registered from 2015 onwards failed no more often than other cars of their age in ${TY}, while those from 2008 to 2012 failed between ${pc(Y(2012).r, 0)} and ${pc(Y(2009).r, 0)} of their tests, well above the average for their years. Over all years, the Qashqai failed ${pc(x.adj! - 1, 0)} more often than average.` },
      { q: "What fails a Qashqai at the MOT?", a: `Suspension is behind ${pc(x.cats[0].s, 0)} of failed Qashqai tests and lamps ${pc(x.cats[1].s, 0)}. Steering also features more than on most cars, at ${pc(cat('Steering'), 0)}: track rod ends with excessive play were the single most recorded failure, ahead of worn ball joints, thin brake pads and position lamps that did not work.` },
      { q: "How did 2017 Qashqais do at the MOT?", a: `${pc(Y(2017).r)} of Qashqais first registered in 2017 failed their MOT test in ${TY}, slightly below the ${pc(Y(2017).nat)} for all cars of that year, and ${pc(1 - Y(2017).r)} passed without a failure. 2017 is the Qashqai year with the most tests in the file, ${num(Y(2017).n)}.` },
    ];
  },
});

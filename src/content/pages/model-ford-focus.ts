import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "FORD", MD = "FOCUS";

export default modelPage({
  make: MK, model: MD, order: 301,
  slug: 'ford-focus-mot-failure-rate',
  nav: "Ford Focus",
  card: "Ford Focus: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Ford Focus MOT Failure Rate: Every Year and Common Faults",
  description: "Ford Focus MOT failure rate for every year from 1999 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Ford Focus MOT failure rate by year",
  intro: "The Ford Focus MOT failure rate by year of first registration, counted from every Focus tested in 2023: pick your year and compare it with all cars.",
  related: ["home", "make-ford", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `The Focus is the second most tested car in Great Britain after the Fiesta, and ${pc(x.rate)} of its ${num(x.tests)} first MOT tests in ${TY} were failures. Set against cars of the same age it is close to average, with a ratio of ${ratio(x.adj)} that places it ${num(x.rank)} of ${x.of}. That average hides a clear break by generation. Focuses registered from 2015 to 2018 failed less often than the national line, ${pc(Y(2016).r)} for 2016 cars against ${pc(Y(2016).nat)}, and the 2019 and 2020 cars sit on it, while those from 2014 back to 2008 failed more often, ${pc(Y(2013).r)} for 2013 cars against ${pc(Y(2013).nat)}. Most Focus failures come from lamps and suspension, and a fractured coil spring was its most recorded single item, ${num(T(0))} times.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Mileage and the Focus</h2>
<p>Focus cars covered more miles than Fiestas by the time of the test: ${num(x.miles)} on average against ${num(h.M('FORD', 'FIESTA').miles)}. About a third of Focus tests were on diesel cars, against one in seven for the Fiesta. A broken coil spring, its most frequent single failure item, is rarely noticed from the driving seat; it usually shows up when a tester puts the car on the lift.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Is the Ford Focus likely to fail its MOT?", a: `Roughly one Focus in three failed its first MOT test in ${TY}: ${pc(x.rate)}, against ${pc(gb.rate)} for all cars. Age explains most of the gap, since many Focuses on the road are over ten years old. Compared with cars of the same registration years, the Focus fails about as often as average, with a ratio of ${ratio(x.adj)}.` },
      { q: "Which Focus years have the best MOT record?", a: `Against cars of the same age, Focuses registered from 2015 to 2018 did best: 2015 cars failed ${pc(Y(2015).r)} of their tests when the average for that year was ${pc(Y(2015).nat)}. Cars from 2014 back to 2008 did slightly worse than the national line, by one to four points depending on the year.` },
      { q: "Do diesel Focuses fail the MOT more than petrol ones?", a: `Slightly, in the raw figures: diesel Focuses failed ${pc(F('DI'))} of their first tests in ${TY} and petrol ones ${pc(F('PE'))}. Those rates are not adjusted for age or mileage, so part of the gap may come from the age and use of the cars rather than from the engine itself.` },
    ];
  },
});

import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "SKODA", MD = "OCTAVIA";

export default modelPage({
  make: MK, model: MD, order: 323,
  slug: 'skoda-octavia-mot-failure-rate',
  nav: "Skoda Octavia",
  card: "Skoda Octavia: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Skoda Octavia MOT Failure Rate: Every Year and Common Faults",
  description: "Skoda Octavia MOT failure rate for every year from 2001 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Skoda Octavia MOT failure rate by year",
  intro: "The Skoda Octavia MOT failure rate for every year of first registration, read from the 2023 DVSA results, against all cars of the same age.",
  related: ["home", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `Skoda Octavias failed ${pc(x.rate)} of their ${num(x.tests)} first MOT tests in ${TY}, among the lowest raw rates of the models with a page here, against ${pc(gb.rate)} for all cars. That is despite high mileage: ${num(x.miles)} miles on average at the test, mostly on diesel cars. Year by year, the Octavia is below the national line from 2007 to 2019, by up to six points: 2015 cars failed ${pc(Y(2015).r)} against ${pc(Y(2015).nat)}, and 2014 cars ${pc(Y(2014).r)} against ${pc(Y(2014).nat)}. Octavias from 2006 and earlier fail at about the national rate. The age-adjusted ratio is ${ratio(x.adj)}, rank ${num(x.rank)} of ${x.of}. Fractured coil springs top its list of failure items, ahead of tyre tread below 1.6 mm and brake pads below 1.5 mm. Petrol Octavias failed only ${pc(F('PE'))} in the raw figures, diesels ${pc(F('DI'))}.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Diesel Octavias</h2>
<p>Two thirds of Octavia tests were on diesel cars, and diesels failed ${pc(F('DI'))} against ${pc(F('PE'))} for petrol ones in the raw figures. Tyres take ${pc(cat('Tyres'), 0)} of failed Octavia tests, more than on most hatchbacks, and leaking shock absorbers and split ball joint dust covers also feature in its top six items.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Is the Skoda Octavia reliable at the MOT?", a: `At equal age, better than average: in ${TY} Octavias failed about ${pc(1 - x.adj!, 0)} less often than cars of the same registration years, with ${pc(x.rate)} of all their first tests failing. The best margin is on 2014 and 2015 cars, five to six points below the national line.` },
      { q: "Do high-mileage Octavias fail the MOT?", a: `Not more than average for their age, even though Octavias carried ${num(x.miles)} miles on average at the test, one of the highest figures here. Across all cars, mileage does raise the rate at the same age, so a particular high-mileage Octavia is still worth checking carefully: springs, tyres and brake pads top its failures.` },
      { q: "Which Octavia year was tested most?", a: `2016, with ${num(Y(2016).n)} tests in ${TY}. Those Octavias failed ${pc(Y(2016).r)} of the time, against ${pc(Y(2016).nat)} for all cars registered in 2016. Cars from 2019 and 2015 come close in number, so the figures from about 2008 to 2019 rest on several thousand tests each.` },
    ];
  },
});

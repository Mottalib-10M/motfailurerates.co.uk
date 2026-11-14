import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "AUDI", MD = "A4";

export default modelPage({
  make: MK, model: MD, order: 316,
  slug: 'audi-a4-mot-failure-rate',
  nav: "Audi A4",
  card: "Audi A4: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Audi A4 MOT Failure Rate: Every Year and Common Faults",
  description: "Audi A4 MOT failure rate for every year from 1997 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Audi A4 MOT failure rate by year",
  intro: "The Audi A4 MOT failure rate for every year of first registration in the 2023 DVSA results, against all cars of the same age.",
  related: ["home", "make-audi", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `Audi A4s failed ${pc(x.rate)} of their ${num(x.tests)} first-attempt MOT tests in ${TY}, slightly below the ${pc(gb.rate)} for all cars, while covering more miles than almost any other popular model: ${num(x.miles)} on average at the test. Year by year, the A4 is at or below the national line for every registration year from 2001 to 2020, and the margin peaks on cars from 2009 to 2013: 2012 A4s failed ${pc(Y(2012).r)} against ${pc(Y(2012).nat)}, 2010 cars ${pc(Y(2010).r)} against ${pc(Y(2010).nat)}. With an age-adjusted ratio of ${ratio(x.adj)} it ranks ${num(x.rank)} of ${x.of}. Lamps, suspension and tyres share its failures in almost equal parts, and tread below 1.6 mm is its most recorded item, ahead of fractured coil springs. Petrol A4s failed ${pc(F('PE'))} in the raw figures and diesel ones ${pc(F('DI'))}, though the two fleets differ in age.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>High mileage, low failure</h2>
<p>Two thirds of A4 tests were on diesel cars, and the average reading at the test, ${num(x.miles)} miles, is close to that of the BMW 3 Series, the highest among the models here. Despite those miles, the A4 failed less often than average at nearly every age. Fractured coil springs and split driveshaft boots both rank in its top three failure items.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Does the Audi A4 fail the MOT less than other cars?", a: `Yes, once age is taken into account. A4s failed ${pc(x.rate)} of their first-attempt tests in ${TY}, close to the national ${pc(gb.rate)}, while covering more miles than most cars. Compared with cars of the same registration years, they failed about ${pc(1 - x.adj!, 0)} less often.` },
      { q: "Does high mileage make an A4 fail its MOT?", a: `Not on its own: A4s carry one of the highest average mileages in the file, ${num(x.miles)} miles at the test, yet fail less than average at equal age. Mileage does raise failure rates across all cars at the same age, as the mileage page shows, but the model and its upkeep matter too.` },
      { q: "Which A4 year has the most tests?", a: `2016, with ${num(Y(2016).n)} first-attempt MOT tests in ${TY}. Those cars failed ${pc(Y(2016).r)} of the time, against ${pc(Y(2016).nat)} for all cars registered in 2016. Cars from 2017, 2008 and 2007 are not far behind in number, which gives the table solid figures from about 2004 to 2019.` },
    ];
  },
});

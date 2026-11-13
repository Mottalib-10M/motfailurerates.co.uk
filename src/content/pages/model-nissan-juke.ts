import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "NISSAN", MD = "JUKE";

export default modelPage({
  make: MK, model: MD, order: 315,
  slug: 'nissan-juke-mot-failure-rate',
  nav: "Nissan Juke",
  card: "Nissan Juke: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Nissan Juke MOT Failure Rate: Every Year and Common Faults",
  description: "Nissan Juke MOT failure rate for every year from 2010 to 2019, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Nissan Juke MOT failure rate by year",
  intro: "The Nissan Juke MOT failure rate for every year since 2010, from the 2023 DVSA results, compared with all cars of the same registration year.",
  related: ["home", "make-nissan", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `Nissan Jukes failed ${pc(x.rate)} of their ${num(x.tests)} first MOT tests in ${TY}, close to the ${pc(gb.rate)} for all cars, but the Juke fleet is young, which flatters that figure. Year by year, the Juke fails more often than the average car at almost every age. Jukes registered in 2013 failed ${pc(Y(2013).r)} against ${pc(Y(2013).nat)} for all cars of that year, and 2014 cars ${pc(Y(2014).r)} against ${pc(Y(2014).nat)}. Only the 2018 cars sit on the line. With an age-adjusted ratio of ${ratio(x.adj)}, the Juke ranks ${num(x.rank)} of ${x.of} models with 50,000 tests. Worn ball joints and track rod ends with excessive play are among its three most recorded failure items, and wipers that no longer clear the screen come second. Its busiest year in the file is 2015, with ${num(Y(2015).n)} tests and a rate of ${pc(Y(2015).r)}.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>An unusual order of failures</h2>
<p>On the Juke, suspension heads the failures and visibility comes second, ahead of brakes and lamps, an order not seen on any other model here. Wipers that no longer clear the screen were recorded ${num(T(1))} times. Diesel Jukes, about three tests in ten, failed more than petrol ones in the raw figures, ${pc(F('DI'))} against ${pc(F('PE'))}.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Does the Nissan Juke fail the MOT often?", a: `More often than an average car of the same age. In ${TY} Jukes failed ${pc(x.rate)} of their first tests, and compared year by year with cars of the same age they failed about ${pc(x.adj! - 1, 0)} more often. The gap is widest on 2013 and 2014 cars, at eight to eleven points.` },
      { q: "Which Juke parts fail the MOT most?", a: `Front suspension and steering joints: worn ball joints were recorded ${num(T(0))} times on Jukes in ${TY} and track rod ends with excessive play ${num(T(2))} times. Between them sit wipers that no longer clear the screen. Tyre tread below 1.6 mm and brake pads under 1.5 mm complete its top five.` },
      { q: "Are newer Jukes better at the MOT?", a: `Somewhat. Jukes registered from 2016 to 2019 fail closer to the national line, ${pc(Y(2017).r)} for 2017 cars against ${pc(Y(2017).nat)} for all cars that year, while those from 2011 to 2015 fail five to eleven points more often. The checker gives the figure for each year.` },
    ];
  },
});

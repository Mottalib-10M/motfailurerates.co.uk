import { makePage } from '../../lib/make-page';
import { kctx } from '../../lib/ctx';

const MK = "FORD";

export default makePage({
  make: MK, order: 200, defaultModel: "FOCUS",
  slug: 'ford-mot-failure-rate',
  nav: "Ford",
  card: "Ford: every model ranked at equal age, and the make against all cars by year.",
  title: "Ford MOT Failure Rate: Every Model Ranked at Equal Age",
  description: "Ford MOT failure rate for every model with 10,000 tests, ranked against cars of the same age, and by year of first registration, from the DVSA test results.",
  h1: "Ford MOT failure rate by model and year",
  intro: "The Ford MOT failure rate for every Ford model with 10,000 tests in 2023, from the Fiesta to the Transit, each set against cars of the same age.",
  related: ["home", "model-ford-fiesta", "model-ford-focus", "model-ford-kuga", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} first-attempt MOT tests of Ford cars and vans in ${TY} ended in a failure, against ${pc(gb.rate)} for all makes. Ford is the most tested make in Great Britain by a wide margin, and most of its tests are Fiestas and Focuses. Compared with vehicles of the same ages, Ford failed about ${pc(x.adj! - 1, 0)} more often than average, which places it ${r.rank} of the ${r.of} makes with 300,000 tests or more. The gap is modest on cars: five-year-old Fords failed ${pc(A(5))} against ${pc(N(5))} for all makes, twelve-year-old Fords ${pc(A(12))} against ${pc(N(12))}. Its vans weigh more: the Transit, Transit Custom and Transit Courier all fail at least a quarter more often than the average vehicle of their age. Among Ford's ${x.models.length} models with 10,000 tests, the ${best.m.label} does best. The Mondeo sits exactly on the line, at ${ratio(ML('Mondeo').adj)}.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `<p>The Fiesta, the Focus and the Kuga carry more than half of Ford's tests, and they sit close to the national line at equal age, the Kuga below it at ${ratio(ML('Kuga').adj)} and the Fiesta above it at ${ratio(ML('Fiesta').adj)}. The Mustang and the old Escort top the table, on far fewer tests.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return [
      { q: "Do Fords fail the MOT more than other makes?", a: `Slightly, at equal age. Ford cars and vans failed ${pc(x.rate)} of their first-attempt tests in ${TY}, and compared with vehicles of the same registration years, about ${pc(x.adj! - 1, 0)} more often than average. Of the ${r.of} makes with 300,000 tests or more, ${num(r.of - r.rank)} did worse, among them Vauxhall, Peugeot and Renault.` },
      { q: "Which Ford is least likely to fail its MOT?", a: `Among Ford models with at least 10,000 tests, the ${best.m.label} had the best record at equal age in ${TY}, a ratio of ${ratio(best.adj)}, followed by the Escort and the Kuga. Among the most common Fords, the Kuga beats the Focus and the Fiesta. The ${worst.m.label} van had the highest ratio, ${ratio(worst.adj)}.` },
      { q: "Do Ford vans fail the MOT more than Ford cars?", a: `Yes. The Transit, Transit Connect, Transit Custom and Transit Courier had ratios between ${ratio(ML('Transit Connect').adj)} and ${ratio(ML('Transit Courier').adj)} in ${TY}, against ${ratio(ML('Fiesta').adj)} for the Fiesta and ${ratio(ML('Focus').adj)} for the Focus. Goods vehicles up to 3,000 kg are tested in class 4 like cars, so they appear in the same file.` },
    ];
  },
});

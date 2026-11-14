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
    const { pc, num, vs, at, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} first-attempt MOT tests of Ford cars and vans in ${TY} ended in a failure, against ${pc(gb.rate)} for all makes. Ford is the most tested make in Great Britain by a wide margin, and most of its tests are Fiestas and Focuses. Compared with vehicles of the same ages, ${vs(x.k)}. The gap is modest on cars: five-year-old Fords failed ${pc(A(5))} against ${pc(N(5))} for all makes, twelve-year-old Fords ${pc(A(12))} against ${pc(N(12))}. Its vans weigh more: the Transit, Transit Custom and Transit Courier all fail clearly more often than the average vehicle of their age: the Transit Custom, for example, ${at(ML('Transit Custom').m)}. Among Ford's ${x.models.length} models with 10,000 tests, the ${best.m.label} does best. The Mondeo sits on the line, ${at(ML('Mondeo').m)}.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return `<p>The Fiesta, the Focus and the Kuga carry more than half of Ford's tests, and they sit close to the national line at equal age, the Kuga below it (${at(ML('Kuga').m)}) and the Fiesta above it (${at(ML('Fiesta').m)}). The Mustang and the old Escort top the table, on far fewer tests.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "Do Fords fail the MOT more than other makes?", a: `Slightly, at equal age. Ford cars and vans failed ${pc(x.rate)} of their first-attempt tests in ${TY}, against ${pc(x.same)} for all vehicles of the same registration years. Several large makes did worse at equal age, among them Vauxhall, Peugeot and Renault.` },
      { q: "Which Ford is least likely to fail its MOT?", a: `Among Ford models with at least 10,000 tests, the ${best.m.label} had the best record at equal age in ${TY}, ${at(best.m)}, followed by the Escort and the Kuga. Among the most common Fords, the Kuga beats the Focus and the Fiesta. The ${worst.m.label} van did worst, ${at(worst.m)}.` },
      { q: "Do Ford vans fail the MOT more than Ford cars?", a: `Yes. In ${TY}, all years together, the Transit Connect failed ${at(ML('Transit Connect').m)} and the Transit Courier ${at(ML('Transit Courier').m)}. The Fiesta: ${at(ML('Fiesta').m)}; the Focus: ${at(ML('Focus').m)}. Goods vehicles up to 3,000 kg take the same MOT as cars (class 4), so they appear in the same file.` },
    ];
  },
});

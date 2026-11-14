import { makePage } from '../../lib/make-page';
import { kctx } from '../../lib/ctx';

const MK = "AUDI";

export default makePage({
  make: MK, order: 205, defaultModel: "A3",
  slug: 'audi-mot-failure-rate',
  nav: "Audi",
  card: "Audi: every model ranked at equal age, and the make against all cars by year.",
  title: "Audi MOT Failure Rate: Every Model Ranked at Equal Age",
  description: "Audi MOT failure rate for every model with 10,000 tests, ranked against cars of the same age, and by year of first registration, from the DVSA test results.",
  h1: "Audi MOT failure rate by model and year",
  intro: "The Audi MOT failure rate for every model from the A1 to the Q7, from the 2023 DVSA results, with each year compared with all cars.",
  related: ["home", "model-audi-a3", "model-audi-a4", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return `${pc(x.rate)} of Audi first-attempt MOT tests in ${TY} failed, ${num(x.fails)} out of ${num(x.tests)}, against ${pc(gb.rate)} for all makes. Compared with cars of the same registration years, ${vs(x.k)}: the third best record of the makes with 300,000 tests or more, behind BMW and Jaguar. At five years old, Audis failed ${pc(A(5))} of their tests against ${pc(N(5))} for all makes; at twelve, ${pc(A(12))} against ${pc(N(12))}. All ${x.models.length} Audi models with 10,000 tests sit below the national line, from the ${best.m.label} (${at(best.m)}) to the ${worst.m.label} (${at(worst.m)}). The A3, A4 and A1 carry more than half of Audi's tests, so they set the make's figure. The young Q2 crossover has the lowest raw rate of the make, ${pc(ML('Q2').rate)}, largely because of its age, but it also does well against cars of the same years: ${at(ML('Q2').m)}.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return `<p>The A8, A7, Q2 and Q7 do best against cars the same age, though on far fewer tests than the A3: the A8, for example, ${at(ML('A8').m)}. Tyres weigh heavily in the failures of the A3 and the A4: about three failed tests in ten had a tyre defect on each, as their own pages show.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "Do Audis fail the MOT less than other makes?", a: `Yes. At equal age, in ${TY}, ${vs(x.k)}: third best of the makes with 300,000 tests or more. Their raw rate, ${pc(x.rate)}, is also well under the ${pc(gb.rate)} for all makes, and no Audi model with 10,000 tests fails more than average.` },
      { q: "Which Audi model has the best MOT record?", a: `The ${best.m.label}, at equal age in ${TY}: ${at(best.m)}, on ${num(best.m.n)} tests. Among the most common Audis, the A3 failed ${at(ML('A3').m)}, the A4 ${at(ML('A4').m)} and the A1 ${at(ML('A1').m)}.` },
      { q: "How likely is a ten-year-old Audi to fail its MOT?", a: `Audis first registered in ${TY - 10}, ten years before the test, failed ${pc(A(10))} of their tests in ${TY}, against ${pc(N(10))} for all cars of that age. The checker above gives the rate for each Audi model and year, from the A1 to the Q7, and the table below every age from three to eighteen.` },
    ];
  },
});

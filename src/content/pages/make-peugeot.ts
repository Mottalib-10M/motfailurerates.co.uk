import { makePage } from '../../lib/make-page';
import { kctx } from '../../lib/ctx';

const MK = "PEUGEOT";

export default makePage({
  make: MK, order: 208, defaultModel: "208",
  slug: 'peugeot-mot-failure-rate',
  nav: "Peugeot",
  card: "Peugeot: every model ranked at equal age, and the make against all cars by year.",
  title: "Peugeot MOT Failure Rate: Every Model Ranked at Equal Age",
  description: "Peugeot MOT failure rate for every model with 10,000 tests, ranked against cars of the same age, and by year of first registration, from the DVSA test results.",
  h1: "Peugeot MOT failure rate by model and year",
  intro: "The Peugeot MOT failure rate for each model, from the 107 to the Partner van, as counted in the 2023 DVSA results, against all cars.",
  related: ["home", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `Peugeots failed ${pc(x.rate)} of their ${num(x.tests)} first-attempt MOT tests in ${TY}, against ${pc(gb.rate)} for all makes. Compared with vehicles of the same registration years, they failed about ${pc(x.adj! - 1, 0)} more often, placing Peugeot ${r.rank} of the ${r.of} makes with 300,000 tests or more, ahead of only Vauxhall, Citroen and Renault. The gap is already clear on young cars: five-year-old Peugeots failed ${pc(A(5))} against ${pc(N(5))} for all makes, and twelve-year-old ones ${pc(A(12))} against ${pc(N(12))}. The 208, 207 and 308 hatchbacks and the 3008 carry the largest share of the make's tests, and all four sit above the national line. The best Peugeot at equal age is the ${best.m.label} van, at ${ratio(best.adj)}, on ${num(best.m.n)} tests. The 2008 crossover sits at ${ratio(ML('2008').adj)} and the 3008 at ${ratio(ML('3008').adj)}, both above the national line.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `<p>The small 107 and 108 do better than average, but the 207, 208 and 308 hatchbacks sit above the line, and the Partner van and the 5008 people carrier come last, at ${ratio(ML('Partner').adj)} and ${ratio(ML('5008').adj)}. In raw figures, the 108 failed ${pc(ML('108').rate)} of its ${num(ML('108').m.n)} tests in ${TY} and the 308 ${pc(ML('308').rate)} of its ${num(ML('308').m.n)}, before any adjustment for age.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return [
      { q: "Do Peugeots fail the MOT more than average?", a: `Yes. At equal age, Peugeots failed about ${pc(x.adj! - 1, 0)} more often than average in ${TY}, and ${pc(x.rate)} of their first-attempt tests failed overall. Among the ${r.of} makes with 300,000 tests or more, only Vauxhall, Citroen and Renault did worse. The 107, 108 and Boxer are the exceptions below the national line.` },
      { q: "Which Peugeot model is least likely to fail the MOT?", a: `The ${best.m.label} van, with a ratio of ${ratio(best.adj)} in ${TY}, followed by the 108 at ${ratio(ML('108').adj)} and the 107 at ${ratio(ML('107').adj)}. Those three are the only Peugeots with 10,000 tests below the national line. The ${worst.m.label} van had the highest ratio, ${ratio(worst.adj)}.` },
      { q: "Is a Peugeot 208 likely to fail its MOT?", a: `${pc(ML('208').rate)} of Peugeot 208 first-attempt tests failed in ${TY}, on ${num(ML('208').m.n)} tests, a raw rate below the ${pc(gb.rate)} for all makes because most 208s are young. At equal age, though, the 208 failed about ${pc(ML('208').adj - 1, 0)} more often than average, a ratio of ${ratio(ML('208').adj)}.` },
    ];
  },
});

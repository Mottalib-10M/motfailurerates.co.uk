import { makePage } from '../../lib/make-page';
import { kctx } from '../../lib/ctx';

const MK = "VAUXHALL";

export default makePage({
  make: MK, order: 201, defaultModel: "ASTRA",
  slug: 'vauxhall-mot-failure-rate',
  nav: "Vauxhall",
  card: "Vauxhall: every model ranked at equal age, and the make against all cars by year.",
  title: "Vauxhall MOT Failure Rate: Every Model Ranked at Equal Age",
  description: "Vauxhall MOT failure rate for every model with 10,000 tests, ranked against cars of the same age, and by year of first registration, from the DVSA test results.",
  h1: "Vauxhall MOT failure rate by model and year",
  intro: "The Vauxhall MOT failure rate for each model, Corsa and Astra first, from the 2023 DVSA results and against cars of the same age.",
  related: ["home", "model-vauxhall-corsa", "model-vauxhall-astra", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} first MOT tests of Vauxhalls in ${TY} ended in a failure, against ${pc(gb.rate)} for all makes. Vauxhall is the second most tested make after Ford, and at equal age it failed about ${pc(x.adj! - 1, 0)} more often than average, ${r.rank} of the ${r.of} makes with 300,000 tests or more. Five-year-old Vauxhalls failed ${pc(A(5))} against ${pc(N(5))} for all makes, and twelve-year-old ones ${pc(A(12))} against ${pc(N(12))}. The Corsa and the Astra carry more than half the make's tests, so its figure is largely theirs. The newer Grandland and Crossland sit at or near the national line, the small ${best.m.label} does best at ${ratio(best.adj)}, and the Vivaro and Combo vans fail most. The Insignia, the Zafira and the Mokka each have over 200,000 tests, and all three sit above the line.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `<p>Between its two big sellers, the Astra does better at equal age, ${ratio(ML('Astra').adj)} against ${ratio(ML('Corsa').adj)} for the Corsa. The Meriva people carrier sits close to the Astra, and the Zafira and the Mokka crossover close to the Corsa.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return [
      { q: "Do Vauxhalls fail the MOT more than other makes?", a: `Yes, at equal age. In ${TY}, Vauxhalls failed about ${pc(x.adj! - 1, 0)} more often than vehicles of the same registration years, and only Citroen and Renault did worse among the ${r.of} makes with 300,000 tests or more. Their raw rate was ${pc(x.rate)}, against ${pc(gb.rate)} for all makes.` },
      { q: "Which Vauxhall is least likely to fail the MOT?", a: `The ${best.m.label}, a small city car, with a ratio of ${ratio(best.adj)} at equal age in ${TY}. The Agila and the Grandland sit just under the national line, at ${ratio(ML('Agila').adj)} and ${ratio(ML('Grandland').adj)}. The ${worst.m.label} van had the highest ratio, ${ratio(worst.adj)}, followed by the Combo.` },
      { q: "Is the Corsa or the Astra better at the MOT?", a: `The Astra, at equal age: its ratio was ${ratio(ML('Astra').adj)} in ${TY} against ${ratio(ML('Corsa').adj)} for the Corsa. In raw terms the two are closer, ${pc(ML('Astra').rate)} and ${pc(ML('Corsa').rate)}. Each has its own page with the rate for every year of registration and the defects behind its failures.` },
    ];
  },
});

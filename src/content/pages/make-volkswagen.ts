import { makePage } from '../../lib/make-page';
import { kctx } from '../../lib/ctx';

const MK = "VOLKSWAGEN";

export default makePage({
  make: MK, order: 202, defaultModel: "GOLF",
  slug: 'volkswagen-mot-failure-rate',
  nav: "Volkswagen",
  card: "Volkswagen: every model ranked at equal age, and the make against all cars by year.",
  title: "Volkswagen MOT Failure Rate: Every Model Ranked at Equal Age",
  description: "Volkswagen MOT failure rate for every model with 10,000 tests, ranked at equal age, and by year of first registration, from the DVSA MOT test results.",
  h1: "Volkswagen MOT failure rate by model and year",
  intro: "The Volkswagen MOT failure rate for every model with 10,000 tests in 2023, from the Up to the Transporter, against cars of the same age.",
  related: ["home", "model-volkswagen-golf", "model-volkswagen-polo", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} first-attempt MOT tests of Volkswagens in ${TY} failed, against ${pc(gb.rate)} for all makes. At equal age, Volkswagen sits just under the national line, failing about ${pc(1 - x.adj!, 0)} less often than average, ${r.rank} of the ${r.of} makes with 300,000 tests or more. The make stays close to the line at five and at twelve years: five-year-old Volkswagens failed ${pc(A(5))} against ${pc(N(5))} for all makes, twelve-year-old ones ${pc(A(12))} against ${pc(N(12))}. Inside the make, the spread is wide. The T-Roc, Up and T-Cross have some of the best ratios in the file, from ${ratio(best.adj)}, while the Polo, Beetle and Fox fail more often than average. The Transporter van, with ${num(ML('Transporter').m.n)} tests, sits just above the line. The Tiguan, the most tested Volkswagen SUV, sits at ${ratio(ML('Tiguan').adj)} on ${num(ML('Tiguan').m.n)} tests.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `<p>The figure for the make rests on the Golf and the Polo, which together take about half of its tests and do not fail at the same pace: ${ratio(ML('Golf').adj)} for the Golf against ${ratio(ML('Polo').adj)} for the Polo at equal age.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return [
      { q: "Are Volkswagens good at passing the MOT?", a: `About average, slightly better. In ${TY}, Volkswagens failed about ${pc(1 - x.adj!, 0)} less often than vehicles of the same registration years, ${r.rank}th of the ${r.of} makes with 300,000 tests or more, and their raw rate was ${pc(x.rate)}. The Golf does better than the make as a whole, the Polo worse.` },
      { q: "Which Volkswagen model fails the MOT least?", a: `The ${best.m.label}, with a ratio of ${ratio(best.adj)} at equal age in ${TY}, followed by the Up at ${ratio(ML('Up').adj)} and the T-Cross at ${ratio(ML('T-Cross').adj)}. The T-Roc and T-Cross are young models, compared here only with cars of the same years. The ${worst.m.label} city car had the highest ratio, ${ratio(worst.adj)}.` },
      { q: "Do Volkswagen Transporters fail the MOT often?", a: `About as often as average vehicles of their age: the Transporter's ratio was ${ratio(ML('Transporter').adj)} in ${TY}, on ${num(ML('Transporter').m.n)} tests in class 4, and ${pc(ML('Transporter').rate)} of them failed. The Caddy van did slightly worse, at ${ratio(ML('Caddy').adj)}. Both appear with the other Volkswagens in the table of models below.` },
    ];
  },
});

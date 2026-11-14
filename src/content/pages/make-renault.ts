import { makePage } from '../../lib/make-page';
import { kctx } from '../../lib/ctx';

const MK = "RENAULT";

export default makePage({
  make: MK, order: 209, defaultModel: "CLIO",
  slug: 'renault-mot-failure-rate',
  nav: "Renault",
  card: "Renault: every model ranked at equal age, and the make against all cars by year.",
  title: "Renault MOT Failure Rate: Every Model Ranked at Equal Age",
  description: "Renault MOT failure rate for every model with 10,000 tests, ranked against cars of the same age, and by year of first registration, from the DVSA test results.",
  h1: "Renault MOT failure rate by model and year",
  intro: "The Renault MOT failure rate for each model tested in 2023, from the Clio to the Trafic van, and how far each sits from the average.",
  related: ["home", "model-renault-clio", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return `Renault has the highest failure rate at equal age of every make with 300,000 tests or more. ${pc(x.rate)} of its ${num(x.tests)} first-attempt MOT tests in ${TY} failed, against ${pc(gb.rate)} for all makes, and all cars of the same registration years failed ${pc(x.same)}. The gap is visible early and widens: five-year-old Renaults failed ${pc(A(5))} against ${pc(N(5))} for all makes, and twelve-year-old ones ${pc(A(12))} against ${pc(N(12))}, roughly half their tests. Only the ${best.m.label} van, ${at(best.m)}, sits just under the national line among Renault's ${x.models.length} models with 10,000 tests. The Clio, with ${num(ML('Clio').m.n)} tests, carries about a third of the make's figure. Behind the Clio come the Captur, the Megane and the Trafic van, which between them account for about half of the rest; the Captur does best of the three, ${at(ML('Captur').m)}.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return `<p>Renault's vans sit at the bottom of its table: the Trafic ${at(worst.m)} and the Kangoo ${at(ML('Kangoo').m)}. The newer Captur and Kadjar crossovers do better, but still above the national line: the Kadjar ${at(ML('Kadjar').m)}.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "Do Renaults fail the MOT more than other cars?", a: `Yes, and age does not explain it. In ${TY}, ${vs(x.k)}: the worst record at equal age of the makes with 300,000 tests or more, behind Citroen and Vauxhall. All makes together failed ${pc(gb.rate)}.` },
      { q: "Which Renault has the best MOT record?", a: `The ${best.m.label} van, ${at(best.m)} in ${TY}, the only Renault model with 10,000 tests below the national line. Among the cars, the Captur did best, ${at(ML('Captur').m)}, ahead of the Laguna, the Twingo and the Kadjar. The Clio, the most tested: ${at(ML('Clio').m)}.` },
      { q: "How likely is a twelve-year-old Renault to fail its MOT?", a: `About one in two. Renaults first registered in ${TY - 12} failed ${pc(A(12))} of their tests in ${TY}, against ${pc(N(12))} for all cars of that age. The rate for a given Renault model and year, in the checker above, can be higher or lower than that average for the make.` },
    ];
  },
});

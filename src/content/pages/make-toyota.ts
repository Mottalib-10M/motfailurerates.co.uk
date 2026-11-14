import { makePage } from '../../lib/make-page';
import { kctx } from '../../lib/ctx';

const MK = "TOYOTA";

export default makePage({
  make: MK, order: 206, defaultModel: "YARIS",
  slug: 'toyota-mot-failure-rate',
  nav: "Toyota",
  card: "Toyota: every model ranked at equal age, and the make against all cars by year.",
  title: "Toyota MOT Failure Rate: Every Model Ranked at Equal Age",
  description: "Toyota MOT failure rate for every model with 10,000 tests, ranked against cars of the same age, and by year of first registration, from the DVSA test results.",
  h1: "Toyota MOT failure rate by model and year",
  intro: "The Toyota MOT failure rate for each model, from the Aygo to the Hilux, in the 2023 DVSA results, against cars of the same registration year.",
  related: ["home", "model-toyota-yaris", "model-toyota-aygo", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} first-attempt MOT tests of Toyotas in ${TY} failed, against ${pc(gb.rate)} for all makes. At equal age, ${vs(x.k)}: eighth best of the makes with 300,000 tests or more. The make's advantage grows with age: at five years, Toyotas failed ${pc(A(5))} against ${pc(N(5))} for all makes, nearly level, but at twelve ${pc(A(12))} against ${pc(N(12))}. The Yaris and the Aygo, Toyota's two most tested models, both sit below the national line, as do the Prius, Auris and RAV4. Only the Hilux pick-up (${at(ML('Hilux').m)}) and the Proace van (${at(worst.m)}) fail more often than average at their age. The Prius, the best known of its hybrids, has ${num(ML('Prius').m.n)} tests in the file: ${at(ML('Prius').m)}.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return `<p>Toyota's small iQ city car tops the make's table, ${at(best.m)}, on ${num(best.m.n)} tests. DVSA lists the RAV4 under two spellings, RAV4 and RAV-4, which appear as two rows in the checker.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "Are Toyotas less likely to fail the MOT?", a: `Yes, at equal age. In ${TY}, ${vs(x.k)}. The advantage is small on young cars and clear on cars over ten years old: twelve-year-old Toyotas failed ${pc(A(12))}, against ${pc(N(12))} for all makes.` },
      { q: "How does the Toyota Prius do at the MOT?", a: `Better than average for its age: on ${num(ML('Prius').m.n)} tests in ${TY}, the Prius failed ${at(ML('Prius').m)}. It has no page of its own here, but the checker above gives its rate for every year.` },
      { q: "Which Toyota fails the MOT most?", a: `The ${worst.m.label} van, at equal age: in ${TY} it failed ${at(worst.m)}, on ${num(worst.m.n)} tests, followed by the Hilux pick-up (${at(ML('Hilux').m)}). Every other Toyota model with 10,000 tests sits below the national line, the iQ city car furthest below (${at(best.m)}).` },
    ];
  },
});

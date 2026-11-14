import { makePage } from '../../lib/make-page';
import { kctx } from '../../lib/ctx';

const MK = "MERCEDES-BENZ";

export default makePage({
  make: MK, order: 204, defaultModel: "C",
  slug: 'mercedes-benz-mot-failure-rate',
  nav: "Mercedes-Benz",
  card: "Mercedes-Benz: every model ranked at equal age, and the make against all cars by year.",
  title: "Mercedes MOT Failure Rate: Every Model Ranked at Equal Age",
  description: "Mercedes-Benz MOT failure rate for each model with 10,000 tests, ranked at equal age, and by year of first registration, from the DVSA MOT test results.",
  h1: "Mercedes-Benz MOT failure rate by model and year",
  intro: "The Mercedes MOT failure rate for each model, from the A-Class to the Sprinter, in the 2023 DVSA results, against cars of the same age.",
  related: ["home", "model-mercedes-benz-c", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} first-attempt MOT tests of Mercedes-Benz cars and vans in ${TY} failed, against ${pc(gb.rate)} for all makes. At equal age, ${vs(x.k)}: seventh best of the makes with 300,000 tests or more. The make does better with age: five-year-old Mercedes failed ${pc(A(5))} against ${pc(N(5))} for all makes, close to the line, but twelve-year-old ones ${pc(A(12))} against ${pc(N(12))}. The table spans the widest range of any make here, from the ${best.m.label} roadster (${at(best.m)}) to the ${worst.m.label} van (${at(worst.m)}). The C-Class, A-Class and E-Class carry about half of the tests, and all three sit below the national line. Among the SUVs, the GLE failed ${at(ML('GLE').m)} and the GLA ${at(ML('GLA').m)}; the Sprinter van, on ${num(ML('Sprinter').m.n)} tests, ${at(ML('Sprinter').m)}.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return `<p>The large saloons and roadsters sit at the top of the Mercedes table, the SL, S-Class and SLK among them. The vans pull the other way: the Vito and the Citan failed far more often than the cars carrying the same badge.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "Is Mercedes-Benz a reliable make at the MOT?", a: `At equal age, more than most. In ${TY}, Mercedes cars and vans: ${vs(x.k)}. The margin is small on young cars and grows on cars over ten years old: twelve-year-old Mercedes failed ${pc(A(12))}, against ${pc(N(12))} for all makes.` },
      { q: "Do Mercedes vans fail the MOT more than the cars?", a: `Yes. In ${TY}, the Citan failed ${at(ML('Citan').m)} and the Vito ${at(ML('Vito').m)}. Among the cars with 10,000 tests, the SL failed ${at(ML('SL').m)} and the CLA ${at(ML('CLA').m)}. Vans up to 3,000 kg take the same test as cars (class 4, the MOT class for cars and light vans).` },
      { q: "Which Mercedes model has the most MOT tests?", a: `The C-Class, with ${num(ML('C-Class').m.n)} first-attempt tests in ${TY}, followed by the A-Class and the E-Class. All three did better than average at equal age: the C-Class ${at(ML('C-Class').m)}, the A-Class ${at(ML('A-Class').m)} and the E-Class ${at(ML('E-Class').m)}. DVSA also records some A-Class cars simply as "A", which appear separately in the checker.` },
    ];
  },
});

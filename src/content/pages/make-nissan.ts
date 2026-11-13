import { makePage } from '../../lib/make-page';
import { kctx } from '../../lib/ctx';

const MK = "NISSAN";

export default makePage({
  make: MK, order: 207, defaultModel: "QASHQAI",
  slug: 'nissan-mot-failure-rate',
  nav: "Nissan",
  card: "Nissan: every model ranked at equal age, and the make against all cars by year.",
  title: "Nissan MOT Failure Rate: Every Model Ranked at Equal Age",
  description: "Nissan MOT failure rate for every model with 10,000 tests, ranked against cars of the same age, and by year of first registration, from the DVSA test results.",
  h1: "Nissan MOT failure rate by model and year",
  intro: "The Nissan MOT failure rate for every model with enough tests in 2023, Qashqai and Juke included, set against cars of the same age.",
  related: ["home", "model-nissan-qashqai", "model-nissan-juke", "model-nissan-micra", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} first MOT tests of Nissans in ${TY} failed, against ${pc(gb.rate)} for all makes. At equal age, Nissans failed about ${pc(x.adj! - 1, 0)} more often than average, which puts the make ${r.rank} of the ${r.of} with 300,000 tests or more. The gap is small on young cars, ${pc(A(5))} at five years against ${pc(N(5))}, and wider on older ones, ${pc(A(12))} at twelve against ${pc(N(12))}. Two crossovers dominate the figures: the Qashqai and the Juke carry about half of Nissan's tests, and both fail more often than the average car of their age. The small Pixo, the Elgrand and the electric Leaf are the only Nissans with 10,000 tests at or below the national line. The Note, with ${num(ML('Note').m.n)} tests, sits almost on the line at ${ratio(ML('Note').adj)}, and the X-Trail at ${ratio(ML('X-Trail').adj)}.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `<p>The NV200 and Primastar vans and the Navara pick-up sit at the bottom of Nissan's table, at ${ratio(ML('NV200').adj)}, ${ratio(ML('Primastar').adj)} and ${ratio(ML('Navara').adj)}. The Micra and the Note, its older small cars, are close to the national line.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return [
      { q: "Are Nissans more likely to fail the MOT?", a: `Somewhat. In ${TY}, Nissans failed about ${pc(x.adj! - 1, 0)} more often than vehicles of the same registration years, and ${pc(x.rate)} of their first tests failed overall. Most of the gap comes from the Qashqai and the Juke, the two Nissans tested most, and from older cars rather than recent ones.` },
      { q: "How does the Nissan Leaf do at the MOT?", a: `Right on the national line once age is accounted for: the Leaf's ratio was ${ratio(ML('Leaf').adj)} in ${TY}, on ${num(ML('Leaf').m.n)} tests, and ${pc(ML('Leaf').rate)} of its first tests failed. Electric cars have no exhaust emissions to test, but tyres, brakes, suspension and lamps are checked as on any other car.` },
      { q: "Which Nissan van fails the MOT most?", a: `The NV200, with a ratio of ${ratio(ML('NV200').adj)} at equal age in ${TY}: it failed more than half again as often as the average vehicle of the same years. The Primastar follows at ${ratio(ML('Primastar').adj)}, then the Navara pick-up at ${ratio(ML('Navara').adj)}. Vans up to 3,000 kg are tested in class 4 with cars.` },
    ];
  },
});

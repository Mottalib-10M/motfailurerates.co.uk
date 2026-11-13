import { makePage } from '../../lib/make-page';
import { kctx } from '../../lib/ctx';

const MK = "BMW";

export default makePage({
  make: MK, order: 203, defaultModel: "3 SERIES",
  slug: 'bmw-mot-failure-rate',
  nav: "BMW",
  card: "BMW: every model ranked at equal age, and the make against all cars by year.",
  title: "BMW MOT Failure Rate: Every Model Ranked at Equal Age",
  description: "BMW MOT failure rate for every model with 10,000 tests, ranked against cars of the same age, and by year of first registration, from the DVSA test results.",
  h1: "BMW MOT failure rate by model and year",
  intro: "The BMW MOT failure rate for each series and engine variant tested in 2023, as DVSA records them, against all cars of the same age.",
  related: ["home", "model-bmw-3-series", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `BMW has the best record at equal age of every make with 300,000 tests or more. ${pc(x.rate)} of the ${num(x.tests)} first MOT tests of BMWs in ${TY} failed, against ${pc(gb.rate)} for all makes, and compared with cars of the same registration years BMWs failed about ${pc(1 - x.adj!, 0)} less often. The advantage is clear at both ages often quoted: five-year-old BMWs failed ${pc(A(5))} against ${pc(N(5))} for all makes, and twelve-year-old ones ${pc(A(12))} against ${pc(N(12))}. Every BMW model with 10,000 tests sits below the national line, from the ${best.m.label} at ${ratio(best.adj)} to the ${worst.m.label} at ${ratio(worst.adj)}. The 3 Series, with ${num(ML('3 Series').m.n)} tests, carries the largest share of the make's figure. The i3, BMW's electric car, sits at ${ratio(ML('I3').adj)} on ${num(ML('I3').m.n)} tests, and the 1 Series, the second most tested family, at ${ratio(ML('1 Series').adj)}.`;
  },
  note: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return `<p>DVSA records many BMW models by engine variant (116, 118, 320, 520) rather than by series, so the table lists them as they appear in the file. The 3 Series is the exception, recorded under its series name for most cars, which is why it has a page of its own here.</p>`;
  },
  faqs: (h) => {
    const { x, r, best, worst, ML, A, N } = kctx(h, MK);
    const { pc, num, ratio, TY, gb } = h;
    return [
      { q: "Are BMWs good at passing the MOT?", a: `Better than any other large make. In ${TY}, BMWs failed about ${pc(1 - x.adj!, 0)} less often than average cars of the same registration years, ranking first of the ${r.of} makes with 300,000 tests or more, just ahead of Jaguar and Audi. Their raw failure rate was ${pc(x.rate)}, against ${pc(gb.rate)} for all makes.` },
      { q: "Which BMW model fails the MOT least?", a: `Among BMW models with at least 10,000 tests, the ${best.m.label} had the lowest ratio at equal age in ${TY}, ${ratio(best.adj)}, followed by the 730 and the X6, all on far fewer tests than the mainstream models. The 3 Series and 1 Series, tested far more, sit at ${ratio(ML('3 Series').adj)} and ${ratio(ML('1 Series').adj)}.` },
      { q: "Why does DVSA list BMWs as 118 or 320?", a: `Because the model field in the DVSA file often carries the engine variant rather than the series, and the file does not say why. The checker keeps those names as they appear, so a 3 Series may sit under 320, under 330 or under 3 Series. Try each name for a car that does not show up first time.` },
    ];
  },
});

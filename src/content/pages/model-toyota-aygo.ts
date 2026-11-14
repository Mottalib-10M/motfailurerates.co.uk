import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "TOYOTA", MD = "AYGO";

export default modelPage({
  make: MK, model: MD, order: 319,
  slug: 'toyota-aygo-mot-failure-rate',
  nav: "Toyota Aygo",
  card: "Toyota Aygo: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Toyota Aygo MOT Failure Rate: Every Year and Common Faults",
  description: "Toyota Aygo MOT failure rate for every year from 2005 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Toyota Aygo MOT failure rate by year",
  intro: "The Toyota Aygo MOT failure rate for each year of first registration, from the 2023 DVSA test results, beside every car of that year.",
  related: ["home", "make-toyota", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Toyota Aygos tested in ${TY} failed at the first attempt, below the ${pc(gb.rate)} for all cars. The Aygo is a low-mileage petrol city car, ${num(x.miles)} miles on average at the test, and it does better than the national line at almost every age: 2016 cars failed ${pc(Y(2016).r)} against ${pc(Y(2016).nat)}, and 2014 cars ${pc(Y(2014).r)} against ${pc(Y(2014).nat)}. Only the oldest Aygos, from 2008 and earlier, fail slightly more than average. All Aygo years together, ${vs(x.m)}. Brakes are its second defect group, and service brakes that bind appear among its four most recorded items, a fault not found in the top list of the other small cars here. Almost every Aygo in the file is a petrol car, and the 2015 cars are the most numerous year, with ${num(Y(2015).n)} tests.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `<h2>Brakes and corrosion on the Aygo</h2>
<p>Brakes appear on ${pc(cat('Brakes'), 0)} of failed Aygo tests, ahead of tyres and suspension, which reverses the usual order on small cars. Corrosion in a prescribed structural area around a component mounting is also among its five most recorded items, ${num(T(4))} times, a fault that only shows from underneath.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "What share of Toyota Aygos fail the MOT?", a: `${pc(x.rate)} in ${TY}, ${num(x.fails)} of ${num(x.tests)} first-attempt tests. That is lower than the ${pc(gb.rate)} for all cars, and the Aygo also does better at equal age: ${pc(x.same)} of all cars of the same ages failed. Aygos registered in 2008 or earlier are the exception, a little above the line for their age.` },
      { q: "Which brake faults fail a Toyota Aygo?", a: `Service brakes that bind, recorded ${num(T(3))} times in ${TY}, are the Aygo's most frequent brake failure. Brakes appear on ${pc(cat('Brakes'), 0)} of failed Aygo tests, against ${pc(h.M('HYUNDAI', 'I10').cats.find((c) => c.name === 'Brakes')!.s, 0)} for the Hyundai i10, another petrol city car. A binding brake can often be felt as a drag or a smell after a drive.` },
      { q: "Are 2015 Toyota Aygos good at the MOT?", a: `Aygos first registered in 2015 failed ${pc(Y(2015).r)} of their MOT tests in ${TY}, well below the ${pc(Y(2015).nat)} for all cars of that year, on ${num(Y(2015).n)} tests, the Aygo year with the most tests in the file. ${pc(1 - Y(2015).r)} passed without a failure.` },
    ];
  },
});

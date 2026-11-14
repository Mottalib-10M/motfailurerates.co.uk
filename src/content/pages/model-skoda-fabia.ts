import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "SKODA", MD = "FABIA";

export default modelPage({
  make: MK, model: MD, order: 322,
  slug: 'skoda-fabia-mot-failure-rate',
  nav: "Skoda Fabia",
  card: "Skoda Fabia: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Skoda Fabia MOT Failure Rate: Every Year and Common Faults",
  description: "Skoda Fabia MOT failure rate for every year from 2000 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Skoda Fabia MOT failure rate by year",
  intro: "The Skoda Fabia MOT failure rate by year of first registration, from the 2023 DVSA results, compared with all cars of the same age.",
  related: ["home", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Skoda Fabias that took an MOT test in ${TY} failed it at the first attempt, against ${pc(gb.rate)} for all cars. Age-adjusted, the Fabia is a little better than average, with a ratio of ${ratio(x.adj)} and rank ${num(x.rank)} of ${x.of}, but the picture changes with the generation. Fabias from 2010 to 2015 failed well below the national line, ${pc(Y(2013).r)} for 2013 cars against ${pc(Y(2013).nat)}, and ${pc(Y(2011).r)} for 2011 cars against ${pc(Y(2011).nat)}. Fabias from 2009 and earlier fail above it, by one to six points. The youngest, from 2016 to 2020, sit on the line. Worn suspension pins and bushes are the Fabia's single most recorded failure, ahead of position lamps and wipers. The 2016 Fabias, ${num(Y(2016).n)} tests, are the most numerous year in the file and failed ${pc(Y(2016).r)}.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return `<h2>Diesel Fabias</h2>
<p>About one Fabia test in five was on a diesel car, and diesel Fabias failed ${pc(F('DI'))} of their tests against ${pc(F('PE'))} for petrol ones, a gap of ${pts(F('DI') - F('PE'))}. The raw figures mix ages, and diesel Fabias may be older on average. Brakes appear on ${pc(cat('Brakes'), 0)} of failed Fabia tests, a little more than on the Volkswagen Polo.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, ratio, pts, TY, gb } = h;
    return [
      { q: "Is the Skoda Fabia good at passing the MOT?", a: `Slightly better than average at equal age: compared with cars of the same registration years, Fabias failed about ${pc(1 - x.adj!, 0)} less often in ${TY}. The best years are 2010 to 2015, around five points below the national rate, while the Fabias from 2009 and before fail a little more than average.` },
      { q: "What does a Skoda Fabia fail its MOT on?", a: `Lamps on ${pc(x.cats[0].s, 0)} of failed tests, suspension on ${pc(x.cats[1].s, 0)} and brakes on ${pc(cat('Brakes'), 0)}. The single items recorded most were worn suspension pins and bushes (${num(T(0))}), position lamps not working and wipers that no longer clear the screen. Split driveshaft boots also make its top five.` },
      { q: "Do old Skoda Fabias still pass the MOT?", a: `About half do. Fabias registered from 2003 to 2006 failed between ${pc(Y(2006).r, 0)} and ${pc(Y(2003).r, 0)} of their tests in ${TY}, a few points above all cars of the same years. Each of those years still counts between ${num(Y(2003).n)} and ${num(Y(2006).n)} tests in the file, so the rates rest on solid counts.` },
    ];
  },
});

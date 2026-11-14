import { modelPage } from '../../lib/model-page';
import { mctx } from '../../lib/ctx';

const MK = "VAUXHALL", MD = "ASTRA";

export default modelPage({
  make: MK, model: MD, order: 304,
  slug: 'vauxhall-astra-mot-failure-rate',
  nav: "Vauxhall Astra",
  card: "Vauxhall Astra: failure rate for each year, against all cars, and the faults behind fails.",
  title: "Vauxhall Astra MOT Failure Rate: Each Year and Common Faults",
  description: "Vauxhall Astra MOT failure rate for every year from 1995 to 2020, from DVSA test results, against all cars of the same age, with the faults that fail it most.",
  h1: "Vauxhall Astra MOT failure rate by year",
  intro: "The Vauxhall Astra MOT failure rate for every year of first registration in the 2023 DVSA results, with all cars of the same age alongside.",
  related: ["home", "make-vauxhall", "most-common-mot-failures", "mot-failure-rate-by-age", "cars-least-likely-to-fail-mot"],
  resume: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `${pc(x.rate)} of the ${num(x.tests)} Vauxhall Astras tested in ${TY} failed at the first attempt. The figure is well above the ${pc(gb.rate)} for all cars, but the Astra's age explains a good part of it: all Astra years together, ${vs(x.m)}. The pattern by year is mixed. Astras from 2016 to 2018 sit close to the national line, 2016 cars failing ${pc(Y(2016).r)} against ${pc(Y(2016).nat)}, while 2014 and 2015 cars sit above it, ${pc(Y(2015).r)} for 2015 cars against ${pc(Y(2015).nat)}, and the gap widens again for the 2005 to 2009 cars: Astras registered in 2007 failed ${pc(Y(2007).r)}, against ${pc(Y(2007).nat)} for all cars of that year. A fractured coil spring tops the list of Astra failure items by a wide margin, ${num(T(0))} records.`;
  },
  note: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return `<h2>The Astra's brakes and springs</h2>
<p>Brakes take a larger share of Astra failures than of Focus failures: ${pc(cat('Brakes'))} of failed Astra tests had a brake defect, against ${pc(h.M('FORD', 'FOCUS').cats.find((c) => c.name === 'Brakes')!.s)}. Brake pads below 1.5 mm, a defect DVSA classes as dangerous, were recorded ${num(T(2))} times. About three Astras in ten in the file are diesels, and the cars averaged ${num(x.miles)} miles at the test.</p>`;
  },
  faqs: (h) => {
    const { x, Y, F, FN, cat, T } = mctx(h, MK, MD);
    const { pc, num, vs, at, TY, gb } = h;
    return [
      { q: "What is the Vauxhall Astra MOT failure rate?", a: `${pc(x.rate)} in the ${TY} DVSA results: ${num(x.fails)} of ${num(x.tests)} Astra first-attempt tests ended in a failure. Across all cars the rate was ${pc(gb.rate)}. Much of the difference is age, since many Astras on the road are over ten years old; at equal age the Astra still failed slightly more often than average.` },
      { q: "Are older Astras more likely to fail the MOT?", a: `Yes. Astras registered in 2018 failed ${pc(Y(2018).r)} of their tests, those from 2012 ${pc(Y(2012).r)} and those from 2006 ${pc(Y(2006).r)}. All cars follow the same climb with age; the Astra stays near the national line up to the 2010 cars and a little above it for older ones.` },
      { q: "What do Astras fail on most?", a: `Lamps and suspension, in nearly equal measure: ${pc(x.cats[0].s, 0)} and ${pc(x.cats[1].s, 0)} of failed Astra tests. The single items recorded most were fractured coil springs, tyre tread below 1.6 mm and brake pads under 1.5 mm, ahead of position lamps and incorrect headlamp aim.` },
    ];
  },
});

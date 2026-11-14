import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'mot-exemption-40-year-old-cars',
  group: 'rules',
  order: 24,
  tool: { kind: 'mini:historic', props: { y: 1987, m: 6, changed: 0 }, cta: 'what-is-checked-in-an-mot' },
  related: ['mot-failure-rate-by-age', 'mot-due-date', 'what-is-checked-in-an-mot', 'home'],
  sources: ['gov_historic', 'gov_when', 'dvsa_anon'],
  slug: 'mot-exemption-40-year-old-cars',
  nav: 'MOT exemption at 40 years',
  card: 'Cars over 40 years old need no MOT unless substantially changed: when yours qualifies.',
  title: 'MOT Exemption for 40-Year-Old Cars: When It Starts',
  description: 'MOT exemption for cars built or first registered over 40 years ago: when your car qualifies, what counts as a substantial change, and how old cars still fare.',
  h1: 'MOT exemption for cars over 40 years old',
  intro: 'The MOT exemption for 40-year-old cars starts on a date of its own: enter the year and month your car was built or first registered to see when it no longer needs a yearly MOT.',
  resume: (h) => `A car built or first registered more than ${h.num(h.P.rules.historicYears)} years ago no longer needs an MOT in Great Britain, as long as no substantial change has been made to it, such as replacing the chassis, body, axles or engine in a way that changes how it works. The exemption is automatic: you do not have to apply to stop the MOT, unlike the historic vehicle tax class, which needs an application. The car must still be kept roadworthy, and using a vehicle in a dangerous condition can bring a fine of up to ${h.m0(h.P.rules.fineDangerous)} and ${h.num(h.P.rules.pointsDangerous)} penalty points. Many owners keep testing voluntarily: in the ${h.TY} DVSA results, cars 41 years old still failed ${h.pc(h.E.nationalAt(41))} of the tests they took.`,
  faqs: (h) => [
    { q: 'Do cars over 40 years old need an MOT?', a: `No, if they were built or first registered more than ${h.num(h.P.rules.historicYears)} years ago and have not been substantially changed. You do not need to apply, but the car must stay roadworthy. Owners can still book a voluntary test: the ${h.TY} file holds tests of cars over 40 years old.` },
    { q: 'What counts as a substantial change for the MOT exemption?', a: 'GOV.UK gives examples: replacing the chassis, body, axles or engine to change the way the vehicle works. If you are unsure, GOV.UK points to its full guidance and to historic vehicle experts. A substantially changed car keeps needing a yearly MOT whatever its age.' },
    { q: 'Is the MOT exemption the same as the historic vehicle tax class?', a: 'No. The tax exemption is based on the build date (built before 1 January 1986 for 2026) and needs an application. The MOT exemption follows the 40-year rule and needs none. The two dates are close but not identical, so a car can qualify for one some months before the other.' },
  ],
  body: (h) => {
    const rows = [30, 35, 38, 40, 41, 42, 44].map((a) => { const p = h.E.nationalPair(a); return p ? [String(h.E.yearOf(a)), String(a), p[0], h.pc(p[1] / p[0])] : null; }).filter(Boolean) as Array<Array<string | number>>;
    return `
<h2>When the MOT exemption for 40-year-old cars starts</h2>
<p>The rule on GOV.UK is a rolling one: a vehicle qualifies once it was built or first registered more than ${h.num(h.P.rules.historicYears)} years ago. A car first registered in June 1987 therefore reaches the line in June 2027. The calculator works to the month, which is enough to plan; if you need the exact day, use the date of first registration on the V5C.</p>
<h2>What can take the exemption away</h2>
<p>A "substantial change" to the vehicle means it must keep having an MOT. GOV.UK's examples are replacing the chassis, body, axles or engine in a way that changes how the vehicle works. Restoring a car with original or equivalent parts is a different matter. When in doubt, GOV.UK refers owners to its full guidance on MOT exemptions for historic vehicles and to historic vehicle experts.</p>
<h2>The tax rule is different</h2>
<p>Vehicle tax works on another date. A vehicle built before 1 January 1986 can stop paying vehicle tax from 1 April 2026, but only after an application to put it in the historic tax class. The MOT exemption needs no application. A car can therefore be exempt from one and not the other for a while.</p>
<h2>Old cars still tested</h2>
<p>Owners keep testing old cars voluntarily, as an independent check. The DVSA file shows how those cars fare: their failure rate falls with age after twenty years, because the cars still tested are the ones kept in good order.</p>
${h.table(['First registered', 'Age in ' + h.TY, 'Tests', 'Failed at first attempt'], rows, `All class 4 vehicles of those years tested in ${h.TY}, voluntary tests included. DVSA anonymised MOT results.`, ['l', 'r', 'r', 'r'])}
<p>A roadworthy car remains the owner's duty with or without an MOT. The ${h.a('what-is-checked-in-an-mot', 'checklist of the test')} is a useful list for a self-check, and the ${h.a('mot-failure-rate-by-age', 'age page')} shows the full curve from three years up.</p>
<p>Sources: ${h.src('gov_historic', 'GOV.UK, historic (classic) vehicles: MOT and vehicle tax')} and ${h.src('dvsa_anon', 'DVSA anonymised MOT results')}.</p>
`;
  },
});

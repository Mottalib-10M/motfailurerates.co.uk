import { definePage } from '../../lib/guide-types';
import { CAT_CHECK, GROUP_ID } from '../../lib/checks';

export default definePage({
  id: 'what-is-checked-in-an-mot',
  group: 'rules',
  order: 22,
  tool: { kind: 'mini:check', props: { g: 0 }, cta: 'most-common-mot-failures' },
  related: ['most-common-mot-failures', 'mot-cost', 'failed-mot-what-next', 'home'],
  sources: ['gov_manual', 'dvsa_stats', 'gov_when'],
  slug: 'what-is-checked-in-an-mot',
  nav: 'What is checked in an MOT?',
  card: 'The parts of the car a tester inspects, how often each fails, and what to check yourself.',
  title: 'MOT Checklist: What Is Checked in an MOT, Part by Part',
  description: 'MOT checklist: every part of the car the tester inspects under the DVSA manual, how often each one fails cars, and the checks you can make before the test.',
  h1: 'What is checked in an MOT',
  intro: 'Choose a part of the car: how often it fails cars at the MOT, and what you can look at yourself before the test.',
  resume: (h) => `An MOT checks that a car meets the road safety and environmental standards set out in the DVSA inspection manual, part by part: identification and number plates, brakes, steering, visibility, lamps and electrical equipment, axles, wheels, tyres and suspension, body and structure, seat belts and other equipment, and noise, emissions and leaks. The tester does not take the engine, clutch or gearbox apart and does not judge how well the car is serviced. In ${h.P.national.yearLabel}, lamps failed ${h.pc(h.P.categories.rows[0][1] as number)} of tests and suspension ${h.pc(h.P.categories.rows[1][1] as number)}, according to DVSA. Each defect is graded minor, major or dangerous; a major or dangerous defect fails the car, while minor defects and advisories are recorded on a pass. Choose a part of the car above to see how often it fails cars and what you can look at yourself before booking.`,
  faqs: (h) => [
    { q: 'Does the MOT check the engine and gearbox?', a: 'No. The tester checks emissions, leaks, the engine warning lamp and noise, but does not inspect the condition of the engine, clutch or gearbox. An MOT is not a service. Faults in those parts show up only if they cause a leak, a warning lamp or emissions above the limit.' },
    { q: 'What is the difference between a minor, major and dangerous defect?', a: 'A minor defect is recorded but the car passes. A major defect fails the car until it is repaired. A dangerous defect also fails it, and the car must not be driven until it is fixed. Minor defects and advisories are printed on the result so they can be fixed before they get worse.' },
    { q: 'What can I check myself before the MOT?', a: 'Lamps, tyre tread and condition, wipers and screen wash, the horn, seat belts, number plates and warning lamps on the dashboard. These cover several of the most frequent failures and need no tools. A torch and a second person to watch the brake lights make it quicker.' },
  ],
  body: (h) => {
    const rows = h.P.categories.rows.map((r) => [String(r[0]), h.pc(r[1] as number), (CAT_CHECK[GROUP_ID[String(r[0])]] ?? '').split(';')[0].split(':')[0]]);
    return `
<h2>What is checked in an MOT, part by part</h2>
<p>The inspection manual for cars and passenger vehicles is divided into the sections below. “Tests failed on it” is the share of all tests that failed on that part in ${h.P.national.yearLabel}; “A first check at home”, something you can look at yourself before the test.</p>
${h.table(['Part of the car', 'Tests failed on it', 'A first check at home'], rows, `Share of tests: DVSA table DVSA/MOT/03, classes 3 and 4, ${h.P.national.yearLabel}.`, ['l', 'r', 'l'])}
<h2>How a defect is graded</h2>
<p>Since 2018 every defect found falls in one of three categories, shown on the test result. A minor defect is recorded and the car passes. A major defect fails it. A dangerous defect fails it too and the car should not be driven until repaired, even if the previous certificate has not run out. Advisories are notes about parts that will need attention soon; they do not fail a car but are worth reading, because many become majors at the next test.</p>
<h2>What the MOT does not check</h2>
<p>The test looks at safety and emissions on the day. It does not check the condition of the engine, clutch or gearbox, the service history, or anything hidden behind panels that must be removed with tools. A pass is not a guarantee that the car is in good mechanical condition for the coming year.</p>
<h2>The ten-minute check before the test</h2>
<p>Several of the defects recorded most often can be seen without lifting the car: a bulb out, a tyre below 1.6 mm, a wiper smearing the screen, an empty washer bottle, a dashboard warning lamp that stays on. Checking them before the test is free; a fail costs a retest and, sometimes, a second visit. The ${h.a('most-common-mot-failures', 'most common failures page')} ranks the twenty defects recorded most, and the ${h.a('home', 'checker')} shows which parts fail your model most often.</p>
<p>Sources: ${h.src('gov_manual', 'DVSA MOT inspection manual')} and ${h.src('dvsa_stats', 'DVSA MOT testing data')}.</p>
`;
  },
});

import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'failed-mot-what-next',
  group: 'rules',
  order: 23,
  tool: { kind: 'mini:retest', props: { valid: 1, danger: 0, where: 0 }, cta: 'most-common-mot-failures' },
  related: ['mot-cost', 'most-common-mot-failures', 'mot-due-date', 'home'],
  sources: ['gov_retests', 'gov_when', 'gov_appeal', 'dvsa_stats'],
  slug: 'failed-mot-what-next',
  nav: 'Failed MOT: what next?',
  card: 'Whether you can drive the car away, and when the retest is free, partial or full price.',
  title: 'Failed MOT: Can I Drive It, and Is the Retest Free?',
  description: 'Failed MOT: when you can still drive the car, what a dangerous defect changes, and when the retest is free, partly paid or full price under GOV.UK rules.',
  h1: 'Failed MOT: what happens next',
  intro: 'Failed MOT? Answer three questions: whether you can drive the car away, and which kind of retest it will need.',
  resume: (h) => `A failed MOT does not always stop you from driving. If the previous certificate is still valid and no defect was marked dangerous, the car can be driven away, provided it stays roadworthy. If the old MOT has run out, it may only be driven to a repair or to a pre-arranged test. A dangerous defect changes everything: the car must not be driven until it is fixed, and using a car in a dangerous condition can bring a fine of up to ${h.m0(h.P.rules.fineDangerous)} and ${h.num(h.P.rules.pointsDangerous)} penalty points. The retest is free if the car is repaired at the test centre and retested within ${h.num(h.P.rules.partialRetestDays)} working days, or if it returns before the end of the next working day for listed items. ${h.pc(h.P.national.initialFailRate)} of tests failed at the first attempt in ${h.P.national.yearLabel}.`,
  faqs: (h) => [
    { q: 'Can I drive my car after failing the MOT?', a: `Yes if the old MOT is still valid and no defect is dangerous, as long as the car is roadworthy. If the MOT has expired, only to a repair or to a booked test. Never with a dangerous defect. Driving with a dangerous defect can cost a fine of up to ${h.m0(h.P.rules.fineDangerous)} and ${h.P.rules.pointsDangerous} penalty points.` },
    { q: 'How long do I have to get a free MOT retest?', a: `${h.num(h.P.rules.partialRetestDays)} working days if the car stays at the test centre for repair, or until the end of the next working day if you take it away and bring it back for an item on the GOV.UK list. Outside those cases, the test centre can charge a partial retest fee, and after that period the car needs a full MOT.` },
    { q: 'Can I appeal an MOT failure?', a: 'Yes. Talk to the test centre first, then send the DVSA complaint form within 14 working days of the test, with no repairs made meanwhile. If DVSA rechecks the car you pay the fee again, refunded if you win. Repairs made before DVSA has seen the car would remove the very defects in dispute.' },
  ],
  body: (h) => `
<h2>Driving after a failed MOT</h2>
<p>Three facts decide whether the car can leave the test centre on its own wheels: whether the previous MOT is still valid, whether any defect was marked dangerous, and whether the car is otherwise roadworthy. Testing a few weeks before expiry is what makes the first one work in your favour: a car that fails on ${h.P.rules.earlyExampleEarliest} with only major defects can be driven until ${h.P.rules.earlyExampleExpiry}, time to have the work done where you choose.</p>
<h2>The four kinds of retest</h2>
<ul>
<li><strong>Repaired at the test centre, retested within ${h.num(h.P.rules.partialRetestDays)} working days</strong>: partial retest, no fee.</li>
<li><strong>Taken away, back before the end of the next working day</strong>, for items on the GOV.UK list, among them lamps, tyres and wheels, wipers and washers, mirrors, seats, seat belts (not anchorages), horn, number plates, doors, battery, electrical wiring, fuel cap and towbar: partial retest, no fee.</li>
<li><strong>Taken away, back within ${h.num(h.P.rules.partialRetestDays)} working days</strong>: partial retest, a fee can be charged.</li>
<li><strong>Any other case</strong>: a full test, at the full fee of up to ${h.m2(h.P.fees.car)} for a car.</li>
</ul>
<p>Brake performance, suspension, steering and corrosion are not on the next-working-day list (only the anti-slip pedal rubber is). For those, leaving the car at the test centre is the way to a free retest; taking it to another garage means a partial retest that can be charged, within ten working days.</p>
<h2>What the defect list tells you</h2>
<p>The failure document lists each defect with its category. Major defects must be repaired before a retest; minor ones and advisories need not be, but advisories often become majors a year later. Some defects come up more than others: tyre tread, lamps, springs, wipers and brake pads lead the list on the ${h.a('most-common-mot-failures', 'most common failures page')}.</p>
<h2>If you disagree with the result</h2>
<p>Discuss it with the test centre before any repair. You can then appeal to DVSA with its complaint form within 14 working days of the test, and should have no repairs made until the appeal is over. DVSA contacts you within 5 days; if it decides to recheck the car, you pay the full test fee again, refunded if the appeal succeeds. ${h.src('gov_appeal', 'GOV.UK sets out the steps')}.</p>
<p>Before the next test, the ${h.a('home', 'checker')} shows how often cars of your make, model and year fail and on what, and the ${h.a('mot-cost', 'cost page')} adds up the fees.</p>
<p>Sources: ${h.src('gov_retests', 'GOV.UK, retest after a repair')}, ${h.src('gov_when', 'GOV.UK, getting an MOT')} and ${h.src('gov_appeal', 'GOV.UK, test result appeals')}.</p>
`,
});

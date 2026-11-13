import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'mot-due-date',
  group: 'rules',
  order: 21,
  tool: { kind: 'mini:due', props: { mode: 1, d: 15, m: 5, y: 2027 }, cta: 'mot-cost' },
  related: ['mot-cost', 'failed-mot-what-next', 'mot-exemption-40-year-old-cars', 'home'],
  sources: ['gov_when', 'gov_history', 'gov_reminder', 'gov_fees'],
  slug: 'mot-due-date',
  nav: 'When is my MOT due?',
  card: 'First MOT at three years, the earliest date that keeps your renewal date, and the fine.',
  title: 'MOT Due Date Calculator: First MOT and Earliest Test Date',
  description: 'MOT due date calculator: when the first MOT is due after registration, the earliest test date that keeps your renewal date, and the fine for driving without.',
  h1: 'MOT due date calculator',
  intro: 'Enter the date your car was first registered, or the expiry date of its current MOT: the due date and the earliest test that keeps it.',
  resume: (h) => `A car needs its first MOT by the ${h.P.rules.firstTestYears}rd anniversary of its registration, then every year by the anniversary of its last MOT. You can be tested up to ${h.P.rules.earlyWindow} before the current MOT runs out and keep the same renewal date: if it runs out on ${h.P.rules.earlyExampleExpiry}, the earliest test that keeps that date is on ${h.P.rules.earlyExampleEarliest}. Tested earlier, the new certificate runs a year, minus a day, from the pass. Driving without a valid MOT can bring a fine of up to ${h.m0(h.P.rules.fineNoMot)}, except on the way to a booked test or to a repair. Taxis, ambulances and some passenger vehicles need their first test at one year. The expiry date of any car is on GOV.UK's MOT history service.`,
  faqs: (h) => [
    { q: 'When is the first MOT due on a new car?', a: `By the third anniversary of its first registration. A car registered on 20 March ${h.TY + 3} needs its first MOT by 20 March ${h.TY + 6}, and can be tested from 21 February ${h.TY + 6} without losing that date. The date of first registration is printed on the V5C logbook.` },
    { q: 'How early can I get my MOT done?', a: `Up to ${h.P.rules.earlyWindow} before the current MOT runs out, keeping the same renewal date. You can go earlier, but the next expiry then moves to a year, minus a day, after the pass. The checker above gives both dates for your car.` },
    { q: 'Can I drive my car if the MOT has run out?', a: `Only to a pre-arranged MOT test or to a place of repair. Otherwise you can be fined up to ${h.m0(h.P.rules.fineNoMot)}, and you cannot renew the vehicle tax without a valid MOT. GOV.UK offers a free reminder by text or email a month before the MOT is due.` },
  ],
  body: (h) => `
<h2>How the MOT due date is worked out</h2>
<p>GOV.UK sets two rules. The first MOT is due by the third anniversary of the car's registration; after that, each MOT is due by the anniversary of the last one. The calculator applies both: give it the registration date and it adds three years, give it the expiry date of the current certificate and it uses that.</p>
<p>The earliest date is the useful one. A test taken up to ${h.P.rules.earlyWindow} before expiry keeps the anniversary, so passing on ${h.P.rules.earlyExampleEarliest} on a certificate that runs out on ${h.P.rules.earlyExampleExpiry} still gives a new certificate to ${h.P.rules.earlyExampleExpiry} of the next year. That window leaves time to fix a fail and be retested before the old MOT runs out, and as long as it is valid, a car without dangerous defects can still be driven.</p>
<h2>Testing earlier than a month</h2>
<p>Nothing stops you from having an MOT earlier, for example before a long trip or a sale. The new certificate then runs for a year, minus a day, from the date of the pass, and the renewal date moves for good. GOV.UK's example: an MOT that runs out on 15 May, tested and passed on 14 April, runs out next on 13 April.</p>
<h2>Vehicles with a different first date</h2>
<p>Some class 4 vehicles need their first MOT at one year, not three: taxis and private hire vehicles used for hire, ambulances, and passenger vehicles with 9 to 12 seats. The GOV.UK fees table lists the age of the first test for each class. Cars built or first registered more than ${h.num(h.P.rules.historicYears)} years ago, without substantial changes, need no MOT at all (${h.a('mot-exemption-40-year-old-cars', 'see the exemption page')}).</p>
<h2>Where to find your expiry date</h2>
<p>The expiry date is printed on the last certificate and recorded online: GOV.UK's ${h.src('gov_history', 'MOT history service')} gives it from the number plate. GOV.UK also sends free ${h.src('gov_reminder', 'MOT reminders')} by text or email a month before. This site does not ask for a number plate and stores nothing: the calculator only works on the date you type.</p>
<h2>What it costs to miss it</h2>
<p>Driving without a valid MOT can lead to a fine of up to ${h.m0(h.P.rules.fineNoMot)}, and an expired MOT also blocks the renewal of vehicle tax. The only journeys allowed are to a pre-arranged test or to a garage for repairs. Before booking, the ${h.a('home', 'failure rate checker')} shows how often cars like yours fail, and the ${h.a('mot-cost', 'cost page')} what the test and a retest cost.</p>
<p>Sources: ${h.src('gov_when', 'GOV.UK, when to get an MOT')} and ${h.src('gov_fees', 'GOV.UK MOT fees table')}.</p>
`,
});

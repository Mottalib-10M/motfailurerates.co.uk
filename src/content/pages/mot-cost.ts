import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'mot-cost',
  group: 'rules',
  order: 20,
  tool: { kind: 'mini:cost', props: { price: 45, outcome: 0 }, cta: 'failed-mot-what-next' },
  related: ['failed-mot-what-next', 'mot-due-date', 'what-is-checked-in-an-mot', 'home'],
  sources: ['gov_fees', 'gov_retests', 'dvsa_stats'],
  slug: 'mot-cost',
  nav: 'How much is an MOT?',
  card: 'The £54.85 legal maximum, what garages charge below it, and the retest fees after a fail.',
  title: 'MOT Cost 2026: Maximum Fee, Retest Fees and What You Pay',
  description: 'MOT cost in 2026: the legal maximum fee for a car, why many garages charge less, and when a retest is free or paid again, with a calculator of your fees.',
  h1: 'MOT cost: the maximum fee and the retests',
  intro: 'Enter the price your garage asks and what happens at the test: the MOT fees you pay in total, repairs aside.',
  resume: (h) => `An MOT for a car costs at most ${h.m2(h.P.fees.car)} in England, Scotland and Wales: it is the maximum fee a test station may charge, set by the government, and no VAT is added to it. A motorcycle test costs at most ${h.m2(h.P.fees.motorcycle)}. Garages are free to charge less, and many do to bring cars into their workshop. After a fail, the retest is free when the car stays at the test centre for repair and is retested within ${h.num(h.P.rules.partialRetestDays)} working days, or when it comes back before the end of the next working day for items on the GOV.UK list such as lamps, tyres and wipers. In other cases a partial retest fee can be charged, and after ${h.num(h.P.rules.partialRetestDays)} working days you pay the full fee again.`,
  faqs: (h) => [
    { q: 'How much is an MOT in 2026?', a: `The maximum fee for a car is ${h.m2(h.P.fees.car)}, with no VAT. Many garages and test centres charge less; the price is set by each one, below the cap. The cap is ${h.m2(h.P.fees.motorcycle)} for a motorcycle and ${h.m2(h.P.fees.class7)} for a goods vehicle of 3,000 to 3,500 kg (class 7).` },
    { q: 'How much will an MOT cost in 2027?', a: `No change has been announced: the maximum fee for a car stays ${h.m2(h.P.fees.car)}, with no VAT, until the government publishes a new cap on GOV.UK. GOV.UK lists the current maximum for every vehicle class, and a new cap would only apply from the date set in its regulations. This page will show it as soon as it is published.` },
    { q: 'Is the MOT retest free?', a: `It is free if the car is repaired at the test centre and retested within ${h.num(h.P.rules.partialRetestDays)} working days, or brought back before the end of the next working day for listed items. Otherwise a partial retest fee can apply, and after ${h.num(h.P.rules.partialRetestDays)} working days a full test.` },
    { q: 'Does the MOT fee include repairs?', a: `No. The fee pays for the inspection only. Repairs are priced separately by the garage, and you can have them done anywhere before the retest. What changes with the place of repair is the retest fee, free when the car stays at the test centre and is repaired within ${h.num(h.P.rules.partialRetestDays)} working days.` },
  ],
  body: (h) => {
    const f = h.P.fees;
    const rows = [['Car (up to 8 passenger seats)', '4', h.m2(f.car)], ['Motorcycle', '1 and 2', h.m2(f.motorcycle)], ['Motorcycle with sidecar', '1 and 2', h.m2(f.motorcycleSidecar)], ['Passenger vehicle, 13 to 16 seats', '5', h.m2(f.class5small)], ['Goods vehicle, 3,000 to 3,500 kg', '7', h.m2(f.class7)]];
    return `
<h2>The MOT cost cap by vehicle</h2>
<p>The fee is a ceiling, not a price. GOV.UK lists the maximum for each vehicle class; a car, a light van up to 3,000 kg, a motor caravan and a taxi all fall in class 4. The test station decides what it charges below that figure, and the MOT certificate is the same whatever you paid.</p>
${h.table(['Vehicle', 'MOT class', 'Maximum fee'], rows, 'Maximum MOT fees, GOV.UK, read on ' + h.date(h.P.retrieved_at) + '. No VAT is charged on the fee.', ['l', 'l', 'r'])}
<h2>MOT cost in 2027</h2>
<p>No new cap has been announced for 2027: the maximum for a car stays ${h.m2(h.P.fees.car)}, with no VAT, as GOV.UK listed it on ${h.date(h.P.retrieved_at)}. The government sets these maximum fees and publishes any change on GOV.UK before it applies; this page and the calculator will switch to a new cap as soon as it is published. The free retest rules and the one-month early window stay as described below.</p>
<h2>Why many garages charge less</h2>
<p>There were ${h.num(h.P.national.stations)} private MOT test stations in Great Britain in ${h.P.national.stationsYear}, according to DVSA. Each sets its own price under the cap, so it is worth asking two or three nearby. A lower fee is legal and changes nothing to the test: every tester follows the same inspection manual, and the result is recorded in the same national database. What a garage charges for repairs found at the test is a separate matter, and you are free to have them done elsewhere.</p>
<h2>What a fail adds to the bill</h2>
<p>The fee rarely makes the difference: the repairs do. ${h.pc(h.gb.fails / h.gb.tests)} of the ${h.TY} tests in the DVSA file failed at the first attempt, and the rate depends heavily on the age of the car. The retest rules decide whether you pay a second fee:</p>
<ul>
<li>left at the test centre and retested within ${h.num(h.P.rules.partialRetestDays)} working days: a partial retest, no fee;</li>
<li>taken away and brought back before the end of the next working day, for items on the GOV.UK list (lamps, tyres, wipers, mirrors, seats, registration plates and others): no fee;</li>
<li>taken away and brought back within ${h.num(h.P.rules.partialRetestDays)} working days: a partial retest, for which a fee can be charged;</li>
<li>any other case: a full test, at the full fee.</li>
</ul>
<p>The calculator above adds these up. It does not price repairs, because no official source publishes repair prices and garages set their own.</p>
<h2>Cutting the cost of an MOT</h2>
<p>Checking bulbs, wipers, screen wash and tyre tread before the test removes some of the most common reasons for a fail, listed on the ${h.a('most-common-mot-failures', 'most common failures page')}. Booking a month early keeps your renewal date, as the ${h.a('mot-due-date', 'due date calculator')} shows, and leaves time to fix a fail before the old certificate runs out.</p>
<p>Sources: ${h.src('gov_fees', 'GOV.UK MOT fees')}, ${h.src('gov_retests', 'GOV.UK retests')} and ${h.src('dvsa_stats', 'DVSA MOT testing data')}.</p>
`;
  },
});

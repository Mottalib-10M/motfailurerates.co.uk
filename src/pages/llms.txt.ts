/** llms.txt (RECETTE §21): what the site is, where its figures come from, its main pages. Built from the data. */
import type { APIRoute } from 'astro';
import { PAGES } from '../lib/guides';
import { route } from '../i18n/routes';
import { SITE_URL, LAST_UPDATED } from '../data/site-config';
import { D, TEST_YEAR } from '../lib/engine/mot';
export const GET: APIRoute = () => {
  const lines = [
    '# MOT Failure Rates',
    '',
    `> MOT failure rates by make, model and year of first registration for cars and light vans in Great Britain, counted from the ${D.meta.tests.toLocaleString('en-GB')} first-attempt MOT tests of ${TEST_YEAR} in the DfT/DVSA anonymised MOT test results (Open Government Licence v3.0), with the defect groups behind failures, national rates from the DVSA quarterly tables, and MOT fees, due dates, retests and exemptions from GOV.UK (last read ${LAST_UPDATED}). Published by Radif Partners, an independent publisher; not DVSA, checks no number plate, books no MOT. Northern Ireland (DVA) is not covered.`,
    '',
    '## Tools and guides',
    `- [MOT failure rate checker](${SITE_URL}${route('home', 'en')}): failure rate of a make, model and year against all cars of the same age.`,
    ...PAGES.map((p) => `- [${p.nav}](${SITE_URL}${route(p.id, 'en')}): ${p.card}`),
    '',
    '## Method',
    `- [How the rates are counted](${SITE_URL}${route('method', 'en')})`,
    `- [About](${SITE_URL}${route('about', 'en')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

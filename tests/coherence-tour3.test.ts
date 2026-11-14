/**
 * Testeurs naïfs du 2026-11-14, tour 3 (RECETTE §15.8).
 * 1. Une seule unité pour comparer un modèle aux voitures du même âge : deux pourcentages de tests ratés
 *    (« 21.4% failed, against 24.5% for all cars the same age »). Plus de ratio, de « percentage points »,
 *    de « 12% more failures » ni de rang « 30 of 148 », qui se contredisaient d'un écran à l'autre.
 * 2. (tour 5, choix de l'éditeur) Le gros chiffre est le taux de l'année choisie ; l'âge actuel vient en seconde
 *    ligne, expliqué, sans second verdict.
 * 3. Coquilles relevées : « a A3 », « Mini Mini », « I3 ».
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import LITE from '../src/data/mot-lite.json';
import PARAMS from '../src/data/params-2026.json';
import { an, verdictOf } from '../src/lib/compare';

const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const walk = (dir: string): string[] => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : f.endsWith('.html') ? [p] : []; });
const text = (html: string) => html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;| | /g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
const BANNED: Array<[string, RegExp]> = [
  ['ratio', /\bratios?\b/i],
  ['percentage points', /percentage points?/i],
  ['« N% more/fewer failures »', /\d+%\s+(?:more|fewer)\s+failures/i],
  ['rang « N of M »', /\brank(?:s|ed|ing)?\s+(?:it\s+)?\d+\s+of\s+\d+/i],
  ['« a » devant une voyelle épelée', /\ba (?:[AEFHILMNORSX][0-9-]|Astra|Octavia|Insignia|Up\b)/],
  ['Mini Mini', /\bMini Mini\b/],
  ['I3', /\bI3\b/],
  ['« Last column »', /Last column/i],
  ['« National rate since »', /National rate since/i],
];

describe('une seule unité de comparaison, chiffre principal de l’année choisie', () => {
  it('a/an devant les noms de modèles', () => {
    expect(an('A3')).toBe('an A3');
    expect(an('X5')).toBe('an X5');
    expect(an('Astra')).toBe('an Astra');
    expect(an('Focus')).toBe('a Focus');
    expect(an('3 Series')).toBe('a 3 Series');
    expect(an('One')).toBe('a One');
    expect(an('MX-5')).toBe('an MX-5');
  });

  it('les pages construites ne mélangent plus les unités ni les coquilles relevées', () => {
    if (!existsSync(DIST)) return;
    const bad: string[] = [];
    for (const f of walk(DIST)) {
      const t = text(readFileSync(f, 'utf8'));
      for (const [name, re] of BANNED) { const m = t.match(re); if (m) bad.push(`${f.replace(DIST, '')}: ${name} : …${t.slice(Math.max(0, m.index! - 60), m.index! + 60)}…`); }
    }
    expect(bad).toEqual([]);
  });

  it('le gros chiffre de l’accueil est le taux de l’année choisie, avec un seul verdict (tour 5)', () => {
    const f = join(DIST, 'en', 'index.html');
    if (!existsSync(f)) return;
    const html = readFileSync(f, 'utf8');
    const m = html.match(/data-principal[^>]*>([^<]+)</);
    expect(m).not.toBeNull();
    const L = LITE as unknown as { testYear: number; models: Array<[string, string, Record<string, [number, number]>]> };
    const focus = L.models.find((r) => r[0] === 'Ford' && r[1] === 'Focus')!;
    const pct = (p: [number, number]) => new Intl.NumberFormat('en-GB', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(p[1] / p[0]);
    expect(m![1].replace(/\s/g, '')).toBe(pct(focus[2]['2015']));
    const t = text(html).replace(/\s+([:,.])/g, '$1');
    // l'âge actuel reste en seconde ligne, expliqué, avec le taux des voitures de cet âge en 2023
    const ageNow = PARAMS.year - 2015;
    expect(t).toMatch(new RegExp(`At ${ageNow}, the age it is now`));
    expect(t).toContain(pct(focus[2][String(L.testYear - ageNow)]));
    // un seul verdict dans le bloc résultat
    const bloc = text(html.slice(html.indexOf('data-resultat'), html.indexOf('</table>')));
    expect((bloc.match(/(Better|Worse|About average) than average|About average for its age/g) ?? []).length).toBe(1);
  });

  it('« better / worse » suit toujours les deux pourcentages affichés', () => {
    expect(verdictOf(0.214, 0.245)).toBe('better');
    expect(verdictOf(0.364, 0.38)).toBe('better');
    expect(verdictOf(0.30, 0.25)).toBe('worse');
    expect(verdictOf(0.250, 0.252)).toBe('same');
  });
});

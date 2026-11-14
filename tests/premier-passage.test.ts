/**
 * Testeurs naïfs du 2026-11-14 (RECETTE §15.8) : « first MOT test » avait deux sens sur le site. Le gros chiffre
 * mesure les tests de 2023 ratés au premier passage (type NT, résultat F ou PRS, contre-visites exclues), alors que
 * « first MOT » désigne aussi le tout premier contrôle à 3 ans. Règle : le premier sens s'écrit « at the first
 * attempt » / « first-attempt », et « first MOT » est réservé au contrôle des 3 ans (ou de 1 an pour les taxis).
 * Ce test empêche le retour de l'expression ambiguë, dans les sources et dans les pages construites.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = join(__dirname, '..');
const walk = (dir: string, ext: RegExp): string[] => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p, ext) : ext.test(f) ? [p] : [];
});
/** Phrases that mix the two meanings: banned everywhere. */
const BANNED: RegExp[] = [
  /(?<![-\w])first\s+(?:MOT\s+)?tests?\b/gi, // "first MOT test", "first tests" (write "first-attempt MOT tests" or "at the first attempt")
  /first\s+MOT\s+of\s+the\s+year/gi,
  /failed\s+(?:its|their|the)\s+first\s+MOT\b/gi,
  /first-time\s+failure/gi,
];
/** "first MOT" alone must sit next to its meaning: the test at three years (one year for taxis). */
const CONTEXT = /three|3 years|3-year|third|anniversar|one year|due|new car|taxi/i;

const hits = (text: string) => BANNED.flatMap((re) => [...text.matchAll(re)].map((m) => text.slice(Math.max(0, m.index! - 60), m.index! + m[0].length + 40)));

describe('« first MOT » garde un seul sens', () => {
  it('aucune expression ambiguë dans les sources', () => {
    const files = walk(join(ROOT, 'src'), /\.(ts|tsx|astro)$/).filter((f) => !f.includes(`${join('src', 'data')}${'/'}mot`));
    const bad = files.flatMap((f) => hits(readFileSync(f, 'utf8')).map((h) => `${f.replace(ROOT, '')}: ${h}`));
    expect(bad).toEqual([]);
  });

  it('ni dans les pages construites, et « first MOT » parle du contrôle des 3 ans', () => {
    const dist = join(ROOT, 'dist');
    if (!existsSync(dist)) return;
    const bad: string[] = [];
    for (const f of walk(dist, /\.html$/)) {
      const text = readFileSync(f, 'utf8').replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;| | /g, ' ').replace(/\s+/g, ' ');
      for (const h of hits(text)) bad.push(`${f.replace(dist, '')}: ${h}`);
      for (const m of text.matchAll(/first MOT\b/gi)) {
        const around = text.slice(Math.max(0, m.index! - 100), m.index! + 110);
        if (!CONTEXT.test(around)) bad.push(`${f.replace(dist, '')}: « first MOT » sans le sens des 3 ans : ${around}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('le calculateur dit ce que mesure le pourcentage', () => {
    const src = readFileSync(join(ROOT, 'src/components/calc/MotChecker.tsx'), 'utf8');
    expect(src).toMatch(/data-reponse/);
    expect(src).toMatch(/failed the MOT at the first attempt in \{TY\}/);
  });
});

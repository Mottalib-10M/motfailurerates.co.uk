/** Short accessors used by the model and make pages, so every figure in their text is read from the DVSA data. */
import type { Helpers } from './helpers';
import { makeRank } from './make-page';

export function mctx(h: Helpers, mk: string, md: string) {
  const x = h.M(mk, md);
  /** Row of one registration year; fails the build if that year has too few tests to be shown. */
  const Y = (y: number) => { const r = x.byAge.find((b) => b.year === y); if (!r) throw new Error(`${mk} ${md}: no figures for ${y}`); return r; };
  const F = (c: string) => { const e = x.fuels.find((f) => f[0] === c); if (!e) throw new Error(`${mk} ${md}: no fuel ${c}`); return e[1][1] / e[1][0]; };
  const FN = (c: string) => { const e = x.fuels.find((f) => f[0] === c); if (!e) throw new Error(`${mk} ${md}: no fuel ${c}`); return e[1][0]; };
  const cat = (name: string) => { const c = x.cats.find((k) => k.name === name); if (!c) throw new Error(`${mk} ${md}: no group ${name}`); return c.s; };
  /** Number of times the i-th most recorded failure item was recorded. */
  const T = (i: number) => x.top[i][1];
  return { x, Y, F, FN, cat, T };
}

export function kctx(h: Helpers, mk: string) {
  const x = h.K(mk);
  const r = makeRank(mk);
  const best = x.models[0], worst = x.models[x.models.length - 1];
  const ML = (l: string) => { const e = x.models.find((m) => m.m.label === l); if (!e) throw new Error(`${mk}: no model ${l}`); return e; };
  const A = (age: number) => h.E.modelAt(x.k, age, 2000);
  const N = (age: number) => h.E.nationalAt(age);
  return { x, r, best, worst, ML, A, N };
}

/**
 * One comparison, one unit (testeurs naïfs du 2026-11-14, tour 3): a model is compared with all cars of the same
 * age by setting two percentages of tests failed side by side, never by a ratio, a rank or "percentage points".
 * Within half a point either way, it is "about the same".
 */
export type Verdict = 'better' | 'worse' | 'same';
export const verdictOf = (own: number, same: number): Verdict => (Math.abs(own - same) < 0.005 ? 'same' : own < same ? 'better' : 'worse');
export const verdictWords: Record<Verdict, string> = { better: 'Better than average for its age', worse: 'Worse than average for its age', same: 'About average for its age' };
/**
 * "a" or "an" before a model name, read aloud: "an A3", "an X5", "an Astra", "an MX-5", "a Focus", "a One".
 * A name that starts with a letter read on its own (a capital followed by a digit, a hyphen or another capital)
 * takes "an" when that letter is said with a vowel sound (A E F H I L M N O R S X).
 */
export function an(name: string) {
  const s = name.trim();
  const spelt = /^[A-Z](?=[0-9\-]|[A-Z]{1,3}\b)/.test(s);
  const vowel = spelt ? /^[AEFHILMNORSX]/.test(s) : /^(?!one\b|uni|use|eu)[aeiou]/i.test(s) || /^[0-9]*(8|11|18)\b/.test(s);
  return `${vowel ? 'an' : 'a'} ${s}`;
}
/** "Mini Mini" → "Mini": the make is not repeated when DVSA's model name already starts with it. */
export const nameOf = (mk: string, md: string) => (md.toLowerCase().startsWith(mk.toLowerCase()) ? md : `${mk} ${md}`);

/** Registry of pages: every file of `src/content/pages/` is loaded here. */
import type { PageDef, Group } from './guide-types';
const mods = import.meta.glob<{ default: PageDef }>('../content/pages/*.ts', { eager: true });
export const PAGES: PageDef[] = Object.entries(mods)
  .map(([file, m]) => {
    const g = m.default;
    const base = file.split('/').pop()!.replace(/\.ts$/, '');
    if (g.id !== base) throw new Error(`${file}: id “${g.id}” differs from the file name`);
    return g;
  })
  .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
export const GROUPS: Group[] = ['rates', 'rules', 'makes', 'models'];
export const pageById = (id: string) => PAGES.find((p) => p.id === id);
/** Model pages, keyed "Make label|Model label" as the checker names them, with their URL. */
export const checkerPages = (): Record<string, string> => Object.fromEntries(PAGES.filter((p) => p.group === 'models' && p.tool?.props).map((p) => [`${p.tool!.props!.make}|${p.tool!.props!.model}`, `/en/${p.slug}/`]));

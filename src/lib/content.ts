import { getCollection, type CollectionEntry } from 'astro:content';
import { isLocale, locales, type Locale } from '../i18n/locales';
import { url } from './urls';

export type Post = CollectionEntry<'posts'> & { slug: string; lang: Locale };
export type Series = CollectionEntry<'series'>;

let cache: Post[] | undefined;

/** All published posts, newest first. Entry ids look like `<slug>/<lang>`. */
export async function getAllPosts(): Promise<Post[]> {
  if (cache) return cache;
  const entries = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  cache = entries
    .map((e) => {
      const [slug, lang] = e.id.split('/');
      if (!slug || !lang || !isLocale(lang)) {
        throw new Error(`Post "${e.id}" must live at posts/<slug>/<lang>.md with lang in: ${locales.join(', ')}`);
      }
      return Object.assign(e, { slug, lang });
    })
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return cache;
}

export async function getPosts(lang: Locale, filter: (p: Post) => boolean = () => true) {
  return (await getAllPosts()).filter((p) => p.lang === lang && filter(p));
}

let seriesCache: Promise<Series[]> | undefined;

export function getSeries(): Promise<Series[]> {
  seriesCache ??= getCollection('series').then((s) => s.sort((a, b) => a.data.order - b.data.order));
  return seriesCache;
}

export async function getSeriesParts(lang: Locale, series: string) {
  const parts = await getPosts(lang, (p) => p.data.format === 'series' && p.data.series === series);
  return parts.sort((a, b) => (a.data.part ?? 0) - (b.data.part ?? 0));
}

export function postUrl(p: Post): string {
  return p.data.format === 'series'
    ? url(`/${p.lang}/series/${p.data.series}/${p.slug}/`)
    : url(`/${p.lang}/articles/${p.slug}/`);
}

/** Map of language -> URL for every translation of the same post. */
export async function getTranslations(slug: string): Promise<Partial<Record<Locale, string>>> {
  const all = await getAllPosts();
  return Object.fromEntries(all.filter((p) => p.slug === slug).map((p) => [p.lang, postUrl(p)]));
}

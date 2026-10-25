import { getCollection, type CollectionEntry } from 'astro:content';
import { isLocale, locales, type Locale } from '../i18n/locales';
import { getTopic } from '../config/taxonomy';
import { url, chapterUrl } from './urls';

export type Post = CollectionEntry<'posts'> & { slug: string; lang: Locale };
export type Book = CollectionEntry<'books'>;
export type Chapter = Book['data']['chapters'][number];

let postsCache: Promise<Post[]> | undefined;
let booksCache: Promise<Book[]> | undefined;

/** All published posts, newest first. Entry ids look like `<slug>/<lang>`. */
export function getAllPosts(): Promise<Post[]> {
  postsCache ??= getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft).then((entries) =>
    entries
      .map((e) => {
        const [slug, lang] = e.id.split('/');
        if (!slug || !lang || !isLocale(lang)) {
          throw new Error(`Post "${e.id}" must live at posts/<slug>/<lang>.md with lang in: ${locales.join(', ')}`);
        }
        const topic = getTopic(e.data.topic);
        if (!e.data.book && topic?.categories.length && !topic.categories.some((c) => c.slug === e.data.category)) {
          throw new Error(`Post "${e.id}" needs a valid \`category\` for topic "${topic.slug}".`);
        }
        return Object.assign(e, { slug, lang });
      })
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()),
  );
  return postsCache;
}

/** Articles (not book chapter notes) in one language. */
export async function getArticles(lang: Locale, filter: (p: Post) => boolean = () => true) {
  return (await getAllPosts()).filter((p) => p.lang === lang && !p.data.book && filter(p));
}

export function getBooks(): Promise<Book[]> {
  booksCache ??= getCollection('books').then((b) => b.sort((a, b) => a.data.order - b.data.order));
  return booksCache;
}

/** Chapter notes for a book in one language, keyed by chapter number (0 = preface). */
export async function getChapterNotes(lang: Locale, book: string): Promise<Map<number, Post>> {
  const notes = (await getAllPosts()).filter((p) => p.lang === lang && p.data.book === book);
  return new Map(notes.map((p) => [p.data.chapter!, p]));
}

export const prefaceSlug = 'preface';

export function articleUrl(p: Post): string {
  const { topic, category } = p.data;
  return category ? url(`/${p.lang}/${topic}/${category}/${p.slug}/`) : url(`/${p.lang}/${topic}/${p.slug}/`);
}

export async function postUrl(p: Post): Promise<string> {
  if (!p.data.book) return articleUrl(p);
  const book = (await getBooks()).find((b) => b.id === p.data.book);
  const ch = book?.data.chapters.find((c) => c.number === p.data.chapter);
  return chapterUrl(p.lang, p.data.book, ch?.slug ?? prefaceSlug);
}

/** Map of language -> URL for every translation of the same post. */
export async function getTranslations(slug: string): Promise<Partial<Record<Locale, string>>> {
  const all = (await getAllPosts()).filter((p) => p.slug === slug);
  return Object.fromEntries(await Promise.all(all.map(async (p) => [p.lang, await postUrl(p)])));
}

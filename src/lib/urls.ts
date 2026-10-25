import type { Locale } from '../i18n/locales';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a site path with the deploy base and ensure a trailing slash. */
export function url(path: string): string {
  const clean = ('/' + path).replace(/\/+/g, '/');
  return base + (clean.endsWith('/') ? clean : clean + '/');
}

export const homeUrl = (lang: Locale) => url(`/${lang}/`);
export const topicUrl = (lang: Locale, topic: string) => url(`/${lang}/${topic}/`);
export const categoryUrl = (lang: Locale, topic: string, category: string) => url(`/${lang}/${topic}/${category}/`);
export const booksUrl = (lang: Locale) => url(`/${lang}/books/`);
export const bookUrl = (lang: Locale, book: string) => url(`/${lang}/books/${book}/`);
export const chapterUrl = (lang: Locale, book: string, chapterSlug: string) => url(`/${lang}/books/${book}/${chapterSlug}/`);

/** Same page in another language: swap the first path segment. */
export function switchLangPath(pathname: string, to: Locale): string {
  const rest = pathname.slice(base.length).split('/').filter(Boolean).slice(1).join('/');
  return url(`/${to}/${rest}`);
}

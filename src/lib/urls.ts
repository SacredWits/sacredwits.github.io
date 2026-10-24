import type { Locale } from '../i18n/locales';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a site path with the deploy base and ensure a trailing slash. */
export function url(path: string): string {
  const clean = ('/' + path).replace(/\/+/g, '/');
  return base + (clean.endsWith('/') ? clean : clean + '/');
}

export const homeUrl = (lang: Locale) => url(`/${lang}/`);
export const sectionUrl = (lang: Locale, section: string) => url(`/${lang}/${section}/`);
export const categoryUrl = (lang: Locale, section: string, category: string) => url(`/${lang}/${section}/${category}/`);
export const articlesUrl = (lang: Locale) => url(`/${lang}/articles/`);
export const seriesIndexUrl = (lang: Locale) => url(`/${lang}/series/`);
export const seriesUrl = (lang: Locale, series: string) => url(`/${lang}/series/${series}/`);

/** Same page in another language: swap the first path segment. */
export function switchLangPath(pathname: string, to: Locale): string {
  const rest = pathname.slice(base.length).split('/').filter(Boolean).slice(1).join('/');
  return url(`/${to}/${rest}`);
}

export const locales = ['en', 'ar', 'ur', 'ur-latn', 'hi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { name: string; htmlLang: string; dir: 'ltr' | 'rtl' }> = {
  en: { name: 'English', htmlLang: 'en', dir: 'ltr' },
  ar: { name: 'العربية', htmlLang: 'ar', dir: 'rtl' },
  ur: { name: 'اردو', htmlLang: 'ur', dir: 'rtl' },
  'ur-latn': { name: 'Roman Urdu', htmlLang: 'ur-Latn', dir: 'ltr' },
  hi: { name: 'हिन्दी', htmlLang: 'hi', dir: 'ltr' },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

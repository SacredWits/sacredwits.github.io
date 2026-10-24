import { locales } from '../i18n/locales';

/** getStaticPaths helper: one entry per language. */
export const langPaths = () => locales.map((lang) => ({ params: { lang }, props: { lang } }));

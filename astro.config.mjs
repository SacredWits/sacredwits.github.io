// @ts-check
import { defineConfig } from 'astro/config';

const langs = ['en', 'ar', 'ur', 'ur-latn', 'hi'];

// GitHub Pages: https://sacredwits.github.io/ (repo SacredWits/sacredwits.github.io)
export default defineConfig({
  site: 'https://sacredwits.github.io',
  trailingSlash: 'always',
  // Old URLs from the first version of the site.
  redirects: Object.fromEntries(
    langs.map((l) => [`/${l}/articles/fatimah-bint-muhammad/`, `/${l}/seerah/women-of-islam/fatimah-bint-muhammad/`]),
  ),
});

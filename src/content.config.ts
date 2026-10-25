import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { locales } from './i18n/locales';
import { topicSlugs } from './config/taxonomy';

/** Text in every site language. */
const allLangs = z.object(Object.fromEntries(locales.map((l) => [l, z.string()])) as Record<(typeof locales)[number], z.ZodString>);

/**
 * Posts: one folder per post, one file per language.
 *   src/content/posts/<slug>/<lang>.md
 * A post is either an article (has `topic`) or chapter notes for a book (has `book` + `chapter`).
 */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        updated: z.coerce.date().optional(),
        topic: z.enum(topicSlugs).optional(),
        category: z.string().optional(),
        book: z.string().optional(),
        chapter: z.number().int().nonnegative().optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        source: z.object({ author: z.string(), title: z.string(), url: z.url().optional() }).optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
      })
      .refine((d) => (d.book ? d.chapter !== undefined : Boolean(d.topic)), {
        message: 'An article needs `topic`; chapter notes need `book` and `chapter` (0 = preface).',
      }),
});

const heading = z.object({ page: z.number().int(), title: allLangs });

/** Books studied on the site:  src/content/books/<book-slug>.yaml */
const books = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/books' }),
  schema: ({ image }) =>
    z.object({
      title: allLangs,
      author: allLangs,
      description: allLangs,
      topic: z.enum(topicSlugs),
      category: z.string().optional(),
      order: z.number().default(0),
      cover: image().optional(),
      publisher: z.string().optional(),
      editionUsed: z.number().int().optional(),
      editions: z.array(z.object({ number: z.number().int(), date: z.string(), copies: z.number().int().optional() })).default([]),
      preface: heading.optional(),
      chapters: z.array(
        heading.extend({
          number: z.number().int().positive(),
          slug: z.string(),
          sections: z.array(heading).default([]),
        }),
      ),
    }),
});

export const collections = { posts, books };

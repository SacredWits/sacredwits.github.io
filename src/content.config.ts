import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { locales } from './i18n/locales';
import { sectionSlugs } from './config/taxonomy';

const localized = z.object(Object.fromEntries(locales.map((l) => [l, z.string().optional()])));

/**
 * One folder per post, one file per language:
 *   src/content/posts/<slug>/<lang>.md   e.g. fatimah-bint-muhammad/ur.md
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
        section: z.enum(sectionSlugs),
        category: z.string().optional(),
        /** standalone = independent piece; series = one part of a series */
        format: z.enum(['standalone', 'series']).default('standalone'),
        series: z.string().optional(),
        part: z.number().int().positive().optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        source: z.object({ author: z.string(), title: z.string(), url: z.url().optional() }).optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
      })
      .refine((d) => d.format !== 'series' || (d.series && d.part), {
        message: 'Series posts need `series` and `part`.',
      }),
});

/**
 * One YAML file per series:  src/content/series/<series-slug>.yaml
 * Titles and descriptions are given per language.
 */
const series = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/series' }),
  schema: ({ image }) =>
    z.object({
      title: localized,
      description: localized,
      section: z.enum(sectionSlugs),
      category: z.string().optional(),
      cover: image().optional(),
      order: z.number().default(0),
    }),
});

export const collections = { posts, series };

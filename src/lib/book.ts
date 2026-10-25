import type { Book } from './content';
import { prefaceSlug } from './content';

/** Preface (if any) followed by the chapters, as one ordered reading list. */
export function readingOrder(book: Book) {
  const { preface, chapters } = book.data;
  return [
    ...(preface ? [{ number: 0, slug: prefaceSlug, page: preface.page, title: preface.title, sections: [] as typeof chapters[number]['sections'] }] : []),
    ...chapters,
  ];
}

export type ReadingItem = ReturnType<typeof readingOrder>[number];

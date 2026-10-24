import type { Locale } from '../i18n/locales';

type Label = Record<Locale, string>;

export interface Category {
  slug: string;
  label: Label;
}

export interface Section {
  slug: string;
  label: Label;
  description: Label;
  categories: Category[];
}

/**
 * Content sections shown in the main menu. Each post declares one `section`
 * (and optionally one `category` inside it). "Articles" and "Series" are not
 * sections: they are listing views by format (standalone vs. series parts).
 */
export const sections: Section[] = [
  {
    slug: 'seerah',
    label: { en: 'Seerah & Lives', ar: 'السيرة والتراجم', ur: 'سیرت و سوانح', 'ur-latn': 'Seerat-o-Sawaneh', hi: 'सीरत-ओ-सवानेह' },
    description: {
      en: 'The lives of the Prophets, the Companions and the great women of Islam.',
      ar: 'سِيَر الأنبياء والصحابة وعظيمات النساء في الإسلام.',
      ur: 'انبیاء، صحابہ اور اسلام کی عظیم خواتین کی زندگیاں۔',
      'ur-latn': 'Anbiya, Sahaba aur Islam ki azeem khawateen ki zindagiyan.',
      hi: 'अंबिया, सहाबा और इस्लाम की अज़ीम ख़वातीन की ज़िंदगियाँ।',
    },
    categories: [
      { slug: 'prophets', label: { en: 'Prophets', ar: 'الأنبياء', ur: 'انبیاء', 'ur-latn': 'Anbiya', hi: 'अंबिया' } },
      { slug: 'companions', label: { en: 'Companions (Sahaba)', ar: 'الصحابة', ur: 'صحابہ کرام', 'ur-latn': 'Sahaba-e-Kiraam', hi: 'सहाबा-ए-किराम' } },
      { slug: 'women-of-islam', label: { en: 'Women of Islam', ar: 'نساء في الإسلام', ur: 'اسلام کی خواتین', 'ur-latn': 'Islam ki Khawateen', hi: 'इस्लाम की ख़वातीन' } },
    ],
  },
  {
    slug: 'quran',
    label: { en: 'Quran & Tafseer', ar: 'القرآن والتفسير', ur: 'قرآن و تفسیر', 'ur-latn': 'Quran-o-Tafseer', hi: 'क़ुरआन-ओ-तफ़सीर' },
    description: {
      en: 'Explanation of the Quran and reflections on its verses.',
      ar: 'تفسير القرآن وتأملات في آياته.',
      ur: 'قرآن کی تفسیر اور اس کی آیات پر غور و فکر۔',
      'ur-latn': 'Quran ki tafseer aur us ki aayaat par ghaur-o-fikr.',
      hi: 'क़ुरआन की तफ़सीर और उसकी आयात पर ग़ौर-ओ-फ़िक्र।',
    },
    categories: [
      { slug: 'tafseer', label: { en: 'Tafseer', ar: 'التفسير', ur: 'تفسیر', 'ur-latn': 'Tafseer', hi: 'तफ़सीर' } },
      { slug: 'reflections', label: { en: 'Quranic Reflections', ar: 'تأملات قرآنية', ur: 'قرآنی تدبر', 'ur-latn': 'Qurani Tadabbur', hi: 'क़ुरआनी तदब्बुर' } },
    ],
  },
  {
    slug: 'research',
    label: { en: 'Research', ar: 'بحوث', ur: 'تحقیق', 'ur-latn': 'Tahqeeq', hi: 'तहक़ीक़' },
    description: {
      en: 'In-depth studies on history, fiqh and Islamic thought.',
      ar: 'دراسات معمّقة في التاريخ والفقه والفكر الإسلامي.',
      ur: 'تاریخ، فقہ اور اسلامی فکر پر تفصیلی مطالعے۔',
      'ur-latn': 'Tareekh, fiqh aur Islami fikr par tafseeli mutaale.',
      hi: 'तारीख़, फ़िक़्ह और इस्लामी फ़िक्र पर तफ़सीली मुताले।',
    },
    categories: [],
  },
  {
    slug: 'qna',
    label: { en: 'Q&A', ar: 'سؤال وجواب', ur: 'سوال و جواب', 'ur-latn': 'Sawaal-o-Jawaab', hi: 'सवाल-ओ-जवाब' },
    description: {
      en: 'Answers to common questions about faith and practice.',
      ar: 'إجابات عن أسئلة شائعة في العقيدة والعبادة.',
      ur: 'عقیدے اور عمل سے متعلق عام سوالات کے جوابات۔',
      'ur-latn': 'Aqeede aur amal se mutalliq aam sawaalaat ke jawaabaat.',
      hi: 'अक़ीदे और अमल से मुताल्लिक़ आम सवालात के जवाबात।',
    },
    categories: [],
  },
  {
    slug: 'news',
    label: { en: 'News & Updates', ar: 'أخبار ومستجدات', ur: 'خبریں و اپڈیٹس', 'ur-latn': 'Khabrein aur Updates', hi: 'ख़बरें और अपडेट्स' },
    description: {
      en: 'Updates from the Muslim world and from this site.',
      ar: 'مستجدات من العالم الإسلامي ومن هذا الموقع.',
      ur: 'عالمِ اسلام اور اس سائٹ سے تازہ خبریں۔',
      'ur-latn': 'Aalam-e-Islam aur is site se taaza khabrein.',
      hi: 'आलम-ए-इस्लाम और इस साइट से ताज़ा ख़बरें।',
    },
    categories: [],
  },
];

/** Format-based listings shown in the menu next to the sections. */
export const formats = {
  articles: { en: 'Articles', ar: 'مقالات', ur: 'مضامین', 'ur-latn': 'Mazameen', hi: 'मज़ामीन' },
  series: { en: 'Series', ar: 'سلاسل', ur: 'سلسلے', 'ur-latn': 'Silsile', hi: 'सिलसिले' },
} satisfies Record<string, Label>;

export const sectionSlugs = sections.map((s) => s.slug) as [string, ...string[]];

export function getSection(slug: string) {
  return sections.find((s) => s.slug === slug);
}

export function getCategory(sectionSlug: string, categorySlug?: string) {
  return getSection(sectionSlug)?.categories.find((c) => c.slug === categorySlug);
}

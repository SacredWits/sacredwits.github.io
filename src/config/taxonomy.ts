import type { Locale } from '../i18n/locales';

export type Label = Record<Locale, string>;

export interface Category {
  slug: string;
  label: Label;
}

export interface Topic {
  slug: string;
  label: Label;
  description: Label;
  categories: Category[];
}

/**
 * Topics shown in the main menu. Every article belongs to one topic
 * (and to one category when the topic has categories).
 * Books have their own menu entry and are also listed under their topic.
 */
export const topics: Topic[] = [
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
    label: { en: 'Quran', ar: 'القرآن', ur: 'قرآن', 'ur-latn': 'Quran', hi: 'क़ुरआन' },
    description: {
      en: 'Explanation of the Quran and reflections on its verses.',
      ar: 'تفسير القرآن وتأملات في آياته.',
      ur: 'قرآن کی تفسیر اور اس کی آیات پر غور و فکر۔',
      'ur-latn': 'Quran ki tafseer aur us ki aayaat par ghaur-o-fikr.',
      hi: 'क़ुरआन की तफ़सीर और उसकी आयात पर ग़ौर-ओ-फ़िक्र।',
    },
    categories: [
      { slug: 'tafseer', label: { en: 'Tafseer', ar: 'التفسير', ur: 'تفسیر', 'ur-latn': 'Tafseer', hi: 'तफ़सीर' } },
      { slug: 'reflections', label: { en: 'Reflections', ar: 'تأملات', ur: 'تدبر', 'ur-latn': 'Tadabbur', hi: 'तदब्बुर' } },
    ],
  },
  {
    slug: 'beliefs',
    label: { en: 'Beliefs & Practice', ar: 'العقيدة والعمل', ur: 'عقیدہ و عمل', 'ur-latn': 'Aqeeda-o-Amal', hi: 'अक़ीदा-ओ-अमल' },
    description: {
      en: 'What a Muslim believes, how a Muslim worships, and the rules and rights of the Shariah.',
      ar: 'ما يؤمن به المسلم، وكيف يعبد ربه، وأحكام الشريعة وحقوقها.',
      ur: 'مسلمان کیا مانتا ہے، کیسے عبادت کرتا ہے، اور شریعت کے احکام و حقوق۔',
      'ur-latn': 'Musalmaan kya maanta hai, kaise ibaadat karta hai, aur shariat ke ahkaam-o-huqooq.',
      hi: 'मुसलमान क्या मानता है, कैसे इबादत करता है, और शरीअत के अहकाम-ओ-हुक़ूक़।',
    },
    categories: [
      { slug: 'aqeedah', label: { en: 'Beliefs (Aqeedah)', ar: 'العقيدة', ur: 'عقائد', 'ur-latn': 'Aqaaid', hi: 'अक़ाइद' } },
      { slug: 'worship', label: { en: 'Worship', ar: 'العبادات', ur: 'عبادات', 'ur-latn': 'Ibaadaat', hi: 'इबादात' } },
      { slug: 'shariah', label: { en: 'Shariah & Rights', ar: 'الشريعة والحقوق', ur: 'شریعت و حقوق', 'ur-latn': 'Shariat-o-Huqooq', hi: 'शरीअत-ओ-हुक़ूक़' } },
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

export const booksLabel: Label = { en: 'Books', ar: 'كتب', ur: 'کتابیں', 'ur-latn': 'Kitaabein', hi: 'किताबें' };
export const booksDescription: Label = {
  en: 'Classic Islamic books, studied chapter by chapter with notes and summaries.',
  ar: 'كتب إسلامية مهمة، تُدرس فصلًا فصلًا مع ملاحظات وخلاصات.',
  ur: 'اہم اسلامی کتابیں، باب بہ باب نوٹس اور خلاصوں کے ساتھ۔',
  'ur-latn': 'Aham Islami kitaabein, baab ba baab notes aur khulaason ke saath.',
  hi: 'अहम इस्लामी किताबें, बाब ब बाब नोट्स और ख़ुलासों के साथ।',
};

/** URL segments that are not topics. */
export const reservedSegments = ['books'];

export const topicSlugs = topics.map((s) => s.slug) as [string, ...string[]];

export function getTopic(slug?: string) {
  return topics.find((s) => s.slug === slug);
}

export function getCategory(topicSlug?: string, categorySlug?: string) {
  return getTopic(topicSlug)?.categories.find((c) => c.slug === categorySlug);
}

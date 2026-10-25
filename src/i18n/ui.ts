import type { Locale } from './locales';

const strings = {
  siteName: { en: 'Sacred Wits', ar: 'Sacred Wits', ur: 'Sacred Wits', 'ur-latn': 'Sacred Wits', hi: 'Sacred Wits' },
  tagline: {
    en: 'Lives, Quran and knowledge from the Islamic tradition',
    ar: 'سِيَر وقرآن ومعرفة من التراث الإسلامي',
    ur: 'اسلامی روایت سے سیرتیں، قرآن اور علم',
    'ur-latn': 'Islami riwaayat se seeratein, Quran aur ilm',
    hi: 'इस्लामी रिवायत से सीरतें, क़ुरआन और इल्म',
  },
  home: { en: 'Home', ar: 'الرئيسية', ur: 'ہوم', 'ur-latn': 'Home', hi: 'होम' },
  latest: { en: 'Latest articles', ar: 'أحدث المقالات', ur: 'تازہ مضامین', 'ur-latn': 'Taaza mazameen', hi: 'ताज़ा मज़ामीन' },
  browse: { en: 'Browse by topic', ar: 'تصفّح حسب الموضوع', ur: 'موضوع کے لحاظ سے دیکھیے', 'ur-latn': 'Mauzoo ke lihaaz se dekhiye', hi: 'मौज़ू के लिहाज़ से देखिए' },
  all: { en: 'All', ar: 'الكل', ur: 'سب', 'ur-latn': 'Sab', hi: 'सब' },
  allBooks: { en: 'All books', ar: 'كل الكتب', ur: 'تمام کتابیں', 'ur-latn': 'Tamaam kitaabein', hi: 'तमाम किताबें' },
  menu: { en: 'Menu', ar: 'القائمة', ur: 'مینو', 'ur-latn': 'Menu', hi: 'मेन्यू' },
  language: { en: 'Language', ar: 'اللغة', ur: 'زبان', 'ur-latn': 'Zabaan', hi: 'ज़बान' },
  comingSoon: {
    en: 'Nothing here yet. New content is on the way, in sha Allah.',
    ar: 'لا يوجد محتوى هنا بعد. المحتوى الجديد في الطريق إن شاء الله.',
    ur: 'یہاں ابھی کچھ نہیں۔ نیا مواد ان شاء اللہ جلد آ رہا ہے۔',
    'ur-latn': 'Yahan abhi kuch nahin. Naya mawaad in sha Allah jald aa raha hai.',
    hi: 'यहाँ अभी कुछ नहीं। नया मवाद इन शा अल्लाह जल्द आ रहा है।',
  },
  article: { en: 'Article', ar: 'مقالة', ur: 'مضمون', 'ur-latn': 'Mazmoon', hi: 'मज़मून' },
  book: { en: 'Book', ar: 'كتاب', ur: 'کتاب', 'ur-latn': 'Kitaab', hi: 'किताब' },
  booksHere: { en: 'Books on this topic', ar: 'كتب في هذا الموضوع', ur: 'اس موضوع پر کتابیں', 'ur-latn': 'Is mauzoo par kitaabein', hi: 'इस मौज़ू पर किताबें' },
  articlesHere: { en: 'Articles', ar: 'المقالات', ur: 'مضامین', 'ur-latn': 'Mazameen', hi: 'मज़ामीन' },
  by: { en: 'by', ar: 'تأليف', ur: 'از', 'ur-latn': 'az', hi: 'अज़' },
  chapter: { en: 'Chapter {n}', ar: 'الباب {n}', ur: 'باب {n}', 'ur-latn': 'Baab {n}', hi: 'बाब {n}' },
  chapters: { en: '{n} chapters', ar: '{n} أبواب', ur: '{n} ابواب', 'ur-latn': '{n} abwaab', hi: '{n} अबवाब' },
  page: { en: 'p. {n}', ar: 'ص {n}', ur: 'ص {n}', 'ur-latn': 'safha {n}', hi: 'सफ़हा {n}' },
  contents: { en: 'Contents', ar: 'الفهرس', ur: 'فہرستِ مضامین', 'ur-latn': 'Fehrist-e-Mazameen', hi: 'फ़ेहरिस्त-ए-मज़ामीन' },
  inThisChapter: { en: 'In this chapter', ar: 'في هذا الباب', ur: 'اس باب میں', 'ur-latn': 'Is baab mein', hi: 'इस बाब में' },
  aboutBook: { en: 'About this book', ar: 'عن الكتاب', ur: 'کتاب کا تعارف', 'ur-latn': 'Kitaab ka ta\'aruf', hi: 'किताब का तआरुफ़' },
  publisher: { en: 'Publisher', ar: 'الناشر', ur: 'ناشر', 'ur-latn': 'Naashir', hi: 'नाशिर' },
  editions: { en: 'Editions', ar: 'الطبعات', ur: 'طباعتیں', 'ur-latn': 'Tabaa\'atein', hi: 'तबाअतें' },
  edition: { en: 'Edition', ar: 'الطبعة', ur: 'طبع', 'ur-latn': 'Tab\'', hi: 'तबअ' },
  date: { en: 'Date', ar: 'التاريخ', ur: 'تاریخ', 'ur-latn': 'Tareekh', hi: 'तारीख़' },
  copies: { en: 'Copies', ar: 'النسخ', ur: 'تعداد', 'ur-latn': 'Ta\'daad', hi: 'तादाद' },
  editionUsed: {
    en: 'Page numbers follow edition {n}.',
    ar: 'أرقام الصفحات بحسب الطبعة {n}.',
    ur: 'صفحات کے نمبر طبع {n} کے مطابق ہیں۔',
    'ur-latn': 'Safhaat ke number tab\' {n} ke mutaabiq hain.',
    hi: 'सफ़हात के नंबर तबअ {n} के मुताबिक़ हैं।',
  },
  notesComing: {
    en: 'Notes for this chapter are being prepared.',
    ar: 'ملاحظات هذا الباب قيد الإعداد.',
    ur: 'اس باب کے نوٹس تیار کیے جا رہے ہیں۔',
    'ur-latn': 'Is baab ke notes tayyaar kiye ja rahe hain.',
    hi: 'इस बाब के नोट्स तैयार किए जा रहे हैं।',
  },
  notesReady: { en: 'Notes available', ar: 'الملاحظات متاحة', ur: 'نوٹس دستیاب', 'ur-latn': 'Notes dastiyaab', hi: 'नोट्स दस्तियाब' },
  previous: { en: 'Previous', ar: 'السابق', ur: 'پچھلا', 'ur-latn': 'Pichhla', hi: 'पिछला' },
  next: { en: 'Next', ar: 'التالي', ur: 'اگلا', 'ur-latn': 'Agla', hi: 'अगला' },
  basedOn: { en: 'Based on', ar: 'مأخوذ عن', ur: 'ماخذ', 'ur-latn': 'Maakhaz', hi: 'माख़ज़' },
  readIn: { en: 'Read in', ar: 'اقرأ بـ', ur: 'پڑھیے', 'ur-latn': 'Padhiye', hi: 'पढ़िए' },
  notTranslated: {
    en: 'Not yet available in this language.',
    ar: 'غير متوفر بهذه اللغة بعد.',
    ur: 'ابھی اس زبان میں دستیاب نہیں۔',
    'ur-latn': 'Abhi is zabaan mein dastiyaab nahin.',
    hi: 'अभी इस ज़बान में दस्तियाब नहीं।',
  },
  notFound: { en: 'Page not found', ar: 'الصفحة غير موجودة', ur: 'صفحہ نہیں ملا', 'ur-latn': 'Safha nahin mila', hi: 'सफ़हा नहीं मिला' },
} satisfies Record<string, Record<Locale, string>>;

export type UiKey = keyof typeof strings;

export function t(lang: Locale, key: UiKey, vars: Record<string, string | number> = {}): string {
  return strings[key][lang].replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}

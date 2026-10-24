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
  latest: { en: 'Latest', ar: 'الأحدث', ur: 'تازہ ترین', 'ur-latn': 'Taaza tareen', hi: 'ताज़ा तरीन' },
  browse: { en: 'Browse', ar: 'تصفّح', ur: 'دیکھیے', 'ur-latn': 'Dekhiye', hi: 'देखिए' },
  all: { en: 'All', ar: 'الكل', ur: 'سب', 'ur-latn': 'Sab', hi: 'सब' },
  menu: { en: 'Menu', ar: 'القائمة', ur: 'مینو', 'ur-latn': 'Menu', hi: 'मेन्यू' },
  language: { en: 'Language', ar: 'اللغة', ur: 'زبان', 'ur-latn': 'Zabaan', hi: 'ज़बान' },
  comingSoon: {
    en: 'Nothing here yet. New content is on the way, in sha Allah.',
    ar: 'لا يوجد محتوى هنا بعد. المحتوى الجديد في الطريق إن شاء الله.',
    ur: 'یہاں ابھی کچھ نہیں۔ نیا مواد ان شاء اللہ جلد آ رہا ہے۔',
    'ur-latn': 'Yahan abhi kuch nahin. Naya mawaad in sha Allah jald aa raha hai.',
    hi: 'यहाँ अभी कुछ नहीं। नया मवाद इन शा अल्लाह जल्द आ रहा है।',
  },
  standalone: { en: 'Standalone article', ar: 'مقالة مستقلة', ur: 'مستقل مضمون', 'ur-latn': 'Mustaqil mazmoon', hi: 'मुस्तक़िल मज़मून' },
  partOf: { en: 'Part {n} of', ar: 'الجزء {n} من', ur: 'حصہ {n}:', 'ur-latn': 'Hissa {n}:', hi: 'हिस्सा {n}:' },
  parts: { en: 'parts', ar: 'أجزاء', ur: 'حصے', 'ur-latn': 'hisse', hi: 'हिस्से' },
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
  seriesIntro: {
    en: 'Multi-part collections, read in order.',
    ar: 'مجموعات متعددة الأجزاء تُقرأ بالترتيب.',
    ur: 'کئی حصوں پر مشتمل سلسلے، ترتیب سے پڑھیے۔',
    'ur-latn': 'Kai hisson par mushtamil silsile, tarteeb se padhiye.',
    hi: 'कई हिस्सों पर मुश्तमिल सिलसिले, तरतीब से पढ़िए।',
  },
  articlesIntro: {
    en: 'Independent pieces that stand on their own, from every section.',
    ar: 'مقالات مستقلة قائمة بذاتها من كل الأقسام.',
    ur: 'ہر حصے سے وہ مضامین جو اپنی جگہ مکمل ہیں۔',
    'ur-latn': 'Har hisse se woh mazameen jo apni jagah mukammal hain.',
    hi: 'हर हिस्से से वो मज़ामीन जो अपनी जगह मुकम्मल हैं।',
  },
  notFound: { en: 'Page not found', ar: 'الصفحة غير موجودة', ur: 'صفحہ نہیں ملا', 'ur-latn': 'Safha nahin mila', hi: 'सफ़हा नहीं मिला' },
} satisfies Record<string, Record<Locale, string>>;

export type UiKey = keyof typeof strings;

export function t(lang: Locale, key: UiKey, vars: Record<string, string | number> = {}): string {
  return strings[key][lang].replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}

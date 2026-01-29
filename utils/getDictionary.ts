import 'server-only';

import { Locale } from '@/root/i18n-config';

const dictionaries = {
  en: () => import('../i18n/en.json').then(module => module.default),
  it: () => import('../i18n/it.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();

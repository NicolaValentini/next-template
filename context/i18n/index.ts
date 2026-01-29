'use client';

import { createContext, Dispatch, SetStateAction } from 'react';

import en from '@/i18n/en.json';
import { Locale } from '@/root/i18n-config';

export type Dictionary = typeof en;

export type i18nData = {
  locale: Locale;
  dictionary: Dictionary;
};

type i18nContext = i18nData & {
  setI18n: Dispatch<SetStateAction<i18nData>>;
};

export const I18nContext = createContext<i18nContext>({
  locale: 'en',
  dictionary: en,
  setI18n: () => {},
});

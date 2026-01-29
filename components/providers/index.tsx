'use client';

import { FC, ReactNode, useState } from 'react';

import { Locale } from '@/root/i18n-config';
import { Dictionary, I18nContext, i18nData } from '@/context';

type Props = {
  locale: Locale;
  children: ReactNode;
  dictionary: Dictionary;
};

export const Providers: FC<Props> = ({
  locale: initialLocale,
  dictionary: initialDictionary,
  children,
}) => {
  const [{ locale, dictionary }, setI18n] = useState<i18nData>({
    locale: initialLocale,
    dictionary: initialDictionary,
  });

  return (
    <I18nContext.Provider value={{ locale, dictionary, setI18n }}>
      {children}
    </I18nContext.Provider>
  );
};

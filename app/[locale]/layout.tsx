import { ReactNode } from 'react';

import { getDictionary } from '@/utils';
import { Providers } from '@/components';
import { Locale } from '@/root/i18n-config';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function Layout({ children, params }: Props) {
  const locale = (await params).locale as Locale;

  await new Promise(resolve => setTimeout(resolve, 3000));

  const dictionary = await getDictionary(locale);

  return (
    <Providers locale={locale} dictionary={dictionary}>
      {children}
    </Providers>
  );
}

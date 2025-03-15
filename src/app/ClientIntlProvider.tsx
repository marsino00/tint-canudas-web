"use client";

import { NextIntlClientProvider } from "next-intl";
import { useState } from "react";
import LanguageSwitcher from "./components/layout/LanguageSwitcher";

type ClientIntlProviderProps = {
  initialLocale: string;
  initialMessages: Record<string, unknown>;
  children: React.ReactNode;
};

export default function ClientIntlProvider({
  initialLocale,
  initialMessages,
  children,
}: ClientIntlProviderProps) {
  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(initialMessages);

  const switchLocale = async (newLocale: string) => {
    const newMessages = (await import(`../../messages/${newLocale}.json`))
      .default;
    setLocale(newLocale);
    setMessages(newMessages);
  };

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="Europe/Madrid"
    >
      {children}
      <LanguageSwitcher currentLocale={locale} switchLocale={switchLocale} />
    </NextIntlClientProvider>
  );
}

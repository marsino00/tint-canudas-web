import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "ca";

  return {
    locale,
    timeZone: "Europe/Madrid",
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

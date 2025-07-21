import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Desteklenen diller
export const locales = ["tr", "bg"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Desteklenmeyen diller için 404
  if (!locale || !locales.includes(locale as Locale)) notFound();

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});

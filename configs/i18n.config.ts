import { NuxtVueI18n } from "nuxt-i18n";

export const i18n: NuxtVueI18n.Options.AllOptionsInterface = {
  locales: [{ code: "en", iso: "en-US", file: "en.js" }],
  defaultLocale: "en",
  vueI18n: {
    fallbackLocale: "en"
  },
  lazy: true,
  langDir: "locales/"
};

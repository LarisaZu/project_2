import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const i18nTestInstance = i18n.createInstance();

i18nTestInstance.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "ru",

  ns: ["translation", "about", "main"],
  defaultNS: "translation",
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: { en: { translations: {} } },
});

export default i18nTestInstance;

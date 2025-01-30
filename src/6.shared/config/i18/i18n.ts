import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// const i18nInstance = i18n.createInstance();

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    lng: "ru",
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false,
    },
    backend: {
      // loadPath: () => {
      //   const isStorybook =
      //     window.location.pathname.includes("storybook-static");
      //   return isStorybook
      //     ? "/storybook-static/locales/{{lng}}/{{ns}}.json"
      //     : "/locales/{{lng}}/{{ns}}.json";
      // },
      requestOptions: {
        cache: "no-store",
      },
    },
  });

export default i18n;

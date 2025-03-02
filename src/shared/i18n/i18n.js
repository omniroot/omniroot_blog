import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import enTranslation from "./en.json";
import ruTranslation from "./ru.json";

i18n
  .use(Backend) // используем бэкенд для загрузки переводов
  .use(initReactI18next)
  .init({
    lng: "en", // язык по умолчанию
    fallbackLng: "en", // язык по умолчанию, если перевод не найден
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    // backend: {
    //   loadPath: "/{{lng}}json", // путь к вашим JSON-файлам
    // },
    interpolation: {
      escapeValue: false, // не нужно для React
    },
  });

export default i18n;

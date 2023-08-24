import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./translations/en.json";
import hiTranslation from "./translations/hi.json";

// Configure i18next
i18n.use(initReactI18next).init({
  lng: "en", // Set the default language
  fallbackLng: "en",
  resources: {
    en: { translation: enTranslation },
    hi: { translation: hiTranslation },
  },
});

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es";
import en from "./en";
import zh from "./zh";

i18n.use(initReactI18next).init({
  resources: {
    es: typeof es === "object" ? es : { translation: es },
    en: typeof en === "object" ? en : { translation: en },
    zh: typeof zh === "object" ? zh : { translation: zh },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

export default i18n;

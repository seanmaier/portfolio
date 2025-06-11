import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import global_en from "./translations/en/global.json";
import global_de from "./translations/de/global.json";
import global_sv from "./translations/sv/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { getStoredLanguage, LANGUAGE_KEY } from "./utils/language.ts";

i18next.init({
  lng: getStoredLanguage(),
  fallbackLng: "en",
  resources: {
    en: {
      global: global_en,
    },
    de: {
      global: global_de,
    },
    sv: {
      global: global_sv,
    },
  },
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  debug: true,
});

i18next.on("languageChanged", (lng) => {
  localStorage.setItem(LANGUAGE_KEY, lng);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
);

export type Languages = "en" | "de" | "sv";

export const LANGUAGE_KEY = "lang";

export const getStoredLanguage = () => {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  return stored ? (stored as Languages) : "en";
};

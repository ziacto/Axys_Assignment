import React, { createContext, useState, useContext } from "react";
import Translations from "../src/Translation";

const Languagecontext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => {
    return Translations[language]?.[key] ?? key;
  };

  return (
    <Languagecontext.Provider value={{ language, setLanguage, t }}>
      {children}
    </Languagecontext.Provider>
  );
};

export const useLanguage = () => useContext(Languagecontext);
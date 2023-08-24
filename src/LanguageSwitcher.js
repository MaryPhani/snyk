import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageProvider";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    changeLanguage(language);
  };

  return (
    <div>
      <select value={currentLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
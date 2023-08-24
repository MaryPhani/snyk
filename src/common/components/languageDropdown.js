import React, { useState, useContext } from "react";
import { BDropdown } from "./bDropdown/bDropdown";
import BImage from "./BImage";
import flagIconIndia from "../../assets/images/flag-icons-in.svg";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../LanguageProvider";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  const [activeCountry, setActiveCountry] = useState(currentLanguage);
  const dropDownItems = [
    {
      label: "IND-Eng",
      key: "en",
      icon: <BImage src={flagIconIndia} height={16} width={16} />,
    },
    {
      label: "IND-hi",
      key: "hi",
      icon: <BImage src={flagIconIndia} height={16} width={16} />,
    },
  ];

  const handleLanguageChange = (e) => {
    setActiveCountry(e.key);
    changeLanguage(e.key);
  };

  const dropdownProps = {
    items: dropDownItems,
    handleMenuClick: (e) => {
      handleLanguageChange(e);
    },
    selectable: true,
    defaultSelectedKeys: activeCountry,
  };
  return (
    <div>
      <BDropdown dropdownProps={dropdownProps} />
    </div>
  );
};

export default LanguageDropdown;

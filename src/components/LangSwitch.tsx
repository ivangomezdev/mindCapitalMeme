"use client";
import React, { useEffect, useState } from "react";
import "./langSwitch.css";
import { useTranslation } from "react-i18next";
const LangSwitch = () => {
  const [Lang, setLang] = useState(true); 
  const { t, i18n } = useTranslation("community");

  // Función para manejar el cambio de idioma
  const handleLanguageSwitch = () => {
    setLang(!Lang); // Alterna el estado del checkbox
  };

  // Sincroniza el idioma con i18next cuando Lang cambia
  useEffect(() => {
    const newLanguage = Lang ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  }, [Lang, i18n]);

  return (
    <label className="switch">
      <input
        checked={Lang}
        type="checkbox"
        onClick={handleLanguageSwitch}
        className="toggle"
      />
      <span className="slider"></span>
      <span className="card-side"></span>
    </label>
  );
};

export default LangSwitch;

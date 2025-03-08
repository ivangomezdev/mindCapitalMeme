"use client"; // Añade esto para asegurar que solo se ejecute en el cliente

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommunity from "../locales/en/community.json";
import esCommunity from "../locales/es/community.json";
import esToken from "../locales/es/token.json";
import enToken from "../locales/en/token.json";
import enMain from "../locales/en/main.json";
import esMain from "../locales/es/main.json";
import enWhyBuy from "../locales/en/whyBuy.json";
import esWhyBuy from "../locales/es/whyBuy.json";
import enRoadMap from "../locales/en/roadmap.json";
import esRoadMap from "../locales/es/roadmap.json";
const resources = {
  en: {
    community: enCommunity,
    token: enToken,
    main: enMain,
    whyBuy: enWhyBuy,
    roadMap: enRoadMap,
  },
  es: {
    community: esCommunity,
    token: esToken,
    main: esMain,
    whyBuy: esWhyBuy,
    roadMap: esRoadMap,
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    debug: true, 
    fallbackLng: "es",
    resources,
    ns: ["community", "token", "main", "whyBuy", "roadMap"],
    defaultNS: "community",
  });
}

export default i18n;

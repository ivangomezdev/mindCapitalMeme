"use client"
import React from "react";
import "./whyBuy.css"
import Image from "next/image";
import I18nProvider from "./I18nProvider";
import { useTranslation } from "react-i18next";
const WhyBuy = () => {
  const {t} = useTranslation("whyBuy")
  return (
    <I18nProvider>
    <div  className="whyBuy__content">
      <h1 className="whyBuy__title">{t("whyTitle")}</h1>
      <div className="whyBuy__textContent">
        <Image
        width={400}
        height={300}
         src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1741025326/coin-removebg-preview_oirzku.png" alt="" />
        <ul>
          <li>
            <strong>{t("whyTitleItem1")}</strong> {t("whyItem1")}
          </li>
          <li>
            <strong>{t("whyTitleItem2")}</strong>  {t("whyItem2")}
          </li>
          <li>
            <strong>{t("whyTitleItem3")}</strong>  {t("whyItem3")}
          </li>
          <li>
            <strong>{t("whyTitleItem4")}</strong>  {t("whyItem4")}
          </li>
          <li>
            <strong>{t("whyTitleItem5")}</strong>  {t("whyItem5")}
          </li>
          <li>
            <strong>{t("whyTitleItem6")}</strong>  {t("whyItem6")}
          </li>
        </ul>
      </div>
    </div>
    </I18nProvider>
  );
};

export default WhyBuy;

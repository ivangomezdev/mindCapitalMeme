"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import I18nProvider from "./I18nProvider"; 
import "./community.css";

const Community = () => {
  const { t } = useTranslation("community");

  return (
    <I18nProvider>
      <div className="community">
        <div className="community__container">
          <div className="community__header">
            <div className="community__logo-container">
              <Image
                src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740768075/49378cc9-abb8-4efa-95cb-528ae1bb41ea-removebg-preview_ml5zx2.png"
                alt="Logo"
                className="community__logo"
                height={80}
                width={80}
              />
            </div>
            <div className="community__tagline">
              <h1 className="community__title">
              {t("quote")} 
              </h1>
            </div>
            <div className="community__cta">
              <button className="community__buy-button">Buy $MCapital</button>
            </div>
          </div>

          <div className="community__content">
            <div className="community__disclaimer">
              <h2 className="community__disclaimer-title">{t("disclaimerTitle")}</h2>
              <p className="community__disclaimer-text">{t("disclaimerText1")}</p>
              <p className="community__disclaimer-text">{t("disclaimerText2")}</p>
              <a href="#" className="community__learn-more">
                {t("learnMore")}{" "}
                <span className="community__learn-more-icon">↗</span>
              </a>
              <p className="community__copyright">© 2025 MCapital.Site</p>
            </div>

            <div className="community__join">
              <h2 className="community__join-title">{t("inviteCommunity")}</h2>
              <div className="community__social-buttons">
                <button className="community__social-button community__social-button--telegram">
                  Telegram
                </button>
                <button className="community__social-button community__social-button--twitter">
                  Twitter
                </button>
              </div>
              <div className="community__mascot">
                <Image
                width={40}
                height={40}
                  src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740768075/49378cc9-abb8-4efa-95cb-528ae1bb41ea-removebg-preview_ml5zx2.png"
                  alt="Grumpy Mascot"
                  className="community__mascot-image"
                />
                <span className="community__mascot-name">$MCapital</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
};

export default Community;
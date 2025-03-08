"use client";
import Image from "next/image";
import "./roadMap.css";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import I18nProvider from "./I18nProvider";
export default function Roadmap() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("roadMap");

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const phases = entry.target.querySelectorAll(".phase-container");
              phases.forEach((phase, index) => {
                phase.classList.add("animate-in");
                (phase as HTMLElement).style.animationDelay = `${index * 0.5}s`;
              });
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );
    
      const currentRoadmapRef = roadmapRef.current; // Guardamos la referencia
    
      if (currentRoadmapRef) {
        observer.observe(currentRoadmapRef);
      }
    
      return () => {
        if (currentRoadmapRef) {
          observer.unobserve(currentRoadmapRef);
        }
      };
    }, []);
    
  return (
    <I18nProvider>
      <div className="roadmap-container" ref={roadmapRef}>
        <Image
          alt="moon"
          src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1741116728/Dise%C3%B1o_sin_t%C3%ADtulo_1_l770ou.gif"
          className="candle"
          width={300}
          height={300}
        />

        <h1 className="roadmap-title">ROADMAP</h1>

        <div className="phase-container">
          <div className="phase-dot"></div>
          <div className="phase-content phase1">
            <h2 className="phase-title">{t("roadmapTitle1")}</h2>
            <ul className="phase-list">
              <li>{t("roadmapItem1")}</li>
              <li>{t("roadmapItem2")}</li>
              <li>{t("roadmapItem3")}</li>
            </ul>
          </div>
          <div className="phase-line"></div>
        </div>

        <div className="phase-container">
          <div className="phase-dot"></div>
          <div className="phase-content phase2">
            <h2 className="phase-title">{t("roadmapTitle2")}</h2>
            <ul className="phase-list">
              <li>{t("roadmapItem4")}</li>
              <li>{t("roadmapItem5")}</li>
              <li>{t("roadmapItem6")}</li>
              <li>{t("roadmapItem7")}</li>
            </ul>
          </div>
          <div className="phase-line"></div>
        </div>

        <div className="phase-container">
          <div className="phase-dot"></div>
          <div className="phase-content phase3">
            <h2 className="phase-title">{t("roadmapTitle3")}</h2>
            <ul className="phase-list">
              <li>{t("roadmapItem8")}</li>
              <li>{t("roadmapItem9")}</li>
              <li>{t("roadmapItem10")}</li>
              <li>{t("roadmapItem11")}</li>
            </ul>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}

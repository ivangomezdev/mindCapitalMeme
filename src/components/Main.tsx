"use client";
import Image from "next/image";
import SolanaButton from "./BuyButton";
import { useEffect, useRef } from "react";

import "./main.css";

const Main = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".text-line").forEach((el) => {
              el.classList.add("is-visible");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="hero-container" ref={heroRef}>
      <div className="text-container">
        <h1 className="hero-text">
          <div className="text-line line-1">LA MEMECOIN</div>
          <div className="text-line line-2">
            <span>DE LA COMUNIDAD</span>
            <div className="mindCapImg">
              <Image
                src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1741282808/MCP-removebg-preview_fjyst9.png"
                alt=""
                width={270}
                height={250}
              />
            </div>
          </div>
          <div className="text-line line-3">
            MINDCAP
            <span className="letter-i-container">
              <span className="letter-i">I</span>
              <Image
                src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1741296960/mindcolibriedit-removebg-preview_1_wyx6vb.png" // Cambia esta URL por tu imagen de punto
                alt="dot for i"
                width={55}
                height={55}
                className="dot-image"
              />
            </span>
            TAL
          </div>
        </h1>
        <div className="description-container">
          <Image
            src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740774488/7a4eb05d-7a2f-4810-a1df-de62cc403cc3-removebg-preview_1_q7velz.png"
            alt=""
            width={500}
            height={300}
          />
          <div className="description-containerText">
            <p>
              Somos la comunidad afectada por el esquema Ponzi de MindCapital.
              Creamos esta memecoin para recuperar lo que nos prometieron.
              <span style={{ fontWeight: "bold", color: "#00A5AD" }}>
                {" "}
                El 70% de las ganancias irá a financiar una demanda contra ellos{" "}
              </span>
              , y el 30% se reinvertirá en la publicidad del proyecto. ¡La
              venganza es descentralizada! 🚀
            </p>
            <SolanaButton />
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Main;
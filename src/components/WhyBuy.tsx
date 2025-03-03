import React from "react";
import "./whyBuy.css"
import Image from "next/image";
const WhyBuy = () => {
  return (
    <div  className="whyBuy__content">
      <h1 className="whyBuy__title">POR QUÉ INVERTIR</h1>
      <div className="whyBuy__textContent">
        <Image
        width={500}
        height={300}
         src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1741025326/coin-removebg-preview_oirzku.png" alt="" />
        <ul>
          <li>
            <strong>Justicia descentralizada:</strong> Contribuye a financiar
            una demanda contra MindCapital.
          </li>
          <li>
            <strong>Comunidad fuerte:</strong> Somos un grupo unido con un
            objetivo común.
          </li>
          <li>
            <strong>Reinversión estratégica:</strong> El 30% de las ganancias se
            usa para hacer crecer el proyecto.
          </li>
          <li>
            <strong>Transparencia total:</strong> Fondos gestionados de manera
            pública y verificable.
          </li>
          <li>
            <strong>Potencial de crecimiento:</strong> Cuanto más grande la
            comunidad, mayor el impacto.
          </li>
          <li>
            <strong>Memecoin con propósito:</strong> No es solo un meme, es una
            causa.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyBuy;

import Image from "next/image";
import SolanaButton from "./BuyButton";

import "./main.css";

const Main = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1 className="hero-text">
          <div className="text-line line-1">LA MEMECOIN</div>
          <div className="text-line line-2">
            <div className="solanaButton">
            <SolanaButton />
            </div>
            <span>DE LA COMUNIDAD</span>
          </div>
          <div className="text-line line-3">MINDCAPITAL</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

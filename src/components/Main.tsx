"use client"
import React, { useEffect, useState } from "react";
import "./main.css";
import Contract from "./Contract";


const Main = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Al montar el componente, activamos la animación
      setIsVisible(true);
    }, []);
  return (
    <div className="main__content">
      <div className={`main__text ${isVisible ? 'visible' : ''}`}>
        <h1>
          {" "}
          <span>Mind Capital</span> una nueva memecoin impulsada por la
          comunidad
        </h1>
        <p>
          Abrace el futuro: no más promesas incumplidas, solo energía pura de
          Memecoin Los poseedores de Mind Capital se han quedado atrapados en la
          incertidumbre. Es hora de un nuevo comienzo: <span style={{color:"#00A5AD"}}> una memecoin impulsada
          por la comunidad con un potencial infinito.</span>
        </p>
        
     <Contract/> 
      </div>
      
    </div>
  );
};

export default Main;

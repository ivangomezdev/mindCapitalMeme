"use client"
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import "./navBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Cambia cuando el scroll es mayor a 50px
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={clsx("navbar", { "navbar-scrolled": isScrolled })}>
      <div className="navbar-container">
        <img src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740678602/logo_ggl1yp.svg" />
        <div className="menu-desktop">
          <a className="navbar__underline-hover" href="#">Home</a>
          <a className="navbar__underline-hover" href="#">Acerca de</a>
          <a className="navbar__underline-hover" href="#">Comunidad</a>
          <a className="navbar__underline-hover" href="#">Dirección de contrato</a>
        </div>
        <button className="menu-button">Ingresa a la Mind Capital Army</button>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="menu-mobile">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </div>
      )}
    </nav>
  );
}


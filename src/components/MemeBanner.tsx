"use client"
import { useState, useEffect } from "react";
import "./memeBanner.css";

const MemeBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://res.cloudinary.com/dc5zbh38m/image/upload/v1740959652/aaaa1-removebg-preview_dddvvu.png",
    "https://res.cloudinary.com/dc5zbh38m/image/upload/v1740960413/aaaaa32_ixwdb2.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 6000); // Intervalo total de 6 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="imgBanner">
      <img
        width={450}
        height={300}
        src={images[currentImage]}
        alt=""
        className="bannerImage"
      />
    </div>
  );
};

export default MemeBanner;
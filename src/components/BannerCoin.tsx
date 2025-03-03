"use client"
import Image from 'next/image'
import "./bannerCoin.css"

export default function BannerCoin() {
  const repeatCount = 5; // Número de elementos a mostrar
  const items = Array.from({ length: repeatCount });

  // Duplicamos los elementos para crear un efecto continuo
  return (
    <div className="bannerCoin__container">
      <div className="bannerCoin__Content">
        {items.map((_, index) => (
          <div key={`first-${index}`} className="bannerCoin__Item">
            <h3>BUY $MCAPITAL</h3>
            <Image 
              alt=""
              src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740692093/Logo_Tienda_Ecol%C3%B3gica_Minimalista_Beige-removebg-preview_nykxiq.png"
              width={80}
              height={80}
            />
          </div>
        ))}
        {/* Duplicamos los elementos para el efecto seamless */}
        {items.map((_, index) => (
          <div key={`second-${index}`} className="bannerCoin__Item">
            <h3>BUY $MCAPITAL</h3>
            <Image 
              alt=""
              src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740692093/Logo_Tienda_Ecol%C3%B3gica_Minimalista_Beige-removebg-preview_nykxiq.png"
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
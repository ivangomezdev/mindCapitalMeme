"use client"
import React, { useEffect, useRef } from 'react'
import "./contract.css"
const Contract = () => {
    const divRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Añade la clase al entrar
            } else {
              entry.target.classList.remove('visible'); // Quita la clase al salir
            }
          });
        },
        { threshold: 0.1 } // Se activa cuando el 10% del elemento es visible
      );
  
      if (divRef.current) {
        observer.observe(divRef.current);
      }
  
      return () => {
        if (divRef.current) {
          observer.unobserve(divRef.current);
        }
      };
    }, []);
  
  return (
    <div className='contract__cont'>
      <h4>MindCapital Address</h4>
     
      <div className='contract__number' ref={divRef}>
      <img className='contract__coin' src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740692093/Logo_Tienda_Ecol%C3%B3gica_Minimalista_Beige-removebg-preview_nykxiq.png" alt="" />
      <p>Próximamente...</p> 
      </div>
      
    </div>
  )
}

export default Contract

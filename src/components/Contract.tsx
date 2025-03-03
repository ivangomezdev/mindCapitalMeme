"use client"
import React, { useEffect, useRef } from 'react'
import "./contract.css"

const Contract = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const div = divRef.current;

    if (!div) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(div);

    return () => {
      observer.unobserve(div); 
    };
  }, []);

  return (
    <div className='contract__cont'>
      <h4>MindCapital Address</h4>
      <div className='contract__number' ref={divRef}>
        <div className='contract__coin'></div>
        <p>Próximamente...</p> 
      </div>
      <p>hasdhasdhashdashdhasdhasdhashdashd</p>
    </div>
  );
}

export default Contract;

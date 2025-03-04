"use client"
import "./roadMap.css"
import { useEffect, useRef } from 'react'

export default function Roadmap() {
  const roadmapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const phases = entry.target.querySelectorAll('.phase-container')
            phases.forEach((phase, index) => {
              phase.classList.add('animate-in');
              // Añadimos delay diferente a cada fase
              (phase as HTMLElement).style.animationDelay = `${index * 0.5}s`
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1 // Se dispara cuando el 10% del elemento es visible
      }
    )

    if (roadmapRef.current) {
      observer.observe(roadmapRef.current)
    }

    return () => {
      if (roadmapRef.current) {
        observer.unobserve(roadmapRef.current)
      }
    }
  }, [])

  return (
    <div className="roadmap-container" ref={roadmapRef}>
      <h1 className="roadmap-title">ROADMAP</h1>

      <div className="phase-container">
        <div className="phase-dot"></div>
        <div className="phase-content phase1">
          <h2 className="phase-title">FASE 1: Despliegue</h2>
          <ul className="phase-list">
            <li>Lanzamiento seguro de $MCapital en BRC-20</li>
            <li>Crecer la comunidad en X Y Telegram</li>
            <li>Recompensa a primeros usuarios por difundir</li>
          </ul>
        </div>
        <div className="phase-line"></div>
      </div>

      <div className="phase-container">
        <div className="phase-dot"></div>
        <div className="phase-content phase2">
          <h2 className="phase-title">FASE 2: Lanzamiento</h2>
          <ul className="phase-list">
            <li>Liquidez en DEX: Añadir liquidez en Raydium u Orca para facilitar el trading inicial.</li>
            <li>Airdrop Estratégico: Distribuir tokens a early adopters, influencers y holders de otras memecoins en Solana.</li>
            <li>Campañas en X (Twitter), Telegram y Discord con memes virales y engagement.</li>
            <li>Registrar la memecoin en CoinGecko, CoinMarketCap y Birdeye para mayor visibilidad.</li>
          </ul>
        </div>
        <div className="phase-line"></div>
      </div>

      <div className="phase-container">
        <div className="phase-dot"></div>
        <div className="phase-content phase3">
          <h2 className="phase-title">FASE 3: Justicia ON-Chain</h2>
          <ul className="phase-list">
            <li>Primer Retiro para la Demanda: Publicar las primeras transferencias de fondos al equipo legal con total transparencia.</li>
            <li>DAO de la Comunidad: Implementar una DAO donde los holders voten sobre los siguientes pasos legales y estratégicos.</li>
            <li>Alianzas Estratégicas: Conectar con otros proyectos cripto y comunidades afectadas para ganar más tracción.</li>
            <li>Campaña La Venganza es Descentralizada: Potenciar el marketing con influencers y medios para exponer el caso y atraer más apoyo.</li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}


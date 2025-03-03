"use client"
import "./roadMap.css"

export default function Roadmap() {
  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">ROADMAP</h1>

      <div className="phase-container">
        <div className="phase-dot"></div>
        <div className="phase-content">
          <h2 className="phase-title">Fase 1: Despliegue</h2>
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
        <div className="phase-content">
          <h2 className="phase-title">Fase 2: Lanzamiento</h2>
          <ul className="phase-list">
            <li>Liquidez en DEX:  Añadir liquidez en Raydium u Orca para facilitar el trading inicial.</li>
            <li>Airdrop Estratégico: Distribuir tokens a early adopters, influencers y holders de otras memecoins en Solana.</li>
            <li>Campañas en X (Twitter), Telegram y Discord con memes virales y engagement.</li>
            <li>Registrar la memecoin en CoinGecko, CoinMarketCap y Birdeye para mayor visibilidad.</li>
          </ul>
        </div>
        <div className="phase-line"></div>
      </div>

      <div className="phase-container">
        <div className="phase-dot"></div>
        <div className="phase-content">
          <h2 className="phase-title">Fase 3: Justicia ON-Chain</h2>
          <ul className="phase-list">
            <li>Primer Retiro para la Demanda: Publicar las primeras transferencias de fondos al equipo legal con total transparencia.</li>
            <li>DAO de la Comunidad: Implementar una DAO donde los holders voten sobre los siguientes pasos legales y estratégicos.</li>
            <li>OAlianzas Estratégicas: Conectar con otros proyectos cripto y comunidades afectadas para ganar más tracción.</li>
            <li>Campaña La Venganza es Descentralizada: Potenciar el marketing con influencers y medios para exponer el caso y atraer más apoyo.</li>
          </ul>
        </div>
        <div className="phase-line last-line"></div>
      </div>

 
    </div>
  )
}


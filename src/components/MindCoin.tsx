import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import "./MindCoin.css";
export default function MindCoin() {
  return (
    <main className="main-container">
      <div className="container">
        <div className="hero-section">
          <Image
            src={
              "https://res.cloudinary.com/dc5zbh38m/image/upload/v1741048747/Dise%C3%B1o_sin_t%C3%ADtulo__11_-removebg-preview_v8plou.png"
            }
            alt=""
            width={400}
            height={400}
          />

          <div className="hero-content">
            <h1 className="title">TOKEN</h1>
            <div className="description">
              <p>
               $MCapital no es solo otro token, esta construido sobre ERC20.
              </p>
              <p>Uno de los protocolos más rápidos en crecimiento que existen</p>
              <p>
                Olvida el Hype, Subete a la ola. Estamos presentes en
              </p>
              <p>Twitter y telegram, no olvides seguirnos!</p>
            </div>

            <div className="cta-buttons">
              <button className="primary-button">COMPRA $MCapital</button>
              <Link href="#" className="secondary-button">
                Descubre Más
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Token supply info */}
        <div className="token-info">
          <div className="token-grid">
            <div className="token-stat">
              <div className="token-icon">
                <Image
                  src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1741050656/dollarbill-removebg-preview_m0fykq.png"
                  alt="Money stack"
                  width={40}
                  height={40}
                />
              </div>
              <div className="token-details">
                <p className="stat-label">Total Supply</p>
                <p className="stat-value">
                  21,000,000,000 (21 Billones)
                </p>
              </div>
            </div>

            <div className="token-stat">
              <div className="token-icon">
                <Image
                  src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1741050661/images-removebg-preview_skmtju.png"
                  alt="Money bag"
                  width={40}
                  height={40}
                />
              </div>
              <div className="token-details">
                <p className="stat-label">Max Supply</p>
                <p className="stat-value">1,000,000 (1 Millón)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

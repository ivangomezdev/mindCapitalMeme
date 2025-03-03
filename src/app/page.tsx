import Main from "@/components/Main"
import Navbar from "@/components/NavBar"
import "./globals.css"
import { VerticalNav } from "@/components/verticalNav"

export default function Home() {
  return (
    <div>
      <VerticalNav />
      <section id="about" className="home__main">
        <div className="background-layer"></div>
        <Navbar />
        <Main />
        <div className="home__img">
          <img
            src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740901067/los_n%C3%BAmeros_no_mienten__nosotros_s%C3%AD.__2_-removebg-preview_ptpnbo.png"
            alt=""
          />
        </div>
      </section>
      <div  className="imgBanner">
      <img src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740959652/aaaa1-removebg-preview_dddvvu.png" alt="" />
      <hr className="verticalLine" />
      <img src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740960413/aaaaa32_ixwdb2.png" alt="" />
      </div>
      <section id="where-to-buy">
        <h2>Where To Buy Section</h2>
      </section>

      <section id="disclaimer">
        <h2>Disclaimer Section</h2>
      </section>

      <section id="roadmap">
        <h2>Roadmap Section</h2>
      </section>

      <section id="token">
        <h2>Token Section</h2>
      </section>
    </div>
  )
}


import Main from "@/components/Main"
import Navbar from "@/components/NavBar"
import "./globals.css"
import { VerticalNav } from "@/components/verticalNav"

export default function Home() {
  return (
    <div>
      <VerticalNav />
      <section id="about" className="home__main">
        <Navbar />
        <Main />
        <div className="home__img">
          <img
            src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740775153/los_n%C3%BAmeros_no_mienten__nosotros_s%C3%AD.__1_-removebg-preview_arzvqb.png"
            alt=""
          />
        </div>
      </section>
      <img
        className="imgBanner"
        src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740771798/BUY_MCAPITAL_ny4c3z.png"
      />
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


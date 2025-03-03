import Main from "@/components/Main"
import Navbar from "@/components/NavBar"
import "./globals.css"
import { VerticalNav } from "@/components/verticalNav"
import Roadmap from "@/components/RoadMap"
import WhyBuy from "@/components/WhyBuy"

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

      <section id="whyBuy" className="whyBuy__section" >
       <WhyBuy/>
      </section>
      <div  className="imgBanner">
      <img src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740959652/aaaa1-removebg-preview_dddvvu.png" alt="" />
      <hr className="verticalLine" />
      <img src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740960413/aaaaa32_ixwdb2.png" alt="" />
      </div>
      <section className="roadMap__section" id="roadmap">
        <Roadmap/>
      </section>

      <section id="disclaimer">
     
      </section>



      <section id="token">
        <h2></h2>
      </section>
    </div>
  )
}


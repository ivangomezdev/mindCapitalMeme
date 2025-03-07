import Main from "@/components/Main";
import Navbar from "@/components/NavBar";
import "./globals.css";
import Roadmap from "@/components/RoadMap";
import WhyBuy from "@/components/WhyBuy";
import Image from "next/image";
import BannerCoin from "@/components/BannerCoin";
import MindCoin from "@/components/MindCoin";
import Community from "@/components/Community";

export default function Home() {
  return (
    <div>
      <section id="home" className="home__main">
   
        <Navbar />
        <Main />
        <div className="home__img">
          <Image
            src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740901067/los_n%C3%BAmeros_no_mienten__nosotros_s%C3%AD.__2_-removebg-preview_ptpnbo.png"
            alt=""
            width={500}
            height={300}
            priority
          />
        </div>
      </section>
      <BannerCoin />
      <section id="whyBuy" className="whyBuy__section">
        <WhyBuy />
      </section>
      <div className="imgBanner">
        <Image
          width={450}
          height={300}
          priority
          src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740959652/aaaa1-removebg-preview_dddvvu.png"
          alt=""
        />
        <hr className="verticalLine" />
        <Image
          width={400}
          height={300}
          priority
          src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740960413/aaaaa32_ixwdb2.png"
          alt=""
        />
      </div>
      <section className="roadMap__section" id="roadmap">
        <Roadmap />
      </section>

      <section id="token">
        <MindCoin />
      </section>

      <section id="community">
        <Community />
      </section>
    </div>
  );
}

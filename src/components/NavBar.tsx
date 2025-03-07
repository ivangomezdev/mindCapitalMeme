import "./navBar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import RequestQuoteRoundedIcon from "@mui/icons-material/RequestQuoteRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import LangSwitch from "./LangSwitch";
export default function Navbar() {
  return (
    <nav className="navBar__content">
      <a href="#home" className="navBar__navigatorCont">
        <HomeRoundedIcon />
        <p>Home</p>
      </a>

      <a href="#whyBuy" className="navBar__navigatorCont">
        <InfoRoundedIcon />
        <p>Info</p>
      </a>

      <a href="#roadmap" className="navBar__navigatorCont">
        <MapRoundedIcon />
        <p>RoadMap</p>
      </a>

      <a href="#token" className="navBar__navigatorCont">
        <RequestQuoteRoundedIcon />
        <p>Token</p>
      </a>

      <a href="#community" className="navBar__navigatorCont">
        <PeopleRoundedIcon />
        <p>Comunidad</p>
      </a>

      <a className="navBar__lang">
        <LangSwitch/>
      </a>
    </nav>
  );
}

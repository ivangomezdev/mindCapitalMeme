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
      <div>
        <HomeRoundedIcon />
        <p>Home</p>
      </div>

      <div>
        <InfoRoundedIcon />
        <p>Info</p>
      </div>

      <div>
        <MapRoundedIcon />
        <p>RoadMap</p>
      </div>

      <div>
        <RequestQuoteRoundedIcon />
        <p>Token</p>
      </div>

      <div>
        <PeopleRoundedIcon />
        <p>Comunidad</p>
      </div>

      <div className="navBar__lang">
        <LangSwitch/>
      </div>
    </nav>
  );
}

import "./navBar.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navBar__content">
      <div className="navBar__logo">
        <Image
          src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740678602/logo_ggl1yp.svg"
          alt=""
          width={40}
          height={40}
        />
      </div>

      <div className="navBar__socialChips">
        <XIcon sx={{ color: "white", width: "20px" }} />
        <TelegramIcon sx={{ color: "white", width: "20px" }} />
      </div>
    </nav>
  );
}

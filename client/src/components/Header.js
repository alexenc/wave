import { Link } from "react-router-dom";
import Logo from "../assets/Surfing_Isometric (1).svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="main logo" />
      </Link>
    </header>
  );
};

export default Header;

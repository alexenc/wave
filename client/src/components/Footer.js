import EventListText from "./EventListText";
import Logo from "../assets/Surfing_Isometric (1).svg";

const Footer = () => {
  return (
    <footer>
      <div className="lastestEvents">
        <h3>Lastest events</h3>
        <EventListText />
      </div>
      <div className="logoFooter">
        <img style={{ width: 200 }} src={Logo} alt="main logo" />
      </div>
      <div className="socialsContainer">
        <h3>
          Developed by: <span>Alex encinas</span>
        </h3>
        <h3>
          Email:{" "}
          <span>
            <a href="mailto:alexencmer@gmail.com">alexencmer@gmail.com</a>
          </span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;

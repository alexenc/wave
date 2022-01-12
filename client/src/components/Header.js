import { Link } from "react-router-dom";
import Logo from "../assets/Surfing_Isometric (1).svg";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import Register from "./Register";
import { userEndSession } from "../redux/apiCalls";

const style = {
  position: "absolute",
  padding: 20,
  borderRadius: 10,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  backgroundColor: "#fff",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const user = useSelector((state) => state.user.user.user);
  const isAdmin = useSelector((state) => state.user.user.user?.isAdmin);
  const [open, setOpen] = useState(false);
  const [reglogin, setReglogin] = useState(false);
  const [show, handleShow] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
    setReglogin(false);
  };
  const handleReglogin = () => setReglogin(!reglogin);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <header className={`nav ${show && "nav-white"}`}>
      <Link to="/">
        <img src={Logo} alt="main logo" />
      </Link>
      <h2>Wave admin</h2>
      {user ? (
        <div style={{ paddingRight: 15 }}>
          <p>Welcome {user.username}</p>
          <p
            style={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={(e) => userEndSession(null, dispatch)}
          >
            Log out
          </p>
          {isAdmin && (
            <Link className="react-link" to="/admin">
              Admin panel
            </Link>
          )}
        </div>
      ) : (
        <div className="header-modal">
          <button className="btn-main" onClick={handleOpen}>
            Login
          </button>
          <Modal open={open} onClose={handleOpen}>
            <Box style={style}>
              {reglogin ? (
                <Register handleReglogin={handleReglogin} />
              ) : (
                <Login handleReglogin={handleReglogin} />
              )}
            </Box>
          </Modal>
        </div>
      )}
    </header>
  );
};

export default Header;

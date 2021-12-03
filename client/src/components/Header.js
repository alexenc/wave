import { Link } from "react-router-dom";
import Logo from "../assets/Surfing_Isometric (1).svg";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Login from "./Login";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  padding: 20,
  borderRadius: 10,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#fff",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const user = useSelector((state) => state.user.user.user);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="main logo" />
      </Link>
      <h2>Wave-admin</h2>
      {user ? (
        <p>hola {user.username}</p>
      ) : (
        <div>
          <Button onClick={handleOpen}>Login</Button>
          <Modal open={open} onClose={handleOpen}>
            <Box style={style}>
              <Login />
            </Box>
          </Modal>
        </div>
      )}
    </header>
  );
};

export default Header;

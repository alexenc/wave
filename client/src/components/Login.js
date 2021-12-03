import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/apiCalls";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin({ user }, dispatch);
  };

  return (
    <form>
      <label>Username or email</label>
      <input type="text" name="email" onChange={handleChange} />
      <label>Password</label>
      <input type="password" name="password" onChange={handleChange} />
      <Button type="submit" onClick={handleSubmit}>
        login
      </Button>
    </form>
  );
};

export default Login;

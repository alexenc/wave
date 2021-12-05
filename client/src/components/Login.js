import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/apiCalls";
import { Input } from "@mui/material";

const Login = ({ handleReglogin }) => {
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
    <form className="auth-form">
      <div>
        <label>Username or email</label>
        <Input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Password</label>
        <Input
          variant="outlined"
          type="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <button className="btn-main" type="submit" onClick={handleSubmit}>
        login
      </button>
      <p onClick={handleReglogin}>
        don't have an account? <span> register here!</span>
      </p>
    </form>
  );
};

export default Login;

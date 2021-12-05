import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/apiCalls";
import { Input } from "@mui/material";

const Register = ({ handleReglogin }) => {
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
    userRegister({ user }, dispatch);
  };

  return (
    <form className="auth-form">
      <div>
        <label>email</label>
        <Input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Username</label>
        <Input type="text" name="username" onChange={handleChange} />
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
        Register
      </button>
      <p onClick={handleReglogin}>
        Already have an account? <span> Login here!</span>
      </p>
    </form>
  );
};

export default Register;

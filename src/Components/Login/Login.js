import React from "react";
import "./Login.css";
import  logo2 from "../../images/logo2.png"
const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <img src={logo2} alt="" />
        <form action="">
          <div className="input-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" id="" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm password" />
          </div>
          <div className="input-group">
            <input type="submit" value="Sign in" className="login-btn" />
          </div>
          <p className="text-danger text-center mt-3">Already have an account?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

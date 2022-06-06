import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import facebook from "../image/facebook1.png";
import linkedin from "../image/linkedinimage.png";
import google from "../image/google.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ROUTE from "../route.json";
import Proflie from './Profile';
function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const [emailErr, setEmailErr] = useState({});
  const [passwdErr, setPasswdErr] = useState({});
  const [error, setError] = useState("");

  const handSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      axios
        .post(ROUTE.LOGIN, { email, passwd })
        .then(function (res) {
          if (res.data.error) {
            setError(res.data.error);
            setTimeout(() => {
              setError(<div className="justify-content-center"><div className="error_red">Invalide user details</div></div>);
            }, 2000);
            // console.log("invalide user details");
          } else {
            setTimeout(() => {
              setError(<div className="error_green">Login successfull</div>);
            }, 5000);
            navigate('/Profile');
            // console.log("success");
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }
    //can clear from input here
  };

  const formValidation = () => {
    const emailErr = {};
    const passwdErr = {};
    let isValid = true;
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      emailErr.email = "Email is required";
      isValid = false;
    } else if (!regex.test(email)) {
      emailErr.email = "Invalid email format";
      isValid = false;
    }
    if (!passwd) {
      passwdErr.passwd = "Password is required";
      isValid = false;
    }
    if (!email || !passwd) {
    }

    setEmailErr(emailErr);
    setPasswdErr(passwdErr);
    return isValid;
  };

  return (
    <>
      <Navbar />
      <div className="container-fliud d-flex justify-content-around hero_style bg-sm-white login_div_height backgroundColor sm-hero-height">
        <div className="triangle triangle-login"></div>
        <div className="triangle rotate triangle-login"></div>
        <div className="triangle triangle-login"></div>
        <div className="triangle rotate triangle-login"></div>

        <div className="card_form_holder p-5 position-absolute mt-4">
          <h1 className="text-center">Sign In</h1>

          <p className="text-center login_p_text">
            <span>or create</span>{" "}
            <Link to="/register" className="link-dark">
              an Account
            </Link>
          </p>
          <form onSubmit={handSubmit}>
          {error  ? error : ""}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login_input"
                id="exampleInputEmail1"
              />
              {Object.keys(emailErr).map((key) => {
                return (
                  <p className="error" key={emailErr}>
                    {emailErr[key]}
                  </p>
                );
              })}
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label d-flex justify-content-between"
              >
                Password
                <Link to="#" className="link-dark">
                  Forgot Password?
                </Link>
              </label>
              <input
                type="password"
                name="password"
                value={passwd}
                onChange={(e) => setPasswd(e.target.value)}
                className="login_input"
                id="exampleInputPassword1"
              />
              {Object.keys(passwdErr).map((key) => {
                return (
                  <p className="error" key={passwdErr}>
                    {passwdErr[key]}
                  </p>
                );
              })}
            </div>
            <div className=" btn_style d-flex justify-content-center">
              <button className="login w900">Sign in</button>
            </div>
          </form>
          <div
            className="d-flex justify-content-between m_auto login_icon_holder
          "
          >
            <img
              src={facebook}
              alt="icon"
              style={{ width: "35px", height: "35px" }}
            />
            <img
              src={google}
              alt="icon"
              style={{ width: "22px", height: "22px", margin: "7px 0 0 0" }}
            />
            <img
              src={linkedin}
              alt="icon"
              style={{ width: "30px", height: "30px", margin: "3px 0 0 0" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;

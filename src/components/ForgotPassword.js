import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import facebook from "../image/facebook1.png";
import linkedin from "../image/linkedinimage.png";
import bottle_bird from "../image/bird-bottle.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ROUTE from "../route.json";
import Loading from "./Loading";
import ShowMessage from "./ShowMessage";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [emailErr, setEmailErr] = useState({});
  const [error, setError] = useState("");

  const handSubmit = (e) => {


    e.preventDefault();

    const isValid = formValidation();
    if (isValid) {
      localStorage.setItem("forgot_email", email);
      setShowSuccess(true)

      // setIsLoading(true)
      //   axios
      //   .post(ROUTE.FORGOTPASSWORD, { email })
      //   .then(function (res) {
      //     if (res.data.error) {
      //       console.log(res.data);
      //       setHasError(true)
      //       setError(res.data.msg);
      //       setIsLoading(false)

      //       // console.log("invalide user details");
      //     } else {
      //       setHasError(false)
      //       setError("Login Successful");
      //       setIsLoading(false)
      //       localStorage.setItem("user", JSON.stringify(res.data));
      //       navigate("/Profile");
      //       // console.log("success");
      //     }
      //   })
      //   .catch(function (err) {
      //     console.log(err);
      //     setIsLoading(false)
      //   });


    }
    //can clear from input here
  };

  const formValidation = () => {
    const emailErr = {};
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

    if (!email) {
    }

    setEmailErr(emailErr);
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

        <div className="card_form_holder p-5 position-absolute mt-5">
         {showSuccess?   <div className="text-center">

          <img src={bottle_bird}/>
            <h1 className="text-center">Check your email</h1>

            <p className="text-center login_p_text">
              <span>Copy the code sent to your email, and go to the chage password page, to reset your password.</span> </p>
            
              <Link className="btn btn-akeru" to="/change-password">Change Password</Link>
          </div>: <div>
            <h1 className="text-center">Forgot your password?</h1>

            <p className="text-center login_p_text">
              <span>Don’t worry, it happens to the best of us.</span> </p>
            <form onSubmit={handSubmit}>

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

              <ShowMessage hasError={hasError} message={error} />

              <div className=" d-flex justify-content-center">
                <button className="login w900 btn-akeru"><Loading loading={isLoading} false_text={"Recover password"} /> </button>
              </div>
            </form>
            <div
              className="d-flex justify-content-between m_auto login_icon_holder
"
            >


            </div>
          </div>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;

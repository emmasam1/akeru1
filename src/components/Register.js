import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer'
import axios from 'axios';
import ROUTE from '../route.json'
import Loading from "./Loading";
import ShowMessage from "./ShowMessage";
function Register() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [passwd, setPasswd] = useState('')
  const [compasswd, setComPasswd] = useState('')
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // const [ err, setErr ] = useState({
  //   fullname,company,email,phone,passwd, compasswd
  // })
  const [fnErr, setFnErr] = useState({})
  const [emailErr, setEmailErr] = useState({})
  const [phoneErr, setPhoneErr] = useState({})
  const [passwdErr, setPasswdErr] = useState({})
  const [compasswdErr, setComPasswdErr] = useState({})

  const handSubmit = (e) => {
    e.preventDefault()
    const isValid = formValidation()

    if (isValid) {
      setIsLoading(true)
      axios.post(ROUTE.REGISTER, { fullname, company, email, phone, passwd })
        .then(res => {
          if (res.data.error) {

            setHasError(true)
            setError(res.data.msg);
            setIsLoading(false)
            //console.log(res.data.msg);
          }
          else {
            localStorage.setItem("user", JSON.stringify(res.data.data));
            navigate("/profile");

          }

        }).catch(err => {
          console.log(err);
        })
    }
  }

  const routeToPage=(page)=>{
    navigate(page)
  }

  // const phonChange = (e) => {
  //   const value = e.target.value.replace(/\D/g, "");
  //   setPhone(value);
  // };

  const formValidation = () => {
    const fnErr = {}
    const emailErr = {}
    const phoneErr = {}
    const passwdErr = {}
    const compasswdErr = {}
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true
    const re = /^[0-9\b]+$/;

    if (!fullname) {
      fnErr.fullname = "Enter full name"
      isValid = false
    }
    if (!email) {
      emailErr.email = "Email is required"
      isValid = false
    }
    else if (!regex.test(email)) {
      emailErr.email = "Invalid email format"
      isValid = false
    }
    if (!passwd) {
      passwdErr.passwd = "Password is required"
      isValid = false
    }
    if (passwd !== compasswd) {
      compasswdErr.compasswd = "Password dose not match"
      isValid = false
    }
    if (!phone) {
      phoneErr.phone = "Phone number is required"
      isValid = false
    }
    else if (!re.test(phone)) {
      phoneErr.phone = "Must contain only numbers"
      isValid = false
    }

    setFnErr(fnErr)
    setEmailErr(emailErr)
    setPasswdErr(passwdErr)
    setComPasswdErr(compasswdErr)
    setPhoneErr(phoneErr)
    return isValid
  }

  return (
    <>
      <Navbar />
      <div className="container-fliud d-flex justify-content-around bg-sm-white backgroundColor hero_style reg_div_height reg-mobile-height hero_style-reg">
        <div className="triangle triangle-login"></div>
        <div className="triangle rotate triangle-login"></div>
        <div className="triangle triangle-login"></div>
        <div className="triangle rotate triangle-login"></div>

        <div className="card_form_holder p-5 position-absolute mt-3">
          <h1 className="text-center">Create an Account</h1>

          <p className="text-center login_p_text">
            <span>Already have an Account?</span> <Link to="/signin" className="link-dark">Sign In</Link>
          </p>

          <form onSubmit={handSubmit}>
            {error ? error : ""}
            <div className="mb-1">
              <label htmlFor="exampleInputName" className="form-label">
                Your name
              </label>
              <input
                type="text"
                className="login_input reg_margin"
                id="exampleInputName"
                onChange={(e) => setFullname(e.target.value)}
              />
              {Object.keys(fnErr).map((key) => {
                return <><p className="error" key={fnErr}>{fnErr[key]}</p></>

              })}
            </div>

            <div className="mb-1">
              <label htmlFor="exampleInputCompany" className="form-label">
                Company<span className="option">(optional)</span>
              </label>
              <input
                type="text"
                className="login_input reg_margin"
                id="exampleInputCompany"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="mb-1">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="login_input reg_margin"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              {Object.keys(emailErr).map((key) => {
                return <><p className="error" key={emailErr}>{emailErr[key]}</p></>

              })}
            </div>

            <div className="mb-1">
              <label htmlFor="exampleInputPhone" className="form-label">
                Phone number
              </label>
              <input
                type="number"
                pattern="[0-9]*"
                className="login_input reg_margin"
                id="exampleInputPhone"
                onChange={(e) => setPhone(e.target.value)}
              />
              {Object.keys(phoneErr).map((key) => {
                return <><p className="error" key={phoneErr}>{phoneErr[key]}</p></>

              })}
            </div>

            <div className="mb-1">
              <label htmlFor="exampleInputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="login_input reg_margin"
                id="exampleInputPassword"
                onChange={(e) => setPasswd(e.target.value)}
              />
              {Object.keys(passwdErr).map((key) => {
                return <><p className="error" key={passwdErr}>{passwdErr[key]}</p></>

              })}
            </div>

            <div className="mb-1">
              <label htmlFor="exampleInputConfirm" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="login_input reg_margin"
                id="exampleInputConfirm"
                onChange={(e) => setComPasswd(e.target.value)}
              />
              {Object.keys(compasswdErr).map((key) => {
                return <><p className="error" key={compasswdErr}>{compasswdErr[key]}</p></>

              })}
            </div>

            <div class="form-check mt-3 mb-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
               I have read and agree to the <span onClick={()=>routeToPage("/privacy-policy")} className="link-dark"><u>Privacy Policy</u></span>
              </label>
            </div>
            <div className="d-flex justify-content-center "><button className="w900 btn-akeru">Create account</button></div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
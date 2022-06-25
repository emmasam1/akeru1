import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer'
import axios from 'axios';
import ROUTE from '../route.json'
import Loading from "./Loading";
import ShowMessage from "./ShowMessage";
function ChangePassword() {
  const navigate = useNavigate();
 
  const [ email, setEmail ] = useState('')
  const [ code, setcode ] = useState(0)
  const [ passwd, setPasswd ] = useState('')
  const [ compasswd, setComPasswd ] = useState('')
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [ err, setErr ] = useState({
      code,passwd, compasswd
  })
 
  const [ codeErr, setcodeErr ] = useState({})
  const [ passwdErr, setPasswdErr ] = useState({})
  const [ compasswdErr, setComPasswdErr ] = useState({})

  const handSubmit = (e) => {
    e.preventDefault()
    const isValid = formValidation()

    if(isValid){
      setIsLoading(true)
      axios.post(ROUTE.CHANGEPASSWORD, {code, email, passwd})
      .then(res => {
        if (res.data.error ) {
          
          setHasError(true)
            setError(res.data.msg);
            setIsLoading(false)
          //console.log(res.data.msg);
        }
        else{
          localStorage.setItem("user", JSON.stringify(res.data.data));
          navigate("/profile");
         
        }
       
      }).catch(err => {
        console.log(err);
      })
    }
  }

  // const phonChange = (e) => {
  //   const value = e.target.value.replace(/\D/g, "");
  //   setcode(value);
  // };

  const formValidation = () => {
 
    const codeErr = {}
    const passwdErr = {}
    const compasswdErr = {}
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true
    const re = /^[0-9\b]+$/;
 
    if (!passwd) {
      passwdErr.passwd = "Password is required"
      isValid = false
    }
    if (passwd !== compasswd) {
      compasswdErr.compasswd = "Password dose not match"
      isValid = false
    }
    if (!code) {
      codeErr.code = "code number is required"
      isValid = false
    }
    else if (!re.test(code)) {
      codeErr.code = "Must contain only numbers"
      isValid = false
    }

      setPasswdErr(passwdErr)
    setComPasswdErr(compasswdErr)
    setcodeErr(codeErr)
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

        <div className="card_form_holder p-5 position-absolute mt-5">
          <h1 className="text-center">Create a new password</h1>

          <p className="text-center text-muted font-bold">
            <small>Enter the code from your email and your new password <br/>Please use something you can easily remember!</small>
          </p>

          <form onSubmit={handSubmit}>
          {error ? error : ""} 

            

            <div className="mb-1">
              <label htmlFor="exampleInputPhone" className="form-label">
               Verification Code
              </label>
              <input
                type="number"
                pattern="[0-9]*"
                className="login_input reg_margin"
                id="exampleInputPhone"
                onChange={(e) => setcode(e.target.value)}
              />
              {Object.keys(codeErr).map((key) => {
                return <><p className="error" key={codeErr}>{codeErr[key]}</p></>
                
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
            <br/>
             <div className="d-flex justify-content-center "><button className="w900 btn-akeru">Set password</button></div>
          </form>
          </div>
      </div>
      <Footer />
        </>
     );
}

export default ChangePassword;
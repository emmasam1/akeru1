import React, { useEffect, useState } from "react";
import logo from "../image/akeru.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const [user, setUser] = useState()
  const [personate, setPersonate] = useState(false)
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
     
    if (user) {
      setUser(user);
    }
    if(JSON.parse(localStorage.getItem('personate'))){
      setPersonate(true)
    }
  }, []);

  const backToAdmin = () => {
   if(window.confirm("Are you sure you want to go back admin??")){
    localStorage.removeItem('personate')
    localStorage.removeItem('user')
    navigate('/admin-dashboard/customers');
    window.location.reload(); 
   }
  }


  return (
    <div className="fixed-top bg-white nav-container">
       <nav className="navbar navbar-expand-lg navbar-light bg-white   fixed-top sm_nav_width">
        <div className="container-fluid nav_settings">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="logo position-relative" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0  me-auto m_auto"> 
              <Link
                to="/partner"
                className="nav_margin link-dark text-decoration-none fw-bold  "
              >
               Carriers
              </Link>

              {/* <Link
                to="/route"
                className="nav_margin link-dark text-decoration-none fw-bold fs-small nav_right"
              >
                Route
              </Link> */}

              <Link
                to="/underconstruction"
                className="nav_margin link-dark text-decoration-none fw-bold  "
              >
                Invest with us
              </Link>
            </ul>
            <div className="row">
               <div className="col-lg-3">
               {user ? null : <Link
                to="/signin"
                className="nav_margin link-dark text-decoration-none fw-bold nav_link_padding"
              >
                Login
              </Link>}
               </div>
             <div className="col-lg-6 col-md-12 text-left">
             {user?<div className="d-flex"> {personate?<button onClick={backToAdmin}  className="nav_margin btn btn-sm btn-outline-warning ">Admin</button>:null} <Link  to="/profile" className="link-dark"><i class="bi bi-person-circle fs-3"></i></Link></div>  :<Link
                to="/register"
                className="link_border_style nav_margin register_link link-dark sm-margin_nav text-decoration-none fw-bold   m-0"
              >
                Register
              </Link>}
             </div>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

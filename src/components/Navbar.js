import React, { useEffect, useState } from "react";
import logo from "../image/akeru.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const [user, setUser] = useState()
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
    }
  }, []);

  const handleLogout = () => {
   if(window.confirm("Are you sure you want to logout??")){
    window.localStorage.clear();
    navigate('/');
    window.location.reload(); 
   }
  }


  return (
    <div className="fixed-top bg-white nav-container">
       <nav className="navbar navbar-expand-lg navbar-light bg-white main_width fixed-top sm_nav_width">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m_auto">
              <Link
                to="/how-it-works"
                className="nav_margin link-dark text-decoration-none fw-bold fs-small"
              >
                How it works
              </Link>

              {/* <Link
                to="/route"
                className="nav_margin link-dark text-decoration-none fw-bold fs-small"
              >
                Route
              </Link> */}

              <Link
                to="/partner"
                className="nav_margin link-dark text-decoration-none fw-bold fs-small"
              >
                Partner
              </Link>
            </ul>
            <div className="row">
               <div className="col-lg-4">
               {user ? null : <Link
                to="/signin"
                className="nav_margin link-dark text-decoration-none fw-bold fs-small nav_link_padding"
              >
                Login
              </Link>}
               </div>
             <div className="col-lg-4 col-md-12 text-left">
             {user? <Link  to="/profile" className="link-dark"><i class="bi bi-person-circle fs-3"></i></Link> :<Link
                to="/register"
                className="link_border_style nav_margin register_link link-dark sm-margin_nav text-decoration-none fw-bold fs-small m-0"
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

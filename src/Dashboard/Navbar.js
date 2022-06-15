import React from "react";
import notification from "../image/Notification.svg";
import user from "../image/user.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {

  const navigate = useNavigate();

  const handleLogout = () => {
    if(window.confirm("Are you sure you want to logout??")){
      window.localStorage.clear();
      navigate('/');
      window.location.reload(); 
     }
  }
  return (
    <div className="container-fluid dashboard-nav position-fixed d-flex justify-content-between ">
      <i className="bi bi-justify position-relative burger" onClick={props.showSidebar}></i>
      <div className="float-end d-flex justify-content-between user-info-holder">
        <img src={notification} alt="icon" className="notification-icon"/>
        <p className="user-info position-relative" onClick={()=>{handleLogout()}}>
          Hi, <span>Sean</span>
        </p>
        <div className="rounded-circle user-img">
          <img src={user} alt="" className="img-fluid rounded-circle" />
        </div>
        <div className="dropdown">
          <i className="bi bi-caret-down-fill text-white position-relative admin-nav-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link className="dropdown-item" to="#">Logout</Link></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

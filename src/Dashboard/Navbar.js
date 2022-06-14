import React from "react";
import notification from "../image/Notification.svg";
import user from "../image/user.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {

  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    navigate('/');
    window.location.reload(); 
  }
  return (
    <div className="container-fluid dashboard-nav position-fixed d-flex justify-content-between ">
      <i class="bi bi-justify position-relative burger" onClick={props.showSidebar}></i>
      <div className="float-end d-flex justify-content-between user-info-holder">
        <img src={notification} alt="icon" className="notification-icon"/>
        <p className="user-info position-relative" onClick={()=>{handleLogout()}}>
          Hi, <span>Sean</span>
        </p>
        <div className="rounded-circle user-img">
          <img src={user} alt="" className="img-fluid rounded-circle" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

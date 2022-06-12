import React from "react";
import notification from "../image/Notification.svg";
import user from "../image/user.png";
function Navbar(props) {
  console.log(props);
  return (
    <div className="container-fluid dashboard-nav position-fixed d-flex justify-content-between ">
      <i class="bi bi-justify position-relative arrow" onClick={props.showSidebar}></i>
      <div className="float-end d-flex justify-content-between user-info-holder">
        <img src={notification} alt="icon" className="notification-icon"/>
        <p className="user-info position-relative">
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

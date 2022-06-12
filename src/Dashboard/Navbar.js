import React from "react";
import notification from "../image/Notification.svg";
import user from "../image/user.png";
function Navbar() {
  return (
    <div className="container-fluid dashboard-nav position-fixed">
      <div className="float-end d-flex justify-content-between user-info-holder">
        <img src={notification} alt="icon" />
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

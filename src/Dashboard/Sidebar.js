import React from "react";
import { Link } from "react-router-dom";
import dot from "../image/dots.svg";
import driver from "../image/driver.svg";
import truck from "../image/truck.svg";
import setting from "../image/Setting.svg";
import cart from "../image/cart.svg";
import user from "../image/User.svg";
import akeru from '../image/footerlogo.png'
function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column pl-3 position-fixed">
      
      <div className="position-relative mt">
        <Link
          to="/admin-dashboard"
          className="d-flex link-color text-decoration-none link-p font14 mb"
        >
          <span>
            <img src={dot} alt="icon" className="img-fix" />
          </span>{" "}
          Dashboard
        </Link>
        <Link
          to="/admin-dashboard/request"
          className="d-flex link-color text-decoration-none link-p font14 mb"
        >
          <span>
            <img src={cart} alt="icon" className="img-fix" />
          </span>
          Requests
        </Link>
        <Link
          to="/admin-dashboard/trucks"
          className="d-flex link-color text-decoration-none link-p font14 mb"
        >
          <span>
            <img src={truck} alt="icon" className="img-fix" />
          </span>
          Trucks
        </Link>
        <Link
          to="/admin-dashboard/drivers"
          className="d-flex link-color text-decoration-none link-p font14 mb"
        >
          <span>
            <img src={driver} alt="icon" className="img-fix" />
          </span>
          Drivers
        </Link>
        <Link
          to="#"
          className="d-flex link-color text-decoration-none link-p font14 mb"
        >
          <span>
            <img src={user} alt="icon" className="img-fix" />
          </span>
          Customers
        </Link>
        <Link
          to="/admin-dashboard/settings"
          className="d-flex link-color text-decoration-none link-p font14 mb"
        >
          <span>
            <img src={setting} alt="icon" className="img-fix" />
          </span>
          Settings
        </Link>
      </div>
      <div className="sidebar-img">
          <img src={akeru} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;

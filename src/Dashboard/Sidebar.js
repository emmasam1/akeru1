import React, { useState } from "react";
import { Link } from "react-router-dom";
import dot from "../image/dots.svg";
import driver from "../image/driver.svg";
import truck from "../image/truck.svg";
import setting from "../image/Setting.svg";
import cart from "../image/cart.svg";
import user from "../image/User.svg";
import akeru from "../image/footerlogo.png";

function Sidebar(props) {
  const [active, setActive] = useState("index");

  return (
    <div className={props.sidebar ? "open" : "close"}>
      <div className="nav-margin">
        <div className="title-container d-flex justify-content-between">
          <h3>ADMIN</h3>
          <div>
          <i class="bi bi-justify position-relative arrow" onClick={props.showSidebar}></i>
          </div>
        </div>

        <div className="position-relative mt">
          <Link
            to="/admin-dashboard"
            onClick={() => setActive("index")}
            className={`d-flex link-color text-decoration-none link-p font14 mb ${
              active === "index" ? "dash-active" : ""
            } `}
          >
            <span>
              <img src={dot} alt="icon" className="img-fix" />
            </span>{" "}
            Dashboard
          </Link>
          <Link
            to="/admin-dashboard/request"
          onClick={() => setActive("request")}
            className={`d-flex link-color text-decoration-none link-p font14 mb ${
              active === "request" ? "dash-active" : ""
            } `}
          >
            <span>
              <img src={cart} alt="icon" className="img-fix" />
            </span>
            Requests
          </Link>
          <Link
            to="/admin-dashboard/trucks"
            onClick={() => setActive("trucks")}
            className={`d-flex link-color text-decoration-none link-p font14 mb ${
              active === "trucks" ? "dash-active" : ""
            } `}
          >
            <span>
              <img src={truck} alt="icon" className="img-fix" />
            </span>
            Trucks
          </Link>
          <Link
            to="/admin-dashboard/drivers"
            onClick={() => setActive("drivers")}
            className={`d-flex link-color text-decoration-none link-p font14 mb ${
              active === "drivers" ? "dash-active" : ""
            } `}
          >
            <span>
              <img src={driver} alt="icon" className="img-fix" />
            </span>
            Drivers
          </Link>
          <Link
            to="/admin-dashboard/customers"
            onClick={() => setActive("customers")}
            className={`d-flex link-color text-decoration-none link-p font14 mb ${
              active === "customers" ? "dash-active" : ""
            } `}
          >
            <span>
              <img src={user} alt="icon" className="img-fix" />
            </span>
            Customers
          </Link>
          <Link
            to="/admin-dashboard/settings"
            onClick={() => setActive("settings")}
            className={`d-flex link-color text-decoration-none link-p font14 mb ${
              active === "settings" ? "dash-active" : ""
            } `}
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
    </div>
  );
}

export default Sidebar;

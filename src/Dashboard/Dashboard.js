import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Dashboard(props) {
  return (
    <>
      <div className="container-fluid p-0 m-0 d-flex bg-dashboard-color">
        <Sidebar />
        <div className="dashboard-container">
          <Navbar />
              <Outlet />
              <br/>
            <br/> <br/>
            </div>
            
          </div>
    </>
  );
}

export default Dashboard;

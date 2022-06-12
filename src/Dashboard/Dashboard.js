import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="container-fluid p-0 m-0 d-flex bg-dashboard-color">
        <Sidebar sidebar={sidebar} showSidebar={showSidebar}/>
        <div className="dashboard-container">
          <Navbar showSidebar={showSidebar}/>
              <Outlet />
              <br/>
            <br/> <br/>
            </div>
            
          </div>
    </>
  );
}

export default Dashboard;

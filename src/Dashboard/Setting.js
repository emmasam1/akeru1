import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import search from "../image/Search.svg";
import ROUTE from "../route.json";
import ManageTons from "./ManageTons";
import ManageLocations from "./ManageLocation";
import ManageTruckTypes from "./ManageTruckTypes";


function Setting() {


  return (
    <div className="p-3 position-relative left-width left-width-home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <ManageTons />
          </div>

          <div className="col-md-6">
            <ManageLocations />
          </div>

        </div>
        <br/>
        <div className="row">
          <div className="col-md-6">
            <ManageTruckTypes />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Setting;

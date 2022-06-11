import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import ROUTE from "../route.json";
import Loader from "./Loader";
import car from "../image/car.svg";
import bendarrow from "../image/bendarrow.png";
import user from "../image/dashuser.png";
import driver from "../image/DashDriver.png";
import Trips from './Trips';

function DashboardHome() {
  const [requestData, setRequestData] = useState([])
  const [customers, setCustomers] = useState([])
  const [drivers, setDrivers] = useState([])

  useEffect(() => {
    axios.get(ROUTE.REQUEST)
      .then((res) => {
        let requestData = res.data.data
        setRequestData(requestData)
      })
      .catch((err) => {
        console.log(err);
      })

      axios.get(ROUTE.DRIVERS)
      .then((res) => {
        let requestData = res.data.data
        setDrivers(requestData)
      })
      .catch((err) => {
        console.log(err);
      })


      axios.get(ROUTE.CLIENTS)
      .then((res) => {
        let requestData = res.data.data
        setCustomers(requestData)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const [request, setRequest] = useState([])
  const [clientsInfo, setClientsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get(ROUTE.REQUEST)
    .then((res) => {
      let request = res.data.data;
        setRequest(request);
      console.log(request);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  useEffect(() => {
    axios
      .get(ROUTE.CLIENTS)
      .then((res) => {
        let clientsInfo = res.data.data;
        if(!clientsInfo){
          setIsLoading(true)
        }else{
          setIsLoading(false)
          setClientsInfo(clientsInfo);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="p-3 position-relative left-width-home">
      <br/>
      <br/>
      <br/>
      <div className="d-flex justify-content-between">
        <div className="rounded sm-card p-4">
          <div className="d-flex justify-content-between">
            <h4 className="number position-relative">{requestData.length}</h4>
            <h4 className="number position-relative">{request.length}</h4>
            <img src={car} alt="icon" className="number-img" />
          </div>
          <div>
            <h4 className="number-h4-text">New request</h4>
            {/* <div className="d-flex">
              <img src={bendarrow} alt="icon" className="number-icon" />
              <p className="number-p d-flex">
                700 increase &nbsp;<p className="number-span"> in total</p>
              </p>
            </div> */}
          </div>
        </div>

        <div className="rounded sm-card p-4">
          <div className="d-flex justify-content-between">
            <h4 className="number position-relative">{customers.length}</h4>
            <h4 className="number position-relative">{clientsInfo.length}</h4>
            <img src={user} alt="icon" className="number-img" />
          </div>
          <div>
            <h4 className="number-h4-text">Customers or clients</h4>
            {/* <div className="d-flex">
              <img src={bendarrow} alt="icon" className="number-icon" />
              <p className="number-p d-flex">
                400 increase &nbsp;<p className="number-span"> in total</p>
              </p>
            </div> */}
          </div>
        </div>

        <div className="rounded sm-card p-4">
          <div className="d-flex justify-content-between">
            <h4 className="number position-relative">{drivers.length}</h4>
            <img src={driver} alt="icon" className="number-img" />
          </div>
          <div>
            <h4 className="number-h4-text">Drivers or partners</h4>
            {/* <div className="d-flex">
              <img src={bendarrow} alt="icon" className="number-icon" />
              <p className="number-p d-flex">
                100 increase &nbsp;<p className="number-span"> in total</p>
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="float-end d-flex mt-3 justify-content-between ">

        <Link to="/admin-dashboard/new-request"><button className="btn btn-gray btn-sm mr-4">+ Add new request</button></Link>  <span className="m-2">   </span>
        <button className="btn btn-dark btn-sm">Export report</button>
      </div>
      <br/>

      <div className="bg-white m-t rounded p-2">
          <Trips/>
      </div>
    </div>
  );
}

export default DashboardHome;

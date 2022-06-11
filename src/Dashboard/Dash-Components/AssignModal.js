import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from "../../image/Arrow.png";
import ROUTE from "../../route.json";
import axios from "axios";

function AssignDriverModal(props) {

  const [driver, setDriver] = useState({});

  const setDriverDetails=(index)=>{
    setDriver(props.drivers[index])
  }

 const  assignRequest=()=>{
   if(driver.driver_id){
   
    let data ={  "request_id":props.request.request_id,  "driver_id":driver.driver_id }
    axios.post(ROUTE.REQUEST+`/assign`, data)
      .then((res) => {
        console.log(res);
        props.refresh()
        alert(res.data.msg)
      })
      .catch((err) => {
        console.log(err);
      })
   }else{
     alert("Please select a driver")
   }
 }

  return (
    <div className='overlay position-fixed d-flex align-self-center'>
      <div className="request-modal">
        <i className="bi bi-x-lg close-icon" onClick={() => props.closeModal()}></i>
        <h1 className="text-center req_h1 mt-2">Assign Request to Driver</h1>
        <hr />
        <div className="d-flex justify-content-evenly flex-mobile-d ">
          <div className="col-md-4  p-3 bg-white rounded reqNext  ">

            <h4 className="text-center w900 req_h4 mb-4">Select Driver</h4>
            <hr />
            <div className='container'>
              <div className="border-bottom border-2 mb-3">

                <select className="select" value={driver.firstname} onChange={(e) => setDriverDetails(e.target.value)}>
                  <option>Select Driver</option>
                  {props.drivers.map((e, i) => {
                    return <option value={i}>{`${e.firstname} ${e.lastname}-(${e.email})`}</option>
                  })}
                </select>
              </div>
            </div>


          </div>
          <div className="col-md-8  rounded bg-white p-3 reqNext  ">
            <h4 className="text-center w900 req_h4 mb-4">Details</h4>
            <hr />
            <div className="border-bottom border-2">
              <div className="d-flex justify-content-between ">
                <p className="req_pro">Driver / Company</p>
                <p className="req_pro_next">
                  {driver.firstname} {driver.lastname}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="req_pro">Email</p>
                <p className="req_pro_next">
                {driver.email}
                </p>
              </div>
              <div className="d-flex justify-content-between ">
                <p className="req_pro">Phone</p>
                <p className="req_pro_next">
                {driver.phone}
                </p>
              </div>
              <div className="d-flex justify-content-between ">
                <p className="req_pro">City</p>
                <p className="req_pro_next">
                {driver.city}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center mt-3  mb-3 m37">
          <button
            onClick={()=>{assignRequest()}}
            className="link-dark text-decoration-none milestone_link pt-1 w-170 pro_p w900 p-0"
          >
            Assign Request
          </button>
        </div>
      </div>
    </div>
  )
}
export default AssignDriverModal
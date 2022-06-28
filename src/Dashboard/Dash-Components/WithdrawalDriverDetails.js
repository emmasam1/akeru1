import React, { useState, useEffect } from "react";
import axios from 'axios'
import truck from "../../image/truck.png";
import ROUTE from "../../route.json";
import DriverTrucks from "./DriverTrucks";
function WithdrawalDriverDetails(props) {
  
  const [driver, setDriver] = useState(props.driver);


  return (
    <div className='overlay position-fixed d-flex align-self-center'>
      <div className="request-modal">
        <i className="bi bi-x-lg close-icon" onClick={() => props.handleClose()}></i>
        <h1 className="text-center req_h1 mt-2">Driver Details</h1>
        <hr />
        <div className='container dash-modal-container'>
          <div className="row   ">
            <div className="col-md-6  rounded bg-white p-3 reqNext ">
              <div className="border-bottom border-2 mb-2">
                <div className="d-flex justify-content-between ">
                  <p className="req_pro">Full Name</p><br />
                  <p className="req_pro_next">
                    {driver.firstname}  {driver.lastname}

                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Email</p>
                  <p className="req_pro_next">
                    {driver.email}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Phone</p>
                  <p className="req_pro_next">
                    {driver.phone}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">City</p>
                  <p className="req_pro_next">
                    {driver.city}
                  </p>
                </div>

              </div>
              <div className="border-bottom border-2 mb-2">

                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Active Hours</p>
                  <p className="req_pro_next">
                    {driver.online_hours.overall??""}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Rating</p>
                  <p className="req_pro_next">
                    {driver.rating}
                  </p>
                </div>

              </div>


            </div>
            <div className="col-md-6 rounded bg-white p-3 reqNext ">
              <div className="border-bottom border-2 mb-2">

                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Bank Name</p>
                  <p className="req_pro_next">
                    {driver.bank_details.bank_name??""}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Account Name</p>
                  <p className="req_pro_next">
                    {driver.bank_details.account_name??""}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Account Number</p>
                  <p className="req_pro_next">
                    {driver.bank_details.account_number??""}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
        <hr />
        <div className="d-flex justify-content-center mt-3  mb-3 m37">
          <button
            onClick={() => { props.approveWithdrawal() }}
            className="link-dark text-decoration-none milestone_link pt-1 w-170 pro_p w900 p-0"
          >
            Approve Withdrawal
          </button>
        </div>

      </div>
    </div>
  );
}
export default WithdrawalDriverDetails;

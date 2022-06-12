import React, { useEffect } from "react";
import axios from 'axios'
import truck from "../../image/truck.png";
function ApproveModal(props) {
  //console.log(props.data.driver_id);
 
  return (
    <div className='overlay position-fixed d-flex align-self-center'>
      <div className="request-modal">
        <i className="bi bi-x-lg close-icon" onClick={() => props.handleClose()}></i>
        <h1 className="text-center req_h1 mt-2">Driver Details For Approval</h1>
        <p className="text-center">Click on the images to view the documents</p>
        <hr/>
        <div className="d-flex justify-content-between flex-mobile-d ">
        <div className="col-md-6  rounded bg-white p-3 reqNext ">
            <div className="border-bottom border-2 mb-2">
              <div className="d-flex justify-content-between ">
                <p className="req_pro">Full Name</p><br/>
                <p className="req_pro_next">
                  {props.data.firstname}  {props.data.lastname}
                
                </p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="req_pro w900">Email</p>
                <p className="req_pro_next">
                {props.data.email}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="req_pro w900">Phone</p>
                <p className="req_pro_next">
                {props.data.phone}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="req_pro w900">City</p>
                <p className="req_pro_next">
                {props.data.city}
                </p>
              </div>

            </div>
            <div className="border-bottom border-2 mb-2">
              
              <div className="d-flex justify-content-between">
                <p className="req_pro w900">Active Hours</p>
                <p className="req_pro_next">
                {props.data.online_hours.overall}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="req_pro w900">Rating</p>
                <p className="req_pro_next">
                {props.data.rating}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 rounded bg-white p-3 reqNext ">
            <div className="border-2 mb-3">
              <div className="d-flex justify-content-between mb-2 ">
                <p className="req_pro">Driver License</p><br/>
                <img src={``+props.data.driver_license} className="document-img req_pro_next" alt="License" />
              </div>
              

              <div className="d-flex justify-content-between mb-2">
              <p className="req_pro">Truck registration</p><br/>
                <img src={``+props.data.truck_identification} className="document-img req_pro_next" alt="License" />
              </div>
              <div className="d-flex justify-content-between mb-2">
              <p className="req_pro">Truck insurance</p><br/>
                <img src={``+props.data.truck_insurance} className="document-img req_pro_next" alt="License" />
              </div>
              <div className="d-flex justify-content-between mb-2">
              <p className="req_pro">GIT insurance</p><br/>
                <img src={``+props.data.git_insurance} className="document-img req_pro_next" alt="License" />
              </div>
            </div>
          </div>
        </div>
        <hr/>
        
      </div>
    </div>
  );
}
export default ApproveModal;

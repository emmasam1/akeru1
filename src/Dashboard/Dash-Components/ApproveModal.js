import React, { useEffect } from "react";
import axios from 'axios'
import truck from "../../image/truck.png";
import ROUTE from "../../route.json";
function ApproveModal(props) {
  //console.log(props.data.driver_id);
 
  return (
    <div className='overlay position-fixed d-flex align-self-center'>
      <div className="request-modal">
        <i className="bi bi-x-lg close-icon" onClick={() => props.handleClose()}></i>
        <h1 className="text-center req_h1 mt-2">Driver Details {props.data.approved?"":" For Approval"}</h1>
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
                <img src={`${ROUTE.SITE_URL}/${props.data.driver_license}`} className="document-img req_pro_next" alt="license_img" />
              </div>
              

              <div className="d-flex justify-content-between mb-2">
              <p className="req_pro">Truck registration</p><br/>
                <img src={`${ROUTE.SITE_URL}/${props.data.truck_identification}`} className="document-img req_pro_next" alt="registration_img" />
              </div>
              <div className="d-flex justify-content-between mb-2">
              <p className="req_pro">Truck insurance</p><br/>
                <img src={`${ROUTE.SITE_URL}/${props.data.truck_insurance}`} className="document-img req_pro_next" alt="truck_img" />
              </div>
              <div className="d-flex justify-content-between mb-2">
              <p className="req_pro">GIT insurance</p><br/>
                <img src={`${ROUTE.SITE_URL}/${props.data.git_insurance}`} className="document-img req_pro_next" alt=" git_img" />
              </div>
            </div>
          </div>
        </div>
        <hr/>
        {props.data.approved?null:<div className="d-flex justify-content-center mt-3  mb-3 m37">
          <button
            onClick={()=>{props.approveDriver()}}
            className="link-dark text-decoration-none milestone_link pt-1 w-170 pro_p w900 p-0"
          >
            Approve Driver
          </button>
        </div>}
        
      </div>
    </div>
  );
}
export default ApproveModal;

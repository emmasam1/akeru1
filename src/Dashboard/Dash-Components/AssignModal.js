import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from "../../image/Arrow.png";
import ROUTE from "../../route.json";
import axios from "axios";

function AssignDriverModal(props) {


  

 const  assignRequest=(driver_id)=>{

    let data ={  "request_id":props.request.request_id,  "driver_id":driver_id}
    axios.post(ROUTE.REQUEST+`/assign`, data)
      .then((res) => {
        console.log(res);
        props.refresh()
        alert(res.data.msg)
        props.closeModal()
      })
      .catch((err) => {
        console.log(err);
      })
   
 }

  return (
    <div className='overlay position-fixed d-flex align-self-center'>
      <div className="request-modal">
        <i className="bi bi-x-lg close-icon" onClick={() => props.closeModal()}></i>
        <h1 className="text-center req_h1 mt-2">Assign Request to Driver</h1>
        <hr />
     <div className='container dash-modal-container'>
        <table className="table table-hover  mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PHONE</th>
                <th scope="col">CITY</th>
                <th scope="col">RATING</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody className="position-relative">
              {props.drivers.map((e, i) => {
                if(e.approved && e.city){
                  return (
                    <tr key={e.driver_id}>
                      <td>{i + 1}</td>
                      <td>{e.firstname} {e.lastname}</td>
                      <td>{e.email}</td>
                      <td>{e.phone}</td>
                      <td>{e.city}</td>
                      <td>{e.rating}</td>
                      <td className="d-flex justify-content-center flex-column position-relative">
                        {props.request.driver_id ==e.driver_id?
                         <span className="badge bg-success p-3">Assigned</span>:
                         <button className="btn btn-dark btn-sm" onClick={()=>{assignRequest(e.driver_id)}}>Assign</button>}
                      
                      </td>
                    </tr>
                  );
                }
                
              }) }
            </tbody>
          </table>
       
     </div>
        
        <hr />
        
      </div>
    </div>
  )
}
export default AssignDriverModal
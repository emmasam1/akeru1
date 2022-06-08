import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ROUTE from "../route.json";
import axios from "axios";
import Loader from "./Loader";
function Request() {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const [requestData, setRequestData] =useState([])
  useEffect(()=>{
    axios.get(ROUTE.REQUEST)
    .then((res) => {
      let requestData = res.data.data
      if(requestData){
        setRequestData(requestData)
        console.log('hear');  
      }else{
        setIsLoading(true) 
      }
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <>
    <div className="p-3 position-relative left-width-home left-width">
    <div className="d-flex flex-sm-column justify-content-between flex-md-row flex-lg-row flex-xl-row">
    
              <NavLink to="#" className="link-dark text-decoration-none">
              <div className="dash_link_bg_color pt-3">
                <div className="d-flex justify-content-between p-3">
                  <h2 className="w900">1</h2>
                  <div className="line-h">
                    <span>
                      Ongoing
                      <br /> trip
                    </span>
                  </div>
                </div>
              </div>
              </NavLink>
              <NavLink to="#" className="link-dark text-decoration-none">
              <div className="dash_link_bg_color pt-3">
                <div className="d-flex justify-content-between p-3">
                  <h2 className="w900">0</h2>
                  <div className="line-h">
                    <span>
                      Pending
                      <br /> order
                    </span>
                  </div>
                </div>
              </div>
              </NavLink>
              <NavLink to="#" className="link-dark text-decoration-none">
              <div className="dash_link_bg_color pt-3">
                <div className=" d-flex justify-content-between p-3">
                  <h2 className="w900">320</h2>
                  <div className="line-h">
                    <span>
                      completed
                      <br /> order
                    </span>
                  </div>
                </div>
              </div>
              </NavLink>
            </div>

            <div className="request-modal"></div>

      <table className="table table-hover  mt-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">PICK UP</th>
            <th scope="col">DROP OFF</th>
            <th scope="col">ITEM</th>
            <th scope="col">TRUCK TYPE</th>
            <th scope="col">PAID</th>
            <th scope="col">WEIGHT</th>
            <th scope="col">DATE</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">STATUS</th>
            <th scope="col">PAYMENT TYPE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody className="position-relative">
         {isLoading ? <Loader /> : requestData.map((e, i) =>{
           return(
             <tr key={e.user_id}>
               <td>{i + 1}</td>
               <td>{e.pick_up}</td>
               <td>{e.drop_off}</td>
               <td>{e.item}</td>
               <td>{e.truck_type}</td>
               <td>{e.is_paid ? <span className="badge bg-success">Paid</span> : <span className="badge bg-secondary">Pending..</span>}</td>
               <td>{e.weight}</td>
               <td>{e.date}</td>
               <td>{e.amount}</td>
               <td>{e.status}</td>
               <td>{e.payment_type}</td>
               <td className="d-flex justify-content-center flex-column position-relative">
                  <div className="table-dropdown">
                    <span><i className="bi bi-three-dots btn btn-light fs-6" ></i></span>
                      <div className="table-dropdown-content r-0">
                        {e.approved?null:<a href="#" className="btn">Assign</a>}
                        <button className="btn" onClick={()=>{setModal(true)}}>Set qoute</button>
                      </div>
                    </div>
                </td>
             </tr>
           )
         })}
        </tbody>
      </table>
    </div>
    </>
  );
}
export default Request;

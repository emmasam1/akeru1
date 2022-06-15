import React from 'react'
import { Link } from 'react-router-dom'
import search from '../image/Search.svg'
import Form from './Form';
function Trucks() {
  return (
    <>
      <div className="p-3 position-relative left-width left-width-mobile">
          <div className="d-flex mb-1 d-flex justify-content-between">
              <div>
              <h1 className="truck-text">TRUCKS 54</h1>
              <div className="d-flex bg-white rounded dash-input-holder form-mobile">
                  <img src={search} alt="icon" />
                  <input className="border-0"/>
              </div>
              </div>
              <Link to="/admin-dashboard/all-trucks"><button className='btn btn-dark'>View all trucks</button></Link>
          </div>
          <div className="bg-white rounded dash-p"> 
                <Form />
          </div>
      </div>
    </>
  );
}

export default Trucks;

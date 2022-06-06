import React from 'react'
import search from '../image/Search.svg'
import Form from './Form';
function Trucks() {
  return (
    <>
      <div className="p-3 position-relative left-width">
          <div className="d-flex mb-1">
              <h1 className="truck-text">TRUCKS 54</h1>
              <div className="d-flex bg-white rounded dash-input-holder">
                  <img src={search} alt="icon" />
                  <input className="border-0"/>
              </div>
          </div>
          <div className="bg-white rounded dash-p">
                <Form />
          </div>
      </div>
    </>
  );
}

export default Trucks;

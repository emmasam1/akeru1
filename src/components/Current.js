import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer'
import axios from 'axios';
import ROUTE from '../route.json'
import Loading from "./Loading";
import ShowMessage from "./ShowMessage";
function Current() {
  const navigate = useNavigate();
  const [requestId, setRequestId] = useState('')

  const viewRequest=()=>{
    navigate(`/detail?request_id=${requestId}`)
  }
   return (
    <>
      <div className="p-5 pro-div mt-4 w900">
        <h4>Check your cargo location</h4>
        <p>
          Use the order number to track <br />
          now
        </p>

        <div className="row  search-div">
         <div className='col-md-8'>
         <input className="search-input border-0" onChange={(e)=>setRequestId(e.target.value)} placeholder='Enter request id' />
         </div>
         <div className='col-md-4'>
         <button className='btn btn-akeru' onClick={viewRequest}>Track now</button>
         </div>
          
        </div>
      </div>
    </>
  );
}

export default Current;

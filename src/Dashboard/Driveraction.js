import React, { useEffect } from 'react'
import axios from "axios";
import ROUTE from "../route.json";

function Driveraction(){
    
    return(
        <div className='d-flex justify-content-center flex-column position-absolute top25 bg-white'>
            <button className='btn'>Approve</button>
            <button className='btn'>Delete</button>
        </div>
    )
}
export default Driveraction
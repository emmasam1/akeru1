import React from 'react'
import { Link } from 'react-router-dom'

function Alltrucks(){
    return(
        <div className="p-3 position-relative left-width left-width-home">
            <div className="d-flex mb-1 d-flex justify-content-between">
            <h3>All Trucks</h3>
           <Link to="/admin-dashboard/trucks"> <button className='btn btn-dark'>Add Truck</button></Link>
              
          </div>

        </div>
    )
}
export default Alltrucks
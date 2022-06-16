import React from 'react'
import loaderImg from '../image/hiw-truck.png'

function Loader(){
    return(
        <div className='d-flex justify-content-center position-absolute load-container'>
           <img src={loaderImg} alt="loader" className='loader' id='breathing-loader'/>
        </div>
    )
}
export default Loader
import React from 'react'
import loaderImg from '../image/hiw-truck.png'

function Loader(){
    return(
        <div className='  load-container text-center'>
           <img src={loaderImg} alt="loader" className='loader' id='breathing-loader'/>
        </div>
    )
}
export default Loader
import React from 'react'
import NF from '../image/notfound.svg'
import { Link } from 'react-router-dom';
function Notfound(props) {
    return ( 
        <div className="bg-white d-flex justify-content-center nt_margin">
            <div className="text-center nf_div">
                <img src={NF} alt='icon' className="nf_img mb-5" />
                <h1 className="nf_h1">Ooops!</h1>
                <p className="nf_p">Page not found!</p>
                <p className="nf_sec_p">We can’t find the page you are lookign for. Either it has been removed, had it’s name changed or is temporary unavailable</p>

                <Link to="/" className="navbar-brand link-dark gohome">Go home</Link>
            </div>
        </div>
     );
}

export default Notfound;
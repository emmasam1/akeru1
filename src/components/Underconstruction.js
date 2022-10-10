import React from "react";
import construction from "../image/construction.png";
import NF from '../image/notfound.svg'
import { Link } from 'react-router-dom';
function Underconstruction() {
  return (
    <div className="bg-white d-flex justify-content-center">
      <div className="text-center nf_div">
      <img src={NF} alt='icon' className=" mb-5 mt-5" />
                <h1 className="nf_h1">Page currently under construction!</h1>
                <p className="nf_p">Chat with support for more details</p>
 
                <Link to="/" className="btn btn-akeru">Go home</Link>
      </div>
    </div>
  );
}

export default Underconstruction;

import React from "react";
import construction from "../image/construction.png";
import NF from '../image/notfound.svg'
import { Link } from 'react-router-dom';
function Underconstruction() {
  return (
    <div className="bg-white d-flex justify-content-center">
      <div className="text-center nf_div">
      <img src={NF} alt='icon' className=" mb-5" />
                <h1 className="nf_h1">Coming Soon!</h1>
                <p className="nf_p">This feature will soon be realeased, it will enable customers talk directly with the drivers that are with the haulage!</p>
                <p className="nf_sec_p">In the mean time, feel free to explore other features of the AKERU</p>

                <Link to="/" className="btn btn-akeru">Go home</Link>
      </div>
    </div>
  );
}

export default Underconstruction;

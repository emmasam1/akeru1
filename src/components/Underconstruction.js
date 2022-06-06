import React from "react";
import construction from "../image/construction.png";
import { Link } from 'react-router-dom';
function Underconstruction() {
  return (
    <div className="bg-white d-flex justify-content-center">
      <div className="text-center nf_div">
        <img src={construction} alt="icon" className="nf_img mb-5" />
        <Link to="/" className="navbar-brand link-dark gohome">
          Go home
        </Link>
      </div>
    </div>
  );
}

export default Underconstruction;

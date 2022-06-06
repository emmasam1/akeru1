import React from "react";
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
function Payment() {
    
  return (
    <>
    <Navbar />
      <div className="container-fliud d-flex backgroundColor justify-content-around hero_style pay-height text-height">
        <div className="triangle"></div>
        <div className="triangle rotate"></div>
        <div className="triangle"></div>
        <div className="triangle rotate"></div>

        <div className="card_form_holder p-4 position-absolute mt-4 w40 r9">
          <h1 className="text-center">Payment type</h1>
          <ul className="nav nav-tabs border-0 mb-3">
            <li className="nav-item border-0 settings">
              <Link to="/payment" className="nav-link border-0 link-dark active text-muted" aria-current="page">
                Credit / debit card
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/payment/bank-transfer" className="nav-link link-dark text-muted border-0">
                Bank transfer
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;

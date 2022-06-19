import React from "react";
import user from "../image/hiw_user.png";
import truck from "../image/hiw-truck.png";
import card from "../image/hiw-card.png";
import list from "../image/hiw-list.png";

import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
function Partner() {
  return (
    <>
      <Navbar />


      <div className=" div_color mt-3 mobile-sm-width">
        <div className="algin-width">
          <div className="container px-3 py-3">
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-center how_it_works_title">Here is how Akeru works </h1>
            <p className="text-center how_it_works_subtitle">With few steps we will match your request to available Hauliers.</p>
            <br />
            <div className="row how_it_works_cols">
              <div className="col-sm-5 col-md-6 col-lg-3">
                <img src={user} alt="icon" />
                <h5 className="how_it_works_col_title">Register or sign in</h5>
                <p className="how_it_works_col_desc">Register or sign in to manage all activities like invoicing, order history and tracking your cargo delivery</p>
              </div>
              <div className="col-sm-5 col-md-6 col-lg-3">
                <img src={list} alt="icon" />
                <h5 className="how_it_works_col_title">Request a quote</h5>
                <p className="how_it_works_col_desc">Filter your request from our list of options so that we can best meet your specific need</p>
              </div>
              <div className="col-sm-5 col-md-6 col-lg-3">
                <img src={card} alt="icon" />
                <h5 className="how_it_works_col_title">Make payment</h5>
                <p className="how_it_works_col_desc">Make payment either through bank transfer or card payment and we will only release funds when your order is completed</p>
              </div>
              <div className="col-sm-5 col-md-6 col-lg-3">
                <img src={truck} alt="icon" />
                <h5 className="how_it_works_col_title">Matched with a Haulier</h5>
                <p className="how_it_works_col_desc">You will be matched with a Haulier within 5 minutes of submitting your request, and your request will become active.</p>
              </div>
            </div>
          </div>
          <div className="container px-3 py-3">
            <br />
            <br />
            <h1 className="text-center how_it_works_title">Need more suggestions or help?  </h1>

            <div className="row how_it_works_cols">
              <div className="col-md-2"> </div>
              <div className="col-md-8">
                <p className="text-center how_it_works_subtitle">If you are having any issues or difficulties navigating our platform our support team is available 24/7 to guide you or help your place a request manually</p>
              </div>
              <div className="col-md-2"></div>

            </div>
            <br />
            <div className="row text-center">
              <div className="join_btn_holder">
                <Link to='/signin' className="link-dark w900 footer_btn">
                Contact support
                </Link>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default Partner;

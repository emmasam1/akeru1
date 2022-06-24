import React from 'react'
import fl from "../image/footerlogo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="container-fiuld mt-3 pt-5 footer">
        <div className="main_width row footer_text_holder">
          <div className='col-md-2'>
            <a className='link-light text-decoration-none' href="/"><img src={fl} alt="logo" className="footer_logo" /></a>
          </div>
          <div className="col-md-8">
            <div className="row row-cols-4">
              <div className="col my_col_settings col-footer">
                <h6 className="footer_h6">Services</h6>
                <li className="footer_li">Routes</li>
                <li className="footer_li"><a className='link-light text-decoration-none' href="/how-it-works">How It Works</a></li>
                <li className="footer_li"><a className='link-light text-decoration-none' href="/request">Request Haulage</a></li>
              </div>
              <div className="col my_col_settings col-footer">
                <h6 className="footer_h6">Legal</h6>
                <li className="footer_li"><a className='link-light text-decoration-none' href="/privacy-policy">Privacy Policy</a></li> 
               </div>
              <div className="col my_col_settings col-footer">
                <h6 className="footer_h6">More</h6>
                <li className="footer_li">Fuel advance</li>
                <li className="footer_li"> <a href='/partner' className='link-light text-decoration-none' to="/partner">Join us</a></li>
               </div>
              <div className="col my_col_settings col-footer">
                <h6 className="footer_h6">Contact us</h6>
                <li className="footer_li">info@akeru.ng</li>
                <li className="footer_li">0818 156 5768</li>
                <li className="footer_li d-flex expound justify-content-between">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-linkedin"></i>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

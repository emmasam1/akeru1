import React from 'react'
import { Link } from 'react-router-dom';
import fl from "../image/footerlogo.png";

function Footer() {
  return (
    <>
      <div className="container-fiuld mt-3 pt-5 footer">
        <div className="main_width d-flex footer_text_holder">
          <div>
            <img src={fl} alt="logo" className="footer_logo" />
          </div>
          <div className="footer_col_holder">
            <div className="row row-cols-4">
              <div className="col my_col_settings col-footer">
                <h6 className="footer_h6">Services</h6>
                <li className="footer_li">Routes</li>
                <li className="footer_li"><Link className='footer-link' to="/how-it-works">How It Works</Link></li>
                <li className="footer_li"> <Link className='footer-link' to="/request">Request haulage</Link></li>
              </div>
              <div className="col my_col_settings col-footer">
                <h6 className="footer_h6">Legal</h6>
                <li className="footer_li">Privacy Policy</li>
                <li className="footer_li">FAQ</li>
              </div>
              <div className="col my_col_settings col-footer">
                <h6 className="footer_h6">More</h6>
                <li className="footer_li">Fuel advance</li>
                <li className="footer_li">Join us</li>
                <li className="footer_li">Invest</li>
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

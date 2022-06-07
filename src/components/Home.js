import React from "react";
import { Link } from "react-router-dom";
import truck from "../image/truck.png";
import vector from "../image/Vector.png";
import vector2 from "../image/Vector2.png";
import vector3 from "../image/Vector3.png";
import vector4 from "../image/Vector4.png";
import vector5 from "../image/Vector5.png";
import vector6 from "../image/Vector6.png";
import cola from "../image/Big_cola.png";
import Casera from "../image/The-La-Casera.png";
import unilever from "../image/unilever.png";
import Navbar from './Navbar';
import Footer from './Footer'
function Home() {
  return (
    <>
    <Navbar />
      <div className="container-fliud d-flex justify-content-around hero_style">
        <div className="triangle"></div>
        <div className="triangle rotate"></div>
        <div className="triangle"></div>
        <div className="triangle rotate"></div>

        <div className="main_width position-absolute">
          <div className="position-relative">
            <div className="row hero_pad_top">
              <div className=" col-md-6">
                <div className="mw100">
                  <p className="hero_p_top_text m-0 w900 mw100">
                    Get a response within 1 minute
                  </p>
                  <h1 className="hero_h1_text w900 mw100">On-demand haulage service</h1>
                  <p className="hero_p_bottom_text pt-1 ">
                  Book a reliable truck to move your goods from any part of the country. 
                  </p>
                </div>
              </div>
              <div className=" col-md-6 d-flex justify-content-end d-flex-justify-content-center">
                <form>
                <div className="my_card">
                  <input type="text" placeholder="Pick up:"className="input-home"/>
                  <input type="text" placeholder="To:" className="input-home"/>
                  <input type="date" placeholder="When:" className="input-date"/>

                  <select className="select">
                    <option>Type</option>
                    <option>Cover body</option>
                    <option>Tanker</option>
                    <option>Dumper</option>
                    <option>Cage lift</option>
                    <option>Tarpaulin</option>
                    <option>Refridgerator</option>
                    <option>Animal transporter</option>
                    <option>Container transporter</option>
                    <option>Timber carrier</option>
                    <option>Van</option>
                    <option>Platform</option>
                  </select>
                  <select className="select">
                    <option>Weight in Tons</option>
                    <option>10 Tons</option>
                    <option>15 Tons</option>
                    <option>20 Tons</option>
                    <option>40 Tons</option>
                  </select>

                  <Link to="/detail" className="link-dark"><button className="my_btn w900">Request quote</button></Link>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width div_color mt-3">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="truck_section_margin truck_div_width">
              <h6 className="truck_h6_text">
                Why companies prefer to use Akeru
              </h6>
            </div>
            <div className="turck_p_text_holder">
              <p>
                This goes further than what you expected, here you can
                communicate two really important product features with icons.
              </p>

            </div>

            <div className="p-3">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div>
                    <div className="icon_holder d-flex justify-content-center">
                      <img src={vector} alt="icon" className="vector_icon" />
                    </div>
                    <p className="truck_small_heading">Unbeatable support</p>
                    <p className="truck_6rem_text">
                      Our support are available 24/7 to answer any questions and
                      give precise quotes
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div>
                    <div className="icon_holder d-flex justify-content-center">
                      <img src={vector4} alt="icon" className="vector_icon4" />
                    </div>
                    <p className="truck_small_heading">Competitive pricing</p>
                    <p className="truck_6rem_text">
                      With over 10years in the industry our price will be the
                      most competitive out there
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div>
                    <div className="icon_holder d-flex justify-content-center">
                      <img src={vector2} alt="icon" className="vector_icon2" />
                    </div>
                    <p className="truck_small_heading">Insurance covered</p>
                    <p className="truck_6rem_text">
                      We ensured any fleets using the platform is fully insured
                      including GIT.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <div className="icon_holder d-flex justify-content-center">
                      <img src={vector3} alt="icon" className="vector_icon2" />
                    </div>
                    <p className="truck_small_heading">Automated logistics</p>
                    <p className="truck_6rem_text">
                      All process is automated and you can get updates on all
                      stages till delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 display">
            <div className='position-absolute w90'>
            <img src={truck} alt="truck" className="truck" />
            <div className="lower_truck_div">
              <div className="d-flex">
                <div className="rounded-circle d-flex justify-content-center round_div_style">
                  <img src={vector6} alt="icon" />
                </div>
                <p className="round_div_p">Truck Requested</p>
              </div>
              <hr className="horizontal_line" />
              <hr className="horizontal_line2" />
            </div>

            <div className="lower_truck_div2">
              <div className="d-flex">
                <div className="rounded-circle d-flex justify-content-center round_div_style">
                  <img src={vector5} alt="icon" />
                </div>
                <p className="round_div_p">1 hour to delivery</p>
              </div>
              <hr className="horizontal_line" />
              <hr className="horizontal_line2" />
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width mt-3 bg_color d-flex justify-content-center pt-4 flex-column rmp">
        <h1 className="text-center truck_h6_text">
          Join the list of companies that trust Shuttlers
        </h1>
        <div className="d-flex justify-content-around join_img_holder">
          <img src={cola} alt="icon" />
          <img src={Casera} alt="icon" />
          <img src={unilever} alt="icon" />
        </div>
      </div>

      <div className="main_width mt-3 div_bg md-p">
        <div className="m_auto milestone d-flex pt-5 pb-2 rmp fd ht">
          <div className="tc">
            <h2 className="milestone_header truck_h6_text">Some of our milestones</h2>
            <p className="milestone_text">
              We’ve been really busy this year making thing like this happen
            </p>
          </div>
          <div className="sm">
          <Link to="/request" className="milestone_link link-dark pt-3 w900 btn_p">
            Request a quote
          </Link>
          </div>
        </div>
        <div className="col_div">
          <div className="row">
            <div className="col-lg-3 my_col_settings tac">
              <h1 className="milestone_h1">36</h1>
              <p className="milestone_first_p">States covered</p>
              <p className="milestone_second_p">We are everywhere</p>
            </div>
            <div className="col-lg-3 my_col_settings tac">
              <h1 className="milestone_h1">23</h1>
              <p className="milestone_first_p">Team members</p>
              <p className="milestone_second_p">Working right now</p>
            </div>
            <div className="col-lg-3 my_col_settings tac">
              <h1 className="milestone_h1">10</h1>
              <p className="milestone_first_p">Fleet</p>
              <p className="milestone_second_p">Smooth cargo delivery</p>
            </div>
            <div className="col-lg-3 my_col_settings tac">
              <h1 className="milestone_h1">2,142</h1>
              <p className="milestone_first_p">Request completed</p>
              <p className="milestone_second_p">We are not slowing down</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width mt-3 own_truck d-flex p-5 justify-content-between rmp md-moblie">
        <div className="footer_h2_holder">
          <h2>Do you own a Truck? Join us and start earning</h2>
        </div>
        <div className="own_item_holder container ">
          <div className="row justify-left">
            <span className="col-md-6"><i class="bi bi-check-square-fill akeru-primary m-1"></i> No obligation</span>
            <span className="col-md-6"> <i class="bi bi-check-square-fill akeru-primary m-1"></i>Full features</span>
          </div>
          
          <div className="row justify-left mt-2">
            <span className="col-md-6"><i class="bi bi-check-square-fill akeru-primary m-1"></i>Instant payout </span>
            <span className="col-md-6"><i class="bi bi-check-square-fill akeru-primary m-1"></i> Reporting dashboard</span>
          </div>
        </div>
        <div className="join_btn_holder">
          <Link to='/signin' className="link-dark w900 footer_btn">
          Join us
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import google from "../image/appStore.png";
import apple from "../image/apple.png";
import home from "../image/home.png";
import ic_download from "../image/ic_download.png";
import ic_list from "../image/ic_list.png";
import user from "../image/hiw_user.png";
import truck from "../image/hiw-truck.png";
import Ongoing from "../image/ongoingtrip.png";
import incoming from "../image/incoming.png";
import Ellipse from "../image/Ellipse.png";
import second from "../image/second.png";
import home2 from "../image/home2.png";
import support from "../image/Group.png";
import arrow2 from "../image/arrow2.png";
import notification from "../image/notification.png";
import pencil from "../image/pencil.png";
import hand from "../image/hand.png";
import lprice from "../image/low-price.png";
import group_2 from "../image/group_2.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Partner() {
  const [hasLoaded, sethasLoaded] = useState(false);
  
  const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
      sethasLoaded(true)
    };

    useEffect(() => {
      if(!hasLoaded){
        scrollToTop()
      } 
    }, []);
  return (
    <>
      <Navbar />
      <div className="container-fliud d-flex justify-content-around hero_style  ">
        <div className="main_width position-absolute">
          <div className="position-relative">
            <div className="container">
              <div className="row">
              <div className="col-lg-1 "></div>
                <div className="col-lg-5 col-md-12  ">
                  <div className="w0">
                    <p className="hero_p_top_text m-0 w900">Own a truck?</p>
                    <h1 className="hero_h1_text">
                    Earn more hauling with Akeru  
                    </h1>
                    {/* <p className="hero_p_bottom_text pt-1">
                    Download the app and start earning
                  </p> */}
                    <div className="d-flex justify-left">
                      <span className="m-2">
                      <i className="bi bi-check-square-fill akeru-primary m-1"></i> Instant pay out
                      </span>
                      <span className="m-2">
                        {" "}
                        <i className="bi bi-check-square-fill akeru-primary m-1"></i>Competitive pricing
                      </span>
                    </div>
                    <p className=" pt-2 ">Download the app and start earning</p>
                  </div>
                  <div className="d-flex justify-content-between partner-icon-width">
                    <img src={google} alt="icon" />
                    <img src={apple} alt="icon" />
                  </div>
                </div>
                <div className="offset-md-0 col-6 col-lg-6 offset-lg-0 d-flex justify-content-around display">
                  <div className="pt-5 right-partner-side"> 
                  <img
                    src={group_2}
                    alt="icon"

                  />
                  </div>
                  
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 mobile-sm-width">
        <div className="algin-width">
          <div className="container px-3 py-3">
            <br />
            <br />
            <h1 className="text-center how_it_works_title">
              Register as a Haulier on Akeru app{" "}
            </h1>
            <br />
            <br />
            <br />
            <div className="row how_it_works_cols">
              <div className="col-lg-3 col-md-6">
                <img src={ic_download} alt="icon" />
                <h5 className="how_it_works_col_title">Download the app.</h5>
                <p className="how_it_works_col_desc">
                  Akeru's app can be downloaded from the App Store for iPhone
                  users or the Play Store for Android users.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <img src={user} alt="icon" />
                <h5 className="how_it_works_col_title">Register.</h5>
                <p className="how_it_works_col_desc">
                  To begin using the app and getting order requests, create an
                  account with Akeru.
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={ic_list} alt="icon" />
                <h5 className="how_it_works_col_title">Upload documents.</h5>
                <p className="how_it_works_col_desc">
                  Upload all required documents to complete your registration as
                  this may prevent you from receiving order request
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={truck} alt="icon" />
                <h5 className="how_it_works_col_title">Enjoy the app</h5>
                <p className="how_it_works_col_desc">
                  Through the app you can request for Cash advance, manage your
                  income and toggle on and off when you wish to accept orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width div_color mt-3 mobile-sm-width">
        <div className="algin-width">
          <div className="row ">
            <div className="col col-pad col-pad-left">
              <h2 className="w900 f32">Receive live order</h2>
              <p>
                With Akeru driver’s app all you need to do is to stay online and
                you will receive a live request for your service.{" "}
              </p>
            </div>
            <div className="col d-flex justify-content-end p-3">
              <img src={incoming} alt="" className="img-style mobile-sm-img" />
              <div className="incoming-div position-absolute div-margin rounded">
                <div className="d-flex p-2 justify-content-between dotted-bottom-div incoming-top-div">
                  <p className="text-white incoming-text">Pick up</p>
                  <img
                    src={Ellipse}
                    alt="icon"
                    className="position-relative elli"
                  />
                  <p className="text-white incoming-text">
                    Lacasera Bottling <br /> company, Mile 2 Lagos
                  </p>
                </div>

                <div className="d-flex justify-content-between p">
                  <p className="text-white incoming-text">To</p>
                  <img
                    src={Ellipse}
                    alt="icon"
                    className="position-relative elli"
                  />
                  <p className="text-white incoming-text">Kado market, Abuja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width div_color mt-3 mobile-sm-width">
        <div className="algin-width">
          <div className="container px-3">
            <div className="row akeru-flex ">
              <div className="col-md-6 justify-content-start p-3">
                <img
                  src={second}
                  alt=""
                  className="img-style position-relative left-move mobile-sm-img"
                />
              </div>

              <div className="col col-pad-left">
                <h2 className="w900 f32">Receive multiple order</h2>
                <p>
                  With your fleet of trucks be rest assured that with Akeru you
                  will get tons or order request and multiple orders{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width div_color mt-3 p-3 mobile-sm-width sm-padding">
        <div className="algin-width">
          <div className="row  ">
            <div className="col col-pad col-pad-left">
              <h2 className="w900 f32">Need fuel advance?</h2>
              <p className="p-text">
                With Akeru you don’t have to worry about not having fuel to
                fulfill your order, contact support and find out if you are
                eligible to get one
              </p>
            </div>
            <div className="col d-flex justify-content-end">
              <img src={home2} alt="" className="img-style mobile-sm-img" />
              <div className="incoming-div position-absolute div-margin rounded p-3 mobile-sm-incoming">
                <div className="d-flex justify-content-between pt-4">
                  <div>
                    <h6 className="w900 text-white ">Need Fuel Advance?</h6>
                    <div className="d-flex">
                      <p className="text-white p-size">Contact support</p>
                      <img src={arrow2} alt="icon" className="arrow-style" />
                    </div>
                  </div>
                  <div>
                    <img src={support} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width div_color mt-3 mobile-sm-width">
        <div className="algin-width">
          <div className="container px-3">
            <div className="row">
              <div className="col d-flex justify-content-start p-3">
                <img
                  src={notification}
                  alt=""
                  className="img-style left-move position-relative mobile-sm-img"
                />
              </div>

              <div className="col col-pad-left">
                <h2 className="w900 f32">Get real time notification</h2>
                <p className="mobile-sm-partner-p">
                  Keep track of all activities by getting notifications of vital
                  actions that needs your attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width div_color mt-3 p-3 mobile-sm-width">
        <div className="container d-flex justify-content-center p-3">
          <h2 className="w900 f32">Features</h2>
        </div>
        <div className="row m-auto w80 pb-5">
          <div className=" col-md-4">
            <div className="rounded div_bg add-shadow p-3 mt-4">
              <div className="rounded small-icon-div mt-4 mb-3 d-flex justify-content-center">
                <img src={pencil} alt="icon" />
              </div>
              <h2 className="w900 mb-3">Multiple order</h2>

              <p>
                If you are a partner with fleet of trucks you have worries about
                getting orders as you can get multiple orders instantly.{" "}
              </p>

              <p>
                You have the option to cancel your multiple order request if you
                don’t have the capacity.
              </p>
            </div>
          </div>

          <div className=" col-md-4">
            <div className="rounded div_bg add-shadow p-3 mt-4">
              <div className="rounded small-icon-div mt-4 mb-3 d-flex justify-content-center">
                <img src={hand} alt="icon" />
              </div>
              <h2 className="w900 mb-3">Fast pay out</h2>

              <p>Get your payment immediately you complete the order. </p>

              <p>
                We will chase payment on your behalf but release the funds to you
                because we care and know the struggle of late payment
              </p>
            </div>
          </div>

          <div className=" col-md-4 ">
            <div className="rounded div_bg add-shadow p-3 mt-4">
              <div className="rounded small-icon-div mt-4 mb-3 d-flex justify-content-center">
                <img src={lprice} alt="icon" />
              </div>
              <h2 className="w900 mb-3">Competitive price</h2>

              <p>Akeru boast of the most competitive price out there. </p>

              <p>
                We always look out from our partners and offer the best price for
                all orders.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className=" bg-img p-5 mw100 mobile-sm-pad">
        <h2 className="text-white text-center w900 pt-5">
          What are you waiting for?
        </h2>
        <p className="text-white text-center">
          Join thousands of our partners and start earning
        </p>

        <div className="d-flex justify-content-between partner-icon-width m_auto">
          <img src={google} alt="icon" />
          <img src={apple} alt="icon" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Partner;


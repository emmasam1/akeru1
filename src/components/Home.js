import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ROUTE from "../route.json";
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
import reckitt from "../image/reckitt.png";
import p_and_g from "../image/p_and_g.png";
import nestle from "../image/nestle.png";
import pandagric from "../image/pandagric.png";
import video from "../image/video.mp4";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";
import Icon1 from '../image/log(1).png'
import Icon2 from '../image/log(2).png'
import Icon3 from '../image/log(3).png'
import Icon4 from '../image/log(4).png'
import Icon5 from '../image/hiw-truck.png'
import Girl from '../image/girl.png'
import Icon6 from '../image/con(1).png'
import Icon7 from '../image/con(2).png'
import Icon8 from '../image/con(3).png'
import Icon9 from '../image/con(4).png'
import Icon10 from '../image/con(5).png'
import Icon11 from '../image/con(6).png'
import Icon12 from '../image/con(7).png'
import Icon13 from '../image/con(8).png'
import Icon14 from '../image/mainn.png'

function Home() {
  let navigate = useNavigate();

  const [pick_up, setpick_up] = useState("");
  const [drop_off, setdrop_off] = useState("");
  const [date, setdate] = useState("");
  const [item, setItem] = useState("");
  const [truck_type, setTruckType] = useState("");
  const [weight, setWeight] = useState("");

  const [pick_upErr, setpick_upErr] = useState({});
  const [drop_offErr, setdrop_offErr] = useState({});
  const [dateErr, setdateErr] = useState({});
  const [itemErr, setItemErr] = useState({});
  const [typeErr, setTypeErr] = useState({});
  const [weightErr, setWeightErr] = useState({});
  const [amountErr, setamountErr] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([]);
  const [truckTypes, setTruckTypes] = useState([]);
  const [tons, setTons] = useState([]);
  const [hasLoaded, sethasLoaded] = useState(false);
  const routeToPage = (page) => {
    navigate(page)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
    sethasLoaded(true)
  };

  useEffect(() => {
    if (!hasLoaded) {
      scrollToTop()
    }
    axios
      .get(ROUTE.SITE_URL + "/locations")
      .then((res) => {
        let locate = res.data;
        setLocations(locate);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(ROUTE.SITE_URL + "/tons")
      .then((res) => {
        let ton = res.data;
        setTons(ton);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(ROUTE.SITE_URL + "/truck-types")
      .then((res) => {
        let truckTypes = res.data;
        setTruckTypes(truckTypes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const handSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    const user = JSON.parse(localStorage.getItem("user"));
    let data = {
      drop_off: drop_off,
      pick_up: pick_up,
      date: date,
      item: item,
      weight: weight,
      truck_type: truck_type,
    };
    if (isValid && user) {
      setIsLoading(true)
      let user_id = user.user_id;
      data.user_id = user_id

      axios
        .post(ROUTE.REQUEST, data)
        .then(function (res) {
          localStorage.removeItem("request")
          navigate(`/detail?request_id=${res.data.data.id}`);
        })
        .catch(function (err) {
          setIsLoading(false)
          console.log(err);
          alert(err)
        });

    } else {
      if (user == null) {
        localStorage.setItem("request", JSON.stringify(data))
        navigate(`/signin`);
      }
    }
  };

  const formValidation = () => {
    const pick_upErr = {};
    const drop_offErr = {};
    const dateErr = {};
    const itemErr = {};
    const typeErr = {};
    const weightErr = {};
    const amountErr = {};
    let isValid = true;

    if (!pick_up) {
      pick_upErr.pick_up = "pick up location required";
      isValid = false;
    }
    if (!drop_off) {
      drop_offErr.drop_off = "Drop-off location required";
      isValid = false;
    }
    if (!date) {
      dateErr.date = "Please select a date";
      isValid = false;
    }
    if (!item) {
      itemErr.item = "What item are you shipping";
      isValid = false;
    }
    if (!truck_type) {
      typeErr.truck_type = "What vehicle do you need";
      isValid = false;
    }
    if (!weight) {
      weightErr.weight = "What is the weight of your goods";
      isValid = false;
    }

    setpick_upErr(pick_upErr);
    setdrop_offErr(drop_offErr);
    setdateErr(dateErr);
    setItemErr(itemErr);
    setTypeErr(typeErr);
    setWeightErr(weightErr);
    return isValid;
  };

  return (
    <>
      <Navbar />
      <div className="container-fliud d-flex justify-content-around hero_style">

        <div className=" position-absolute">
          <div className="position-relative">
            <div className="row hero_pad_top">
              <div className="col-lg-1 col-md-12 "></div>
              <div className="col-lg-5 col-md-12 ">
                <div className="main_width">
                  <div className="mw100 pl-5">
                    <p className="hero_p_top_text m-0 w900 mw100">
                      Get a response within 1 minute
                    </p>
                    <h1 className="hero_h1_text w900 mw100">
                      On-demand road haulage and logistics for companies
                    </h1>
                    <p className="hero_p_bottom_text pt-1 ">
                      Get your goods delivered on time, save time and cost, with insurance cover. <br/>
                      Increase sales and loyalty
                    </p>
                    <div className="row">
                      <div className="col">
                        <div
                          onClick={() => routeToPage("/new-request")}
                          className="link-dark btn btn-akeru mt-2"
                        >
                          Request a quote
                        </div>
                      </div>
                      <div className="col">
                        <div
                          onClick={() => routeToPage("/partner")}
                          className="link-dark btn btn-akeru  btn-akeru-dark mt-2"
                        >
                          Become a carrier
                        </div>
                      </div>
                    </div>
                    <p className=" pt-4">By signing up, you agree to the Terms of Service</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12  ">
                <video  loop muted autoPlay playsinline id="myVideo">
                  <source src={video} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width div_color mt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="truck_section_margin truck_div_width">
                <h6 className="truck_h6_text">
                  Why companies prefer to use Akeru
                </h6>
              </div>
              <div className="turck_p_text_holder">
                <p>
                  Some key factors why we are most sort after by hauliers and manufacturers in Nigeria
                </p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img src={vector} alt="icon" className="vector_icon" />
                      </div>
                      <p className="truck_small_heading">Unbeatable support</p>
                      <p className="truck_6rem_text">
                        Our support are available 24/7 to answer any questions
                        and give precise quotes
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img
                          src={vector4}
                          alt="icon"
                          className="vector_icon"
                        />
                      </div>
                      <p className="truck_small_heading">Competitive pricing</p>
                      <p className="truck_6rem_text">
                        With over 10years in the industry our price will be the
                        most competitive out there
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img
                          src={vector2}
                          alt="icon"
                          className="vector_icon"
                        />
                      </div>
                      <p className="truck_small_heading">Insurance covered</p>
                      <p className="truck_6rem_text">
                        We ensured any fleets using the platform is fully
                        insured including GIT.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img
                          src={vector3}
                          alt="icon"
                          className="vector_icon"
                        />
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
            <div className="col offset-md-0 display akeru-col-height">
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
          {/* <div className="row">
            <div className="col-sm-6 col-md-5 col-lg-6">
              .col-sm-6 .col-md-5 .col-lg-6
            </div>
            <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
              .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
            </div>
          </div> */}
        </div>
      </div>

      <div className="main_width div_colors mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="truck_section_margin truck_div_width">
                <h6 className="truck_h6_text">
                  Why Carriers love us
                </h6>
              </div>
              <div className="turck_p_text_holder">
                <p>
                Earn more driving with us, get more visibilities and scale your business faster.
                </p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img src={Icon2} alt="icon" className="vector_icon" />
                      </div>
                      <p className="truck_small_heading">Instant payout</p>
                      <p className="truck_6rem_text">
                      Get 100% instant payment upon delivery of goods 
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img
                          src={Icon4}
                          alt="icon"
                          className="vector_icon"
                        />
                      </div>
                      <p className="truck_small_heading">Transparency</p>
                      <p className="truck_6rem_text">
                      Our negotiations and delivery are transparent and no hidden charge whatsoever.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img
                          src={Icon1}
                          alt="icon"
                          className="vector_icon"
                        />
                      </div>
                      <p className="truck_small_heading">Instant loading</p>
                      <p className="truck_6rem_text">
                      No wait time for all orders coming from us. You load instantly when you get to the depot
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img
                          src={Icon3}
                          alt="icon"
                          className="vector_icon"
                        />
                      </div>
                      <p className="truck_small_heading">Round trip guaranteed</p>
                      <p className="truck_6rem_text">
                      Increase your sales and profitability by getting a round trip order with Akeru
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12  display akeru-col-height">
              <img src={Girl} alt="truck" className="truck" />
              <div className="lower_truck_divs">
                <div className="con">
                  <div className=" d-flex  ">
                    <img src={Icon5} alt="icon" />
                  </div>
                  <p className="round_div_ps">New Akeru order, please accept !</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-sm-6 col-md-5 col-lg-6">
              .col-sm-6 .col-md-5 .col-lg-6
            </div>
            <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
              .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
            </div>
          </div> */}
        </div>
      </div>

      <div className="main_width mt-3 bg_color d-flex justify-content-center pt-2 flex-column rmp">
        <div className="p-5">
          <h1 className="text-center truck_h6_text">
            Sectors we serve
          </h1>
          <p className="text-center">We are signing on contracts and providing top notch services to our clients in different sectors.</p>
          <div className="">
            <div className="row ">
              <div className="col-md-3 mt-5">
                <div className="notch">
                  <div className="text-center ov_bg">
                    <img src={Icon13} alt="" />
                  </div>
                  <p className="text-center m-0">Manufacture</p>
                </div>
              </div>
              <div className="col-md-3 mt-5">
                <div className="notch">
                  <div className="text-center ov_bg">
                    <img src={Icon7} alt="" />
                  </div>
                  <p className="text-center m-0">Oil & Gas</p>
                </div>
              </div>
              <div className="col-md-3 mt-5">
                <div className="notch">
                  <div className="text-center ov_bg">
                    <img src={Icon6} alt="" />
                  </div>
                  <p className="text-center m-0">Pharmaceutical</p>
                </div>
              </div>
              <div className="col-md-3 mt-5">
                <div className="notch">
                  <div className="text-center ov_bg">
                    <img src={Icon8} alt="" />
                  </div>
                  <p className="text-center m-0">FMCG</p>
                </div>
              </div>
              <div className="col-md-3 mt-5">
                <div className="notch">
                  <div className="text-center ov_bg">
                    <img src={Icon9} alt="" />
                  </div>
                  <p className="text-center m-0">Construction</p>
                </div>
              </div>
              <div className="col-md-3 mt-5">
                <div className="notch">
                  <div className="text-center ov_bg pt-5 pb-5">
                    <img src={Icon10} alt="" />
                  </div>
                  <p className="text-center m-0">Agriculture</p>
                </div>
              </div>
              <div className="col-md-3 mt-5">
                <div className="notch">
                  <div className="text-center ov_bg">
                    <img src={Icon12} alt="" />
                  </div>
                  <p className="text-center m-0">Vehicle haulage</p>
                </div>
              </div>
              <div className="col-md-3 mt-5">
                <div className="notch">
                  <div className="text-center ov_bg">
                    <img src={Icon11} alt="" />
                  </div>
                  <p className="text-center m-0">Mining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width mt-3 bg_color d-flex justify-content-center pt-2 flex-column rmp">
        <div className="p-5">
          <h1 className="text-center truck_h6_text">
            Join the list of companies that trust Akeru
          </h1>
          <br/>
          <div className="row">
            <div className="col-md-3 mt-5">
            <img src={cola} alt="icon" />
            </div>
            <div className="col-md-3 mt-5">
            <img src={Casera} alt="icon" />
            </div>
            <div className="col-md-3 mt-5">
            <img src={unilever} alt="icon" />
            </div>
            <div className="col-md-3 mt-5">
            <img src={pandagric} alt="icon" />
            </div>
            <div className="col-md-3 mt-5">
            <img src={nestle} alt="icon" />
            </div>
            <div className="col-md-3 mt-5">
            <img src={Icon14} alt="icon" className="trans"/>
            </div>
            <div className="col-md-3 mt-5">
            <img src={reckitt} alt="icon" />
            </div>
            <div className="col-md-3 mt-5">
            <img src={p_and_g} alt="icon" />
            </div>
          </div>

        </div>
      </div>

      <div className="main_width mt-3 div_bg_home md-p">
        <div className="container">
          <div className="row  milestone  pt-5 pb-2 rmp fd ht ">
            <div className="col-lg-8 col-md-6 pt-4">
              <h2 className="milestone_header truck_h6_text">
                Some of our milestones
              </h2>
              <p className="milestone_text">
                We’ve been really busy this year making things like this happen
              </p>
            </div>
            <div className="text-center pt-4 pb-4 col-auto">
              <div
                onClick={() => routeToPage("/new-request")}
                className="link-dark btn btn-akeru"
              >
                Request a quote
              </div>
            </div>
          </div>
        </div>
        <div className="col_div">
          <div className="row pb-5">
            <div className="col-lg-3 col-md-6 ">
              <h1 className="milestone_h1">36</h1>
              <p className="milestone_first_p">States covered</p>
              <p className="milestone_second_p">We are everywhere</p>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h1 className="milestone_h1">23</h1>
              <p className="milestone_first_p">Team members</p>
              <p className="milestone_second_p">Working right now</p>
            </div>
            <div className="col-lg-3  ">
              <h1 className="milestone_h1">200+</h1>
              <p className="milestone_first_p">Fleet</p>
              <p className="milestone_second_p">Smooth cargo delivery</p>
            </div>
            <div className="col-lg-3  ">
              <h1 className="milestone_h1">12.4k</h1>
              <p className="milestone_first_p">Request completed</p>
              <p className="milestone_second_p">We are not slowing down</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main_width mt-3 own_truck row     ">
        <div className="col-md-4">
          <h2>Do you own a Truck? Join us and start earning</h2>
        </div>
        <div className="col-md-5 ">
          <div className="row justify-left pt-2">
            <span className="col-sm-6  col-lg-6">
              <i className="bi bi-check-square-fill akeru-primary m-1"></i> No
              obligation
            </span>
            <span className="col-sm-6  col-lg-6">
              {" "}
              <i className="bi bi-check-square-fill akeru-primary m-1"></i>Full
              features
            </span>
          </div>

          <div className="row justify-left top-settings  pt-3">
            <span className="col-sm-6  col-lg-6">
              <i className="bi bi-check-square-fill akeru-primary m-1"></i>
              Instant payout{" "}
            </span>
            <span className="col-sm-6  col-lg-6 ">
              <i className="bi bi-check-square-fill akeru-primary m-1"></i>{" "}
              Reporting dashboard
            </span>
          </div>
        </div>
        <div className="col-md-3  pt-4">
          <div className="row">
            <div className="col"></div>
            <div className="col-auto">
              <div className="link-dark btn  btn-akeru " onClick={() => routeToPage("/partner")}>
                Become a Carrier
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

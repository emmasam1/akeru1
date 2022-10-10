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
                      Get your goods delivered on time, save time and cost, with insurance cover.
                      Increase loyalty.
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

      <div className="main_width mt-3 bg_color d-flex justify-content-center pt-2 flex-column rmp">
        <div className="p-5">
          <h1 className="text-center truck_h6_text">
            Join the list of companies that trust Shuttlers
          </h1>
          <br/>
          <div className="d-flex justify-content-around join_img_holder">
            <img src={cola} alt="icon" />
            <img src={Casera} alt="icon" />
            <img src={unilever} alt="icon" />
            <img src={pandagric} alt="icon" />
          </div>
          <br />
          <div className="d-flex justify-content-around join_img_holder">
            <img src={p_and_g} alt="icon" />
            <img src={nestle} alt="icon" />
            <img src={reckitt} alt="icon" />
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
              <h1 className="milestone_h1">10</h1>
              <p className="milestone_first_p">Fleet</p>
              <p className="milestone_second_p">Smooth cargo delivery</p>
            </div>
            <div className="col-lg-3  ">
              <h1 className="milestone_h1">2,142</h1>
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

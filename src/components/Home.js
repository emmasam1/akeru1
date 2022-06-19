import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  useEffect(() => {
    const request = JSON.parse(localStorage.getItem("request"));
    if (request) {
<<<<<<< Updated upstream
      setpick_up(request.pick_up);
      setdrop_off(request.drop_off);
      setdate(request.date);
      setItem(request.item);
      setTruckType(request.truck_type);
      setWeight(request.weight);
      setpick_up(request.pick_up);
      setdrop_off(request.drop_off);
      setdate(request.date);
      setItem(request.item);
      setTruckType(request.truck_type);
      setWeight(request.weight);
      setAmount(request.amount);
    }
=======
      setpick_up(request.pick_up)
      setdrop_off(request.drop_off)
      setdate(request.date)
      setItem(request.item)
      setTruckType(request.truck_type)
      setWeight(request.weight)
      }
>>>>>>> Stashed changes
  }, []);

  const handSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    const user = JSON.parse(localStorage.getItem("user"));

    if (isValid && user) {
      let user_id = user.user_id;
      let data = {
        user_id: user_id,
        drop_off: drop_off,
        pick_up: pick_up,
        date: date,
        item: item,
        weight: weight,
        truck_type: truck_type,
      };

      localStorage.setItem("request", JSON.stringify(data));
      navigate("/detail");
    } else {
      if (user == null) {
        alert("Please login before making a request");
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
        <div className="triangle"></div>
        <div className="triangle rotate"></div>
        <div className="triangle"></div>
        <div className="triangle rotate"></div>

        <div className="main_width position-absolute">
          <div className="position-relative">
            <div className="row hero_pad_top">
              <div className="col">
                <div className="mw100">
                  <p className="hero_p_top_text m-0 w900 mw100">
                    Get a response within 1 minute
                  </p>
                  <h1 className="hero_h1_text w900 mw100">
                    On-demand haulage service
                  </h1>
                  <p className="hero_p_bottom_text pt-1 ">
                    Book a reliable truck to move your goods from any part of
                    the country.
                  </p>
                </div>
              </div>
              <div className="offset-md-0 col offset-lg-0 d-flex justify-content-end d-flex-justify-content-center flex-settings">
                <form onSubmit={handSubmit}>
                  <div className="my_card">
                    <input
                      type="text"
                      placeholder="pick up:"
                      className="input-home"
                      name="pick_up"
                      value={pick_up}
                      onChange={(e) => setpick_up(e.target.value)}
                    />
                    {Object.keys(pick_upErr).map((key) => {
                      return (
                        <p className="dash-error" key={pick_upErr}>
                          {pick_upErr[key]}
                        </p>
                      );
                    })}
                    <input
                      type="text"
                      placeholder="To:"
                      className="input-home"
                      name="drop_off"
                      value={drop_off}
                      onChange={(e) => setdrop_off(e.target.value)}
                    />
                    {Object.keys(drop_offErr).map((key) => {
                      return (
                        <p className="dash-error" key={drop_offErr}>
                          {drop_offErr[key]}
                        </p>
                      );
                    })}
                    <input
                      type="date"
                      placeholder="When:"
                      className="input-home input-date"
                      name="date"
                      value={date}
                      onChange={(e) => setdate(e.target.value)}
                    />
                    {Object.keys(dateErr).map((key) => {
                      return (
                        <p className="dash-error" key={dateErr}>
                          {dateErr[key]}
                        </p>
                      );
                    })}

                    <input
                      type="text"
                      placeholder="Item:"
                      className="input-home"
                      name="item"
                      value={item}
                      onChange={(e) => setItem(e.target.value)}
                    />
                    {Object.keys(itemErr).map((key) => {
                      return (
                        <p className="dash-error" key={itemErr}>
                          {itemErr[key]}
                        </p>
                      );
                    })}

                    <select
                      className="select"
                      name="truck_type"
                      value={truck_type}
                      onChange={(e) => setTruckType(e.target.value)}
                    >
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
                    {Object.keys(typeErr).map((key) => {
                      return (
                        <p className="dash-error" key={typeErr}>
                          {typeErr[key]}
                        </p>
                      );
                    })}

                    <select
                      className="select"
                      name="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    >
                      <option>Weight in Tons</option>
                      <option>10 Tons</option>
                      <option>15 Tons</option>
                      <option>20 Tons</option>
                      <option>40 Tons</option>
                    </select>
                    {Object.keys(weightErr).map((key) => {
                      return (
                        <p className="dash-error" key={weightErr}>
                          {weightErr[key]}
                        </p>
                      );
                    })}

                    <button className="my_btn w900">
                      {" "}
                      <Loading
                        loading={isLoading}
                        false_text={"Request quote "}
                      />{" "}
                    </button>
                  </div>
                </form>
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
                  This goes further than what you expected, here you can
                  communicate two really important product features with icons.
                </p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
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
                  <div className="col-lg-6 col-md-12">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img
                          src={vector4}
                          alt="icon"
                          className="vector_icon4"
                        />
                      </div>
                      <p className="truck_small_heading">Competitive pricing</p>
                      <p className="truck_6rem_text">
                        With over 10years in the industry our price will be the
                        most competitive out there
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img
                          src={vector2}
                          alt="icon"
                          className="vector_icon2"
                        />
                      </div>
                      <p className="truck_small_heading">Insurance covered</p>
                      <p className="truck_6rem_text">
                        We ensured any fleets using the platform is fully
                        insured including GIT.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div>
                      <div className="icon_holder d-flex justify-content-center">
                        <img
                          src={vector3}
                          alt="icon"
                          className="vector_icon2"
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
            <h2 className="milestone_header truck_h6_text">
              Some of our milestones
            </h2>
            <p className="milestone_text">
              We’ve been really busy this year making thing like this happen
            </p>
          </div>
          <div className="sm">
            <Link
              to="/request"
              className="milestone_link link-dark pt-3 w900 btn_p"
            >
              Request a quote
            </Link>
          </div>
        </div>
        <div className="col_div">
          <div className="row row_setting">
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
            <span className="col-sm-5 col-md-12 col-lg-12">
              <i className="bi bi-check-square-fill akeru-primary m-1"></i> No
              obligation
            </span>
            <span className="col-sm-5 col-md-12 col-lg-12">
              {" "}
              <i className="bi bi-check-square-fill akeru-primary m-1"></i>Full
              features
            </span>
          </div>

          <div className="row justify-left mt-2 top-settings">
            <span className="col-sm-5 col-md-12 col-lg-12">
              <i className="bi bi-check-square-fill akeru-primary m-1"></i>
              Instant payout{" "}
            </span>
            <span className="col-sm-5 col-md-12 col-lg-12">
              <i className="bi bi-check-square-fill akeru-primary m-1"></i>{" "}
              Reporting dashboard
            </span>
          </div>
        </div>
        <div className="join_btn_holder">
          <Link to="/signin" className="link-dark w900 footer_btn">
            Join us
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

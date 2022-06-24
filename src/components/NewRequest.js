import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'
import axios from "axios";
import ROUTE from "../route.json";
import Loader from "../Dashboard/Loader";
import Loading from "./Loading";
function NewRequest() {

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
  const [isLoading, setIsLoading] = useState(false);
  const [truckTypes, setTruckTypes] = useState([]);
  const [tons, setTons] = useState([]);

  useEffect(() => {
   
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

  useEffect(() => {
    const request = JSON.parse(localStorage.getItem("request"));
    if (request != null) {
      setpick_up(request.pick_up)
      setdrop_off(request.drop_off)
      setdate(request.date)
      setItem(request.item)
      setTruckType(request.truck_type)
      setWeight(request.weight)
    } 
  }, [])

  const handSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    const user = JSON.parse(localStorage.getItem("user"));

    if (isValid && user) {
      setIsLoading(true)
      let user_id = user.user_id;
      let data = {
        "user_id": user_id,
        "drop_off": drop_off,
        "pick_up": pick_up,
        "date": date,
        "item": item,
        "weight": weight,
        "truck_type": truck_type,
      }

      axios
      .post(ROUTE.REQUEST, data)
      .then(function (res) {
        navigate(`/detail?request_id=${res.data.data.id}`);
      })
      .catch(function (err) {
        setIsLoading(false)
        console.log(err);
        alert(err)
      });


    } else {
      if (user == null) {
        alert("Please login before making a request")

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
      <div className="container-fliud d-flex justify-content-around backgroundColor hero_style login_div_height">
        <div className="triangle"></div>
        <div className="triangle rotate"></div>
        <div className="triangle"></div>
        <div className="triangle rotate"></div>

        <div className="card_form_holder p-3 position-absolute mt-4">
           <div>
            <h1 className="text-center">Edit Request</h1>

            <form onSubmit={handSubmit}>
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
                <option value={""}>Select Type</option>
                {truckTypes.map((data) => {
                  return (
                    <option value={data.name} >{data.name}</option>
                  );
                })}
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
                {tons.map((data) => {
                  return (
                    <option value={data.amount} >{data.amount} Tons</option>
                  );
                })}

              </select>
              {Object.keys(weightErr).map((key) => {
                return (
                  <p className="dash-error" key={weightErr}>
                    {weightErr[key]}
                  </p>
                );
              })}
              {/* 
    <div className="d-flex justify-content-center btn-helper">
      <Link
        to="/detail"
        className="milestone_link w100 link-dark w900"
      >
        Request quote
      </Link>
    </div> */}
              <button className="my_btn w900 p-3">  <Loading
                loading={isLoading}
                false_text={"Create Request"}
              /></button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewRequest;
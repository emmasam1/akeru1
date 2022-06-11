import React, { useState } from "react";
import axios from "axios";
import search from "../image/Search.svg";
import ROUTE from "../route.json";
import Results from "./Results";
function DashRequest() {
  const [pick_up, setpick_up] = useState("");
  const [drop_off, setdrop_off] = useState("");
  const [date, setdate] = useState("");
  const [item, setItem] = useState("");
  const [truck_type, setTruckType] = useState("");
  const [weight, setWeight] = useState("");
  const [amount, setAmount] = useState("")

  const [pick_upErr, setpick_upErr] = useState({});
  const [drop_offErr, setdrop_offErr] = useState({});
  const [dateErr, setdateErr] = useState({});
  const [itemErr, setItemErr] = useState({});
  const [typeErr, setTypeErr] = useState({});
  const [weightErr, setWeightErr] = useState({});
  const [amountErr, setamountErr] = useState({})

  const [drivers, setDrivers] = useState([]);
  const [showResults, setShowResults] = useState(false)

  const handleClose = () => {
    setShowResults(false)
  }

  const handleChange = () => {

  }

  const handSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    const user = JSON.parse(localStorage.getItem("user"));
    let user_id = user;

    if (isValid && user) {
      axios
        .post(ROUTE.REQUEST, { user_id, weight, item, date, pick_up, drop_off, truck_type, amount })
        .then(function (res) {
          console.log(res.data)
          if (res.data.type === "SUCCESS") {
            axios.get(ROUTE.DRIVERS).then(function (res) {
              //let drivers = res
              setDrivers(res)
              setShowResults(true)
              //console.log(driver.data.data);
            });
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  const formValidation = () => {
    const pick_upErr = {};
    const drop_offErr = {};
    const dateErr = {};
    const itemErr = {};
    const typeErr = {};
    const weightErr = {};
    const amountErr = {}
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
    if(!amount) {
      amountErr.amount = "Amount required"
      isValid = false
    }

    setpick_upErr(pick_upErr);
    setdrop_offErr(drop_offErr);
    setdateErr(dateErr);
    setItemErr(itemErr);
    setTypeErr(typeErr);
    setWeightErr(weightErr);
    setamountErr(amountErr)
    return isValid;
  };

  return (
    <div>
      <div className="p-3 position-relative left-width left-width-home h100vh">
        {/* <div className="d-flex mb-1">
          <h1 className="truck-text">Total orders (402)</h1>
          <div className="d-flex bg-white rounded dash-input-holder">
            <img src={search} alt="icon" />
            <input className="border-0" />
          </div>
        </div> */}

        <div>
    </div>

        <div className="container-fliud d-flex justify-content-around ">
      { showResults ? <Results drivers={drivers.data} handleClose={handleClose} handleChange={handleChange}/> : null }
          <div className="card_form_holder p-3 position-absolute mt-4">
            <h1 className="text-center">Create A Request</h1>
          
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
                className="input-home"
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

              <input
                type="text"
                placeholder="Amount:"
                className="input-home"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              {Object.keys(amountErr).map((key) => {
                return (
                  <p className="dash-error" key={amountErr}>
                    {amountErr[key]}
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
              {/* 
              <div className="d-flex justify-content-center btn-helper">
                <Link
                  to="/detail"
                  className="milestone_link w100 link-dark w900"
                >
                  Request quote
                </Link>
              </div> */}
              <button className="my_btn">Create Request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashRequest;

import React, { useState, useEffect } from "react";
import axios from "axios";
import ROUTE from "../route.json";
import { useNavigate, Link } from 'react-router-dom';
import arrow from "../image/Arrow.png";
import Navbar from './Navbar';
import Footer from './Footer';
import Loading from "./Loading";
import Loader from "./Loader";

function RequestNext() {


  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [pick_up, setpick_up] = useState("");
  const [drop_off, setdrop_off] = useState("");
  const [date, setdate] = useState("");
  const [item, setItem] = useState("");
  const [truck_type, setTruckType] = useState("");
  const [weight, setWeight] = useState("");
  const [amount, setAmount] = useState("")
  const [service_fee, setService_fee] = useState("")
  const [requestId, setRequestId] = useState("")
  const [status, setStatus] = useState("")
  const user = JSON.parse(localStorage.getItem("user"));
  const requestData = JSON.parse(localStorage.getItem("request"));


  useEffect(() => {
    let params = (new URL(document.location)).searchParams;
    let request_id = params.get("request_id");
    if (request_id == null) {
      navigate("/request")
    } else {
      setPageLoading(true)
      axios
        .get(ROUTE.REQUEST + `/${request_id}`)
        .then(function (res) {
          console.log(res.data);
          setRequestId(request_id)
          localStorage.setItem("request_id", request_id)
          setpick_up(res.data.pick_up)
          setdrop_off(res.data.drop_off)
          setdate(res.data.date)
          setItem(res.data.item)
          setTruckType(res.data.truck_type)
          setWeight(res.data.weight)
          setAmount(res.data.amount)
          setService_fee(res.data.service_fee)
          setStatus(res.data.status)
          setPageLoading(false)
        })
        .catch(function (err) {
          setPageLoading(false)
          console.log(err);
          alert(err)
        });
    }


  }, [])

  const sendToPayment = () => {
    navigate("/payment/bank-transfer")
  };

  const switchStatusBadge = (data) => {
    switch (data) {
      case "pending":
        return <span className="badge bg-secondary">Pending..</span>
      case "accepted":
        return <span className="badge bg-warning">Accepted</span>
      case "arrive_pickup":
        return <span className="badge bg-info">At Pickup</span>
      case "start_trip":
        return <span className="badge bg-success">On Transit...<i class="bi bi-truck"></i></span>
      case "arrive_dropoff":
        return <span className="badge akeru-bg-primary">Completed</span>
        case "completed":
          return <span className="badge akeru-bg-primary">Completed</span>
      case "cancelled":
          return <span className="badge bg-danger">Cancelled</span>
      case "paused_trip":
        return <span className="badge bg-secondary">PAUSED</span>
    }
  }


  return (
    <>
      <Navbar />
      <div className="container-fliud d-flex justify-content-around backgroundColor pt-15 nrh hero_style login_div_height request_height pt-5">
        <div className="triangle"></div>
        <div className="triangle rotate"></div>
        <div className="triangle"></div>
        <div className="triangle rotate"></div>
        <div className="position-absolute main_width">
          {pageLoading ? <Loader /> : <div className="row ">

              {amount<1?<div className="col-md-2 "></div>:null}

            <div className="col-md-8  p-3 bg-white rounded reqNext ">
              <h1 className="text-center req_h1">Your request summary</h1>
              <p className="text-center req_first_p pt-2 w900">
                <span>{pick_up}</span> &nbsp;{" "}
                <img src={arrow} alt="icon" /> &nbsp;{" "}
                <span>{drop_off}</span>
              </p>
              <p className="text-center text-muted t-13 w900">{date}</p>
              <p className="text-center text-muted t-13 w900">
                ORDER ID :<b> {requestId}</b>
              </p>
              <p className="text-center t-40 w900">{weight}-Tons </p>
              <p className="text-center t-40 w900"> {item}</p>
             
              <p className="text-center t-12 w900 text-info " >
              {amount<1?<>We will send you a quote in 5 mins, <br/>Please check your email or refresh this page</>:<>We will match you with a verified driver in 5 mins</>}
              </p>
             {status=="pending"?null: <div className="text-center">
             <span>Trip-Status: <h3 >{switchStatusBadge(status)}</h3></span>
              </div>}
              

             {amount<1? <div className="d-flex justify-content-center m37">
                <Link
                  to={`/request?request_id=${requestId}`}
                  className="link-dark text-decoration-none pt-3 btn-req-link w900"
                >
                  Edit request
                </Link>
              </div>:null}
              
            </div>

            {amount>0?<div className="col-md-4  rounded bg-white p-3 reqNext ">
              <div>
                <h4 className="text-center w900 req_h4 mb-4">{weight}-Ton {truck_type}</h4>
                <div className="border-bottom border-2 mb-3">
                  <div className="d-flex justify-content-between ">
                    <p className="req_pro">Amount</p>
                    <p className="req_pro_next">
                      <span>&#8358;</span>{amount.toLocaleString()}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="req_pro w900">Service fee</p>
                    <p className="req_pro_next">
                      <span>&#8358;</span>{service_fee.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="border-bottom border-2">
                  <div className="d-flex justify-content-between ">
                    <p className="req_pro">Subtotal</p>
                    <p className="req_pro_next">
                      <span>&#8358;</span>{(amount + service_fee).toLocaleString()}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="req_pro">Tax @ 7.5%</p>
                    <p className="req_pro_next">
                      <span>&#8358;</span>{(amount * 0.075).toLocaleString()}
                    </p>
                  </div>

                </div>

                <div className="d-flex justify-content-between">
                  <p className="req_pro"><b>Total</b></p>
                  <p className="req_pro_next">
                    <span>&#8358;</span>{(amount + service_fee + (amount * 0.075)).toLocaleString()}
                  </p>
                </div>

                <div className="d-flex justify-content-center mt-3 m37">
                  {amount < 1 ? null : <button className="my_btn link-dark text-decoration-none w-170 pro_p w900 p-3" onClick={() => { sendToPayment(); }}>  <Loading loading={isLoading} false_text={"Proceed to payment"} /></button>
                  }
                </div>
              </div>

            </div>:null}
          </div>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RequestNext;

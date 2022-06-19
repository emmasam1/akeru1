import React, { useState,useEffect } from "react";
import axios from "axios";
import ROUTE from "../route.json";
import { useNavigate,Link } from 'react-router-dom';
import arrow from "../image/Arrow.png";
import Navbar from './Navbar';
import Footer from './Footer';
import Loading from "./Loading";

function RequestNext() {
 
  
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [pick_up, setpick_up] = useState("");
  const [drop_off, setdrop_off] = useState("");
  const [date, setdate] = useState("");
  const [item, setItem] = useState("");
  const [truck_type, setTruckType] = useState("");
  const [weight, setWeight] = useState("");
  const [amount, setAmount] = useState("")
  const [service_fee, setService_fee] = useState("")
  const user = JSON.parse(localStorage.getItem("user"));
  const requestData = JSON.parse(localStorage.getItem("request"));

  useEffect(() => {
    let params = (new URL(document.location)).searchParams;
    let request_id = params.get("request_id");
    if (requestData && request_id==null) {
      setpick_up(requestData.pick_up)
      setdrop_off(requestData.drop_off)
      setdate(requestData.date)
      setItem(requestData.item)
      setTruckType(requestData.truck_type)
      setWeight(requestData.weight)
      setAmount(requestData.amount)
      setService_fee(requestData.service_fee)
    }else{
     
      axios
        .get(ROUTE.REQUEST+`/${request_id}`)
        .then(function (res) {
          console.log(res.data);
          setpick_up(res.data.pick_up )
          setdrop_off( res.data.drop_off)
          setdate(res.data.date )
          setItem( res.data.item)
          setTruckType(res.data.truck_type )
          setWeight(res.data.weight )
          setAmount(res.data.amount )
          setService_fee(res.data.service_fee)

          let data = {
            "user_id": user.user_id,
            "drop_off": drop_off,
            "pick_up": pick_up,
            "date": date,
            "item": item,
            "weight": weight,
            "truck_type": truck_type,
          }
    
          localStorage.setItem("request", JSON.stringify(data))
          
        })
        .catch(function (err) {
          setIsLoading(false)
          console.log(err);
          alert(err)
        });
    }
  }, [])

  const sendToPayment=()=>{
    if (requestData && user) {
      setIsLoading(true)
      
      axios
        .post(ROUTE.REQUEST,requestData)
        .then(function (res) {
          console.log(res);
          localStorage.removeItem("request")
          alert("Request create successfully")
          navigate("/profile/pending")
        })
        .catch(function (err) {
          setIsLoading(false)
          console.log(err);
          alert(err)
        });
    }
  };

    
  return (
    <>
    <Navbar/>
      <div className="container-fliud d-flex justify-content-around backgroundColor pt-15 nrh hero_style login_div_height request_height pt-5">
        <div className="triangle"></div>
        <div className="triangle rotate"></div>
        <div className="triangle"></div>
        <div className="triangle rotate"></div>
        <div className="position-absolute main_width">
          <div className="row ">
            <div className="col-md-8   p-3 bg-white rounded reqNext ">
              <h1 className="text-center req_h1">Your request summary</h1>
              <p className="text-center req_first_p pt-2 w900">
                <span>{pick_up}</span> &nbsp;{" "}
                <img src={arrow} alt="icon" /> &nbsp;{" "}
                <span>{drop_off}</span>
              </p>
              <p className="text-center text-muted t-13 w900">{date}</p>
              <p className="text-center text-muted t-13 w900">
                SKU : EV-NA-001
              </p>
              <p className="text-center t-40 w900">{weight} </p>
              <p className="text-center t-40 w900">{item}</p>
              <p className="text-center t-12 w900">
                We will match you with a verified driver in 5 mins
              </p>
              <div className="d-flex justify-content-center m37">
                <Link
                  to="/request"
                  className="link-dark text-decoration-none pt-3 btn-req-link w900"
                >
                  Edit request
                </Link>
              </div>
            </div>
            <div className="col-md-4   rounded bg-white p-3 reqNext ">
              <h4 className="text-center w900 req_h4 mb-4">{weight} {truck_type}</h4>
              <div className="border-bottom border-2 mb-3">
                <div className="d-flex justify-content-between ">
                  <p className="req_pro">Amount</p>
                  <p className="req_pro_next">
                    <span>&#8358;</span>{amount}
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Service fee</p>
                  <p className="req_pro_next">
                    <span>&#8358;</span>{service_fee}
                  </p>
                </div>
              </div>

              <div className="border-bottom border-2">
                <div className="d-flex justify-content-between ">
                  <p className="req_pro">Subtotal</p>
                  <p className="req_pro_next">
                    <span>&#8358;</span>1,050,000
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="req_pro">Tax @ 7.5%</p>
                  <p className="req_pro_next">
                    <span>&#8358;</span>1,128,750
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-center mt-3 m37">
              <button className="my_btn link-dark text-decoration-none w-170 pro_p w900 p-3" onClick={()=>{sendToPayment();}}>  <Loading loading={isLoading} false_text={"Proceed to payment"}/></button>
                {/* <Link
                  to="/payment"
                  className="link-dark text-decoration-none milestone_link pt-1 w-170 pro_p w900 p-0"
                >
                  
                  
                </Link> */}
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RequestNext;

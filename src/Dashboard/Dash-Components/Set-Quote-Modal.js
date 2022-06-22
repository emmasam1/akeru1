import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import arrow from "../../image/Arrow.png";
import ROUTE from "../../route.json";
import axios from "axios";

function SetQuoteModal(props) {

  const [amount, setAmount] = useState(props.data.amount);
  const [service_fee, setService_fee] = useState(props.data.service_fee);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [client, setClient] = useState({});
  const calculateQuote = () => {

    setTimeout(function () {
      let subtotal = parseFloat(amount) + parseFloat(service_fee);
      let tax = amount * 0.075;
      let total = subtotal + tax

      setTax(tax)
      setSubtotal(subtotal)
      setTotal(total)

    }, 2000);
  }

  useEffect(() => {
    axios.get(ROUTE.CLIENTS + `/${props.data.user_id}`)
    .then((res) => {
      console.log(res.data);
        if(res.data.fullname ){
          setClient(res.data)
        }
    })
    .catch((err) => {
      console.log(err);
    })
      
  }, [])

  const changeDate = (date) => {
    var newDate = new Date(date)
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let day = newDate.getDay();
    let hr = newDate.getHours();
    let min = newDate.getMinutes();
    return `${year}-${month}-${day} ${hr}:${min}`;
  }

  const updateQuote = () => {
    if (amount != "") {
      let data = { "request_id": props.data.request_id, "amount": amount, "service_fee": service_fee }
      axios.post(ROUTE.REQUEST + `/set-quote`, data)
        .then((res) => {
          console.log(res);
          props.refresh()
          alert(res.data.msg)
          props.closeModal()
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      alert("Provide an amount for this request before sending")
    }
  }

  return (
    <div className='overlay position-fixed d-flex align-self-center '>
      <div className="request-modal">
        <i className="bi bi-x-lg close-icon" onClick={() => props.closeModal()}></i>
        <h1 className="text-center req_h1 mt-2">{props.justView ? "View Request Details" : "Set Price For Quote"}</h1>
        <hr />
        <div className='container dash-modal-container'>
          <div className=" row ">
            <div className="col-md-6   p-3 bg-white rounded reqNext  ">

              <p className="text-center req_first_p pt-2 w900">
                <span>{props.data.pick_up} </span> &nbsp;{" "}<br />
                <img src={arrow} alt="icon" /> &nbsp;{" "}<br />
                <span>{props.data.drop_off}</span>

              </p>
              <p className="text-center text-muted t-13 w900">{props.data.date}</p>
              <p className="text-center text-muted t-13 w900">
                SKU : {(props.data.request_id).toUpperCase()}
              </p>
              <p className="text-center t-40 w900">{props.data.weight}</p>
              <p className="text-center t-40 w900"><span className='text-muted ' >ITEM:</span>{props.data.item}</p>
            </div>
            <div className="col-md-6   rounded bg-white p-3  ">
              <h4 className="text-center w900 req_h4 mb-4">{props.data.weight.toUpperCase()} TRUCK</h4>
              <div className="border-bottom border-2 mb-1">
                <div className="d-flex justify-content-between ">
                  <p className="req_pro">Amount</p>
                  <p className="req_pro_next">
                    {props.justView ? props.data.amount : <input
                      type="number"
                      placeholder="Enter Amount:"
                      className="input-home"
                      name="amount"
                      value={amount}
                      onChange={(e) => { setAmount(e.target.value); calculateQuote() }}
                    />}
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Service fee</p>
                  <p className="req_pro_next">
                    {props.justView ? props.data.service_fee : <input
                      type="number"
                      placeholder="Enter Fee:"
                      className="input-home"
                      name="service Fee"
                      value={service_fee}
                      onChange={(e) => { setService_fee(e.target.value); calculateQuote() }}
                    />}
                  </p>
                </div>
              </div>

              <div className="border-bottom border-2">
                <div className="d-flex justify-content-between ">
                  <p className="req_pro">Subtotal</p>
                  <p className="req_pro_next">
                    <span>&#8358;</span>{subtotal.toLocaleString()}
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="req_pro">Tax @ 7.5%</p>
                  <p className="req_pro_next">
                    <span>&#8358;</span>{tax.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="req_pro">Total (NGN)</p>
                <p className="req_pro_next">
                  <span>&#8358;</span>{total.toLocaleString()}
                </p>
              </div>



            </div>
          </div>
        
        {props.justView ? null : <div className="d-flex justify-content-center mt-3  mb-3 m37">
          <button
            onClick={() => {
              updateQuote()
            }}
            className="link-dark text-decoration-none milestone_link pt-1 w-170 pro_p w900 p-0"
          >
            Send Request Quote
          </button>
        </div>}
         <div className='container'>
         <hr />
          <h5 className='text-center'><b>Customer Info</b></h5>
          <hr />
          <div className='row'>
            <div className='col-md-6'>
              <div className=" border-2">
                <div className="d-flex justify-content-between ">
                  <p className="req_pro"> COMPANY</p>
                  <p className="req_pro_next">
                    {client.company} 
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="req_pro">FULL NAME</p>
                  <p className="req_pro_next">
                     {client.fullname}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="  border-2">
                <div className="d-flex justify-content-between ">
                  <p className="req_pro"> EMAIL</p>
                  <p className="req_pro_next">
                     {client.email}


                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="req_pro">PHONE</p>
                  <p className="req_pro_next">
                    {client.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
        
      </div>
    </div>
  )
}
export default SetQuoteModal
import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import arrow from "../../image/Arrow.png";

function SetQuoteModal(props) {

  const [amount, setAmount] = useState("");
  
  const changeDate=(date)=>{

    var newDate=new Date(date)
    let year=newDate.getFullYear();
    let month=newDate.getMonth();
    let day=newDate.getDay();
    let hr=newDate.getHours();
    let min=newDate.getMinutes();
    return `${year}-${month}-${day} ${hr}:${min}`;
  }

  return (
    <div className='overlay position-fixed d-flex align-self-center'>
      <div className="request-modal">
        <i className="bi bi-x-lg close-icon" onClick={() => props.closeModal()}></i>
        <div className="d-flex justify-content-between flex-mobile-d ">
          <div className="g-col-6 grid-left p-3 bg-white rounded reqNext h400">
            <h1 className="text-center req_h1">Request Data</h1>
            <p className="text-center req_first_p pt-2 w900">
              <span>{props.data.pickup} </span> &nbsp;{" "}
              <img src={arrow} alt="icon" /> &nbsp;{" "}
              <span>{props.data.drop_off}</span>
            </p>
            <p className="text-center text-muted t-13 w900">{changeDate(props.data.date)}</p>
            <p className="text-center text-muted t-13 w900">
              SKU : EV-NA-001
            </p>
            <p className="text-center t-40 w900">{props.data.weight}</p>
            <p className="text-center t-40 w900">{props.data.item}</p>
            
           
          </div>
          <div className="g-col-6 grid-right rounded bg-white p-3 reqNext h345">
            <h4 className="text-center w900 req_h4 mb-4">40 T0N TRUCK</h4>
            <div className="border-bottom border-2 mb-3">
              <div className="d-flex justify-content-between ">
                <p className="req_pro">{props.data.weight} truck X 1 with driver</p>
                <p className="req_pro_next">
                  <span>&#8358;</span>
                <input
                type="number"
                placeholder="Enter Amount:"
                className="input-home"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
                </p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="req_pro w900">Service fee</p>
                <p className="req_pro_next">
                  <span>&#8358;</span>50,000
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
              <Link
                to="/payment"
                className="link-dark text-decoration-none milestone_link pt-1 w-170 pro_p w900 p-0"
              >
                Udpate Request Quote 
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default SetQuoteModal
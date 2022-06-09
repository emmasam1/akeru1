import React from 'react'
import { Link } from 'react-router-dom'
import arrow from "../image/Arrow.png";

function Modal(props){
    return(
        <div className='overlay position-fixed d-flex align-self-center'>
        <div className="request-modal"> 
        <i className="bi bi-x-lg close-icon" onClick={()=>props.closeModal()}></i>
            <div className="d-flex justify-content-between flex-mobile-d ">
            <div className="g-col-6 grid-left p-3 bg-white rounded reqNext h400">
              <h1 className="text-center req_h1">Your request summary</h1>
              <p className="text-center req_first_p pt-2 w900">
                <span>Garki</span> &nbsp;{" "}
                <img src={arrow} alt="icon" /> &nbsp;{" "}
                <span>Kado Market Abuja</span>
              </p>
              <p className="text-center text-muted t-13 w900">March 17, 2022</p>
              <p className="text-center text-muted t-13 w900">
                SKU : EV-NA-001
              </p>
              <p className="text-center t-40 w900">40 Tons</p>
              <p className="text-center t-40 w900">Drinks</p>
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
            <div className="g-col-6 grid-right rounded bg-white p-3 reqNext h345">
              <h4 className="text-center w900 req_h4 mb-4">40 T0N TRUCK</h4>
              <div className="border-bottom border-2 mb-3">
                <div className="d-flex justify-content-between ">
                  <p className="req_pro">40 Ton truck X 1 with driver</p>
                  <p className="req_pro_next">
                    <span>&#8358;</span>1,000,000
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
                  Proceed to payment
                </Link>
              </div>

            </div>
          </div>
            </div>
        </div>
    )
}
export default Modal
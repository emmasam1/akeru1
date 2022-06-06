import React from "react";
import gen from "../image/gen055.svg";
function Review({ formData, setForm, navigation }) {
    console.log(formData);
  return (
    <>
      <div className="d-flex justify-content-between border-bottom mb-3 pt-2 pb-1">
        <div className="d-flex justify-content-between dash-truck-nav">
          <li className="list-unstyled dash-details-title">Details</li>
          <li className="list-unstyled dash-details-title">Settings</li>
          <li className="list-unstyled dash-details-title">
            Review and submit
          </li>
        </div>
        <div className="dash-btn-back-holder">
          <button className="btn btn-light btn-sm">Back</button>
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: "50%", height: "2px" }}
        ></div>
      </div>

      <div className="dash-form-p rev-pad">
        <p className="review-p">Details</p>

        <div className="d-flex justify-content-between">
          <span className="review-truck-details">Truck details</span>
          <span className="review-truck-details">
            Sprinters 2003 mercedes benz
          </span>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <span className="review-truck-details">Contact person</span>
          <span className="review-truck-details">Phillip Collins</span>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <span className="review-truck-details">Phone</span>
          <span className="review-truck-details">080893929848298</span>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <span className="review-truck-details">Email</span>
          <span className="review-truck-details">phillip@yahoo.com</span>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <span className="review-truck-details">Description</span>
          <div className="des-div">
            <span className="review-truck-details">
              2003 brand new mercedes benz sprinter with 20 seaters and AC
            </span>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <span className="review-truck-details">Registration date</span>
          <span className="review-truck-details date-color">14 Feb, 2022</span>
        </div>

        <div className="d-flex justify-content-end">
          <button className="rev-btn d-flex justify-content-between mt-2 mb-2">
            Edit <img src={gen} alt="icon" className="position-relative" />
          </button>
        </div>
      </div>

      <div className="border-top pt-3">
        <p className="review-p">Settings</p>
        <div className="d-flex justify-content-between mt-2 rev-pad">
          <span className="review-truck-details">Category</span>
          <span className="basic">Basic</span>
        </div>

        <div className="d-flex justify-content-end rev-pad mt-2">
              <button className="rev-btn d-flex justify-content-between mt-2 mb-2">Edit <img src={gen} alt="icon" className="position-relative"/></button>
          </div>
      </div>

      <div className="border-top d-flex justify-content-end dash-next-btn-holder pt-2">
        <button
          className="btn btn-light btn-sm m-0-15"
          onClick={() => navigation.previous()}
        >
          Previous
        </button>
        <button className="btn btn-light w900 btn-sm">Submit</button>
      </div>
    </>
  );
}

export default Review;

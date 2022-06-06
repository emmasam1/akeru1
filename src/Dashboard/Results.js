import React from "react";
import ROUTE from "../route.json";
import axios from "axios";

function Results(props) {
  const handleChange = (e) => {
    let driver = props.drivers?.data.find(
      (x) => x.driver_id === e.target.value
    );
    console.log(driver);
  };

  const handlesubmit = async () =>{
    await axios.post(ROUTE.ASSIGN)
    .then(function (res){
      console.log(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  return (
    <div className="pop-up bg-light rounded position-absolute d-flex flex-column align-items-center pt-3">
      <div className="w100 d-flex align-items-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="bi bi-x position-relative my-close-icon"
          viewBox="0 0 16 16"
          onClick={props.handleClose}
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
      <p>Pick a driver</p>
      <div>
        <select onChange={(e) => handleChange(e)}>
          <option>select a driver</option>
          {props.drivers?.data.map((one) => {
            return (
              <option value={one.driver_id} key={one.driver_id}>
                {one.firstname} {one.lastname}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mt-5">
        <button className="btn btn-dark">PSOT</button>
      </div>
    </div>
  );
}
export default Results;

import React, { useEffect } from "react";
import axios from 'axios'
function ApproveModal(props) {
  //console.log(props.data.driver_id);
  useEffect(() => {
    let id = props.data.driver_id
    console.log(id);
    axios.get(`https://peaceful-atoll-40814.herokuapp.com/resources/${id}/driver`)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
  }, [])
  return (
    <div className="overlay position-fixed">
      <div className=" bg-white width-90 p-3 rounded d-flex flex-column">
        <div className="float-end">
          <i className="bi bi-x-lg close-icon" onClick={props.handleClose}></i>
        </div>
        <div className="d-flex justify-content-between">
          <div className="p-2 width-350">
            <div className="d-flex justify-content-between pb-2">
              <h5>Firstname</h5>
              <h5>Lastname</h5>
            </div>
            <div className="pb-2">
                <h5>drivr_email@gmail.com</h5>
            </div>
            <div className="pb-2">
                <h5>08044129800</h5>
            </div>
            <div className="pb-2">
                <h5>Abuja</h5>
            </div>
            <div className="pb-2">
                <h5>Rating</h5>
            </div>
          </div>
          <div>kejFI</div>
        </div>
      </div>
    </div>
  );
}
export default ApproveModal;

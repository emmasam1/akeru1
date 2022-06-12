import React, { useState } from "react";
import ROUTE from "../../route.json";
import axios from "axios";

function EditUser(props) {
  const [fName, setFName] = useState(props.data.firstname);
  const [lName, setLName] = useState(props.data.lastname);
  const [email, setEmail] = useState(props.data.email);
  const [phone, setPhone] = useState(props.data.phone);
  const [city, setCity] =   useState(props.data.city);

  const updateUser = (e) => {
    if(email!="" &&  email!=null){
      let data={
        "firstname": fName,
        "lastname": lName,
        "email": email,
        "phone": phone,
        "city": city,
        
    }
    axios.put(ROUTE.DRIVERS+`/${props.data.driver_id}/account`, data)
      .then((res) => {
        console.log(res);
        props.refresh()
        alert(res.data.msg)
      })
      .catch((err) => {
        console.log(err);
      })
    }else{
      alert("Provide drivers email before updating")
    }

  };

  return (
    <div className="overlay position-fixed d-flex justify-content-center">
      <div className="user-modal align-self-center p-3 d-flex flex-column">
        <div>
          <i className="bi bi-x-lg close-icon" onClick={props.handleClose}></i>
        </div>
        <h1 className="text-center req_h1">Edit Details</h1>
        <form>
          <input
            type="text"
            className="input-home"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            name="fName"
          />
          <input
            type="text"
            className="input-home"
            value={lName}
            name="lName"
            onChange={(e) => setLName(e.target.value)}
          />
          <input
            type="text"
            className="input-home"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="input-home"
            value={phone}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            className="input-home"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            name="city"
          />

          <button className="my_btn w900" onClick={()=>updateUser()}>Update Driver</button>
        </form>
      </div>
    </div>
  );
}
export default EditUser;

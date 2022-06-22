import React, {useState} from "react";
import axios from "axios";
import ROUTE from "../../route.json";
function ClientModal(props) {


  const [fullName, setFullName] = useState(props.data.fullname);
  const [company, setCompany] = useState(props.data.company);
  const [email, setEmail] = useState(props.data.email);
  const [phone, setPhone] = useState(props.data.phone);

  const updateClient=()=>{
    let data={"fullname":fullName,"company":company,"phone":phone }
     axios
      .put(`${ROUTE.CLIENTS}/${props.data.user_id}`, data)
      .then((res) => {
        console.log(res.data);
        props.handleClose()
        props.refresh()
        alert("Profile Info updated")
      })
      .catch((err) => {
        console.log(err);
         
      });   
  }

  return (
    <div className="overlay position-fixed d-flex justify-content-center">
      <div className="user-modal align-self-center p-3 d-flex flex-column">
        <div>
          <i className="bi bi-x-lg close-icon" onClick={props.handleClose}></i>
        </div>
        <h1 className="text-center req_h1">Edit Client Details</h1>
        <form>
          <input
            type="text"
            className="input-home"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            name="fullname"
          />
          <input
            type="text"
            className="input-home"
            placeholder="Company"
            value={company}
            name="company"
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            className="input-home"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="input-home"
            placeholder="Phone"
            value={phone}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <button className="my_btn w900" type="button" onClick={updateClient}>Update</button>
        </form>
      </div>
    </div>
  );
}
export default ClientModal;

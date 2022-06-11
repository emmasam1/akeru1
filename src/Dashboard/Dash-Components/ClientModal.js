import React, {useState} from "react";

function ClientModal(props) {
  const [fName, setFName] = useState(props.data.firstname);
  const [lName, setLName] = useState(props.data.lName);
  const [email, setEmail] = useState(props.data.email);
  const [phone, setPhone] = useState(props.data.phone);

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

          <button className="my_btn w900">Update</button>
        </form>
      </div>
    </div>
  );
}
export default ClientModal;
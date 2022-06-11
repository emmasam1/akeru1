import React, { useState } from "react";

function EditUser(props) {
  const [fName, setFName] = useState("");

  const UpdateUser = (e) => {};
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
            value={props.data.firstname}
            onChange={(e) => setFName(e.target.value)}
            name="fName"
          />
          <input
            type="text"
            className="input-home"
            value={props.data.lastname}
          />
          <input type="text" className="input-home" value={props.data.email} />
          <input type="text" className="input-home" value={props.data.phone} />
          <input type="text" className="input-home" value={props.data.city} />

          <button className="my_btn w900">Save</button>
        </form>
      </div>
    </div>
  );
}
export default EditUser;

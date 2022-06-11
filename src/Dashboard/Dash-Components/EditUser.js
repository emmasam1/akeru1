import React from "react";

function EditUser(props) {
  console.log(props.data);
  return (
    <div className="overlay position-fixed d-flex justify-content-center">
      <div className="user-modal align-self-center p-3 d-flex flex-column">
        <div>
          <i className="bi bi-x-lg close-icon" onClick={props.handleClose}></i>
        </div>
        <h1 className="text-center req_h1">Edit Details</h1>
        <form>
          <input type="text" placeholder="pick up:" className="input-home" />
          <input type="text" placeholder="pick up:" className="input-home" />
          <input type="text" placeholder="pick up:" className="input-home" />
          <input type="text" placeholder="pick up:" className="input-home" />
          <input type="text" placeholder="pick up:" className="input-home" />

          <button className="my_btn w900">Save</button>
        </form>
      </div>
    </div>
  );
}
export default EditUser;

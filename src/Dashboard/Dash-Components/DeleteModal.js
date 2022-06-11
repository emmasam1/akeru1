import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from "../../image/Arrow.png";

function DeleteModal(props) {

  return (
    <div className='overlay position-fixed d-flex align-self-center'>
      <div className="request-modal">
        <i className="bi bi-x-lg close-icon" onClick={() => props.closeModal()}></i>
        <h4 className="text-center  mt-2 text-danger">{props.title}</h4>

        <hr />
        <div className="d-flex justify-content-center mt-3  mb-3 m37">
          <h5>{props.descp}</h5>
        </div>
        <div className="d-flex justify-content-evenly mt-3  mb-3 m37">
          <button className='btn btn-danger' onClick={() => props.deleteMethod()}>Delete</button>
          <button className='btn btn-secondary'  onClick={() => props.closeModal()}>Close</button>
        </div>
      </div>
    </div>
  )
}
export default DeleteModal
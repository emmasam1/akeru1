import React, { useState } from 'react'

function DeleteClient(props) {

  return (
    <div className='overlay position-fixed d-flex align-self-center'>
      <div className="request-modal">
        <i className="bi bi-x-lg close-icon" onClick={() => props.handleClose()}></i>
        <h4 className="text-center  mt-2 text-danger">Delete Client?</h4>

        <hr />
        <div className="d-flex justify-content-center mt-3  mb-3 m37">
          <h5>Are you sure you want to delete this client?</h5>
        </div>
        <div className="d-flex justify-content-evenly mt-3  mb-3 m37">
          <button className='btn btn-danger'>Delete</button>
          <button className='btn btn-secondary' onClick={() => props.handleClose()}>Close</button>
        </div>
      </div>
    </div>
  )
}
export default DeleteClient
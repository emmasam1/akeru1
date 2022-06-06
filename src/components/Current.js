import React from 'react'
function Current() {
  return (
    <>
      <div className="p-5 pro-div mt-4 w900">
        <h4>Check your cargo location</h4>
        <p>
          Use the 10 digit order number to track <br />
          now
        </p>

        <div className="d-flex justify-content-between search-div">
          <input className="search-input border-0" />
          <button>Track now</button>
        </div>
      </div>
    </>
  );
}

export default Current;

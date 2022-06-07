import React from "react";
import { Link } from "react-router-dom";
function Request() {
  return (
    <>
    <div className="p-3 position-relative left-width-home left-width">
    <div className="d-flex flex-sm-column justify-content-between flex-md-row flex-lg-row flex-xl-row">
              <Link to="#" className="link-dark text-decoration-none">
              <div className="pending pt-3">
                <div className="d-flex justify-content-between p-3">
                  <h2 className="w900">1</h2>
                  <div className="line-h">
                    <span>
                      Ongoing
                      <br /> trip
                    </span>
                  </div>
                </div>
              </div>
              </Link>
              <Link to="#" className="link-dark text-decoration-none">
              <div className="on-going pt-3">
                <div className="d-flex justify-content-between p-3">
                  <h2 className="w900">0</h2>
                  <div className="line-h">
                    <span>
                      Pending
                      <br /> order
                    </span>
                  </div>
                </div>
              </div>
              </Link>
              <Link to="#" className="link-dark text-decoration-none">
              <div className="completed pt-3">
                <div className=" d-flex justify-content-between p-3">
                  <h2 className="w900">320</h2>
                  <div className="line-h">
                    <span>
                      completed
                      <br /> order
                    </span>
                  </div>
                </div>
              </div>
              </Link>
            </div>
      <table className="table table-hover  mt-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">FIRST NAME</th>
            <th scope="col">LAST NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
            <th scope="col">CITY</th>
            <th scope="col">RATING</th>
            <th scope="col">APPROVAL</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody className="position-relative">
         
        </tbody>
      </table>
    </div>
    </>
  );
}
export default Request;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ROUTE from "../route.json";
import Driveraction from "./Driveraction";

function Driver() {
  const [driverInfo, setDriverInfo] = useState([]);
  const [driver, setDriver] = useState(false);
  useEffect(() => {
    axios
      .get(ROUTE.DRIVERS)
      .then((res) => {
        let driverInfo = res.data.data;
        setDriverInfo(driverInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const driverAction = () => {
    console.log(driverInfo);
    //setDriver(true)
  };

  return (
    <div className="p-3 position-relative left-width-home left-width">
      <table className="table table-borderless border-white mt-4">
        <thead className="text-muted border-0">
          <tr>
            <th scope="col">FIRST NAME</th>
            <th scope="col">LAST NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
            <th scope="col">CITY</th>
            <th scope="col">RATING</th>
            <th scope="col">APPROVED OR NOT</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {driverInfo.map((e, i) => {
            return (
              <tr key={e.driver_id}>
                <td>{e.firstname}</td>
                <td>{e.lastname}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.city}</td>
                <td>{e.rating}</td>
                <td>{e.approved}</td>
                <td className="d-flex justify-content-center flex-column position-relative">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-three-dots-vertical pointer align-self-center"
                    viewBox="0 0 16 16"
                    onClick={(e) => driverAction(e)}
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg> */}
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id={"dropdownMenuButton"+i}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown button
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby={"dropdownMenuButton"+i} 
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                  {driver ? <Driveraction /> : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Driver;

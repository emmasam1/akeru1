import React, { useEffect, useState } from "react";
import truck from "../image/dashtruck.svg";
import axios from "axios";
import ROUTE from "../route.json";
function Newrequest() {
  let [dashboard, setDashboard] = useState([]);
  useEffect(() => {
    axios
      .get(ROUTE.DASHBOARD)
      .then((res) => {
        let { data } = res;
        setDashboard(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table className="table table-borderless border-white mt-4">
        <thead className="text-muted border-0">
          <tr>
            <th scope="col">ORDER</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">DATE</th>
            <th scope="col">ROUTE</th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {dashboard.map((e) => {
            return (
              <>
                <tr key={e.id}>
                  <div>
                    <td className="d-flex">
                      <img src={truck} alt="" className="w35" />{" "}
                      <h6>{e.order}</h6>
                    </td>
                    <p className="td_p dash-left">{e.order}</p>
                  </div>
                  <td className="td-style">&#x20A6; {e.amount}</td>
                  <td className="td-date">{e.date}</td>
                  <td className="td-style">{e.route}</td>
                  <td>
                    <p className="complete rounded pon">{e.status}</p>
                  </td>
                  <td>
                    <span className="dot rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-three-dots"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </span>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <button type="button" className="btn btn-light btn-view-all">View all</button>
    </>
  );
}

export default Newrequest;

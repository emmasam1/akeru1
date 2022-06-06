import React, { useEffect, useState } from "react";
import axios from "axios";
import ROUTE from "../route.json";

function Complete() {

    let [ongoing, setOngoing] = useState([]);
  useEffect(() => {
    axios
      .get(ROUTE.TRIPS)
      .then((res) => {
        let { data } = res;
        setOngoing(data);
      })
      .catch((err) => console.log(err));
  }, []);

     return (
    <>
      <div className="d-flex justify-content-between mb-2">
      <div>
        <h3 className="pro-h3-text">Completed order</h3>
      </div>
      <div className="d-flex justify-content-between profile-button-holder">
        <button className="text-muted">Month</button>
        <button className="text-muted">Week</button>
        <button className="text-muted clicked">Day</button>
      </div>
      </div>
      <table className="table table-borderless border-white">
        <thead className="text-muted border-0">
          <tr>
            <th scope="col">ORDER</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">DATE</th>
            <th scope="col">TRUCK</th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {ongoing.map((e) => {
            return (
              <>
                <tr key={e.id}>
                  <div>
                    <td className="d-flex">
                      <div className="small_box"></div> <h6>{e.order}</h6>
                    </td>
                    <p className="td_p">{e.from}</p>
                  </div>
                  <td className="td-style">&#x20A6; {e.amount}</td>
                  <td className="td-date">{e.date}</td>
                  <td className="td-style">{e.truck}</td>
                  <td><p className="complete rounded">{e.status}</p></td>
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
    </>
  );
}

export default Complete;
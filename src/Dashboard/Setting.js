import React, { useEffect, useState } from "react";
import axios from "axios";

function Setting() {
  const [ton, setTon] = useState([]);
  const [locate, setLocate] = useState([])

  const [editTon, setEditTon] = useState({})


  useEffect(() => {
    axios
      .get("/db/tons.json")
      .then((res) => {
        let ton = res.data;
        setTon(ton);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/db/location.json")
      .then((res) => {
        let locate = res.data;
        setLocate(locate);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-3 position-relative left-width left-width-home">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="bg-white p-4">
              <div className="d-flex mb-5">
                <input
                  placeholder="Enter Tons"
                  className="setting-input input-home w64"
                />
                <button className="btn btn-dark">Add Tons</button>
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col" className="col-6">
                      NAME OF TONS
                    </th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {ton.map((e, i) => {
                    return (
                      <tr key={e.id}>
                        <th scope="row">{i + 1}</th>
                        <td>{e.tons}</td>
                        <td className="d-flex justify-content-between">
                          <button className="btn btn-secondary btn-sm" data={e} onClick={()=>setEditTon(e)}>
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm" data={e} onClick={()=>alert(e.tons)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col">
            <div className="bg-white p-4">
              <div className="d-flex mb-5">
                <input
                  placeholder="Enter Location Name"
                  className="setting-input input-home w64"
                />
                <button className="btn btn-dark">Save Location</button>
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col" className="col-6">
                      NAME OF LOCATION
                    </th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                {locate.map((e, i) => {
                    return (
                      <tr key={e.id}>
                        <th scope="row">{i + 1}</th>
                        <td>{e.location_name}</td>
                        <td className="d-flex justify-content-between">
                          <button className="btn btn-secondary btn-sm">
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm" data={e} onClick={()=>alert(e.location_name)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Setting;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ROUTE from "../route.json";
import Loader from "./Loader";
import ClientModal from "./Dash-Components/ClientModal";
import DeleteClient from "./Dash-Components/DeleteClient";
function AllClients() {
  const navigate = useNavigate();

  if (localStorage.getItem('admin') == null) {
    navigate('/signin');
  }
  const [clientsInfo, setClientsInfo] = useState([]);
  const [aClient, setAClient] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false)
  const [removeClient, setRemoveClient] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(ROUTE.CLIENTS)
      .then((res) => {
        let clientsInfo = res.data.data;
        if (!clientsInfo) {

        } else {
          setIsLoading(false)
          setClientsInfo(clientsInfo);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshKey]);

  const handleClose = () => {
    setModal(false)
    setRemoveClient(false)
  }

  const refreshPageData = () => {
    setRefreshKey(refreshKey => refreshKey + 1)
  }

  const viewUserAcount = (user) => {
    localStorage.setItem("personate", "true");
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/Profile");
  }

  return (
    <div className="p-3 position-relative left-width-home left-width left-width-mobile">
      <h3>All Customers</h3>
      <div className="card">
        <div className="card-body">
          {modal ? <ClientModal handleClose={handleClose} data={aClient} refresh={refreshPageData} /> : null}
          {removeClient ? <DeleteClient handleClose={handleClose} /> : null}
          {isLoading ? <Loader /> : clientsInfo.length < 1 ? <h1 className='text-center'>No Clients</h1> : <table className="table table-hover  mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">FULLNAME</th>
                <th scope="col">COMPANY</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PHONE</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody className="position-relative">
              {clientsInfo.map((e, i) => {
                return (
                  <tr key={e.user_id}>
                    <td>{i + 1}</td>
                    <td>{e.fullname}</td>
                    <td>{e.company}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td className="d-flex justify-content-center flex-column position-relative">

                      <div className="table-dropdown">
                        <span><i className="bi bi-three-dots btn btn-light fs-6" ></i></span>
                        <div className="table-dropdown-content">
                          <button className="btn" onClick={() => { viewUserAcount(e)}}>View User</button>
                          <button className="btn" onClick={() => { setModal(true); setAClient(e) }}>Edit</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>}

          <br />
          <br />
          <br />
        </div>
      </div>
    </div>

  );
}

export default AllClients;

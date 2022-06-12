import React, { useEffect, useState } from "react";
import axios from "axios";
import ROUTE from "../route.json";
import Loader from "./Loader";
import ClientModal from "./Dash-Components/ClientModal";
import DeleteClient from "./Dash-Components/DeleteClient";
function AllClients() {
  const [clientsInfo, setClientsInfo] = useState([]);
  const [aClient, setAClient] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false)
  const [removeClient, setRemoveClient] = useState(false)
  useEffect(() => {
    axios
      .get(ROUTE.CLIENTS)
      .then((res) => {
        let clientsInfo = res.data.data;
        if(!clientsInfo){
          setIsLoading(true)
        }else{
          setIsLoading(false)
          setClientsInfo(clientsInfo);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClose = () => {
    setModal(false)
    setRemoveClient(false)
  }

  return (
    <div className="p-3 position-relative left-width-home left-width left-width-mobile">
      <h3>All Customers</h3>
      <div className="card">
        <div className="card-body">
          {modal ? <ClientModal handleClose={handleClose} data={aClient}/> : null}
          {removeClient ? <DeleteClient handleClose={handleClose}/> : null}

          <table className="table table-hover  mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">FIRST NAME</th>
                <th scope="col">LAST NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PHONE</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody className="position-relative">
              {isLoading ? <Loader /> : clientsInfo.map((e, i) => {
                return (
                  <tr key={e.client_id}>
                    <td>{i + 1}</td>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td className="d-flex justify-content-center flex-column position-relative">
                     
                      <div className="table-dropdown">
                        <span><i className="bi bi-three-dots btn btn-light fs-6" ></i></span>
                        <div className="table-dropdown-content">
                          <button className="btn" onClick={()=>{setModal(true); setAClient(e)}}>Edit</button>
                          <button className="btn" onClick={()=>{setRemoveClient(true)}}>Delete</button>
                          
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

export default AllClients;

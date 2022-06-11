import React, { useEffect, useState } from "react";
import axios from "axios";
import ROUTE from "../route.json";
import Loader from "./Loader";
import EditUser from "./Dash-Components/EditUser";
import DeleteModal from "./Dash-Components/DeleteModal";
function Driver() {
  const [driverInfo, setDriverInfo] = useState([]);
  const [aUser, setAuser] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [ modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(ROUTE.DRIVERS)
      .then((res) => {
        let driverInfo = res.data.data;
        if(!driverInfo){
          setIsLoading(true)
        }else{
          setIsLoading(false)
          setDriverInfo(driverInfo);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshKey]);

  const deleteData=()=>{
    axios.delete(ROUTE.DRIVERS+`/${aUser.driver_id}`)
      .then((res) => {
        alert(res.data.msg)
        refreshPageData()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleClose = () => {
    setModal(false)
    setDeleteModal(false)
  }

  const refreshPageData=()=>{
    setRefreshKey(refreshKey => refreshKey +1)
  }

  return (
    <div className="p-3 position-relative left-width-home left-width">
      <h3>All Drivers</h3>
      <div className="card">
        <div className="card-body">

          {modal ? <EditUser data={aUser} handleClose={handleClose}/> : null}
          {deleteModal ? <DeleteModal closeModal={handleClose} deleteMethod={deleteData}  refresh={refreshPageData}
           title="Delete Driver?" descp="Are you sure you want to delete this driver?" /> : null}

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
              {isLoading ? <Loader /> : driverInfo.map((e, i) => {
                return (
                  <tr key={e.driver_id}>
                    <td>{i + 1}</td>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{e.city}</td>
                    <td>{e.rating}</td>
                    <td> {e.approved ? <span className="badge bg-success">Approved</span> : <span className="badge bg-secondary">Pending..</span>} </td>
                    <td className="d-flex justify-content-center flex-column position-relative">
                     
                      <div className="table-dropdown">
                        <span><i className="bi bi-three-dots btn btn-light fs-6" ></i></span>
                        <div className="table-dropdown-content">
                          {e.approved?null:<button className="btn">Approve</button>}
                          <button className="btn" onClick={()=>{setModal(true); setAuser(e)}}>Edit</button>
                          <button className="btn text-danger" onClick={() => { setAuser(e);  setDeleteModal(true); }}>Delete</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br/>
            <br/>
            <br/>
        </div>
      </div>
    </div>

  );
}

export default Driver;

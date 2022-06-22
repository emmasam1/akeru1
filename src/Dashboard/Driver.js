import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ROUTE from "../route.json";
import Loader from "./Loader";
import EditUser from "./Dash-Components/EditUser";
import ApproveModal from "./Dash-Components/ApproveModal";
import DeleteModal from "./Dash-Components/DeleteModal";
function Driver() {
  const navigate = useNavigate();

  if(localStorage.getItem('admin')==null){
    navigate('/signin');
  }

  const [driverInfo, setDriverInfo] = useState([]);
  const [aUser, setAuser] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false)
  const [approve, setApprove] = useState(false)
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
        handleClose()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleClose = () => {
    setModal(false)
    setApprove(false)
    setDeleteModal(false)
  }

  const refreshPageData=()=>{
    setRefreshKey(refreshKey => refreshKey +1)
  }

  const approveDriver=()=>{
    let data={"email": aUser.email}
    axios.post(ROUTE.SITE_URL+`/accounts/approve`,data)
      .then((res) => {
        alert(res.data.msg)
        refreshPageData()
        handleClose()
      })
      .catch((err) => {
        console.log(err);
        alert("An error occured while approving driver, try again")
      })
  }

  const requestDocuments=()=>{
    let data=aUser.account_process;
    data.has_documents=false
    data={"account_process":data}
  
    axios.put(ROUTE.DRIVERS+`/${aUser.driver_id}`,data)
      .then((res) => {
       
        if(res.data.code==200){
          alert("Documents requested")
        }else{
          alert(res.data.msg)
        }
        refreshPageData()
        handleClose()
      })
      .catch((err) => {
        console.log(err);
        alert("An error occured while approving driver, try again")
      })
  }

  return (
    <div className="p-3 position-relative left-width-home left-width left-width-mobile">
      <h3>All Drivers</h3>
      <div className="card">
        <div className="card-body">

          {modal ? <EditUser data={aUser} handleClose={handleClose} refresh={refreshPageData}/> : null}
          {approve ? <ApproveModal  data={aUser}  handleClose={handleClose} approveDriver={approveDriver} requestDocuments={requestDocuments}/> : null}
          {deleteModal ? <DeleteModal closeModal={handleClose} deleteMethod={deleteData}  refresh={refreshPageData}
           title="Delete Driver?" descp="Are you sure you want to delete this driver?" /> : null}

           {isLoading ? <Loader /> :driverInfo.length < 1 ? <h1 className='text-center'>No Registered <br/>Drivers Yet</h1>: <table className="table table-hover  mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">FIRST NAME</th>
                <th scope="col">LAST NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PHONE</th>
                <th scope="col">CITY</th>
                <th scope="col">RATING</th>
                <th scope="col">DOCUMENTS</th>
                <th scope="col">HAS TRUCK</th>
                <th scope="col">APPROVAL</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody className="position-relative">
              { driverInfo.map((e, i) => {
                return (
                  <tr key={e.driver_id}>
                    <td>{i + 1}</td>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{e.city}</td>
                    <td>{e.rating}</td> 
                    <td> {e.account_process.has_documents ? <span className="badge bg-success">Uploaded</span> : <span className="badge bg-secondary">Pending..</span>} </td>
                    <td> {e.account_process.has_trucks ? <span className="badge bg-success">Uploaded</span> : <span className="badge bg-secondary">Pending..</span>} </td>
                    <td> {e.approved ? <span className="badge bg-success">Approved</span> : <span className="badge bg-secondary">Pending..</span>} </td>
                    <td className="d-flex justify-content-center flex-column position-relative">
                     
                      <div className="table-dropdown">
                        <span><i className="bi bi-three-dots btn btn-light fs-6" ></i></span>
                        <div className="table-dropdown-content">
                          {<button className="btn" onClick={()=>{setApprove(true); setAuser(e)}}> {e.approved?"View":"Approve"}</button>}
                          <button className="btn" onClick={()=>{setModal(true); setAuser(e)}}>Edit</button> 
                          <button className="btn text-danger" onClick={() => { setAuser(e);  setDeleteModal(true); }}>Delete</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>}
          
          <br/>
            <br/>
            <br/>
        </div>
      </div>
    </div>

  );
}

export default Driver;

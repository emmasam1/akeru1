import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import ROUTE from "../route.json";
import axios from "axios";
import Loader from "./Loader";
import SetQuoteModal from "./Dash-Components/Set-Quote-Modal";
import AssignDriverModal from "./Dash-Components/AssignModal";
import DeleteModal from "./Dash-Components/DeleteModal";

function Request() {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [assignModal, setAssignModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [paginate, setPaginate] = useState({ "page": 1, "limit": 15, "pages": 0, "total": 0 });

  const [aRequest, setARequest] = useState({});
  const [activeTabIndex, setactiveTabIndex] = useState(0)
  const [drivers, setDrivers] = useState([])
  const [requestData, setRequestData] = useState([])
   const [refreshKey, setRefreshKey] = useState(0);
 
  useEffect(() => {
    setIsLoading(true)
    axios.get(ROUTE.REQUEST + `?page=${paginate.page}&limit=${paginate.limit}&type=all_time`)
      .then((res) => {

        let requestData = res.data.data
        if (!requestData) {
          
          console.log("waitung for data");
        } else {
          setRequestData(requestData)
          setPaginate(res.data.paginate)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log(err);
      })

    axios.get(ROUTE.DRIVERS)
      .then((res) => {
        let requestData = res.data.data
        setDrivers(requestData)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [refreshKey])

  const updatePaginate = (data) => {
    setPaginate({ "page": data, "limit": paginate.limit, "pages":  paginate.pages, "total": paginate.total })
    refreshPageData()
  }

  const closeModal = (props) => {
    setModal(false)
    setAssignModal(false)
    setDeleteModal(false)
  }

  const switchStatusBadge = (data) => {
    switch (data) {
      case "pending":
        return <span className="badge bg-danger">{data}..</span>
      case "accepted":
        return <span className="badge bg-info">{data}</span>
    }
  }

  const switchPageTitle = () => {
    switch (activeTabIndex) {
      case 0:
        return "All Pending Request"
      case 1:
        return "On-Going Trips"
      case 2:
        return "Completed Trips"
      case 3:
        return "All Request"
    }
  }

  const changeDate = (date) => {

    var newDate = new Date(date)
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let day = newDate.getDay();
    let hr = newDate.getHours();
    let min = newDate.getMinutes();
    return `${year}-${month}-${day} ${hr}:${min}`;
  }

  const deleteData=()=>{
    axios.delete(ROUTE.REQUEST+`/${aRequest.request_id}`)
      .then((res) => {
        closeModal()
        alert(res.data.msg)
        refreshPageData()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const refreshPageData=()=>{
    setRefreshKey(refreshKey => refreshKey +1)
  }




  return (
    <>
      <div className="p-3 position-relative left-width-home left-width">

        <div className="d-flex flex-sm-column justify-content-between flex-md-row flex-lg-row flex-xl-row testing-flex">
          <NavLink to="#" className="link-dark text-decoration-none a" onClick={() => { setactiveTabIndex(0) }}>
            <div className={`dash_link_bg_color pt-3  ${activeTabIndex == 0 ? "akeru-bg-primary" : ""}`}>
              <div className="d-flex justify-content-between p-3">
                <h2 className="w900">{requestData.length}</h2>
                <div className="line-h">
                  <span>
                    Pending
                    <br /> Requests
                  </span>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="#" className="link-dark text-decoration-none" onClick={() => { setactiveTabIndex(1) }}>
            <div className={`dash_link_bg_color pt-3  ${activeTabIndex == 1 ? "akeru-bg-primary" : ""}`}>
              <div className="d-flex justify-content-between p-3">
                <h2 className="w900">0</h2>
                <div className="line-h">
                  <span>
                    Ongoing
                    <br /> Trips
                  </span>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="#" className="link-dark text-decoration-none" onClick={() => { setactiveTabIndex(2) }}>
            <div className={`dash_link_bg_color pt-3  ${activeTabIndex == 2 ? "akeru-bg-primary" : ""}`}>
              <div className=" d-flex justify-content-between p-3">
                <h2 className="w900">0</h2>
                <div className="line-h">
                  <span>
                    Completed
                    <br /> Trips
                  </span>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="#" className="link-dark text-decoration-none" onClick={() => { setactiveTabIndex(3) }}>
            <div className={`dash_link_bg_color pt-3  ${activeTabIndex == 3 ? "akeru-bg-primary" : ""}`}>
              <div className=" d-flex justify-content-between p-3">
                <h2 className="w900">{paginate.total}</h2>
                <div className="line-h">
                  <span>
                    Total
                    <br /> Request
                  </span>
                </div>
              </div>
            </div>
          </NavLink>

        </div>
        <br />
        < div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h3>{switchPageTitle(activeTabIndex)}</h3>
              </div>
              <div className="col-auto">

                <Link to="/admin-dashboard/new-request">
                  <button className="btn btn-dark btn-sm mr-4" >+ Add New request</button>
                </Link>
              </div>
            </div>
            <table className="table table-hover  mt-4">
              <thead className="table-dark">
                <tr>
                  <th scope="col">S/N</th>
                  <th scope="col">PICK UP</th>
                  <th scope="col">DROP OFF</th>
                  <th scope="col">ITEM</th>
                  <th scope="col">TRUCK TYPE</th>
                  <th scope="col">PAID</th>
                  <th scope="col">WEIGHT</th>
                  <th scope="col">DATE</th>
                  <th scope="col">AMOUNT</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">PAYMENT TYPE</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody className="position-relative">
                {isLoading ? <Loader /> : requestData.map((e, i) => {
                  return (
                    <tr key={e.user_id} id={e.user_id}>
                      <td>{i + 1}</td>
                      <td>{e.pick_up}</td>
                      <td>{e.drop_off}</td>
                      <td>{e.item}</td>
                      <td>{e.truck_type}</td>
                      <td>{e.is_paid ? <span className="badge bg-success">Paid</span> : <span className="badge bg-secondary">Awaiting..</span>}</td>
                      <td>{e.weight}</td>
                      <td>{changeDate(e.date)}</td>
                      <td>₦{e.amount.toLocaleString()}</td>
                      <td>{switchStatusBadge(e.status)}</td>
                      <td>{e.payment_type}</td>
                      <td className="d-flex justify-content-center flex-column position-relative">
                        <div className="table-dropdown">
                          <span><i className="bi bi-three-dots btn btn-light fs-6" ></i></span>
                          <div className="table-dropdown-content r-0">
                            {e.amount <1 ? null : <button className="btn" onClick={() => {setARequest(e); setAssignModal(true); }}>Assign</button>}
                            <button className="btn" onClick={() => { setARequest(e); setModal(true); }}>Set qoute</button>
                            <button className="btn text-danger" onClick={() => { setARequest(e);  setDeleteModal(true); }}>Delete</button>

                          </div>
                        </div>

                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
            {modal ? <SetQuoteModal closeModal={closeModal} data={aRequest} refresh={refreshPageData} /> : null}
            {assignModal ? <AssignDriverModal closeModal={closeModal} drivers={drivers} request={aRequest} refresh={refreshPageData} /> : null}
            {deleteModal ? <DeleteModal closeModal={closeModal} deleteMethod={deleteData}  refresh={refreshPageData}  
            title="Delete Request?" descp="Are you sure you want to delete this request?"/> : null}

            <nav aria-label="Page navigation example">
              <ul class="pagination">
                {(() => {
                  let row = []
                  for (let index = 1; index < paginate.pages + 1; index++) {

                    row.push(<li class="page-item"><button onClick={() => { updatePaginate(index)}} class={`page-link ${paginate.page == index ? "active" : ""}`} href="#">{index}</button></li>)

                  }
                  return row;

                })()}

              </ul>
            </nav>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Request;

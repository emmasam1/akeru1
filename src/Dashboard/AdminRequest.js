import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import ROUTE from "../route.json";
import axios from "axios";
import Loader from "./Loader";
import SetQuoteModal from "./Dash-Components/Set-Quote-Modal";
import AssignDriverModal from "./Dash-Components/AssignModal";
import DeleteModal from "./Dash-Components/DeleteModal";
import ConvertDate from "./ConvertDate";


function Request() {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const [assignModal, setAssignModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [paginate, setPaginate] = useState({ "page": 1, "limit": 15, "pages": 0, "total": 0 });
  const [status, setStatus] = useState("pending");
  const [aRequest, setARequest] = useState({});
  const [requestSummary, setRequestSummary] = useState({});
  const [activeTabIndex, setactiveTabIndex] = useState(0)
  const [drivers, setDrivers] = useState([])
  const [requestData, setRequestData] = useState([])
  const [refreshKey, setRefreshKey] = useState(0);
  const [copyData, setCopyData] = useState("");

  useEffect(() => {
    setIsLoading(true)
    axios.get(ROUTE.REQUEST + `?page=${paginate.page}&limit=${paginate.limit}&type=all_time&status=${status}`)
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

    axios.get(ROUTE.DRIVERS+"?online=1&approved=1&sort=asc")
      .then((res) => {
        let requestData = res.data.data
        setDrivers(requestData)
      })
      .catch((err) => {
        console.log(err);
      })

      axios.get(ROUTE.REQUEST+"/summary")
      .then((res) => {
        let requestData = res.data
        setRequestSummary(requestData)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [refreshKey])

  const updatePaginate = (data) => {
    setPaginate({ "page": data, "limit": paginate.limit, "pages": paginate.pages, "total": paginate.total })
    refreshPageData()
  }

  const switchTabsData = (data) => {
    switch (data) {
      case 0:
        setStatus("pending")
        break;
      case 1:
        setStatus("ongoing")
        break;
      case 2:
        setStatus("completed")
        break;

    }

    setactiveTabIndex(data)
    refreshPageData()
  }

  const closeModal = (props) => {
    setModal(false)
    setAssignModal(false)
    setDeleteModal(false)
  }

  const copylink=(data)=>{
    setCopyData(`${document.location.host}/detail?request_id=${data.request_id}`)
    setTimeout(function () {
    var copyText = document.getElementById("mail")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
    setCopyData("")
    alert("Request Copied")

  }, 2000);
  }

  const switchStatusBadge = (data) => {
    switch (data) {
      case "pending":
        return <span className="badge bg-secondary">Pending..</span>
      case "accepted":
        return <span className="badge bg-warning">Accepted</span>
      case "arrive_pickup":
        return <span className="badge bg-info">At Pickup</span>
      case "start_trip":
        return <span className="badge bg-success">On Transit...</span>
      case "arrive_dropoff":
        return <span className="badge bg-dark">Completed</span>
        case "arrive_dropoff":
          return <span className="badge bg-danger">Cancelled</span>
      case "paused_trip":
        return <span className="badge bg-secondary">PAUSED</span>
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

    }
  }

  const changeDate = (date) => {

    var newDate = new Date(date)
    let year = newDate.getFullYear();
    let month = getMonth(newDate.getMonth());
    let day = newDate.getDay();
    let hr = newDate.getHours();
    let min = newDate.getMinutes();

    return `${year}-${month}-${day}`;
  }

 const getMonth=(month)=>{
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
  }
 }

  const deleteData = () => {
    axios.delete(ROUTE.REQUEST + `/${aRequest.request_id}`)
      .then((res) => {
        closeModal()
        alert(res.data.msg)
        refreshPageData()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const refreshPageData = () => {
    setRefreshKey(refreshKey => refreshKey + 1)
  }



  //d-flex flex-sm-column justify-content-between flex-md-row flex-lg-row flex-xl-row testing-flex
  return (
    <>
      <div className="p-3 position-relative left-width-home left-width">
        <div className="row content-center">
        
          <NavLink to="#" className="col-md-4 link-dark text-decoration-none a" onClick={() => { switchTabsData(0) }}>
            <div className={`dash_link_bg_color pt-3  ${activeTabIndex == 0 ? "akeru-bg-primary" : ""}`}>
              <div className="d-flex justify-content-between p-3">
                <h2 className="w900">{requestSummary.pending}</h2>
                <div className="line-h">
                  <span className="number-h4-text">
                    Pending
                    <br /> Requests
                  </span>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="#" className=" col-md-4 link-dark text-decoration-none" onClick={() => { switchTabsData(1) }}>
            <div className={`dash_link_bg_color pt-3  ${activeTabIndex == 1 ? "akeru-bg-primary" : ""}`}>
              <div className="d-flex justify-content-between p-3">
                <h2 className="w900">{requestSummary.ongoing}</h2>
                <div className="line-h">
                  <span className="number-h4-text">
                    Ongoing
                    <br /> Trips
                  </span>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="#" className="col-md-4 link-dark text-decoration-none" onClick={() => { switchTabsData(2) }}>
            <div className={`dash_link_bg_color pt-3  ${activeTabIndex == 2 ? "akeru-bg-primary" : ""}`}>
              <div className=" d-flex justify-content-between p-3">
                <h2 className="w900">{requestSummary.completed}</h2>
                <div className="line-h">
                  <span className="number-h4-text">
                    Completed
                    <br /> Trips
                  </span>
                </div>
              </div>
            </div>
          </NavLink>

        </div>
        <br />
        < div className="card">
          <div className="card-body card-body-width">
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
            {isLoading ? <Loader /> :requestData.length < 1 ? <h1 className='text-center'>No {switchPageTitle(activeTabIndex)}  Yet</h1>: <table className="table table-hover  mt-4">
              <thead className="table-dark">
                <tr>
                  <th scope="col">S/N</th>
                  <th scope="col">PICK UP</th>
                  <th scope="col">DROP OFF</th>
                  <th scope="col">WEIGHT</th>
                  <th scope="col">ITEM</th>
                  <th scope="col">DATE</th>
                  <th scope="col">AMOUNT</th>
                  <th scope="col">PAID</th>
                  <th scope="col">PAYMENT TYPE</th>
                  <th scope="col">DRIVER</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody className="position-relative">
                { requestData.map((e, i) => {
                  return (
                    <tr key={e.user_id} id={e.user_id}>
                      <td>{i + 1}</td>
                      <td>{e.pick_up}</td>
                      <td>{e.drop_off}</td>
                      <td>{e.weight}</td>
                      <td>{e.item}</td>
                      <td><ConvertDate date={e.date}/></td>
                      <td>₦{e.amount.toLocaleString()}</td>
                      <td>{e.is_paid ? <span className="badge bg-success">Paid</span> : <span className="badge bg-secondary">Awaiting..</span>}</td>
                      <td>{e.payment_type}</td>
                      <td>{e.driver_name}</td>
                      <td>{switchStatusBadge(e.status)}</td>
                      <td className="d-flex justify-content-center flex-column position-relative">
                        <div className="table-dropdown">
                          <span><i className="bi bi-three-dots btn btn-light fs-6" ></i></span>
                          <div className="table-dropdown-content r-0">
                            <button className="btn" onClick={() => { copylink(e);  }}>Copy Link</button>
                            {e.amount < 1 ? null : e.status == "pending" ? <button className="btn" onClick={() => { setARequest(e); setAssignModal(true); }}>Assign</button> : null}
                            {e.status == "pending" ? <button className="btn" onClick={() => { setARequest(e); setModal(true); setView(false) }}>Set qoute</button> :
                            <button className="btn" onClick={() => { setARequest(e); setModal(true); setView(true) }}>View</button>}
                             
                            <button className="btn text-danger" onClick={() => { setARequest(e); setDeleteModal(true); }}>Delete</button>

                          </div>
                        </div>

                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>}
           
            {modal ? <SetQuoteModal closeModal={closeModal} data={aRequest} refresh={refreshPageData} justView={view} /> : null}
            {assignModal ? <AssignDriverModal closeModal={closeModal} drivers={drivers} request={aRequest} refresh={refreshPageData} /> : null}
            {deleteModal ? <DeleteModal closeModal={closeModal} deleteMethod={deleteData} refresh={refreshPageData}
              title="Delete Request?" descp="Are you sure you want to delete this request?" /> : null}

            <nav aria-label="Page navigation example">
              <ul class="pagination">
                {(() => {
                  let row = []
                  for (let index = 1; index < paginate.pages + 1; index++) {

                    row.push(<li class="page-item"><button onClick={() => { updatePaginate(index) }} class={`page-link ${paginate.page == index ? "active" : ""}`} href="#">{index}</button></li>)

                  }
                  return row;

                })()}

              </ul>
            </nav>
            <br />
            <br />
            <br />
            {copyData!=""?<input
                readOnly
                type="text"
                className="copy-input"
                value={copyData}
                id="mail"
              />:null}
          </div>
        </div>
      </div>
    </>
  );
}
export default Request;

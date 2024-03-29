import React, { useState, useEffect } from "react";
import {NavLink, Link, useNavigate,Outlet } from "react-router-dom";
import axios from "axios";
import ROUTE from "../route.json";
import Loader from "./Loader";
import SetQuoteModal from "./Dash-Components/Set-Quote-Modal";
import AssignDriverModal from "./Dash-Components/AssignModal";
import DeleteModal from "./Dash-Components/DeleteModal";
import car from "../image/car.svg";
import bendarrow from "../image/bendarrow.png";
import user from "../image/dashuser.png";
import driver from "../image/DashDriver.png";
import Trips from './Trips';
import ClientName from "./Dash-Components/ClientName";
import truck from "../image/request_img.png";
import ViewPayment from "./Dash-Components/ViewPayment";
function DashboardHome() {
  const navigate = useNavigate();

  if (localStorage.getItem('admin') == null) {
    navigate('/signin');
  }
  const [activeTabIndex, setactiveTabIndex] = useState(0)
  const [requestSummary, setRequestSummary] = useState({})
  const [requestData, setRequestData] = useState([])
  const [customers, setCustomers] = useState([])
  const [drivers, setDrivers] = useState([])
  const [totalDrivers, setTotalDrivers] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const [assignModal, setAssignModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [paginate, setPaginate] = useState({ "page": 1, "limit": 8, "pages": 0, "total": 0 });
  const [status, setStatus] = useState("pending");
  const [aRequest, setARequest] = useState({});
  const [refreshKey, setRefreshKey] = useState(0);
  const [copyData, setCopyData] = useState("");

  useEffect(() => {
    axios.get(ROUTE.REQUEST)
      .then((res) => {
        let requestData = res.data.data
        setRequestData(requestData)

      })
      .catch((err) => {
        console.log(err);
      })

    axios.get(ROUTE.REQUEST + "/summary")
      .then((res) => {
        let requestData = res.data
        setRequestSummary(requestData)
      })
      .catch((err) => {
        console.log(err);
      })

    axios.get(ROUTE.DRIVERS)
      .then((res) => {
        let requestData = res.data.data
        setTotalDrivers(requestData)
      })
      .catch((err) => {
        console.log(err);
      })


    axios.get(ROUTE.CLIENTS)
      .then((res) => {
        let requestData = res.data.data
        setCustomers(requestData)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])



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
    setPaymentModal(false)
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
        return <span className="badge bg-success">On Transit...<i class="bi bi-truck"></i></span>
      case "arrive_dropoff":
        return <span className="badge akeru-bg-primary">Completed</span>
        case "completed":
          return <span className="badge akeru-bg-primary">Completed</span>
      case "cancelled":
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

 

 

 

  const refreshPageData = () => {
    setRefreshKey(refreshKey => refreshKey + 1)
  }





  return (
    <div className="p-3 position-relative left-width-home">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-md-3 ">
          <div className="rounded sm-card p-4">
            <div className="d-flex justify-content-between">
              <h4 className="number position-relative">{requestSummary.pending}</h4>
              <img src={car} alt="icon" className="number-img" />
            </div>
            <div>
              <h4 className="number-h4-text">New request</h4>
              {/* <div className="d-flex">
              <img src={bendarrow} alt="icon" className="number-icon" />
              <p className="number-p d-flex">
                700 increase &nbsp;<p className="number-span"> in total</p>
              </p>
            </div> */}
            </div>
          </div>
        </div>
        <div className=" col-md-3 ">
          <div className="rounded sm-card p-4">
            <div className="d-flex justify-content-between">
              <h4 className="number position-relative">{requestSummary.total}</h4>
              <img src={car} alt="icon" className="number-img" />
            </div>
            <div>
              <h4 className="number-h4-text">Total request</h4>
              {/* <div className="d-flex">
              <img src={bendarrow} alt="icon" className="number-icon" />
              <p className="number-p d-flex">
                700 increase &nbsp;<p className="number-span"> in total</p>
              </p>
            </div> */}
            </div>
          </div>
        </div>

        <div className=" col-md-3 ">
          <div className="rounded sm-card p-4">
            <div className="d-flex justify-content-between">
              <h4 className="number position-relative">{customers.length}</h4>
              <img src={user} alt="icon" className="number-img" />
            </div>
            <div>
              <h4 className="number-h4-text">Customers/Clients</h4>
              {/* <div className="d-flex">
              <img src={bendarrow} alt="icon" className="number-icon" />
              <p className="number-p d-flex">
                400 increase &nbsp;<p className="number-span"> in total</p>
              </p>
            </div> */}
            </div>
          </div>
        </div>

        <div className="col-md-3 ">
          <div className="rounded sm-card p-4">
            <div className="d-flex justify-content-between">
              <h4 className="number position-relative">{totalDrivers.length}</h4>
              <img src={driver} alt="icon" className="number-img" />
            </div>
            <div>
              <h4 className="number-h4-text">Drivers/partners</h4>
              {/* <div className="d-flex">
              <img src={bendarrow} alt="icon" className="number-icon" />
              <p className="number-p d-flex">
                100 increase &nbsp;<p className="number-span"> in total</p>
              </p>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="float-end d-flex mt-3 justify-content-between ">

        <Link to="/admin-dashboard/new-request"><button className="btn btn-gray btn-sm mr-4">+ Add new request</button></Link>  <span className="m-2">   </span>
        <button className="btn btn-dark btn-sm">Export report</button>
      </div>
      <br />

      <div className="bg-white m-t rounded p-2">
        <div className="d-flex justify-content-between sub-nav">
          <div className="d-flex justify-content-between w370">
            <NavLink to="#" className={`link-dark text-decoration-none link-dashboard-style ${activeTabIndex == 0 ? "active_dash_tab" : ""}`} onClick={() => { switchTabsData(0) }}>New request</NavLink>
            <NavLink to="#" className={`link-dark text-decoration-none link-dashboard-style ${activeTabIndex == 1 ? "active_dash_tab" : ""}`} onClick={() => { switchTabsData(1) }}>Ongoing Trips</NavLink>
            <NavLink to="#" className={`link-dark text-decoration-none link-dashboard-style ${activeTabIndex == 2 ? "active_dash_tab" : ""}`} onClick={() => { switchTabsData(2) }}>Completed Trips</NavLink>
          </div>
          <div></div>
        </div>
        {isLoading ? <Loader /> :requestData.length < 1 ? <h1 className='text-center'>No {switchPageTitle(activeTabIndex)}  Yet</h1>: <table className="table table-hover  mt-4">
              <thead className="table-dark">
                <tr>
                  <th scope="col">S/N</th>
                  <th scope="col">PICK UP / DROP OFF</th>
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
                    <tr key={i} id={i}>
                      <td><img src={truck} className="request-truck"/></td>
                      <td> <ClientName id={e.user_id} /> <br/>{e.pick_up}<i class="bi bi-arrow-right text-warning fs-6 m-2"></i>{e.drop_off}</td>
                      
                      <td>{e.weight} </td>
                      <td>{e.item}</td>
                      <td>{e.date}</td>
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
                            {e.amount > 1? <button className="btn" onClick={() => { setARequest(e); setPaymentModal(true); }}>Payment</button>:null}

                          </div>
                        </div>

                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>}
            {paymentModal ? <ViewPayment closeModal={closeModal}   request={aRequest} refresh={refreshPageData} /> : null}
            {modal ? <SetQuoteModal closeModal={closeModal} data={aRequest} refresh={refreshPageData} justView={view} /> : null}
            {assignModal ? <AssignDriverModal closeModal={closeModal} drivers={drivers} request={aRequest} refresh={refreshPageData} /> : null}
            <br/>
            <button className="btn btn-akeru" onClick={()=>navigate("/admin-dashboard/request")}> View All</button>
            {copyData!=""?<input
                readOnly
                type="text"
                className="copy-input"
                value={copyData}
                id="mail"
              />:null}
      </div>
    </div>
  );
}

export default DashboardHome;

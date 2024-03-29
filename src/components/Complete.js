import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate} from "react-router-dom";
import ROUTE from "../route.json";
import axios from "axios";
import Loader from "./Loader";

function Complete() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [assignModal, setAssignModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [paginate, setPaginate] = useState({ "page": 1, "limit": 10, "pages": 0, "total": 0 });

  const [aRequest, setARequest] = useState({});
  const [activeTabIndex, setactiveTabIndex] = useState(0)
  const [drivers, setDrivers] = useState([])
  const [requestData, setRequestData] = useState([])
   const [refreshKey, setRefreshKey] = useState(0);
   const user = JSON.parse(localStorage.getItem("user"));
 
  useEffect(() => {
    setIsLoading(true)
    axios.get(ROUTE.CLIENTS + `/requests?user_id=${user.user_id}&page=${paginate.page}&limit=${paginate.limit}&type=all&status=completed`)
      .then((res) => {
        console.log(res);
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

  const viewRequest=(requestId)=>{
    navigate(`/detail?request_id=${requestId}`)
  }

  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        <div>
          <h3 className="pro-h3-text">Completed Orders</h3>
        </div>
        <div className="d-flex justify-content-between profile-button-holder">
          <button className="text-muted">Month</button>
          <button className="text-muted">Week</button>
          <button className="text-muted clicked">Day</button>
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
                          <button className="btn" onClick={() => {viewRequest(e.request_id);  }}>View</button>
                             <button className="btn" onClick={() => {setARequest(e); setAssignModal(true); }}>Track</button>
                          </div>
                        </div>

                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
            

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
    </>
  );
}

export default Complete;
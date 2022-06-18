import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import ROUTE from "../route.json";
import axios from "axios";
import Loader from "./Loader";
import SetQuoteModal from "./Dash-Components/Set-Quote-Modal";
import AssignDriverModal from "./Dash-Components/AssignModal";
import DeleteModal from "./Dash-Components/DeleteModal";
import ConvertDate from "./ConvertDate";


function Withdrawals() {
  const [isLoading, setIsLoading] = useState(false);

  const [approvalModal, setApprovalModal] = useState(false);
  const [paginate, setPaginate] = useState({ "page": 1, "limit": 10, "pages": 0, "total": 0 });
  const [status, setStatus] = useState("pending");
  const [aWithdrawal, setAWithdrawal] = useState({});
  const [withdrawalData, setWithdrawalData] = useState([])
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setIsLoading(true)
    axios.get(ROUTE.WTIHDRAWALS + `?page=${paginate.page}&limit=${paginate.limit}&type=all_time&status=${status}`)
      .then((res) => {

        let withdrawalData = res.data.data
        if (!withdrawalData) {

          console.log("waitung for data");
        } else {
          setWithdrawalData(withdrawalData)
          setPaginate(res.data.paginate)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log(err);
      })

    
  }, [refreshKey])

  const getDriver=(id)=>{
    axios.get(ROUTE.DRIVERS + `${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const updatePaginate = (data) => {
    setPaginate({ "page": data, "limit": paginate.limit, "pages": paginate.pages, "total": paginate.total })
    refreshPageData()
  }



  const closeModal = (props) => {

    setApprovalModal(false)
  }

  const switchStatusBadge = (data) => {
    if(data){
      return <span className="badge bg-success">Approved</span>
    }else{
     
      return <span className="badge bg-danger">Pending..</span>
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

  const approveWithdrawal = () => {
    let data={ "withdrawal_id":aWithdrawal.withdrawal_id }
    axios.post(ROUTE.SITE_URL + `/withdrawals/approve`, data)
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

        </div>
        <br />
        < div className="card">
          <div className="card-body card-body-width">
            <div className="row">
              <div className="col">
                <h3>All Withdrawals</h3>
              </div>
              <div className="col-auto">

               
              </div>
            </div>
            <table className="table table-hover  mt-4">
              <thead className="table-dark">
                <tr>
                  <th scope="col">S/N</th>
                  <th scope="col">DRIVER</th>
                  <th scope="col">AMOUNT</th>
                  <th scope="col">DATE</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody className="position-relative">
                {isLoading ? <Loader /> : withdrawalData.map((e, i) => {
                  return (
                    <tr key={e.driver_id} id={e.driver_id}>
                      <td>{i + 1}</td>
                      <td>{getDriver(e.driver_id)}</td>
                      <td>₦{e.amount.toLocaleString()}</td>
                      <td><ConvertDate date={e.created_at}/> </td>
                      <td>{switchStatusBadge(e.status)}</td>
                      <td className="d-flex justify-content-center flex-column position-relative">
                       {e.status?null:<button className="btn btn-secondary btn-sm" onClick={() => { setAWithdrawal(e); }}>Approve</button>}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {approvalModal ? <DeleteModal closeModal={closeModal} deleteMethod={approveWithdrawal} refresh={refreshPageData}
              title="Approve Withdrawal?" descp="Are you sure you want to approve this withdrawal?" /> : null}

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
          </div>
        </div>
      </div>
    </>
  );
}
export default Withdrawals;

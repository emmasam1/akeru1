import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import Loader from "./Loader";
import ConvertDate from './ConvertDate';


function InexNewRequest(){
    const [limitedRec, setLimitedRec] = useState([])
    const [modal, setModal] = useState(false);
    const [aRequest, setARequest] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      setIsLoading(true)
        let limit = 10;
        axios.get(`https://peaceful-atoll-40814.herokuapp.com/requests?limit=${limit}`)
        .then((res) => {
          let limitedRec = res.data.data;
          if (!limitedRec) {
            setIsLoading(true)
          } else {
            setIsLoading(false)
            setLimitedRec(limitedRec);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }, [])

      const switchStatusBadge = (data) => {
        switch (data) {
          case "pending":
            return <span className="badge bg-danger">{data}..</span>
          case "accepted":
            return <span className="badge bg-info">{data}</span>
        }
      }

   

    return(
         
        <div className="container">

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
              { isLoading ? <Loader /> : limitedRec.map((e, i) => {
                return (
                    <tr key={e.user_id} id={e.user_id}>
                    <td>{i + 1}</td>
                    <td>{e.pick_up}</td>
                    <td>{e.drop_off}</td>
                    <td>{e.item}</td>
                    <td>{e.truck_type}</td>
                    <td>{e.is_paid ? <span className="badge bg-success">Paid</span> : <span className="badge bg-secondary">Awaiting..</span>}</td>
                    <td>{e.weight}</td>
                    <td><ConvertDate date={e.date}/></td>
                    <td>{e.amount}</td>
                    <td>{switchStatusBadge(e.status)}</td>
                    <td>{e.payment_type}</td>
                    <td className="d-flex justify-content-center flex-column position-relative">
                      <div className="table-dropdown">
                        <span><i className="bi bi-three-dots btn btn-light fs-6" ></i></span>
                        <div className="table-dropdown-content r-0">
                          {e.approved ? null : <a href="#" className="btn">Assign</a>}
                          <button className="btn" onClick={() => { setARequest(e); setModal(true); }}>Set qoute</button>
                          <button className="btn btn-danger" onClick={() => { setARequest(e); setModal(true); }}>Set qoute</button>
                          
                        </div>
                      </div>

                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
       
    )
}
export default InexNewRequest
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import ROUTE from "../route.json";
import Loader from "./Loader";
import DeleteModal from "./Dash-Components/DeleteModal";


function Alltrucks(){
    const [trucks, setTrucks] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [atruck, setAtruck] =useState({})
    const [deleteModal, setDeleteModal] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        setIsLoading(true)
        axios
        .get(ROUTE.TRUCKS)
        .then((res) => {
            let trucks = res.data.data
            if(!trucks){
                setIsLoading(true)
            }else{
                setIsLoading(false)
                setTrucks(trucks)
            }
        })
        .catch((err) => {
            console.log(err);
        })

    }, [refreshKey])

    const deleteData=()=>{
      axios.delete(ROUTE.TRUCKS+`/${atruck.id}`)
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
    const closeModal = () => {
      setDeleteModal(false)
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
      
    return(
        <div className="p-3 position-relative left-width left-width-home">
            <div className="d-flex mb-1 d-flex justify-content-between">
            <h3>All Trucks</h3>
           <Link to="/admin-dashboard/trucks"> <button className='btn btn-dark'>Add Truck</button></Link> 
          </div>

          <div className="card">
        <div className="card-body">
          {/* {modal ? <ClientModal handleClose={handleClose} data={aClient}/> : null}
          {removeClient ? <DeleteClient handleClose={handleClose}/> : null} */}

          <table className="table table-hover  mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">BRAND</th>
                <th scope="col">MODEL</th>
                <th scope="col">PLATE NO.</th>
                <th scope="col">YEAR</th>
                {/* <th scope="col">DATE CREATED</th> */}
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody className="position-relative">
              {isLoading ? <Loader /> : trucks.map((e, i) => {
                return (
                  <tr key={e.id}>
                    <td>{i + 1}</td>
                    <td>{e.vehicle_brand}</td>
                    <td>{e.model}</td>
                    <td>{e.plate_no}</td>
                    <td>{e.year}</td>
                    <td className="d-flex justify-content-center flex-column position-relative">
                     
                      <div className="table-dropdown">
                        <span><i className="bi bi-three-dots btn btn-light fs-6" ></i></span>
                        <div className="table-dropdown-content">
                          <button className="btn">Edit</button>
                          <button className="btn" onClick={()=>{setAtruck(e); setDeleteModal(true)}}>Delete</button>
                          
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {deleteModal ? (
              <DeleteModal
                closeModal={closeModal}
                deleteMethod={deleteData}
                refresh={refreshPageData}
                title="Delete Request?"
                descp="Are you sure you want to delete this truck?"
              />
            ) : null}

          <br/>
            <br/>
            <br/>
        </div>
      </div>

        </div>
    )
}
export default Alltrucks
import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import search from "../image/Search.svg";
import ROUTE from "../route.json";

function ManageTruckTypes() {
    const [truckTypes, setTruckTypes] = useState([])
    const [truckTypeID, setTruckTypeID] = useState("")
    const [typeName, setTypeName] = useState("")
    const [editTruckTypes, setEditTruckTypes] = useState(false)
    const [refreshTruckTypes, setRefreshTruckTypes] = useState(0);
  
    const createTruckType = async () => {
      let data = {"name": typeName }
      if (editTruckTypes) {
          console.log(ROUTE.SITE_URL + "/truck-types/" + truckTypeID);
          await axios
              .put(ROUTE.SITE_URL + "/truck-types/" + truckTypeID, data).then((res) => { setEditTruckTypes(false); setTypeName(""); alert("Type Updated"); refreshPageData() })
              .catch((err) => {
                  console.log(err);
              });
          refreshPageData()
      } else {
          await axios
              .post(ROUTE.SITE_URL + "/truck-types", data).then((res) => { setTypeName(""); alert("Type Added"); refreshPageData() })
              .catch((err) => {
                  console.log(err);
              });
          refreshPageData()
      }
  
  }
  
  const deleteLocation = (id) => {
      axios.delete(ROUTE.SITE_URL + "/truck-types/" + id).then((res) => { alert("Type Deleted"); refreshPageData() })
          .catch((err) => {
              console.log(err);
          });
  
  }
  
  const refreshPageData = () => {
    setRefreshTruckTypes(refreshTruckTypes => refreshTruckTypes + 1)
  }
  
    useEffect(() => {
      axios
        .get(ROUTE.SITE_URL+"/truck-types")
        .then((res) => {
          let truckTypes = res.data;
          setTruckTypes(truckTypes);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [refreshTruckTypes]);

    return (<div className="bg-white p-4">
    <div className="d-flex mb-5">
      <input
        placeholder="Enter Truck Type Name"
        className="setting-input input-home w64"
        value={typeName}
        name="editTruckTypes"
        onChange={(e)=> setTypeName(e.target.value)}
      />
      <button className="btn btn-dark" onClick={() => { createTruckType() }}>{editTruckTypes ? "Update Type" : "Add Type"}</button>
    </div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">S/N</th>
          <th scope="col" className="col-6">
            TRUCK TYPE
          </th>
          <th scope="col">ACTION</th>
        </tr>
      </thead>
      <tbody>
      {truckTypes.map((e, i) => {
          return (
            <tr key={e.id}>
              <th scope="row">{i + 1}</th>
              <td>{e.name}</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-secondary btn-sm" data={e} onClick={()=>{setEditTruckTypes(true);setTruckTypeID(e.id);setTypeName(e.name);}}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" data={e} onClick={()=>{deleteLocation(e.id)}}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>)
}

export default ManageTruckTypes;
import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import search from "../image/Search.svg";
import ROUTE from "../route.json";

function ManageLocations() {
    const [locate, setLocate] = useState([])
    const [locatId, setLocatId] = useState("")
    const [locatName, setLocatName] = useState("")
    const [editLocate, setEditLocate] = useState(false)
    const [refreshLocation, setRefreshLocation] = useState(0);
  
    const createLocation = async () => {
      let data = {"name": locatName }
      if (editLocate) {
          console.log(ROUTE.SITE_URL + "/locations/" + locatId);
          await axios
              .put(ROUTE.SITE_URL + "/locations/" + locatId, data).then((res) => { setEditLocate(false); setLocatName(""); alert("Location Updated"); refreshPageData() })
              .catch((err) => {
                  console.log(err);
              });
          refreshPageData()
      } else {
          await axios
              .post(ROUTE.SITE_URL + "/locations", data).then((res) => { setLocatName(""); alert("Location Added"); refreshPageData() })
              .catch((err) => {
                  console.log(err);
              });
          refreshPageData()
      }
  
  }
  
  const deleteLocation = (id) => {
      axios.delete(ROUTE.SITE_URL + "/locations/" + id).then((res) => { alert("Location Deleted"); refreshPageData() })
          .catch((err) => {
              console.log(err);
          });
  
  }
  
  const refreshPageData = () => {
    setRefreshLocation(refreshLocation => refreshLocation + 1)
  }
  
    useEffect(() => {
      axios
        .get(ROUTE.SITE_URL+"/locations")
        .then((res) => {
          let locate = res.data;
          setLocate(locate);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [refreshLocation]);

    return (<div className="bg-white p-4">
    <div className="d-flex mb-5">
      <input
        placeholder="Enter Location Name"
        className="setting-input input-home w64"
        value={locatName}
        name="editLocate"
        onChange={(e)=> setLocatName(e.target.value)}
      />
      <button className="btn btn-dark" onClick={() => { createLocation() }}>{editLocate ? "Update Location" : "Add Location"}</button>
    </div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">S/N</th>
          <th scope="col" className="col-6">
            NAME OF LOCATION
          </th>
          <th scope="col">ACTION</th>
        </tr>
      </thead>
      <tbody>
      {locate.map((e, i) => {
          return (
            <tr key={e.id}>
              <th scope="row">{i + 1}</th>
              <td>{e.name}</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-secondary btn-sm" data={e} onClick={()=>{setEditLocate(true);setLocatId(e.id);setLocatName(e.name);}}>
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

export default ManageLocations;
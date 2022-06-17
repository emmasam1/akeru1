import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import search from "../image/Search.svg";
import ROUTE from "../route.json";

function Setting() {
  const [tonsData, setTonData] = useState([]);
  const [locate, setLocate] = useState([])

  const [aTon, setATon] = useState({})
  const [upTon, setUpTon] = useState(false)
  const [editLocate, setEditLocate] = useState(locate)
  const [refreshTons, setRefreshTons] = useState(0);

const createTon= async()=>{
  let data={"amount":aTon.amount }
  if(upTon){
    console.log(ROUTE.SITE_URL+"/tons/"+aTon.id);
   await axios
      .put(ROUTE.SITE_URL+"/tons/"+aTon.id, data).then((res) => { setUpTon(false); setATon({amount:""}); alert("Ton Updated") })
      .catch((err) => {
        console.log(err);
      });
      refreshPageData()
  }else{
    await axios
      .post(ROUTE.SITE_URL+"/tons", data).then((res) => {setATon({amount:""}); alert("Ton Added") })
      .catch((err) => {
        console.log(err);
      });
      refreshPageData()
  }
  
}

const deleteTon=(id)=>{
  axios
  .delete(ROUTE.SITE_URL+"/tons/"+id).then((res) => { alert("Ton Deleted") })
  .catch((err) => {
    console.log(err);
  });
  refreshPageData()
}

const refreshPageData = () => {
  alert("refreshing")
  setRefreshTons(refreshTons => refreshTons + 1)
}


  useEffect(() => {
    axios
      .get(ROUTE.SITE_URL+"/tons")
      .then((res) => {
        let ton = res.data;
        setTonData(ton);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshTons]);

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
  }, []);

  return (
    <div className="p-3 position-relative left-width left-width-home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="bg-white p-4">
              <div className="d-flex mb-5">
                <input
                  placeholder="Enter number of Tons"
                  type="number"
                  className="setting-input input-home w64"
                  value={aTon.amount}
                  name="editTon"
                  onChange={(e)=> setATon({"amount":e.target.value})}
                />
                <button className="btn btn-dark" onClick={()=>{ createTon() }}>{upTon?"Update Ton":"Add Tons"}</button>
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col" className="col-6">
                      AMOUNT
                    </th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {tonsData.map((e, i) => {
                    return (
                      <tr key={e.id}>
                        <th scope="row">{i + 1}</th>
                        <td>{e.amount}</td>
                        <td className="d-flex justify-content-between">
                          <button className="btn btn-secondary btn-sm" data={e} onClick={()=>{setATon(e); setUpTon(true);}}>
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm" data={e} onClick={()=>deleteTon(e.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* <div className="col">
            <div className="bg-white p-4">
              <div className="d-flex mb-5">
                <input
                  placeholder="Enter Location Name"
                  className="setting-input input-home w64"
                  value={locate.location_name}
                  name="editLocate"
                  onChange={(e)=> setEditLocate(e.target.value)}
                />
                <button className="btn btn-dark">Save Location</button>
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
                        <td>{e.location_name}</td>
                        <td className="d-flex justify-content-between">
                          <button className="btn btn-secondary btn-sm" data={e} onClick={()=>setEditLocate(e)}>
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm" data={e} onClick={()=>alert(e)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Setting;

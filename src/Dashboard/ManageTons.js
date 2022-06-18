import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import search from "../image/Search.svg";
import ROUTE from "../route.json";

function ManageTons() {

    const [tonsData, setTonData] = useState([]);
    const [tonId, setTonId] = useState("")
    const [tonAmount, setTonAmount] = useState("")
    const [upTon, setUpTon] = useState(false)
    const [refreshTons, setRefreshTons] = useState(0);

    const createTon = async () => {
        let data = { "amount": tonAmount }
        if (upTon) {
            console.log(ROUTE.SITE_URL + "/tons/" + tonId);
            await axios
                .put(ROUTE.SITE_URL + "/tons/" + tonId, data).then((res) => { setUpTon(false); setTonAmount(""); alert("Ton Updated"); refreshPageData() })
                .catch((err) => {
                    console.log(err);
                });
            refreshPageData()
        } else {
            await axios
                .post(ROUTE.SITE_URL + "/tons", data).then((res) => { setTonAmount(""); alert("Ton Added"); refreshPageData() })
                .catch((err) => {
                    console.log(err);
                });
            refreshPageData()
        }

    }

    const deleteTon = (id) => {
        axios.delete(ROUTE.SITE_URL + "/tons/" + id).then((res) => { alert("Ton Deleted"); refreshPageData() })
            .catch((err) => {
                console.log(err);
            });

    }

    const refreshPageData = () => {
        setRefreshTons(refreshTons => refreshTons + 1)
    }

    useEffect(() => {
        axios
            .get(ROUTE.SITE_URL + "/tons")
            .then((res) => {
                let ton = res.data;
                setTonData(ton);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [refreshTons]);

    return (<div className="bg-white p-4">
        <div className="d-flex mb-5">
            <input
                placeholder="Enter number of Tons"
                type="number"
                className="setting-input input-home w64"
                value={tonAmount}
                name="editTon"
                onChange={(e) => setTonAmount(e.target.value)}
            />
            <button className="btn btn-dark" onClick={() => { createTon() }}>{upTon ? "Update Ton" : "Add Tons"}</button>
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
                                <button className="btn btn-secondary btn-sm" data={e} onClick={() => { setTonAmount(e.amount); setTonId(e.id); setUpTon(true); }}>
                                    Edit
                                </button>
                                <button className="btn btn-danger btn-sm" data={e} onClick={() => deleteTon(e.id)}>
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

export default ManageTons;
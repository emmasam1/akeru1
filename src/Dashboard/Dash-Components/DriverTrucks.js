import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import arrow from "../../image/Arrow.png";
import ROUTE from "../../route.json";
import axios from "axios";
import Loader from '../Loader';

function DriverTrucks(props) {

  const [trucks, setTrucks] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios.get(ROUTE.DRIVERS + `/${props.driver_id}/trucks`,)
      .then((res) => {
        console.log();
        setTrucks(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      })

  }, [])



  return (
    <>
      {isLoading ? <Loader /> : trucks.length < 1 ? <h1 className='text-center'>No Trucks</h1> :
        <table className="table table-hover ">
          <thead className="table-dark">
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">BRAND</th>
              <th scope="col">MODEL</th>
              <th scope="col">PLATE NO.</th>
              <th scope="col">YEAR</th>
            </tr>
          </thead>
          <tbody className="position-relative">
            {trucks.map((e, i) => {
              return (
                <tr key={e.id}>
                  <td>{i + 1}</td>
                  <td>{e.vehicle_brand}</td>
                  <td>{e.model}</td>
                  <td>{e.plate_no}</td>
                  <td>{e.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </>
  )
}
export default DriverTrucks
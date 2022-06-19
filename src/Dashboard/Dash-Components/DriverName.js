import React, { useState, useEffect } from "react";
import ROUTE from "../../route.json";
import axios from "axios";

function DriverName(props){
    const [driver, setDriver] = useState("");
    useEffect(() => {
    axios.get(ROUTE.DRIVERS + `/${props.id}`)
    .then((res) => {
        if(res.data.firstname && res.data.lastname){
            setDriver(`${res.data.firstname} ${res.data.lastname}`)
        }
    })
    .catch((err) => {
      console.log(err);
    })
      
  }, [])

  return <>{driver}</>
}


export default DriverName;
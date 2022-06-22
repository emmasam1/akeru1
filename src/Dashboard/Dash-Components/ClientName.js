import React, { useState, useEffect } from "react";
import ROUTE from "../../route.json";
import axios from "axios";

function ClientName(props){
    const [client, setClient] = useState("");
    useEffect(() => {
    axios.get(ROUTE.CLIENTS + `/${props.id}`)
    .then((res) => {
      console.log(res.data);
        if(res.data.fullname && res.data.company){
          setClient(`${(res.data.fullname).toUpperCase()} ${(res.data.company).toUpperCase()}`)
        }
    })
    .catch((err) => {
      console.log(err);
    })
      
  }, [])

  return <b>{client}</b>
}


export default ClientName;
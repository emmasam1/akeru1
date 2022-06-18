import React, { useState, useEffect } from "react";

function ConvertDate(props) {

    

    const changeDate = (date) => {

        var newDate = new Date(date)
        let year = newDate.getFullYear();
        let month = getMonth(newDate.getMonth());
        let day = newDate.getDay();
        let hr = newDate.getHours();
        let min = newDate.getMinutes();
    
        return `${day}-${month}-${year}`;
      }
    
     const getMonth=(month)=>{
      switch (month) {
        case 0:
          return "Jan";
        case 1:
          return "Feb";
        case 2:
          return "Mar";
        case 3:
          return "Apr";
        case 4:
          return "May";
        case 5:
          return "Jun";
        case 6:
          return "Jul";
        case 7:
          return "Aug";
        case 8:
          return "Sep";
        case 9:
          return "Oct";
        case 10:
          return "Nov";
        case 11:
          return "Dec";
      }
     } 
     
     return <>{changeDate(props.date)}</>
}

export default ConvertDate
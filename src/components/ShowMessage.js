import React from 'react'

function ShowMessage(props) {
    return (
        <>
            {props.hasError ? <div className="text-center text-light bg-danger success rounded-1 mt-2 mb-2" >{props.message}</div> : <div className="text-center text-light bg-danger rounded-1 mt-2 mb-2" >{props.message}</div>}
        </>
    )
}
export default ShowMessage
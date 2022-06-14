import React from 'react'

function Loading(props){
    return(
        <>
        {props.loading?<div class="loader4"></div>:props.false_text}
        </>
    )
}
export default Loading
import React from "react"

export default function UserText(props) {
    return (
        <>
            <input type="text" placeholder={props.placeholder} id={props.name} style={{marginTop:"5px",marginBottom:"5px"}}></input>
        </>
    )
}
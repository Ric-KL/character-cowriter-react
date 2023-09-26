import React from "react"

export default function UserTextCheck(props) {
    return (
        <>
            <span style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"5px",marginBottom:"5px"}}>
                <input type="text" placeholder={props.placeholder} id={props.name}></input> <input type="checkbox" id={props.boolName}></input>
            </span>
        </>
    )
}
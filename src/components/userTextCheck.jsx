import React from "react"

export default function UserTextCheck(props) {
    function handleChange(event) {
        props.handle(prevObj => {
            return { ...prevObj, [event.target.id]: event.target.type == "checkbox" ? event.target.checked : event.target.value }
        }
        )
    }
    return (
        <>
            <span style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"5px",marginBottom:"5px"}}>
                <input type="text" placeholder={props.placeholder} id={props.name} onChange={handleChange}></input> <input type="checkbox" checked={props.data.boolName} id={props.boolName} onChange={handleChange}></input>
            </span>
        </>
    )
}
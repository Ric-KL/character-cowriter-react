import React from "react"
import useState from "react"

export default function UserText(props) {

    function handleChange(event) {
        props.handle(prevObj => {
            return { ...prevObj, [event.target.id]: event.target.value }
        }
        )
    }

    return (
        <>
            <input type="text" placeholder={props.placeholder} id={props.name} style={{ marginTop: "5px", marginBottom: "5px" }} onChange={handleChange}></input>
        </>
    )
}
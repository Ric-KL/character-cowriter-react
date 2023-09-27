import React from "react"

export default function UserSelect(props) {

    function handleChange(event) {
        props.handle(prevObj => {
            return { ...prevObj, [event.target.id]: event.target.value }
        }
        )
    }

    return (
        <>
            <select id={props.name} style={{width:"74.5%" , marginTop:"5px",marginBottom:"5px"}} onChange={handleChange}>
                <option value={""}>{props.placeholder}</option>
                {props.array.map(x => <option value={x}>{x}</option>)}
            </select>
        </>
    )
}
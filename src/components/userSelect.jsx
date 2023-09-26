import React from "react"

export default function UserSelect(props) {
    return (
        <>
            <select id={props.name} style={{width:"74.5%" , marginTop:"5px",marginBottom:"5px"}}>
                <option value={""}>{props.placeholder}</option>
                {props.array.map(x => <option value={x}>{x}</option>)}
            </select>
        </>
    )
}
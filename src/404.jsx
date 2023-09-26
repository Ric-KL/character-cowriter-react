import React from "react";
import "./home.css";
import { Link } from "react-router-dom"

export default function () {
    return (
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column", backgroundColor:"white" , padding: "10px" , boxShadow: "0px 0px 20px white" , borderRadius:"10px"}}>
            <h1>PAGE NOT FOUND. UNDER CONSTRUCTION OR INVALID LINK</h1>
            <Link to="/">BACK TO HOME</Link>
        </div>
    )
}
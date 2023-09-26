import React from "react"
import './Home.css';
import { Link } from "react-router-dom"
import splashArt from "./wallClimb.png";

export default function () {
    return (
        <div className="main-container-home">
            <div className="banner1-container border-home">
                <Link to="/bitd" className="link-cover-home"><p className="label-home">BLADES IN THE DARK</p></Link>
            </div>
            <div className="banner2-container border-home">
                <Link to="/404" className="link-cover-home"><p className="label-home">DND 5e</p></Link>
            </div>
            <div className="banner3-container border-home">
                <Link to="/404" className="link-cover-home"><p className="label-home">LANCER</p></Link>
            </div>
        </div>
    )
}
import './App.css';
import splashArt from "./wallClimb.png";
import React from "react"
import UserText from "./components/userText.jsx"

function App() {
    /*     const [currentDisplayedCharacter, setDisplayedCurrentCharacter] =  React.useState({
            id : 0,
            dateCreated: "",
            race: "",
            culture: "",
            firstName : "",
            alias: "",
            useAlias : false,
            lastName : "",
            reputation: "",
            occupation: {occName: "" , useFaction : false},
            faction : "",
            trouble: "",
            enemy: "",
            home: "",
            habit: "",
            quirk1 : "",
            quirk2 : ""
        }) */

    const [manualToggle, setManualToggle] = React.useState(false)
    function handleManualToggle() {
        setManualToggle(prevBool => !prevBool);
    }

    return (
        <div className='main-container'>
            <div className='input-container'>

                <div className='run-button-container m-10 w-100 header-height'>
                    <button id="generateButton">GENERATE</button>
                </div>

                <div className='manual-toggle-container m-10 w-100 header-height'>
                    <input type="checkbox" id="manualMode" checked={manualToggle} onClick={handleManualToggle}></input> MANUAL MODE
                </div>

                <div className={manualToggle ? "user-controls-container m-10 fill-height" : "user-controls-container m-10 fill-height lock-out"}>
                    <UserText placeholder="Occupation" name="occupation"/>
                </div>

                <div className='save-button-container m-10 header-height'>SAVED CHARACTERS</div>

                <div className='save-list-container m-10 fill-height'></div>

            </div>
            <div className='output-container'>
                <div className='output-header m-10 header-height-output'>
                    <span className='m-10-h'>
                        Character Name
                    </span>
                    <span className='output-header-controls'>
                        <button className='button-style m-10-h'>SAVE</button>
                        <button className='button-style m-10-h'>DELETE</button>
                    </span>
                </div>
                <div className='output-text-container m-10'>

                </div>
            </div>
            <div className='image-container'>
                <img className='splash-art' src={splashArt} height="100%" width="100%"></img>
            </div>
        </div>
    )
}

export default App

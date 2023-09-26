import './App.css';
import splashArt from "./wallClimb.png";
import React from "react";
import UserText from "./components/userText.jsx";
import UserTextCheck from "./components/userTextCheck.jsx";
import UserSelect from "./components/userSelect.jsx";
import { Link } from "react-router-dom";
import data from "./NPCDatapackBitDBase.json";

let lineageKeys = Object.keys(data["first names"]);
let regionKeys = data["regions"];

function App() {
    const [currentDisplayedCharacter, setCurrentDisplayedCharacter] = React.useState({
        id: 0,
        dateCreated: "09/25/2023",
        race: "Akorosi",
        culture: "Skovlander",
        firstName: "Aldo",
        alias: "Brick",
        useAlias: true,
        lastName: "McTavish",
        reputation: "unremarkable",
        occupation: { occName: "cutter", useFaction: true },
        faction: "the Lampblacks",
        trouble: "feuding",
        enemy: "the Red Sashes",
        home: "Silkshore",
        habit: "drunk in a ditch somewhere",
        quirk1: "They have a family member in Ironhook Prison",
        quirk2: "They have a large bounty on them in another city"
    })

    const [currentCalculatedCharacter, setCurrentCalculatedCharacter] = React.useState({
        id: 0,
        dateCreated: "",
        race: "",
        culture: "",
        firstName: "",
        alias: "",
        useAlias: "",
        lastName: "",
        reputation: "",
        occupation: { occName: "", useFaction: "" },
        faction: "",
        trouble: "",
        enemy: "",
        home: "",
        habit: "",
        quirk1: "",
        quirk2: ""
    })

    const [manualToggle, setManualToggle] = React.useState(false)
    function handleManualToggle() {
        setManualToggle(prevBool => !prevBool);
    }

    return (
        <div className='main-container'>
            <div className='input-container'>

                <div className='run-button-container m-10 w-100 header-height'>
                    <button id="generateButton" onClick={x => console.log(currentCalculatedCharacter)}>GENERATE</button>
                </div>

                <div className='manual-toggle-container m-10 w-100 header-height'>
                    <input type="checkbox" id="manualMode" checked={manualToggle} onClick={handleManualToggle}></input> MANUAL MODE
                </div>

                <div className={manualToggle ? "user-controls-container m-10 fill-height" : "user-controls-container m-10 fill-height lock-out"}>
                    <UserSelect placeholder="-Select Lineage-" array={lineageKeys} data={data} handle={"TEST"}/>
                    <UserSelect placeholder="-Select Culture-" array={lineageKeys} data={data} handle={"TEST"}/>
                    <UserTextCheck placeholder="Alias" name="alias" boolName="useAlias" data={data} handle={"TEST"}/>
                    <UserText placeholder="Occupation" name="occName" data={data} handle={"TEST"}/>
                    <UserTextCheck placeholder="Faction" name="faction" boolName="useFaction" data={data} handle={"TEST"}/>
                    <UserText placeholder="Enemy" name="enemy" data={data} handle={"TEST"}/>
                    <UserSelect placeholder="-Select Home-" array={regionKeys} data={data} handle={"TEST"}/>
                </div>

                <div className='save-button-container m-10 header-height'>SAVED CHARACTERS</div>

                <div className='save-list-container m-10 fill-height'></div>

            </div>
            <div className='output-container'>
                <div className='output-header m-10 header-height-output'>
                    <span className='m-10-h' style={{display:currentDisplayedCharacter.id == 1 ? "none": "flex"}}>
                        {`${currentDisplayedCharacter.firstName} ${currentDisplayedCharacter.useAlias ? "\"" + currentDisplayedCharacter.alias + "\" " : " "}${currentDisplayedCharacter.lastName}`}
                    </span>
                    <span style={{display:currentDisplayedCharacter.id == 1 ? "none": "flex"}}>
                        {`Created: ${currentDisplayedCharacter.dateCreated}`}
                    </span>
                    <span className='output-header-controls' style={{display:currentDisplayedCharacter.id == 1 ? "none": "flex"}}>
                        <button className='button-style m-10-h'>SAVE</button>
                        <button className='button-style m-10-h'>DELETE</button>
                    </span>
                </div>
                <div className='output-text-container m-10'>
                    <p className='output-text' style={{display:currentDisplayedCharacter.id == 1 ? "none": "flex"}}>
                        {`${currentDisplayedCharacter.firstName} ${currentDisplayedCharacter.useAlias ? "\"" + currentDisplayedCharacter.alias + "\" " : " "}${currentDisplayedCharacter.lastName} is a ${currentDisplayedCharacter.reputation} ${currentDisplayedCharacter.race} ${currentDisplayedCharacter.occupation.occName}${currentDisplayedCharacter.occupation.useFaction ? " for " + currentDisplayedCharacter.faction : ""}.
                        They are currently ${currentDisplayedCharacter.trouble == "none" ? "managing to stay out of trouble" : currentDisplayedCharacter.trouble + " with " + currentDisplayedCharacter.enemy}.
                        They can often be found in ${currentDisplayedCharacter.home} ${currentDisplayedCharacter.habit}.
                        ${currentDisplayedCharacter.quirk1}.
                        ${currentDisplayedCharacter.quirk2}.`}
                    </p>
                </div>
            </div>
            <div className='image-container'>
                <img className='splash-art' src={splashArt} height="100%" width="100%"></img>
                <Link className="back-button-bitd" to="/"> HOME</Link>
            </div>
        </div>
    )
}

export default App
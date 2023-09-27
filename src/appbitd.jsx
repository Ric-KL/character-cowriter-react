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
        id: 1,
        dateCreated: "09/25/2023",
        race: "Akorosi",
        culture: "Skovlander",
        firstName: "Aldo",
        alias: "Brick",
        useAlias: true,
        lastName: "McTavish",
        reputation: "unremarkable",
        occName: "cutter",
        useFaction: true,
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
        occName: "",
        useFaction: false,
        faction: "",
        trouble: "",
        enemy: "",
        home: "",
        habit: "",
        quirk1: "",
        quirk2: ""
    })

    const [currentGeneratedCharacter, setCurrentGeneratedCharacter] = React.useState({
        id: 0,
        dateCreated: "",
        race: "",
        culture: "",
        firstName: "",
        alias: "",
        useAlias: false,
        lastName: "",
        reputation: "",
        occName: "",
        useFaction: false,
        faction: "",
        trouble: "",
        enemy: "",
        home: "",
        habit: "",
        quirk1: "",
        quirk2: ""
    })

    function randomGenerateArr(input, key1, useKey2, key2) {
        if (useKey2 == true) {
            key1 = key1;
            key2 = key2;
            let targetNum = input[key1][key2].length; //problem line
            let selection = Math.floor(Math.random() * targetNum);
            console.log(input[key1][key2][selection])
            return input[key1][key2][selection];
        }
        else {
            key1 = key1;
            let targetNum = input[key1].length; //problem line
            console.log(targetNum);
            let selection = Math.floor(Math.random() * targetNum);
            console.log(input[key1][selection]);
            return input[key1][selection];
        }
    }

    function randomGenerateBool() {
        let coinflip = Math.floor(Math.random() * 2);
        if (coinflip == 1) {
            return true;
        }
        else {
            return false;
        }
    }

    function generateCharacter() {
        if (manualToggle == false) {
            let genRace = lineageKeys[Math.floor(Math.random() * lineageKeys.length)];
            let genCulture = lineageKeys[Math.floor(Math.random() * lineageKeys.length)];
            let genOcc = data["occupations"][Math.floor(Math.random() * data["occupations"].length)]

            setCurrentGeneratedCharacter({
                id: Math.random(),
                dateCreated: "",
                race: genRace,
                culture: genCulture,
                firstName: randomGenerateArr(data , "first names" , true , genRace),
                alias: randomGenerateArr(data, "nicknames", false, "none"),
                useAlias: randomGenerateBool(),
                lastName: randomGenerateArr(data , "last names" , true , genCulture),
                reputation: randomGenerateArr(data, "reputations", false, "none"),
                occName: genOcc["occName"],
                useFaction: genOcc["useFaction"],
                faction: randomGenerateArr(data, "factions", false, "none"),
                trouble: randomGenerateArr(data, "conflicts", false, "none"),
                enemy: randomGenerateArr(data, "factions", false, "none"),
                home: randomGenerateArr(data, "regions", false, "none"),
                habit: randomGenerateArr(data, "habits", false, "none"),
                quirk1: randomGenerateArr(data, "quirks", false, "none"),
                quirk2: randomGenerateArr(data, "quirks", false, "none")
            })
        }
        else {
            let genRace = lineageKeys[Math.floor(Math.random() * lineageKeys.length)];
            currentCalculatedCharacter.race == "" ? genRace = genRace : genRace = currentCalculatedCharacter.race;
            
            let genCulture = lineageKeys[Math.floor(Math.random() * lineageKeys.length)];
            currentCalculatedCharacter.culture == "" ? genCulture = genCulture : genCulture = currentCalculatedCharacter.culture;
            
            let genOcc = data["occupations"][Math.floor(Math.random() * data["occupations"].length)]
            currentCalculatedCharacter.occName == "" ? genOcc = genOcc: genOcc = {"occName" : currentCalculatedCharacter.occName, "useFaction" : currentCalculatedCharacter.useFaction}

            setCurrentGeneratedCharacter({
                id: Math.random(),
                dateCreated: "",
                race: genRace,
                culture: genCulture,
                firstName: randomGenerateArr(data , "first names" , true , genRace),
                alias: currentCalculatedCharacter.alias == "" ? randomGenerateArr(data, "nicknames", false, "none") : currentCalculatedCharacter.alias,
                useAlias: currentCalculatedCharacter.useAlias,
                lastName: randomGenerateArr(data , "last names" , true , genCulture),
                reputation: randomGenerateArr(data, "reputations", false, "none"),
                occName: genOcc["occName"],
                useFaction: genOcc["useFaction"],
                faction: currentCalculatedCharacter.faction == "" ? randomGenerateArr(data, "factions", false, "none") : currentCalculatedCharacter.faction,
                trouble: randomGenerateArr(data, "conflicts", false, "none"),
                enemy: currentCalculatedCharacter.enemy == "" ? randomGenerateArr(data, "factions", false, "none") : currentCalculatedCharacter.enemy,
                home: currentCalculatedCharacter.home == "" ? randomGenerateArr(data, "regions", false, "none") : currentCalculatedCharacter.home,
                habit: randomGenerateArr(data, "habits", false, "none"),
                quirk1: randomGenerateArr(data, "quirks", false, "none"),
                quirk2: randomGenerateArr(data, "quirks", false, "none")
            })
        }
    }

    async function runProgram() {
        await generateCharacter();
        setCurrentDisplayedCharacter(currentGeneratedCharacter);
    }

    const [manualToggle, setManualToggle] = React.useState(false)
    function handleManualToggle() {
        setManualToggle(prevBool => !prevBool);
    }

    return (
        <div className='main-container'>
            <div className='input-container'>

                <div className='run-button-container m-10 w-100 header-height'>
                    <button id="generateButton" onClick={runProgram}>GENERATE</button>
                </div>

                <div className='manual-toggle-container m-10 w-100 header-height'>
                    <input type="checkbox" id="manualMode" checked={manualToggle} onClick={handleManualToggle}></input> MANUAL MODE
                </div>

                <div className={manualToggle ? "user-controls-container m-10 fill-height" : "user-controls-container m-10 fill-height lock-out"}>
                    <UserSelect placeholder="-Select Lineage-" name="race" array={lineageKeys} data={currentCalculatedCharacter} handle={setCurrentCalculatedCharacter} />
                    <UserSelect placeholder="-Select Culture-" name="culture" array={lineageKeys} data={currentCalculatedCharacter} handle={setCurrentCalculatedCharacter} />
                    <UserTextCheck placeholder="Alias" name="alias" boolName="useAlias" data={currentCalculatedCharacter} handle={setCurrentCalculatedCharacter} />
                    <UserText placeholder="Occupation" name="occName" data={currentCalculatedCharacter} handle={setCurrentCalculatedCharacter} />
                    <UserTextCheck placeholder="Faction" name="faction" boolName="useFaction" data={currentCalculatedCharacter} handle={setCurrentCalculatedCharacter} />
                    <UserText placeholder="Enemy" name="enemy" data={currentCalculatedCharacter} handle={setCurrentCalculatedCharacter} />
                    <UserSelect placeholder="-Select Home-" name="home" array={regionKeys} data={currentCalculatedCharacter} handle={setCurrentCalculatedCharacter} />
                </div>

                <div className='save-button-container m-10 header-height'>SAVED CHARACTERS</div>

                <div className='save-list-container m-10 fill-height'></div>

            </div>
            <div className='output-container'>
                <div className='output-header m-10 header-height-output'>
                    <span className='m-10-h' style={{ display: currentDisplayedCharacter.id == 1 ? "none" : "flex" }}>
                        {`${currentDisplayedCharacter.firstName} ${currentDisplayedCharacter.useAlias ? "\"" + currentDisplayedCharacter.alias + "\" " : " "}${currentDisplayedCharacter.lastName}`}
                    </span>
                    <span style={{ display: currentDisplayedCharacter.id == 1 ? "none" : "flex" }}>
                        {`Created: ${currentDisplayedCharacter.dateCreated}`}
                    </span>
                    <span className='output-header-controls' style={{ display: currentDisplayedCharacter.id == 1 ? "none" : "flex" }}>
                        <button className='button-style m-10-h'>SAVE</button>
                        <button className='button-style m-10-h'>DELETE</button>
                    </span>
                </div>
                <div className='output-text-container m-10'>
                    <p className='output-text' style={{ display: currentDisplayedCharacter.id == 1 ? "none" : "flex" }}>
                        {`${currentDisplayedCharacter.firstName} ${currentDisplayedCharacter.useAlias ? "\"" + currentDisplayedCharacter.alias + "\" " : " "}${currentDisplayedCharacter.lastName == "" ? "" : currentDisplayedCharacter.lastName + " "}is a ${currentDisplayedCharacter.reputation} ${currentDisplayedCharacter.race} ${currentDisplayedCharacter.occName}${currentDisplayedCharacter.useFaction ? " for " + currentDisplayedCharacter.faction : ""}.
                        They are currently ${currentDisplayedCharacter.trouble == "none" ? "managing to stay out of trouble" : currentDisplayedCharacter.trouble + " " + currentDisplayedCharacter.enemy}.
                        They can often be found in ${currentDisplayedCharacter.home} ${currentDisplayedCharacter.habit}.
                        ${currentDisplayedCharacter.quirk1}
                        ${currentDisplayedCharacter.quirk2}`}
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
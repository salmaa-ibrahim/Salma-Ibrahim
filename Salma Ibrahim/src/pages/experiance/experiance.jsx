import "./experince.css"
import { useContext, useState } from "react";
import { ThemeContext } from '../../App'
import HTML from "../../../public/images/HTML.svg"
import CSS from "../../../public/images/css.svg"
import JS from "../../../public/images/javascript.svg"
import React from "../../../public/images/react.svg"
import Keyboard from "../../../public/images/keyboard.jpeg"
import Bootstrab from "../../../public/images/bootstrap.svg"
// import ChatGPT from "../../../public/images/chatgpt.svg"

function Experiance() {
    const passevedValues = useContext(ThemeContext)
    const [active, setActive] = useState(true);
    function closeSkills() {
        setActive(true);
    }
    function openSkills() {
        setActive(false);
    }

    const [select, setSelect] = useState(false);
    function Select() {
        setSelect(true);
    }
    function Unselect() {
        setSelect(false);
    }

    const Tools = [{
        image: React,
        title: "React",
        level: "Advanced"
    },
    {
        image: HTML,
        title: "HTML",
        level: "Experienced"
    },
    {
        image: CSS,
        title: "Css",
        level: "Experienced"
    },{
        image: JS,
        title: "JavaScript",
        level: "Intermediate"
    },{
        image: Bootstrab,
        title: "Bootstrab",
        level: "Basics"
    },{
        image: Keyboard,
        title: "Writing Speed",
        level: "Experienced"
    },
    ]

    const Skills = [{
        image: HTML,
        title: "HTML",
        level: "Advanced"
    },

    ]

    return (
        <>
            <div id="experince" className={passevedValues.theme + "Experince"}>
                <div className="Top">
                    <label>Explore My</label>
                    <h1 className={passevedValues.theme + "AboutLable"}>Experince</h1>
                </div>
                <div className="ExperinceContent">
                    <div className={passevedValues.theme +"ExperinceTitle"}>
                        <div id="TitleDiv" className={select ? "notSelected" : " selected"} onClick={Unselect}>
                            <button className={passevedValues.theme + "TitleButton"} onClick={closeSkills}>Skills</button>
                        </div>
                        <div id="TitleDiv" className={select ? "selected" : "notSelected"} onClick={Select}>
                            <button className={passevedValues.theme + "TitleButton"} onClick={openSkills} >Courses</button>
                        </div>
                    </div>
                    <div className="ExperinceContentDiv">
                        {Tools.map((prop) => {
                            return (
                                <>
                                    <div className={active ? passevedValues.theme + "OpenSkill" : passevedValues.theme + "CloseSkill"}>
                                        <div className="ExperinceIconDiv">
                                            <img className="IconImg" src={prop.image} alt="" />
                                            <div className="EXPIcon">
                                                <h3 className={passevedValues.theme + "IconLable"}>{prop.title}</h3>
                                                <span className={passevedValues.theme + "IconLable2"}>{prop.level}</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        {Skills.map((skill) => {
                            return (
                                <>
                                    <div className={active ? passevedValues.theme + "CloseSkill" : passevedValues.theme + "OpenSkill"} >
                                        <div className="ExperinceIconDiv">
                                            <img className="IconImg" src={skill.image} alt="" />
                                            <div className="EXPIcon">
                                                <h3 className={passevedValues.theme + "IconLable"}>{skill.title}</h3>
                                                <span className={passevedValues.theme + "IconLable2"}>{skill.level}</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experiance
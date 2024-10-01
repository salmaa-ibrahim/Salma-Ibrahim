import "./experince.css"
import { useContext, useState } from "react";
import { ThemeContext } from '../../App'
import HTML from "../../../public/images/ExperincePage/HTML.svg"
import CSS from "../../../public/images/ExperincePage/css.svg"
import JS from "../../../public/images/ExperincePage/javascript.svg"
import React from "../../../public/images/ExperincePage/react.svg"
import Bootstrab from "../../../public/images/ExperincePage/bootstrap.svg"
import WebFundamental from "../../../public/images/ExperincePage/web fundamentl.svg"
import APIs from "../../../public/images/ExperincePage/API.svg"
import JSON from "../../../public/images/ExperincePage/JSON.svg"
import CleanCode from "../../../public/images/ExperincePage/clean code.svg"
import GraphicDesign from "../../../public/images/ExperincePage/graphic design.svg"
import ProblemSolving from "../../../public/images/ExperincePage/problem solving.svg"
import Networks from "../../../public/images/ExperincePage/network.svg"
import Cpp from "../../../public/images/ExperincePage/Cpp.svg"
import WrittingSpeed from "../../../public/images/ExperincePage/keyboard.jpeg"
import VSC from "../../../public/images/ExperincePage/VSC.svg"
import Figma from "../../../public/images/ExperincePage/figma.svg"
import MSOffice from "../../../public/images/ExperincePage/microsoft-office.svg"
import Certificate from "../../../public/images/ExperincePage/certificate.jpeg"
import Certificate2 from "../../../public/images/ExperincePage/certificate2.jpeg"
import Canva from "../../../public/images/ExperincePage/canva.svg"

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
        id : 0 ,
        image: React,
        title: "React",
        level: "Advanced"
    },
    {
        id : 1 ,
        image: HTML,
        title: "HTML",
        level: "Experienced"
    },
    {
        id : 2 ,
        image: CSS,
        title: "Css",
        level: "Experienced"
    },
    {
        id : 3 ,
        image: JS,
        title: "JavaScript",
        level: "Intermediate"
    },
    {
        id : 4 ,
        image: Bootstrab,
        title: "Bootstrab",
        level: "Basics"
    },
    {
        id : 5 ,
        image: WebFundamental,
        title: "Web Fundamentals",
        level: "Intermediate"
    },
    {
        id :6  ,
        image: APIs,
        title: "APIs",
        level: "Basics"
    },
    {
        id :7  ,
        image: JSON,
        title: "JSON",
        level: "Basics"
    },
    {
        id : 8 ,
        image: WrittingSpeed,
        title: "Writing Speed",
        level: "Experienced"
    },
    {
        id : 9 ,
        image: CleanCode,
        title: "Clean Code",
        level: "Advanced"
    },
    {
        id : 10 ,
        image: GraphicDesign,
        title: "Graphic Design",
        level: "Basics"
    },
    {
        id :  11,
        image: ProblemSolving,
        title: "Problem Solving",
        level: "Basics"
    },
    {
        id : 12 ,
        image: Networks,
        title: "Networks",
        level: "Basics"
    },
    {
        id : 13  ,
        image: Cpp,
        title: "C++",
        level: "Basics"
    },
    {
        id : 14  ,
        image: VSC,
        title: "VSC" ,
        level: "Advanced"
    },
    {
        id : 15  ,
        image: Figma,
        title: "Figma" ,
        level: "Advanced"
    },
    {
        id : 16  ,
        image: Canva,
        title: "Canva" ,
        level: "Advanced"
    },
    {
        id : 17  ,
        image: MSOffice,
        title: "MS Office" ,
        level: "Experienced"
    },
    ]

    const Skills = [
        {
        image: Certificate,
        title: "Frontend Development Basic Level",
        // level: "Advanced"
    },
    {
        image: Certificate2,
        title: "Frontend Development Advanced Level (React.js)",
        // level: "Advanced"
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
                            <button className={passevedValues.theme + "TitleButton"} onClick={closeSkills}>Skills and Tools</button>
                        </div>
                        <div id="TitleDiv" className={select ? "selected" : "notSelected"} onClick={Select}>
                            <button className={passevedValues.theme + "TitleButton"} onClick={openSkills} >Courses</button>
                        </div>
                    </div>
                    <div className="ExperinceContentDiv">
                        {Tools.map((prop) => {
                            return (
                                <>
                                    <div className={active ? passevedValues.theme + "OpenSkill" : passevedValues.theme + "CloseSkill"} key={prop.id}>
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
                                        <div className="CoursesIconDiv">
                                            <img className="courseImg" src={skill.image} alt="" />
                                            <h3 className={passevedValues.theme + "CourseName"}>{skill.title}</h3>
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
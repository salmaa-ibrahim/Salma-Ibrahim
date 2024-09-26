import "./about.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'
import certificateLight from "../../../public/images/certificate-black.svg"
import certificateDark from "../../../public/images/certificate-white.svg"
import educationLight from "../../../public/images/graduation-B.svg"
import educationDark from "../../../public/images/education-white.svg"
function About() {
    const passevedValues = useContext(ThemeContext)
    const About = [
        {
            id: 1,
            ImageLight: certificateLight,
            ImageDark: certificateDark,
            lable: "Experience",
            textOne: "1+ Years",
            textTwo: "Frontend Development"
        },
        {
            id: 2,
            ImageLight: educationLight,
            ImageDark: educationDark,
            lable: "Education",
            textOne: "Graduated from Al-Safwe Hight Institute for engineering, Computer Department",
            textTwo: "Degree: Excellent"
        }
    ]
    return (
        <>
            <div id="about" className={passevedValues.theme + "About"}>
                <div className="aboutTop">
                    <label>Get To Know More</label>
                    <h1 className={passevedValues.theme + "AboutLable"}>About Me</h1>
                </div>

                <div className="aboutCenter">
                    {About.map((prop) => {
                        return (
                            <>
                                <div className="AboutCenterDiv">
                                    <img src={prop.ImageLight} alt="" className={passevedValues.theme + "Moon"} />
                                    <img src={prop.ImageDark} alt="" className={passevedValues.theme + "Sun"} />
                                    <h3 className={passevedValues.theme + "AboutCenterDivLable"}>{prop.lable}</h3>
                                    <span className={passevedValues.theme + "AboutCenterTxt"}>{prop.textOne}</span>
                                    <span className={passevedValues.theme + "AboutCenterTxt"}>{prop.textTwo}</span>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className={passevedValues.theme + "AboutBottom"}>
                    <p>Hi, I am a front-end developer working on projects using React,
                    JavaScript, HTML, CSS and Bootstrap. Currently I am a freelance
                    r and looking for a front-end job in a reputable organization
                    that welcomes innovative ideas to enhance my front-end knowledge.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
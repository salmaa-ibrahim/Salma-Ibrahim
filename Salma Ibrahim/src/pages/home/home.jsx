import "./home.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'
import About from "../about/about";
import Experiance from "../experiance/experiance";
import Projects from "../projects/projects";
import Contact from "../contact/contact";
// import PersonalImage from "/images/personal imagee.png"
import PersonalImage from "../../../public/images/contactPage/personal.jpg"
import linkedInLogoDarkMood from "/images/linkedinDarkMood.svg"
import linkedInLogoLightMood from "/images/linkedinLightMood.svg"
import GithubLogoLightMood from "/images/GithubLightMood.svg"
import GithubLogoDarkMood from "/images/GithubDarkMood.svg"


function Home() {
    const passevedValues = useContext(ThemeContext)
    return (
        <>
            <div id="home" className={passevedValues.theme + "Home"}>
                <div id="personalImage">
                    <img src={PersonalImage} alt="" />
                </div>
                <div className="homeContent">
                    <h3 className={passevedValues.theme + "HomeTxt"}>Hello I am</h3>
                    <h1 className={passevedValues.theme + "Name"}>Salma Ibrahim</h1>
                    <h3 className={passevedValues.theme + "HomeTxt"} id="position">Frontend Developer (React.js)</h3>
                    <div className="homeButtons">
                        <a className={passevedValues.theme + "CvBtn"} href="https://drive.google.com/file/d/1uh_NZE34ipmZLE2ob52D7MF8_Q4hbUFM/view?usp=drive_link">Look at my CV</a>
                        <a className={passevedValues.theme + "ContactBtn"} href="#contact">Contact me</a>
                    </div>
                    <div className="HomeIcons">
                        <a href="https://www.linkedin.com/in/salma-ibrahim-07116a287/">
                            <img className={passevedValues.theme + "Moon"}src={linkedInLogoLightMood} alt="" />
                            <img className={passevedValues.theme + "Sun"}src={linkedInLogoDarkMood} alt="" />
                        </a>
                        <a href="https://github.com/salmaa-ibrahim">
                        <img className={passevedValues.theme + "Moon"}src={GithubLogoLightMood} alt="" />
                        <img className={passevedValues.theme + "Sun"}src={GithubLogoDarkMood} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <About></About>
            <Experiance></Experiance>
            <Projects></Projects>
            <Contact></Contact>
        </>
    )
}

export default Home
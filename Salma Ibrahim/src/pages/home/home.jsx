import "./home.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'
import About from "../about/about";
import Experiance from "../experiance/experiance";
import Projects from "../projects/projects";
import Contact from "../contact/contact";

function Home(){
    const passevedValues = useContext(ThemeContext)
    return(
        <>
        <div id="home" className={passevedValues.theme + "Home"}>
            <h1>home</h1>
        </div>
        <About></About>
        <Experiance></Experiance>
        <Projects></Projects>
        <Contact></Contact>
        </>
    )
}

export default Home
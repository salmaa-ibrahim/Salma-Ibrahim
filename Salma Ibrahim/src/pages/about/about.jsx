import "./about.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'

function About(){
    const passevedValues = useContext(ThemeContext)

    return(
        <>
        <div id="about" className={passevedValues.theme + "About"}>
            <h1>about</h1>
        </div>
        </>
    )
}

export default About
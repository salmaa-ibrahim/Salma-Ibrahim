import "./contact.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'
function Contact(){
    const passevedValues = useContext(ThemeContext)

    return(
        <>
        <div id="contact" className={passevedValues.theme + "Contact"}>
            <h1>contact</h1>
        </div>
        </>
    )
}

export default Contact
import "./experiance.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'
function Experiance(){
    const passevedValues = useContext(ThemeContext)

    return(
        <>
        <div id="experiance" className={passevedValues.theme + "Experiance"}>
            <h1>experiance</h1>
        </div>
        </>
    )
}

export default Experiance
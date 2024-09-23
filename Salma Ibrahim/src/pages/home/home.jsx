import "./home.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'

function Home(){
    const passevedValues = useContext(ThemeContext)

    return(
        <>
        <div id="home" className={passevedValues.them + "Home"}>
            <h1>home</h1>
        </div>
        </>
    )
}

export default Home
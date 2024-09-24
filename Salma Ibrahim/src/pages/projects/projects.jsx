import "./projects.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'
function Projects(){
    const passevedValues = useContext(ThemeContext)

    return(
        <>
        <div id="projects" className={passevedValues.theme + "Projects"}>
            <h1>projects</h1>
        </div>
        </>
    )
}

export default Projects
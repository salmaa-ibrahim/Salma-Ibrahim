import "./projects.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'
import ProjectOneImg from "../../../public/images/ProjectPage/Github Search.png"
import ReactImg from "../../../public/images/ProjectPage/react.svg"
import ViteImg from "../../../public/images/ProjectPage/vitejs.svg"
function Projects() {
    const passevedValues = useContext(ThemeContext)
    const Projects = [
        {
            image: ProjectOneImg,
            name: "project one",
            Img1:ReactImg ,
            Img2:ViteImg ,
        },
        {
            image:ProjectOneImg ,
            name: "project Two",
            Img1:ReactImg ,
            Img2:ViteImg ,
        },
    ]
    return (
        <>
            <div id="projects" className={passevedValues.theme + "Projects"}>
                <div className="Top">
                    <label>Browse My Recent</label>
                    <h1 className={passevedValues.theme + "AboutLable"}>Projects</h1>
                </div>
            </div>
            <div className="projectsContent">
                {Projects.map((project) => {
                    return (
                        <>
                            <div className="projectDiv">
                                <div className="projectImg">
                                    <img src={project.image} alt="#" />
                                </div>
                                <div className="projectTools">
                                    <p className={passevedValues.theme + "ProjectName"}>{project.name}</p>
                                    <div className="Tools">
                                        <img src={project.Img1} alt="#" /> <img src={project.Img2} alt="#" />
                                    </div>
                                </div>
                                <div className="ProjectDisplay">
                                    <button className={passevedValues.theme + "ProjectDisplayBtn"}> Github</button>
                                    <button className={passevedValues.theme + "ProjectDisplayBtn"}> Live Demo</button>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Projects
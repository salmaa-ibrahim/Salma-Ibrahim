import "./projects.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'
import ProjectOneImg from "../../../public/images/ProjectPage/Github.png"
import ReactImg from "../../../public/images/ProjectPage/react.svg"
import ViteImg from "../../../public/images/ProjectPage/vitejs.svg"
function Projects() {
    const passevedValues = useContext(ThemeContext)
    const Projects = [
        {
            image: ProjectOneImg,
            name: "User Search Github",
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
            <div className="projectsContent">
                {Projects.map((project) => {
                    return (
                        <>
                            <div className="projectDiv">
                                <div className="projectImg">
                                    <img src={project.image} alt="#" />
                                </div>
                                <div className="projectTools">
                                    <h2 className={passevedValues.theme + "ProjectName"}>{project.name}</h2>
                                    <div className="Tools">
                                        <img src={project.Img1} alt="#" /> 
                                        <img src={project.Img2} alt="#" />
                                        <img src={project.Img1} alt="#" /> 
                                        <img src={project.Img2} alt="#" />
                                    </div>
                                </div>
                                <div className="ProjectDisplay">
                                    <a href="#" className={passevedValues.theme + "ProjectDisplayBtn"}> Github</a>
                                    <a href="#" className={passevedValues.theme + "ProjectDisplayBtn"}> Live Demo</a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            </div>
        </>
    )
}

export default Projects
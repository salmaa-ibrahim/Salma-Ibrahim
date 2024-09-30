import "./projects.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'
import JopListing from "../../../public/images/ProjectPage/JopListing.png"
import TimeTracking from "../../../public/images/ProjectPage/TimeTracking.png"
import EcommerceWebsite from "../../../public/images/ProjectPage/EcommerceWebsite.png"
import ProfileCard from "../../../public/images/ProjectPage/ProfileCard.png"
import SocialLink from "../../../public/images/ProjectPage/SocialLink.png"
import ApplicationForm from "../../../public/images/ProjectPage/ApplicationForm.png"
import GithubUser from "../../../public/images/ProjectPage/GithubUser.png"
import HTMLImg from "../../../public/images/ProjectPage/html.svg"
import CSSImg from "../../../public/images/ProjectPage/css.svg"
import ReactImg from "../../../public/images/ProjectPage/react.svg"
import ViteImg from "../../../public/images/ProjectPage/vitejs.svg"
function Projects() {
    const passevedValues = useContext(ThemeContext)
    const Projects = [
        {
            id : 0 ,
            image: TimeTracking,
            name: "Time Tracking ",
            Img1:HTMLImg ,
            Img2:CSSImg ,
            Img3:ReactImg ,
            Img4:ViteImg ,
            github: "https://github.com/salmaa-ibrahim/Time-Tracking",
            liveDemo:"https://time-tracking-ashy-nine.vercel.app/"
        },
        {
            id : 1 ,
            image: EcommerceWebsite,
            name: "Ecommerce Website",
            Img1:HTMLImg ,
            Img2:CSSImg ,
            Img3:ReactImg ,
            Img4:ViteImg ,
            github: "https://github.com/salmaa-ibrahim/final-task",
            liveDemo:"https://final-task-azure.vercel.app/"
        },
        {
            id : 2 ,
            image: JopListing,
            name: "Jop Listing",
            Img1:HTMLImg ,
            Img2:CSSImg ,
            Img3:ReactImg ,
            Img4:ViteImg ,
            github: "https://github.com/salmaa-ibrahim/Job-Listings",
            liveDemo:"https://job-listings-eta-nine.vercel.app/"
        },
        {
            id : 3 ,
            image: ApplicationForm,
            name: "Application Form",
            Img1:HTMLImg ,
            Img2:CSSImg ,
            Img3:ReactImg ,
            Img4:ViteImg ,
            github: "https://github.com/salmaa-ibrahim/Form",
            liveDemo:"https://application-form-ecru.vercel.app/"
        },
        {
            id : 4 ,
            image: SocialLink,
            name: "SocialLink",
            Img1:HTMLImg ,
            Img2:CSSImg ,
            Img3:ReactImg ,
            Img4:ViteImg ,
            github: "https://github.com/salmaa-ibrahim/Social-Links",
            liveDemo:"https://social-links-gray.vercel.app/"
        },
        {
            id : 5 ,
            image: GithubUser,
            name: "User Search Github",
            Img1:HTMLImg ,
            Img2:CSSImg ,
            Img3:ReactImg ,
            Img4:ViteImg ,
            github: "https://github.com/salmaa-ibrahim/Search-Github",
            liveDemo:"https://github-user-search-tau-nine.vercel.app/"
        },
        {
            id : 6 ,
            image: ProfileCard,
            name: "Profile Card",
            Img1:HTMLImg ,
            Img2:CSSImg ,
            Img3:ReactImg ,
            Img4:ViteImg ,
            github: "https://github.com/salmaa-ibrahim/Profile-Card",
            liveDemo:"https://profile-card-one-chi.vercel.app/"
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
                            <div className="projectDiv" key={project.id}>
                                <div className="projectImg">
                                    <img src={project.image} alt="#" />
                                </div>
                                <div className="projectTools">
                                    <h2 className={passevedValues.theme + "ProjectName"}>{project.name}</h2>
                                    <div className="Tools">
                                        <img src={project.Img3} alt="#" /> 
                                        <img src={project.Img4} alt="#" />
                                        <img src={project.Img1} alt="#" /> 
                                        <img src={project.Img2} alt="#" />
                                    </div>
                                </div>
                                <div className="ProjectDisplay">
                                    <a href={project.github} className={passevedValues.theme + "ProjectDisplayBtn"}> Github</a>
                                    <a href={project.liveDemo} className={passevedValues.theme + "ProjectDisplayBtn"}> Live Demo</a>
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
import "./contact.css"
import { useContext } from "react";
import { ThemeContext } from '../../App'
import EmailBlack from "../../../public/images/contactPage/email-black.svg"
import EmailWhite from "../../../public/images/contactPage/email-white.svg"
import WhatsAppWhite from "../../../public/images/contactPage/whatsapp-white.svg"
import WhatsAppBlack from "../../../public/images/contactPage/whatsapp-black.svg"
import PhoneWhite from "../../../public/images/contactPage/call-white.svg"
import PhoneBlack from "../../../public/images/contactPage/call-black.svg"
import VercelWhite from "../../../public/images/contactPage/vercel-white.svg"
import VercelBlack from "../../../public/images/contactPage/vercel-black.svg"
import GithubWhite from "../../../public/images/contactPage/github-white.svg"
import GithubBlack from "../../../public/images/contactPage/github-black.svg"
import LinkedInWhite from "../../../public/images/contactPage/linkedin-white.svg"
import LinkedInBlack from "../../../public/images/contactPage/linkedin-black.svg"

function Contact() {
    const passevedValues = useContext(ThemeContext)
    const ContactInfo = [
        {
        Image: EmailWhite,
        Image2: EmailBlack,
        lable: "salmaa.ibrahimm19@gmail.com",
        link: "mailto:salmaa.ibrahimm19@gmail.com"
    },
    {
        Image: WhatsAppWhite,
        Image2: WhatsAppBlack,
        lable: "WhatsApp-Salma Ibrahim",
        link: "https://wa.link/vylygp"
    },
    {
        Image: PhoneWhite,
        Image2: PhoneBlack,
        lable: "01203527773",
        link: "tel:01203527773"
    },
    {
        Image: LinkedInWhite,
        Image2: LinkedInBlack,
        lable: "linkedin.com/in/salma-ibrahim",
        link: "https://www.linkedin.com/in/salma-ibrahim-07116a287"
    },
    {
        Image: GithubWhite,
        Image2: GithubBlack,
        lable: "salmaa-ibrahim",
        link: "https://github.com/salmaa-ibrahim"
    },
    {
        Image: VercelWhite,
        Image2: VercelBlack,
        lable: "salma-ibrahims-projects",
        link: "https://vercel.com/salma-ibrahims-projects"
    },
    
]

    return (
        <>
            <div id="contact" className={passevedValues.theme + "Contact"}>
                <div className="Top">
                    <label>Get in Touch</label>
                    <h1 className={passevedValues.theme + "AboutLable"}>Contact Me</h1>
                </div>
                <div className="contactContent">
                    {ContactInfo.map((item) => {
                        return (
                            <>
                                <div className="contactLink">
                                    <img src={item.Image} alt="" className={passevedValues.theme +"Sun"} />
                                    <img src={item.Image2} alt="" className={passevedValues.theme +"Moon"} />
                                    <a className={passevedValues.theme +"ContactLink"}  href={item.link}>{item.lable}</a>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Contact
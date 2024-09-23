import "./menu.css"
import BlackMenuIcon from "/images/menu.svg"
import WhiteMenuIcon from "/images/whiteMenu.svg"
import exitImage from "../../../public/images/close.svg"
import { useContext, useState } from "react";
import { ThemeContext } from '../../App'
import { Link } from "react-router-dom";
function Menu() {
    const passevedValues = useContext(ThemeContext)
    const [active, setActive] = useState(true);
    function closeItem() {
        setActive(true);
    }
    function openItem() {
        setActive(false);
    }
    return (
            <div className={passevedValues.theme + "Menu"}>
                <div className={passevedValues.theme + "MenuIcon"}>
                    <img
                        src={BlackMenuIcon}
                        alt="#"
                        className={passevedValues.theme + "White"}
                        onClick={openItem}
                    />
                    <img
                        src={WhiteMenuIcon}
                        alt="#"
                        className={passevedValues.theme + "Black"}
                        onClick={openItem}
                    />
                </div>
                <div className={active ? passevedValues.theme + "Close" : passevedValues.theme + "Open"}>
                <div className= "MenuStructure">
                    <div className="CloseMenu">
                        <img src={exitImage} alt="#" onClick={closeItem} />
                    </div>
                    <div className={passevedValues.theme + "MenuContent"}>
                        <Link to="/" onClick={closeItem}>Home</Link>
                        <Link to="/about" onClick={closeItem}>About</Link>
                        <Link to="/experiance" onClick={closeItem}>Experince</Link>
                        <Link to="/projects" onClick={closeItem}>Projects</Link>
                        <Link to="/contact" onClick={closeItem}>Contact</Link>
                    </div>
                    </div>
                </div>
            </div>

    )
}

export default Menu

{/* <div className={theme + "menuIcon"}>
                        <img
                            src={BlackMenuIcon}
                            alt="#"
                            className={theme + "White"}
                        />
                        <img
                            src={WhiteMenuIcon}
                            alt="#"
                            className={theme + "Black"}
                        />
                    </div> */}
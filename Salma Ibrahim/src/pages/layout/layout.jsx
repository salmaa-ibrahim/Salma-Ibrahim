import "./layout.css";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import DrakMoodIcon from "/images/dark.svg";
import LightMoodIcon from "/images/light.svg";
import Menu from "../menu/menu";
// import { Link } from "react-router-dom";
function Layout() {
    //theme
    const theme = useContext(ThemeContext);
    function onHandleChange(event) {
        let newValue;
        if (event.target.checked == false) {
            newValue = "light";
        } else {
            newValue = "dark";
        }
        theme.setTheme(newValue);
    }
    const passevedValues = useContext(ThemeContext);
    return (
        <>
            <nav className={passevedValues.theme + "Navbar"}>
                
                <div className={passevedValues.theme + "Logo"}>
                    <a href="/">Salma Ibrahim</a>
                </div>

                <div className={passevedValues.theme + "Icons"}>
                    <ul>
                        <li className={passevedValues.theme + "List"}>
                            <a href="/">Home</a>
                        </li>
                        <li className={passevedValues.theme + "List"}>
                            <a href="#about">About</a>
                        </li>
                        <li className={passevedValues.theme + "List"}>
                            <a href="#experiance">Experiance</a>
                        </li>
                        <li className={passevedValues.theme + "List"}>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className={passevedValues.theme + "List"}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                    <Menu></Menu>

                    <div className={passevedValues.theme + "Theme"} onChange={onHandleChange}>
                        <input
                            className="check"
                            type="checkbox"
                            onChange={onHandleChange}
                        />
                        <img
                            src={DrakMoodIcon}
                            alt="#"
                            className={passevedValues.theme + "Moon"}
                        />
                        <img
                            src={LightMoodIcon}
                            alt="#"
                            className={passevedValues.theme + "Sun"}
                        />
                    </div>
                </div>
            </nav>

            <Outlet />

        </>
    );
}

export default Layout;

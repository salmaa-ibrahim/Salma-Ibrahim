import "./layout.css";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import MoonIcon from "/images/moon.svg";
import SunIcon from "/images/sun.svg";
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
                    <a href="#">Salma Ibrahim</a>
                </div>

                <div className={passevedValues.theme + "Icons"}>
                    <ul>
                        <li className={passevedValues.theme + "List"}>
                            <a href="#home">Home</a>
                        </li>
                        <li className={passevedValues.theme + "List"}>
                            <a href="#about">About</a>
                        </li>
                        <li className={passevedValues.theme + "List"}>
                            <a href="#experince">Experince</a>
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
                            src={SunIcon}
                            alt="#"
                            className={passevedValues.theme + "Moon"}
                        />
                        <img
                            src={MoonIcon}
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

import { useState } from "react";
import Navigation from "./Navigation";
import HamburgerMenu from "../assets/hamburger-button.svg";
import CloseIcon from "../assets/close-icon.png";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    function handleToggle() {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <nav>
            <nav className="burger">
                <img
                    src={require("../assets/logo-nav2.png")}
                    alt="Little Lemon logo"
                    className="nav-image"
                ></img>

                <button className="burger-icon" onClick={handleToggle}>
                    <img src={navbarOpen ? CloseIcon : HamburgerMenu} alt="Navigation Bar"/>
                </button>
            </nav>
            <Navigation device="desktop" />
            {navbarOpen ? <Navigation device="mobile" /> : ""}
        </nav>
    );
}
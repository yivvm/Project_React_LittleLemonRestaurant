import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <menu>
                <li className="img-footer">
                    <img
                        src={require("../assets/logo-footer.png")}
                        alt="Little Lemon logo"
                    >
                    </img>
                </li>
                <li className="contact">
                    <h1 className="footer-header">Navigation</h1>
                    <ul className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <a
                            href={require("../assets/menu.webp")}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Menu
                        </a>
                        <Link to="/reservations">Reservations</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/login">Login</Link>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Contact</h1>
                    <ul className="footer-links">
                        <li>100 Lemon St.</li>
                        <li>Chicago, IL 60640</li>
                        <br></br>
                        <li>(629)-100-6400</li>
                        <br></br>
                        <a
                            href="mailto: info@littlelemon.com"
                            target="-blank"
                            rel="noreferrer"
                        >
                            info@littlelemon.com
                        </a>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Connect</h1>
                    <ul className="footer-links">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                    </ul>
                </li>
            </menu>
        </footer>
    );
}

/* for menu page:
            <a
                href={require("../assets/menu.png")}
                target="_blank"
                rel="noreferrer"
            >
                Menu
            </a>

            //

            <Link to="/menu">Menu</Link>
*/
import HeroImage from "../../assets/food-reserve.jpg";
import { Link } from "react-router-dom";

export default function BookingConfirmation() {
    return (
        <header className="confirmation-header">
            <img
                className="confirmation-image"
                src={HeroImage}
                alt="Little Lemon Ingredients"
            >
            </img>
            <section className="reserve-header-text">
                <h1>Your Reservation is Confirmed!</h1>
                <h4>You will get a confirmation text and/or email.</h4>
                <h4>Thank you for dining with us!</h4>
            </section>

            <section className="redirect-buttons">
                <Link className="redirect-button" to="/menu">
                    Browse Menu
                </Link>
                <Link className="redirect-button" to="/order">
                    Order Online
                </Link>
                <Link className="redirect-button" to="/">
                    Home Page
                </Link>
            </section>
        </header>
    );
}

/* for menu button:
                <a
                    className="redirect-button"
                    href={require("../../assets/menu.png")}
                    target="_blank"
                    rel="noreferrer"
                >
                    Browse Menu
                </a>
*/
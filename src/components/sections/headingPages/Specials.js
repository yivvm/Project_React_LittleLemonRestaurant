import SpecialsItems from "./SpecialsItems";
import Falafel from "../../../assets/falafel.jpg";
import Bruschetta from "../../../assets/Bruschetta.jpg";
import GrilledFish from "../../../assets/grilledfish.jpg";
import SpecialsDetails from "./SpecialsDetails";
import { Link } from "react-router-dom";

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <Link className="action-button" to="/menu">Online Menu</Link>
            </article>

            <section className="specials-cards">
                <SpecialsDetails
                    image={Falafel}
                    name="Felafel"
                    price="$13.99"
                    description="A type of deep-fried and crispy Middle Eastern balls made from soaked and ground dried chickpeas, garlic, fresh herbs, and seasonings."
                />
                <SpecialsDetails
                    image={Bruschetta}
                    name="Bruschetta"
                    price="$15.99"
                    description="Our Bruschetta is made from grilled bread, topped with tomato, prosciutto, and cheese, and seasoned with salt and olive oil."
                />
                <SpecialsDetails
                    image={GrilledFish}
                    name="Grilled Fish"
                    price="$21.99"
                    description="The pan seared cod is marinated with shallots, fennel and lemon mixture, then grilled to perfection and topped with a bright tomato herb relish."
                />

                <br></br>
            </section>

           

        </section>
    );
}

/* for Online Menu button:
                <a
                    className="action-button"
                    href={require("../../../assets/menu.jpg")}
                    target="_blank"
                    rel="noreferrer"
                >
                    Online Menu
                </a>
    
    for section of Carourel:  ????????????????
            <section classNmae="specials-carousel">
                <SpecialsItems />
            </section>
    ---ref-----
    https://github.com/sumit-sharma-02/little-lemon-restaurant/blob/main/src/components/sections/headingPages/SpecialsCarousel.js
*/
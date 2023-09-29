import HeroImage from "../../../assets/food-about.jpg";

export default function Heading() {
    return (
        <header className="reserve-table">
            <img
                className="header-reserve"
                image={HeroImage}
                alt="Little Lemon Ingredients"
            >
            </img>
            <section className="reserve-header-text">
                <h1>Reserve a table</h1>
            </section>
        </header>
    );
}
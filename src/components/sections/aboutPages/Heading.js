import HeroImage from "../../../assets/food-about.jpg";

export default function Heading () {
    return (
        <header className="reserve-table">
            <img
                className="header-reserve"
                src={HeroImage}
                alt="Little Lemon Ingredients"
            >
            </img>
            <br></br>
            <div className="reserve-header-text">
                <h1>About us</h1>
                <p className="about-subtext">
                    Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
                </p>
            </div>
            
        </header>
    );
}

/*
<p className="about-subtext">
?? change className ==> be the same with Homepage-About, font size and color
*/
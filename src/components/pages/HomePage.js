import Heading from "../sections/headingPages/Heading";
import Specials from "../sections/headingPages/Specials";
// import Testimonials from "../sections/headingPages/Testimonials";
import About from "../sections/headingPages/About";

export default function HomePage() {
    return (
        <>
            <Heading />
            <main>
                <Specials />
                <About />
            </main>
        </>
    );
}

/* for adding Testimonials:
                <Testimonials />
*/
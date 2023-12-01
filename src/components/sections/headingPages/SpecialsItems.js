import React from "react";
import { Carousel } from "react-responsive-carousel";
import Falafel from "../../../assets/falafel.jpg";
import Bruschetta from "../../../assets/Bruschetta.jpg";
import GrilledFish from "../../../assets/grilledfish.jpg";
import SpecialsDetails from "./SpecialsDetails";

export default function CarourelPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialsDetails
                image={Falafel}
                name="Felafel"
                price="$13.99"
                description="Middle Eastern balls, chickpeas, herbs."
            />
            <SpecialsDetails
                image={Bruschetta}
                name="Bruschetta"
                price="$15.99"
                description="Bread, tomato, cheese."
            />
            <SpecialsDetails
                image={GrilledFish}
                name="Grilled Fish"
                price="$21.99"
                description="Cod, lemon, tomato."
            />
        </Carousel>
    )
}
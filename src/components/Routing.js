import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Reservation from "./pages/Booking";
import Order from "./pages/Order";
import Login from "./pages/Login";
import BookingConfirmation from "./pages/BookingConfirmation";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/confirmation" element={< BookingConfirmation/>} />
        </Routes>
    );
}
import "./Home.css"
import Slider from "../../Components/Slider/Slider";
import RealEstates from "../../Components/RealEstates/RealEstates";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        document.title = "Home"
    } , [])

    return (
        <main>
            <Slider></Slider>
            <RealEstates></RealEstates>
        </main>
    );
};

export default Home;
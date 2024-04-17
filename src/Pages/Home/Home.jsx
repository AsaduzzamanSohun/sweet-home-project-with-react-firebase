import "./Home.css"
import Slider from "../../Components/Slider/Slider";
import RealEstates from "../../Components/RealEstates/RealEstates";
import { useEffect } from "react";
import BottomBanner from "../../Components/BottomBanner/BottomBanner";

const Home = () => {

    useEffect(() => {
        document.title = "Home"
    } , [])

    return (
        <main>
            <Slider></Slider>
            <RealEstates></RealEstates>
            <BottomBanner></BottomBanner>
        </main>
    );
};

export default Home;
import { useEffect } from "react";

const AboutUs = () => {

    useEffect(() => {
        document.title = "About"
    } , [])

    return (
        <div>
            <h1>This is About Section</h1>
        </div>
    );
};

export default AboutUs;
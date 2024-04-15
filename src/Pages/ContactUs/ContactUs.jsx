import { useEffect } from "react";

const ContactUs = () => {

    useEffect(() => {
        document.title = "Contact"
    } , [])

    return (
        <div>
            <h1>This is Contact Us section</h1>
        </div>
    );
};

export default ContactUs;
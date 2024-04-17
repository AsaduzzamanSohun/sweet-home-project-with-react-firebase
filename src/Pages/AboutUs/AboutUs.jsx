import { useEffect } from "react";

const AboutUs = () => {

    useEffect(() => {
        document.title = "About Us"
    }, [])

    return (
        <div className=" max-w-[1440px] mx-auto min-h-[calc(100vh-80px-px)] bg-base-200 ">
            <img
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="w-full h-[700px]"
                src="https://i.ibb.co/xSmgXp5/banner-3.jpg"
                alt="pic" />
            <div className="card-body">
                <div className="container mx-auto py-8">
                    <h1 className="text-3xl font-bold text-center mb-6">Welcome to SweetHome</h1>
                    <p
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        className="text-lg text-gray-800 leading-relaxed">
                        At SweetHome, we understand that finding the perfect home is more than just a transaction - it s about
                        finding your sanctuary, your place of comfort, and your haven to create lasting memories. With our
                        commitment to excellence and personalized service, we strive to make your home buying or renting journey as
                        seamless and enjoyable as possible.
                    </p>
                    <h1 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h1>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Our mission at SweetHome is to empower individuals and families in their quest for the ideal living space.
                        We aim to provide comprehensive real estate solutions tailored to our clients needs, whether they are
                        searching for a cozy apartment, a spacious single-family home, or a modern townhouse. By leveraging our
                        expertise and industry knowledge, we strive to simplify the home buying or renting process, guiding our
                        clients every step of the way.
                    </p>
                    <h1 className="text-2xl font-semibold mt-8 mb-4">Why Choose SweetHome?</h1>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        <span className="font-semibold">1. Diverse Property Portfolio:</span> Whether you are looking for a quaint
                        single-family home nestled in a serene neighborhood, a stylish apartment with urban amenities, or a
                        contemporary townhouse offering the perfect blend of comfort and convenience, we have a wide range of
                        properties to suit your preferences.
                        <br />
                        <span className="font-semibold">2. Personalized Service:</span> At SweetHome, we prioritize the needs and
                        preferences of our clients. Our team of experienced real estate professionals takes the time to
                        understand your requirements and works tirelessly to find the property that aligns with your lifestyle and
                        budget.
                        <br />
                        <span className="font-semibold">3. Transparency and Integrity:</span> We believe in transparent communication
                        and ethical business practices. From property listings to negotiations and closing deals, we ensure utmost
                        transparency and integrity at every stage of the process, fostering trust and long-lasting relationships
                        with our clients.
                        <br />
                        <span className="font-semibold">4. Expert Guidance:</span> Navigating the real estate market can be daunting,
                        especially for first-time buyers or renters. That s where our expertise comes in. Our knowledgeable team
                        provides valuable insights, guidance, and support to help you make informed decisions and achieve your
                        real estate goals.
                        <br />
                        <span className="font-semibold">5. Seamless Experience:</span> We understand that the home buying or renting
                        process can be overwhelming. That s why we strive to make it as smooth and stress-free as possible. From
                        scheduling property viewings to handling paperwork and beyond, we handle all the details, allowing you to
                        focus on finding your dream home.
                    </p>
                    <h1 className="text-2xl font-semibold mt-8 mb-4">Get Started with SweetHome</h1>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Ready to embark on your journey to finding the perfect home? Whether you re searching for a cozy apartment,
                        a spacious single-family home, or a modern townhouse, SweetHome is here to help. Explore our diverse
                        property listings, connect with our friendly team, and let us guide you towards your ideal living space.
                        Your dream home awaits!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
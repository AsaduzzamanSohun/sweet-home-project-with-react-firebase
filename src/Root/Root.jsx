import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="font-alegreya relative">
            <div className="bg-transparent snap-both fixed z-50 min-w-full">
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
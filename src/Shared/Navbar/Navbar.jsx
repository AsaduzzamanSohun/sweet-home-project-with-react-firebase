import { Link, NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
import logo1 from '../../assets/icons/dwelling-spot-3D.gif'

const Navbar = () => {

    const link = <>

        <li>
            <NavLink className={({ isActive }) => isActive ? 'border-b-2 btn-gradient-1 color-bricks' : "bg-transparent color-brown"} to="/">Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'border-b-2 rounded-none btn-gradient-1 color-bricks' : "bg-transparent color-brown"} to="/update-profile">Update Profile</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'border-b-2 btn-gradient-1 color-bricks' : "bg-transparent color-brown"} to="/about">About Us</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'border-b-2 btn-gradient-1 color-bricks' : "bg-transparent color-brown"} to="/contact">Contact Us</NavLink>
        </li>

    </>


    return (
        <nav className="max-w-[1440px] mx-auto">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-norican">
                            {
                                link
                            }
                        </ul>
                    </div>

                    <img className="w-16" src={logo1} alt="" />

                    <span className=''>
                        <Link className="text-4xl font-bold bg-gradient-to-r from-[#393345] via-[#F14B00] to-[#AC6635] text-transparent bg-clip-text animate-gradient h-full font-leckerli-one hover:opacity-75 transition-all duration-500">
                            DwellingSpot
                        </Link>
                    </span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-8  text-xl font-norican">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn px-8 bg-[#AC6635] color-light hover:opacity-75 hover:rounded-3xl hover:bg-[#AC6635] transition-all duration-500 text-xl">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
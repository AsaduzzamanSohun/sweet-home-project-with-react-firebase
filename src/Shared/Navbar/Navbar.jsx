import { Link, NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
import logo1 from '../../assets/icons/dwelling-spot-3D.gif'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const navLogout = () => {
        logout()
            .then(() => {

            })
            .catch();

    }

    const link = <>

        <li>
            <NavLink id="link" className={({ isActive }) => isActive ? 'border-b-2 btn-gradient-1 color-blue-light  px-2' : "bg-transparent color-sky px-2"} to="/">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'border-b-2 rounded-none btn-gradient-1 color-blue-light px-2' : "bg-transparent color-sky px-2"} to="/update-profile">
                Update Profile
            </NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'border-b-2 btn-gradient-1 color-blue-light px-2' : "bg-transparent color-sky px-2"} to="/about">
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'border-b-2 btn-gradient-1 color-blue-light  px-2' : "bg-transparent color-sky px-2"} to="/contact">
                Contact Us
            </NavLink>
        </li>
        <li className="md:hidden">

            {
                user ?
                    <Link to="/" onClick={navLogout} className="btn px-8 bg-[#5356FF] color-light hover:opacity-75 hover:rounded-3xl hover:bg-[#1D24CA] transition-all duration-500 text-xl">
                        Logout
                    </Link>
                    :
                    <Link to="/login" className="btn px-8 bg-[#5356FF] color-light hover:opacity-75 hover:rounded-3xl hover:bg-[#1D24CA] transition-all duration-500 text-xl">
                        Login
                    </Link>
            }


        </li>
    </>



  



    return (
        <nav className="bg-white max-w-[1440px] mx-auto">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100  w-52 text-xl font-norican ">
                            {
                                link
                            }
                        </ul>
                    </div>


                    <div className="flex items-center">
                        <img className="w-12 md:w-16" src={logo1} alt="" />

                        <p className=''>
                            <Link className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#00d5ff] via-[#00A9FF] to-[#1D24CA] text-transparent bg-clip-text animate-gradient h-full font-leckerli-one hover:opacity-75 transition-all duration-500">
                                SweetHome
                            </Link>
                        </p>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-8  text-xl font-bold">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end hidden md:inline-flex gap-2">
                    <img alt="" className="w-12 rounded-full" src={user ?
                        "https://i.ibb.co/RYZpjHj/pic.jpg"
                        : "https://i.ibb.co/9WfLbkH/user.png"} />

                    {

                        user ?
                            <Link to="/">
                                <button onClick={navLogout} className="btn rounded-none px-8 bg-[#68E1FD] text-white font-semibold text-lg hover:bg-transparent hover:text-[#68E1FD] hover:border-[#68E1FD] duration-700 hover:rounded-3xl transition-all">
                                    Logout
                                </button>
                            </Link>
                            :

                            <Link to="/login">
                                <button className="btn rounded-none px-8 bg-[#68E1FD] text-white font-semibold text-lg hover:bg-transparent hover:text-[#68E1FD] hover:border-[#68E1FD] duration-700 hover:rounded-3xl transition-all">
                                    Login Now!
                                </button>
                            </Link>



                    }



                </div>
            </div>
        </nav>
    );
};

export default Navbar;
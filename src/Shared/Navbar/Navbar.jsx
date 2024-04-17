import { Link, NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
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

    console.log("nav photo: ", user);

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
            {
                user && <NavLink className={({ isActive }) => isActive ? 'border-b-2 btn-gradient-1 color-blue-light px-2' : "bg-transparent color-sky px-2"} to="/about">
                    About Us
                </NavLink>
            }
        </li>

        <li className="md:hidden">

            {
                user ?
                    <Link to="/" onClick={navLogout} className="btn rounded-none px-8 bg-[#68E1FD] text-white font-semibold text-lg hover:bg-transparent hover:text-[#68E1FD] hover:border-[#68E1FD] duration-700 hover:rounded-3xl transition-all">
                        Logout
                    </Link>
                    :
                    <Link to="/login" className="btn rounded-none px-8 bg-[#68E1FD] text-white font-semibold text-lg hover:bg-transparent hover:text-[#68E1FD] hover:border-[#68E1FD] duration-700 hover:rounded-3xl transition-all">
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
                        <img
                            className="w-12 md:w-16"
                            src="https://i.ibb.co/KVxYBw4/dwelling-spot-3-D.gif"
                            alt="" />

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
                    <img alt="image broken. Please reload"
                        className={user ?
                            "w-12 h-12 rounded-full hover:cursor-pointer ring-green-500 ring-4"
                            :
                            "w-12 h-12 rounded-full"}
                        title={user ? user.displayName : ""}
                        src={user ? user.photoURL : "https://i.ibb.co/9WfLbkH/user.png"} />

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
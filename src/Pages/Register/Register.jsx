import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-80px-241px)] flex items-center">

            <div className="grid grid-cols-2 lg:mx-44 shadow-2xl shadow-sky-200">
                <div className="flex items-center">
                    <img className="w-[640px]" src="https://i.ibb.co/PmXBhFJ/sign-up.png" alt="" />
                </div>

                <div className="w-full border-l-2 border-[#68E1FD]">

                    <div className="h-40 text-white font-semibold bg-[#68E1FD] flex justify-center items-center">
                        <h1 className="md:text-4xl">Hello, Welcome!</h1>
                    </div>

                    <form className="flex flex-col rounded-xl md:px-12 py-16">

                        <label className="text-lg px-2 py-1 mt-2" htmlFor="name">Name</label>
                        <input className="bg-slate-100 px-6 py-3 placeholder-slate-500 border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" type="text" name="name" id="name" placeholder="Enter your name" />

                        <label className="text-lg px-2 py-1 mt-2" htmlFor="email">Email</label>
                        <input className="bg-slate-100 px-6 py-3 placeholder-slate-500 border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" type="email" name="email" id="email" placeholder="Enter your email" />

                        <label className="text-lg px-2 py-1 mt-2" htmlFor="email">Photo URL</label>
                        <input className="bg-slate-100 px-6 py-3 placeholder-slate-500 border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" type="text" name="photo" id="phot0" placeholder="Enter photo url" />

                        <label className="text-lg px-2 py-1 mt-2" htmlFor="email">Password</label>
                        <input className="bg-slate-100 px-6 py-3 placeholder-slate-500 border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" type="password" name="password" id="password" placeholder="Enter your password" />

                        <div>
                            <button className="btn rounded-none bg-[#68E1FD] text-white font-semibold text-lg hover:bg-transparent hover:text-[#68E1FD]
                            hover:border-[#68E1FD] duration-700 w-full mt-4">Register</button>
                        </div>

                        <div className="text-center text-sm mt-4">
                            <p>Already have an account? <Link className="font-bold text-[#68E1FD]" to="/login">Login</Link> now!</p>
                        </div>
                        
                    </form>



                </div>

            </div>



        </div>
    );
};

export default Register;
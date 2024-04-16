import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";






const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        e.target.reset();
        console.log(email, password);


        loginUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })

    }

    return (
        <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-80px-241px)] flex items-center">

            <div className="grid grid-cols-2 lg:mx-44 shadow-2xl shadow-sky-200">
                <div>
                    <img className="w-[640px]" src="https://i.ibb.co/VB8zhbD/login.png" alt="" />
                </div>

                <div className="w-full border-l-2 border-[#68E1FD]">

                    <div className="h-40 text-white font-semibold bg-[#68E1FD] flex justify-center items-center">
                        <h1 className="md:text-4xl">Hello, Welcome</h1>
                    </div>

                    <div>
                        <form onSubmit={handleLogin} className="flex flex-col rounded-xl md:px-12 py-16 relative">

                            <label className="text-lg px-2 py-1" htmlFor="email">Email</label>
                            <input className="bg-slate-100 px-6 py-3 placeholder-slate-500 border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" type="email" name="email" id="email" placeholder="Enter Address" />


                            <label className="text-lg px-2 py-1 mt-2" htmlFor="email">Password</label>
                            <input className="bg-slate-100 px-6 py-3 placeholder-slate-500 border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" type={showPassword ? 'password' : 'text'} name="password" id="password" placeholder="Enter your password" />

                            <div onClick={() => setShowPassword(!showPassword)} className="absolute right-16 bottom-[227px]">
                                {
                                    showPassword ? <FaEye className="text-[#2ed9ff]"></FaEye> : <FaEyeSlash className="text-[#28d8ff]"></FaEyeSlash>
                                }
                            </div>

                            <div>
                                <div>
                                    <button className="btn rounded-none bg-[#68E1FD] text-white font-semibold text-lg hover:bg-transparent hover:text-[#68E1FD] hover:border-[#68E1FD] duration-700 w-full mt-4">Login</button>
                                </div>

                                <div className="flex text-3xl justify-center gap-4 mt-4">
                                    <Link to=""><FcGoogle className="hover:scale-110 duration-700" /></Link>
                                    <Link to=""><FaGithub className="hover:scale-110 duration-700" /></Link>
                                </div>
                            </div>
                            <div className="text-center text-sm mt-4">
                                <p>Are you new here? <Link className="font-bold text-[#68E1FD]" to="/register">Register</Link> now!</p>
                            </div>

                        </form>
                    </div>


                    


                </div>

            </div>



        </div>
    );
};

export default Login;
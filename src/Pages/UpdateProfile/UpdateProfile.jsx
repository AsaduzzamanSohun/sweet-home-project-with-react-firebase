import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import auth from "../../Firebase/firebase.config";
import { updateProfile } from "firebase/auth";


const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true)

    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        document.title = "Update"
    }, [])


    const handleUpdateProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: displayName,
            email: email,
            photoURL: photoURL
        }).then(() => {
            setLoading(false)

        }).catch(error => {
            console.error('Error updating profile:', error.message);
        });
    };

    return (

        <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-80px-200px)]">

            <div className="grid md:grid-cols-2 gap-12 shadow-2xl shadow-sky-200">
                <div className="flex flex-col justify-center items-center gap-4">
                    <img className="w-[240px]" src={user.photoURL} alt="" />
                    <h1 className="text-2xl font-semibold">Name: {user.displayName}</h1>
                    <p className="text-lg font-medium">{user.email}</p>
                </div>

                <div className="w-full border-l-2 border-[#68E1FD]">

                    <div className="h-40 text-white font-semibold bg-[#68E1FD] flex justify-center items-center">
                        <h1 className="md:text-4xl">Edit Profile!</h1>
                    </div>

                    <div>
                        <form onSubmit={(e) => { e.preventDefault(); handleUpdateProfile(); }} className="flex flex-col rounded-xl px-4 md:px-12 py-16 relative">

                            <label className="text-lg px-2 py-1 mt-2" htmlFor="name">Name</label>
                            <input
                                className="bg-slate-100 px-6 py-3 placeholder-slate-500 border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                onChange={(e) => setDisplayName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                required
                            />

                            <label className="text-lg px-2 py-1 mt-2" htmlFor="email">Email</label>


                            <input
                                className="bg-slate-100 px-6 py-3 placeholder-slate-500 border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />

                            <label className="text-lg px-2 py-1 mt-2" htmlFor="photo">Photo URL</label>
                            <input
                                className="bg-slate-100 px-6 py-3 placeholder-slate-500 border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                onChange={(e) => setPhotoURL(e.target.value)}
                                type="text"
                                name="photo"
                                id="photo"
                                placeholder="Enter photo url"
                                required
                            />

                            <div>
                                <button
                                    className="btn rounded-none bg-[#68E1FD] text-white font-semibold text-lg hover:bg-transparent hover:text-[#68E1FD] hover:border-[#68E1FD] duration-700 w-full mt-4">
                                    Update Profile
                                </button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default UpdateProfile;
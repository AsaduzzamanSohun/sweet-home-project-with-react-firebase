import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const UpdateProfile = () => {
    
    const {user} = useContext(AuthContext);

    console.log(user);

    useEffect(() => {
        document.title = "Update"
    } , [])

    return (
        <div>
            <p>{user.displayName}</p>
            <h1>{user.email}</h1>
            <img src={user.photoURL} alt="" />
          
        </div>
    );
};

export default UpdateProfile;
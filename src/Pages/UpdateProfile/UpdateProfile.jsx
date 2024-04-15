import { useEffect } from "react";

const UpdateProfile = () => {

    useEffect(() => {
        document.title = "Update"
    } , [])

    return (
        <div>
            <h1>This Update Profile Section</h1>
        </div>
    );
};

export default UpdateProfile;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
const TestUpdate = () => {
    const {auth} = useContext(AuthContext)

    useEffect(() => {
        document.title = "Update"
    } , [])

    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleUpdateProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        }).then(() => {
            console.log('Profile updated successfully!');
            setSuccess('Profile updated successfully!');
        }).catch(error => {
            setError(error.message);
            console.error('Error updating profile:', error.message);
        });
    };


    return (
        <div>
            <h1>This Update Profile Section</h1>

            value={displayName}
            <img src={photoURL} alt="" />
            <h1>{}</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={(e) => {e.preventDefault(); handleUpdateProfile();}}>
                <label>
                    Display Name:
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Photo URL:
                    <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default TestUpdate;
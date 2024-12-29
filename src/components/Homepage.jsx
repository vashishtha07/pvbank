import React from 'react'
import { useAuth } from '../contexts/authContext'
import { doSignOut } from '../firebase/auth';
import { auth } from '../firebase/firebase';
import { Link, Navigate } from 'react-router-dom';

const Homepage = () => {
    const { userLoggedIn } = useAuth();
    const { currentUser } = useAuth()
    const handleLogout = async () => {
        try {
            await doSignOut(auth);
            console.log("User logged out successfully");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };
    if (!userLoggedIn) {
        return <Navigate to="/login" replace={true} />;
    }
    if (!userLoggedIn) {
        return <Navigate to="/login" replace={true} />;
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Welcome, {currentUser?.email}!</h1>
            <button
                onClick={handleLogout}
                className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300"
            >
                Logout
            </button>
        </div>
    )
}

export default Homepage
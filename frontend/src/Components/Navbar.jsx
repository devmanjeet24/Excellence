import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import API from '../api/Axios';
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {

    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const { handleSubmit } = useForm();

    const onSubmit = async () => {
        try {
            await API.post('/auth/logout');
            setUser(null);
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div
            className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-violet-800 flex items-center justify-between shadow-lg"
            style={{ padding: "16px 40px", margin: "0px" }}
        >

            {/* Logo */}
            <div>
                <h1 className="text-2xl font-bold text-white tracking-wide">
                    TODO App
                </h1>
            </div>

            {/* Search Bar */}
            {/* <div
                className="relative"
                style={{ width: "40%", margin: "0 20px" }}
            >
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <IoIosSearch size={20} />
                </span>

                <input
                    type="text"
                    placeholder="Search tasks..."
                    className="w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    style={{ padding: "8px 16px 8px 48px" }}
                />
            </div> */}

            {/* Logout Button */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <button
                        type="submit"
                        className="bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition duration-300 shadow-md"
                        style={{ padding: "8px 24px" }}
                    >
                        Logout
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Navbar;
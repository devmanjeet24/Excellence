import React, { useContext } from 'react'
import API from '../api/Axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { IoIosLock, IoIosMail } from "react-icons/io";

const Login = () => {

    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await API.post('/auth/login', data);
            setUser(res.data);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='relative min-h-screen flex items-center justify-center p-4'>

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('./Images/bg.png')" }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 opacity-60"></div>

            {/* Main White Box */}
            <div className="relative z-10 w-[70%] h-[85vh] bg-white rounded-2xl shadow-2xl flex overflow-hidden gap-[70px] p-[20px]">

                {/* Left Side Image */}
                <div className="w-1/2 flex items-center justify-center rounded-l-2xl"
                    style={{ padding: "73px 53px 0 0", margin: "20px 0 20px 12px" }}>
                    <img
                        src="./Images/Login.png"
                        alt="Login Visual"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Right Side Form */}
                <div className="w-1/2 flex items-center justify-center p-10">
                    <div className="w-full max-w-md">

                        <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{marginBottom : '40px'}}>
                            Login
                        </h1>

                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className='flex flex-col items-center gap-[26px]'>

                            {/* EMAIL INPUT */}
                            <div className="relative w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    <IoIosMail size={22} />
                                </span>

                                <input
                                    type="email"
                                    placeholder="Please enter your email"
                                    className="w-full border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 
                                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    style={{ padding: '15px 15px 15px 50px' }}
                                    {...register("email", {
                                        required: "email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email format",
                                        }
                                    })}
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* PASSWORD INPUT */}
                            <div className="relative w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    <IoIosLock size={22} />
                                </span>

                                <input
                                    type="password"
                                    placeholder="Please enter your password"
                                    className="w-full border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 
                                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    style={{ padding: '15px 15px 15px 50px' }}
                                    {...register("password", {
                                        required: "password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                    })}
                                />

                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button
                                type='submit'
                                className="w-full bg-purple-600 text-white py-3 rounded-xl 
                                font-semibold text-lg
                                hover:bg-purple-700 
                                transition duration-300 
                                shadow-md hover:shadow-lg"
                                style={{ padding: '15px' }}
                            >
                                Login
                            </button>

                            {/* Signup Redirect */}
                            <p className="text-center text-gray-800/80 text-sm mt-4">
                                Don't have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </p>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login;
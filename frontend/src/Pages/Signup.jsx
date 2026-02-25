import React, { useContext } from 'react'
import API from '../api/Axios';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import Navbar from '../Components/Navbar';
import { IoIosLock, IoIosMail, IoIosPerson } from "react-icons/io";

const Signup = () => {

    //  const [form, setForm] = useState({});
    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     const res = await API.post('/auth/signup', form);
    //     setUser(res.data);
    //     navigate('/dashboard');
    // }


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {

        try {
            const res = await API.post('/auth/signup', data);
            setUser(res.data);
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
        }

    }


    return (
        <>
            {/* <Navbar /> */}
            <div className='relative min-h-screen flex items-center justify-center p-4'>


                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('./Images/bg.png')" }}
                ></div>


                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 opacity-60"></div>


                <div className="relative z-10 w-[70%] h-[85vh] bg-white rounded-2xl shadow-2xl flex overflow-hidden gap-[70px] p-[20px]">


                    <div className="w-1/2  flex items-center justify-center rounded-l-2xl" style={{ padding: "73px 53px 0 0", margin: "20px 0 20px 12px" }}>
                        <img
                            src="./Images/signup.png"
                            alt="Side Visual"
                            className="w-full h-full object-contain"
                        />
                    </div>


                    <div className="w-1/2 flex items-center justify-center p-10">
                        <div className="w-full max-w-md">
                            <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{marginBottom : '40px'}}>Sign Up</h1>


                            <form action="" onSubmit={handleSubmit(onSubmit)} autoComplete="off" className='flex flex-col items-center gap-[26px]'>
                                <div className="relative w-full">


                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
                                        <IoIosPerson size={25} />
                                    </span>


                                    <input
                                        type="text"
                                        placeholder="Please enter your name"
                                        className="w-full border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 
               focus:outline-none focus:ring-2 focus:ring-purple-500 
               pl-12 pr-4 py-3"
                                        style={{ padding: '15px 15px 15px 50px' }}
                                        {...register("name", { required: "Name is required" })}
                                    />


                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.name.message}
                                        </p>
                                    )}

                                </div>

                                <div className="relative w-full">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                        <IoIosMail size={22} />
                                    </span>

                                    <input
                                        type="email"
                                        placeholder="Please enter your email"
                                        className="w-full border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 
                 focus:outline-none focus:ring-2 focus:ring-purple-500 
                 pl-[50px] pr-4 py-3"
                  style={{ padding: '15px 15px 15px 50px' }}
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                    />

                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div className="relative w-full">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                        <IoIosLock size={22} />
                                    </span>

                                    <input
                                        type="password"
                                        placeholder="Please enter your password"
                                        className="w-full border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 
                 focus:outline-none focus:ring-2 focus:ring-purple-500 
                 pl-[50px] pr-4 py-3"
                  style={{ padding: '15px 15px 15px 50px' }}
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Minimum 6 characters required"
                                            }
                                        })}
                                    />

                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 text-white py-3 rounded-xl 
               font-semibold text-lg
               hover:bg-purple-700 
               transition duration-300 
               shadow-md hover:shadow-lg"
               style={{padding : '15px'}}
                                >
                                    Submit
                                </button>


                                <p className="text-center text-gray/80 text-sm mt-4">
            Already have an account?{' '}
           <Link
    to="/login"
    className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
  >
    Sign In
  </Link>
          </p>

                            </form>


                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Signup;
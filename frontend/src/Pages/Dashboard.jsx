import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import API from "../api/Axios";
import TodoItem from "../Components/TodoItem";
import Navbar from "../Components/Navbar";
import {
    IoIosAdd,
    IoIosSearch,
    IoIosArrowBack,
    IoIosArrowForward,
} from "react-icons/io";

const Dashboard = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    const { register, watch } = useForm();
    const search = watch("search") || "";

    const fetchtodo = async () => {
        const res = await API.get(
            `/todos?search=${search}&page=${page}&limit=6`
        );

        setTodos(res.data.todos);
        setTotalPages(res.data.totalPages || 1);
    };

    useEffect(() => {
        setPage(1); // reset page when search changes
    }, [search]);

    useEffect(() => {
        fetchtodo();
    }, [page, search]);

    return (
        <>
            <Navbar />

            <div className="p-10 min-h-screen bg-gray-200" style={{ padding: '50px' }}>

                {/* Top Section */}
                <div className="flex items-center justify-between mb-10">

                    {/* Add Button */}
                    <button
                        onClick={() => navigate("/add")}
                        className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition shadow-md"
                        style={{ padding: '12px 24px 12px 24px' }}
                    >
                        <IoIosAdd size={22} />
                        Add Todo
                    </button>



                    <div
                        className="relative"
                        style={{ width: "40%", margin: "0 20px" }}
                    >
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
                            <IoIosSearch size={22} />
                        </span>

                        <input
                            {...register("search")}
                            placeholder="Search todos..."
                            className="w-full rounded-xl border border-gray-500 bg-gray-100 
               text-gray-800 font-semibold text-lg
               focus:outline-none focus:ring-2 focus:ring-purple-500 
               focus:border-purple-500 transition"
                            style={{ padding: "10px 18px 10px 50px" }}
                        />
                    </div>


                    <div></div>


                </div>

                {/* Todo Grid */}
                <div className="grid grid-cols-3 gap-6 min-h-[420px] " style={{marginTop : "40px"}}>
                    {todos.map((todo) => (
                        <TodoItem key={todo._id} todo={todo} refresh={fetchtodo} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-8 mt-10">

                    <button
                        disabled={page === 1}
                        onClick={() => setPage((prev) => prev - 1)}
                        className="text-2xl disabled:opacity-30"
                    >
                        <IoIosArrowBack />
                    </button>

                    <span className="font-semibold">
                        {page} / {totalPages}
                    </span>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage((prev) => prev + 1)}
                        className="text-2xl disabled:opacity-30"
                    >
                        <IoIosArrowForward />
                    </button>

                </div>
            </div>
        </>
    );
};

export default Dashboard;
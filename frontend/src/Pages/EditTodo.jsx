import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/Axios";
import Navbar from "../Components/Navbar";
import { useForm } from "react-hook-form";

export default function EditTodo() {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        // Fetch todo and populate form
        API.get("/todos").then((res) => {
            const todo = res.data.todos.find((t) => t._id === id);
            if (todo) {
                setValue("title", todo.title);
                setValue("description", todo.description);
            }
        });
    }, [id, setValue]);

    const onSubmit = async (data) => {
        try {
            await API.put(`/todos/${id}`, data);
            navigate("/dashboard");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center min-h-screen bg-gray-200" style={{ padding: "20px" }}>

           
                <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
                    <button
                        className="px-4 py-2 rounded-lg bg-gray-200 border border-gray-300 font-semibold text-gray-700 hover:bg-gray-300 transition duration-200"
                        onClick={() => navigate("/dashboard")}
                        style={{
                            padding: "8px 16px",
                        }}
                    >
                        Back
                    </button>
                </div>

                <div
                    className="bg-white rounded-2xl shadow-xl w-full max-w-md"
                    style={{ padding: "30px", margin: "20px" }}
                >
                    <h1
                        style={{
                            fontSize: "28px",
                            fontWeight: "700",
                            color: "#4C1D95",
                            marginBottom: "25px",
                            textAlign: "center",
                        }}
                    >
                        Edit Todo
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        <input
                            type="text"
                            placeholder="Title"
                            {...register("title", { required: "Title is required" })}
                            style={{
                                padding: "12px 15px",
                                borderRadius: "12px",
                                border: "1px solid #9CA3AF",
                            }}
                        />
                        {errors.title && <p style={{ color: "red", fontSize: "14px" }}>{errors.title.message}</p>}

                        <textarea
                            placeholder="Description"
                            {...register("description", { required: "Description is required" })}
                            style={{
                                padding: "12px 15px",
                                borderRadius: "12px",
                                border: "1px solid #9CA3AF",
                                minHeight: "100px",
                                resize: "none",
                            }}
                        />
                        {errors.description && <p style={{ color: "red", fontSize: "14px" }}>{errors.description.message}</p>}

                        <button
                            type="submit"
                            style={{
                                padding: "12px 0",
                                borderRadius: "12px",
                                backgroundColor: "#7C3AED",
                                color: "white",
                                fontWeight: "600",
                                fontSize: "16px",
                                marginTop: "10px",
                                cursor: "pointer",
                            }}
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import API from "../api/Axios";
import Navbar from "../Components/Navbar";

export default function AddTodo() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post("/todos", data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div
        className="flex justify-center items-center min-h-screen bg-gray-200"
        style={{ padding: "20px" }}
      >

        
        <div
          className="bg-white rounded-2xl shadow-xl"
          style={{ width: "500px", padding: "30px", margin: "20px" }}
        >
          {/* Heading */}
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#4C1D95",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            Add Todo
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

            {/* Title */}
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
            {errors.title && (
              <p style={{ color: "red", fontSize: "14px" }}>{errors.title.message}</p>
            )}

            {/* Description */}
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
            {errors.description && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.description.message}
              </p>
            )}

            {/* Submit Button */}
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
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
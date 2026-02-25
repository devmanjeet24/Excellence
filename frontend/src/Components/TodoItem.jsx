import API from "../api/Axios";
import { useNavigate } from "react-router-dom";
import {
  IoIosTrash,
  IoIosCreate,
  IoIosCheckmarkCircle,
} from "react-icons/io";

export default function TodoItem({ todo, refresh }) {
  const navigate = useNavigate();

  const deleteTodo = async () => {
    await API.delete(`/todos/${todo._id}`);
    refresh();
  };

  const toggleComplete = async () => {
    await API.put(`/todos/${todo._id}`, {
      isCompleted: !todo.isCompleted,
    });
    refresh();
  };

  return (

    <>

  

<div
  className="bg-white rounded-2xl shadow-md flex flex-col justify-between hover:shadow-xl transition"
  style={{
    padding: "20px",
    margin: "12px",
    maxHeight: "310px", 

  }}
>
  {/* Heading */}
  <h3
    style={{
      fontSize: "30px",
      fontWeight: "700",
      color: "#4C1D95", 
      textDecoration: todo.isCompleted ? "line-through" : "none",
      marginBottom: "12px",
    }}
  >
    {todo.title}
  </h3>


  <p
    style={{
      backgroundColor: "#F3E8FF", 
      padding: "15px",
      borderRadius: "10px",
      fontSize: "20px",
      color: "#374151",
      height: "100%",
      // flexGrow: 1, 
    }}
  >
    {todo.description}
  </p>


  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      marginTop: "15px",
      fontSize: "22px",
    }}
  >
    <IoIosCheckmarkCircle
      onClick={toggleComplete}
      style={{ cursor: "pointer", color: "green" }}
      size={35}
    />

    <IoIosCreate
      onClick={() => navigate(`/edit/${todo._id}`)}
      style={{ cursor: "pointer", color: "#2563EB" }}
      size={35}
    />

    <IoIosTrash
      onClick={deleteTodo}
      style={{ cursor: "pointer", color: "red" }}
      size={35}
    />
  </div>
</div>

</>
  );
}
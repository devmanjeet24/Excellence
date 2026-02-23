import API from "../api/Axios";
import { useNavigate } from "react-router-dom";

export default function TodoItem({ todo, refresh }) {
  const navigate = useNavigate();

  const deleteTodo = async () => {
    await API.delete(`/todos/${todo._id}`);
    refresh();
  };

  const toggleComplete = async () => {
    await API.put(`/todos/${todo._id}`, {
      isCompleted: !todo.isCompleted
    });
    refresh();
  };

  return (
    <div className="itemtodo">
      <h3 style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        {todo.title}
      </h3>
      <p>{todo.description}</p>

      <div className="btnitem">
      <button className="submit btnit" onClick={toggleComplete}>Toggle</button>
      <button className="submit btnit" onClick={() => navigate(`/edit/${todo._id}`)}>Edit</button>
      <button className="submit btnit" onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}
import { useState } from "react";
import API from "../api/Axios";
import { useNavigate } from "react-router-dom";

export default function AddTodo() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("/todos", form);
        navigate("/dashboard");
    };

    return (

        <div className='conatiner'>

            <div className="box">

                <h1>Add Todo</h1>

                <form onSubmit={handleSubmit}>
                    <div className='input'>
                    <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
                    </div>

                    <div className='input'>
                    <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
                    </div>
                    <button className="submit">Add</button>
                </form>

            </div>

        </div>
    );
}
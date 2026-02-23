import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from '../api/Axios';

const EditTodo = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({});


    useEffect(() => {
        API.get("/todos").then(res => {
            const todo = res.data.todos.find(t => t._id === id);
            setForm(todo);
        });
    }, [id]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.put(`/todos/${id}`, form);
        navigate("/dashboard");
    };

    return (

        <div className='conatiner'>

            <div className="box">

                <h1>Edit Todo</h1>

                <form onSubmit={handleSubmit}>
                    <div className='input'>
                        <input value={form.title || ""} onChange={e => setForm({ ...form, title: e.target.value })} />
                    </div>

                    <div className='input'>
                        <input value={form.description || ""} onChange={e => setForm({ ...form, description: e.target.value })} />
                    </div>
                    <button className='submit'>Update</button>
                </form>

            </div>
        </div>
    )
}

export default EditTodo;
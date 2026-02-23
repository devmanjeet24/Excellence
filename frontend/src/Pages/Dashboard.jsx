import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../api/Axios';
import TodoItem from '../Components/TodoItem';

const Dashboard = () => {

    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const navigate = useNavigate();


    const fetchtodo = async () => {

        const res = await API.get(`/todos?search=${search}&page=${page}`);
        setTodos(res.data.todos);
    }

    useEffect(() => {
        fetchtodo();
    }, [page, search]);

    return (
        <>

            <div className='conatiner'>

                <div className="box">

                    {/* <h1>Dashboard</h1> */}

                    <div className='tododashboard'>
                        <button onClick={() => navigate("/add")} className='submit dashboardbtn'> <span> + </span>Add Todo</button>
                        <input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />

                        <div className='todoshere'>

                        {todos.map(todo => (
                            <TodoItem key={todo._id} todo={todo} refresh={fetchtodo} />
                        ))}

                        </div>

                    </div>

                    <hr />

                    <div className='pagination'>
                        <button className='submit pagin' onClick={() => setPage(page - 1)}>Prev</button>
                        <button className='submit pagin' onClick={() => setPage(page + 1)}>Next</button>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Dashboard;
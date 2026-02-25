import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Dashboard from './Pages/Dashboard';
import AddTodo from './Pages/AddTodo';
import EditTodo from './Pages/EditTodo';


function App() {
  const { user } = useContext(AuthContext);

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />



          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />

          <Route
            path="/add"
            element={user ? <AddTodo /> : <Navigate to="/login" />}
          />

          <Route
            path="/edit/:id"
            element={user ? <EditTodo /> : <Navigate to="/login" />}
          />


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

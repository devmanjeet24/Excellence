import React, { useContext, useState } from 'react'
import API from '../api/Axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const Login = () => {

const [form, setform] = useState({});
 const {setUser} = useContext(AuthContext);
 const navigate = useNavigate();

    const handleSubmit = async(e) => {

        e.preventDefault();

        const res = await API.post('/auth/login', form);
        setUser(res.data);

        navigate('/dashboard');

    }

  return (
    <>

            <div className='conatiner'>

                <div className="box">

                    <h1>Signup</h1>

                    <form action="" onSubmit={handleSubmit}>
                       

                        <div className='input'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Please enter your email' onChange={e => setform({...form, email:e.target.value})}/>
                        </div>

                        <div className='input'>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='Please enter your password***' onChange={e => setform({...form, password:e.target.value})}/>
                        </div>

                        <button type='submit' className='submit'>Login</button>

                    </form>

                </div>

            </div>

        </>
  )
}

export default Login;
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
export const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  const handelSubmit = async (e) => {
    // setLoading(true);
    e.preventDefault()
    // console.log(e.target[0].value)
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
    } catch (err) {
      setErr(true);
    }
  }
  return (
    <div className='formContainer'>
        <div className="formWrapper">
          <span className="logo">Dungeon Chat</span>
          <span className="title">Login</span>
          <form onSubmit={handelSubmit}>
            
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button>Sign In</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p>You don't have an account? <Link to= "/Register">Register</Link></p>
        </div>
    </div>
  ) 
}

export default Login;

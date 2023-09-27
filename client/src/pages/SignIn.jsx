import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"

const SignIn = () => {


  const [formData ,setFormData] = useState({});
  const [loading ,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.id]:e.target.value});
  }
  console.log(formData);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData),
      })
  
      const data = await res.json();
      setLoading(false);
      if(data.success===false){
        setError(true);
        return;
      }
      
      navigate('/')
    } catch (error) {
      setLoading(false);
      setError(true);
    }
    
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>SignIn</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-4'>

        <input type='text' placeholder='email' id='email' className='rounded-lg bg-slate-100 p-3' onChange={handleChange} />
        <input type='password' placeholder='password' id='password' className='rounded-lg bg-slate-100 p-3' onChange={handleChange} />
        <button disabled={loading} className='uppercase bg-slate-700 text-white hover:opacity-95 disabled:opacity-80 p-3 rounded-lg'>{loading?"LOADING...":"sign In"}</button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to='/sign-up'>
        <span className='text-blue-500'>Sign Up</span>
        </Link>
      </div>

      <p className='text-red-700 mt-5'>{error && "something went wrong"}</p>
    </div>

  )
}

export default SignIn
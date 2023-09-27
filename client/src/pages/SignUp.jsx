import React from 'react'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>SignUp</h1>
      <form className=' flex flex-col gap-4'>
        <input type='text' placeholder='username' id='username' className='rounded-lg bg-slate-100 p-3'  />
        <input type='text' placeholder='email' id='email' className='rounded-lg bg-slate-100 p-3'  />
        <input type='password' placeholder='password' id='password' className='rounded-lg bg-slate-100 p-3'  />
        <button  className='uppercase bg-slate-700 text-white hover:opacity-95 disabled:opacity-80 p-3 rounded-lg'>Sign up</button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>already have an account?</p>
        <span className='text-blue-500'>Sign In</span>
      </div>
    </div>

  )
}

export default SignUp
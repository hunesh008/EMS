import React, { useState } from 'react';

const Login = () => {

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");


const submitHandler=(e)=>{
  e.preventDefault();
  console.log(email)
  console.log(password)
  setPassword("")
  setEmail("")
}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form className='flex flex-col items-center justify-center' onSubmit={submitHandler}>
          <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            className=' text-white outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder-gray-400 mb-4'
            type='email' 
            placeholder='Enter your email'
          />
          <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            className=' text-white outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder-gray-400 mb-4'
            type='password' 
            placeholder='Enter your password'
          />
          <button 
            className='mt-7 text-white bg-emerald-600 hover:bg-emerald-700 text-lg py-2 px-8 w-full rounded-full'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

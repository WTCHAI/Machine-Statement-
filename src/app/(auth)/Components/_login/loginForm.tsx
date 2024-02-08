import React from 'react';

type Props = {};

export function LoginForm({}: Props) {
  return (
    <div className="flex flex-col h-full w-full  justify-center items-center center bg-gray-100">
      <div className="flex flex-col justify-center items-center center   rounded-lg bg-slate-400 ">
        <div className=" text-white ">
          Login logo
        </div>
        <div className="flex flex-col justify-start text-white ">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="p-2 border border-white rounded"
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="p-2 border border-white rounded"
            placeholder="Enter your password"
          />
          <button className="mt-4 bg-white text-blue-500 p-2 rounded cursor-pointer">
            Login
          </button>
        </div>
        <p className="text-white mt-4 text-center">
            Don't have an account? <a href="#">Sign up</a>
        </p>        
      </div>


    </div>
  );
}

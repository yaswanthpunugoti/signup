import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome(){
  const nav = useNavigate();
  return (
    <div className="p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center mt-8 space-y-6">
          
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-extrabold text-gray-900">Welcome to PopX</h1>
        <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="mt-6 space-y-3">
          <button onClick={()=>nav('/signup')} className="w-full py-3 rounded-xl bg-popxPurple text-white font-semibold">Create Account</button>
          <button onClick={()=>nav('/login')} className="w-full py-3 rounded-xl bg-[#E9D8FF] text-gray-800 font-semibold">Already Registered? Login</button>
        </div>
      </div>
    </div>
  )
}

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const nav = useNavigate();
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  return (
    <div className="p-6">
      <h2 className="text-2xl font-extrabold text-gray-900">Signin to your PopX account</h2>
      <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="mt-6 space-y-4">
        <label className="block text-xs text-popxPurple">Email Address</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 rounded-lg border border-gray-200 bg-white" placeholder="Enter email address" />

        <label className="block text-xs text-popxPurple">Password</label>
        <input value={pass} onChange={e=>setPass(e.target.value)} type="password" className="w-full p-3 rounded-lg border border-gray-200 bg-white" placeholder="Enter password" />

        <button onClick={()=>nav('/account')} className="w-full py-3 rounded-xl bg-popxPurple text-white font-semibold">Login</button>
      </div>
    </div>
  )
}

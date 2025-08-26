import React from "react";
import { Routes, Route } from "react-router-dom";
import MobileShell from "./components/MobileShell";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";

export default function App(){
  return (
    <div className="min-h-screen bg-[#f7f8f9] flex items-center justify-center p-6">
      <MobileShell>
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/account' element={<Account/>} />
        </Routes>
      </MobileShell>
    </div>
  )
}

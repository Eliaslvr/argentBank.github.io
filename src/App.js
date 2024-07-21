import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './designs/css/main.css'
import Index from './designs/pages/Index/Index';
import SignIn from './designs/pages/SignIn/SignIn';
import User from './designs/pages/User/User';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;

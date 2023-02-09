import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navigation/Navbar";
import Home from "./Components/Home_Component/Home";
import Register from "./Components/register_component/Register";
import ErrorPage from "./Components/Error_Component/Error";
import Login from "./Components/Login_Component/Login";
import Doners from "./Components/Doners_Component/Doners"


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Navbar/>
        <Routes>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/doners' element={<Doners/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import {  Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";



const Navigation = () => {
  return (
    <Routes>
    <Route path='/' element ={<HomePage />}/>
    </Routes>
  )
}

export default Navigation;
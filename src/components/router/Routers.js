import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./../pages/Home"
import Login from "./../pages/Login"
import Register from "./../pages/Register"
import SearchResultList from "./../pages/SearchResultList"
import Tour from "./../pages/Tour"
import TourDetails from "./../pages/TourDetails"






const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/tours" element={<Tour/>} />
        <Route path="/tours/:id" element={<TourDetails/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/tour/search" element={<SearchResultList/>} />
    </Routes>
  )
}

export default Routers
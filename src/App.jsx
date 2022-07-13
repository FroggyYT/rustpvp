import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "./app.scss"

import Landing from "./Landing.jsx"
import Login from "./Login.jsx"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </>
    )
}

export default App

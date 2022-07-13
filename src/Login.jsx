import React, { useState, useEffect } from 'react'
import Logo from "./Logo.jsx"

import { Link } from "react-router-dom"

const Landing = ({ toggleTheLogin }) => {
    const formSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
            <div id="landing-modal">
                <br />
                <form action="" onSubmit={formSubmit}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" name="email" id="email" />
                    <br />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" id="password" />
                    <br />
                    <br />
                    <center><input type="submit" value="Login" /></center>
                </form>
                <br />
                <div id="landing-modal-text">
                    Need to make an account? <Link to="/">Signup</Link>
                </div>
            </div>
        </>
    )
}

export default Landing

import React, { useState, useEffect } from 'react'
import Logo from "./Logo.jsx"
import TextLogo from "./TextLogo.jsx"

import { Link } from "react-router-dom"

const Landing = ({ toggleTheLogin }) => {
    const formSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
            <div id="landing-header">
                <TextLogo></TextLogo>
            </div>

            <div id="landing-splash">
                <span>Play Rust Tournaments for Real Money!</span>
            </div>

            <div id="landing-modal">
                <center id="landing-modal-header">Signup now to get started</center>
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
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <br />
                    <input type="password" name="confirmpassword" id="confirmpassword" />
                    <br />
                    <br />
                    <center><input type="submit" value="Signup" /></center>
                </form>
                <br />
                <div id="landing-modal-text">
                    Already have an account? <Link to="/login">Login now</Link>
                </div>
            </div>
        </>
    )
}

export default Landing

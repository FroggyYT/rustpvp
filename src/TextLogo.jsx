import React, { useState, useEffect } from 'react'
import Logo from "./Logo.jsx"

const Landing = () => {
    return (
        <>
            <div className="logo-text">
                <span>RustPVP</span>
                <Logo></Logo>
            </div>
        </>
    )
}

export default Landing

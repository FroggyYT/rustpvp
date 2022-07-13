import React from "react"
import ReactDOM from "react-dom"
import $ from "simple-jsx-react"
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx"

ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>,
    $("#root")
)
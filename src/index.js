import React from "react"
import  ReactDOM  from "react-dom"
import logo from './logo.svg';


const page = (
    <div>
        <img src={logo} width="60px"/>
        <h1>Fun Facts about React.</h1>
        <ul>
            <li>Was originally released in 2013.</li>
            <li>Was originally created by Jordan Walke.</li>
            <li>Has well over 100k stars on Github.</li>
            <li>Is maintained by Facebook.</li>
            <li>Powers thousands of enterprise apps, including mobile apps.</li>
        </ul>
    </div>
)

ReactDOM.render(page ,document.getElementById("root"))
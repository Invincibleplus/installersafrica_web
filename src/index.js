import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import App from "./App"
import './css/responsive.css';
import './css/bootstrap.min.css.map';
import './css/bootstrap.min.css';
import './css/boxicons.min.css';
import "./css/styles.css"
import "./css/style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
)


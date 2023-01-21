import React from "react"
import ReactDOM from "react-dom/client"
import { Helmet } from "react-helmet"
import App from "./App"
import "./index.css"

import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Lan Wang</title>
    </Helmet>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
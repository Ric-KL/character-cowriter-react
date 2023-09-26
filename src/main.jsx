import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './appbitd.jsx'
import Home from "./home.jsx"
import './index.css'
import { MemoryRouter, Route, Routes } from "react-router-dom"
import Error from "./404.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bitd" element={<App />} />
        <Route path="/404" element={<Error/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {MovieContextProvider} from "./context/MovieContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MovieContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </MovieContextProvider>
  </React.StrictMode>,
)

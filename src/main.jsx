import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import HomePage from './Pages/HomePage.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HomePage></HomePage>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.jsx'
import Tickets from './routes/Tickets.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "tickets",
    element: <Tickets/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

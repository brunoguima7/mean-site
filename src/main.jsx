import React from "react" 
import ReactDOM from "react-dom/client" 
import Home from "./pages/Home.jsx" 
import Tickets from "./pages/Tickets.jsx"
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
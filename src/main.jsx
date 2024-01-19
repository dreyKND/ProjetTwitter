import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Timeline from './Timeline.jsx';
import Profil from './Profil.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Outlet/></App>,
    children:[
      {
        path:'/',
        element:<Timeline/>
      },{
        path:'/profil',
        element:<Profil/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}  />
  </React.StrictMode>,
)

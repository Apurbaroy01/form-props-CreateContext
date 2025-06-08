import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Login from '../Login';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Grandpa from './Components/Grangpa/Grandpa';


const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage></HomePage>,
    children: [
      {
        path: "/grandpa",
        element:<Grandpa></Grandpa> ,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        
      },
    ],
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

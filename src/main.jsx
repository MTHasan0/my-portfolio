import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home/Home.jsx';
import About from './Page/About/About.jsx';
import Service from './Page/Service/Service.jsx';
import Testimonial from './Page/Testimonial/Testimonial.jsx';
import Contact from './Page/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/service',
        element: <Service></Service>,
      },
      {
        path: '/testimonial',
        element: <Testimonial></Testimonial>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/work',
        element: <Contact></Contact>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=' '><RouterProvider router={router} /></div>
  </StrictMode>,
)


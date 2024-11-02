import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './routes/Root.jsx'
import ErrorPage from './Error-Page.jsx';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
//import SignIn,{contactAction} from './components/SignIn.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
       {path:'/',element:<Home/>},
       {path:'/about',element:<AboutUs/>},
      // {path:'/signin',element:<SignIn/>,action:contactAction},
       {path:'/react-productinquiryform',element:<Product/>}
             ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

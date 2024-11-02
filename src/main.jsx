import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from'./App.jsx'
//import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
    path: '/react-productinquiryform/',
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:
    [  
       {path:'/react-productinquiryform/home',element:<Home/>},
      
       {path:'/react-productinquiryform/about',element:<AboutUs/>},

       {path:'/react-productinquiryform/product',element:<Product/>},

        // {path:'/signin',element:<SignIn/>,action:contactAction}
      ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode >
  <RouterProvider router={router} />
  
  
  </StrictMode>,
)

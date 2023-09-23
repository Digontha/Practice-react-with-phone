import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Home/Home";
import PhoneDetails from "../Components/Pages/Phones/PhoneDetails";
import CardDetails from "../Components/Pages/Phones/CardDetails";
import Login from "../Components/Login/Login";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://openapi.programming-hero.com/api/phones?search=a')
            
        },
        {
            path:'/:slug',
            element:<PhoneDetails></PhoneDetails>,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/phone/${params.slug}`)
            
        },
        {
            path:'/favorites',
            element:<CardDetails></CardDetails>,
           
        },
        {
            path:'/login',
            element:<Login></Login>,
           
        }
      ]
    },
  ]);

  export default router
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main> </Main>,
      children: [
       {
         path:'/',
         element:<Home> </Home>
       },
       
       {
        path:'login',
        element:<Login> </Login>
      },

       {
        path:'signup',
        element:<SignUp> </SignUp>
      }

      ]
      
    },
   
    {
      path:'*',
      element: <h4 className='error-page-style'>404</h4>
    }
  ]);


  export default router;
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main> </Main>,
      children: [
       {
         path:'/',
         element:<Home> </Home>
       },
      ]
      
    },
    {
      path:'*',
      element: <h4 className='error-page-style'>404</h4>
    }
  ]);


  export default router;
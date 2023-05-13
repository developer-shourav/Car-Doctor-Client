import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main> </Main>,
      
    },
    {
      path:'*',
      element: <h4 className='error-page-style'>404</h4>
    }
  ]);


  export default router;
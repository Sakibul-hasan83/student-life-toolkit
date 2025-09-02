import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Elements/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<h1>"404 – Sorry, we couldn’t find this page."</h1>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  },
]);

export default router;
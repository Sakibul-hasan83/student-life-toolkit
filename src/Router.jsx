import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Elements/Home";
import Login from "./AuthenticaitonElements.jsx/Login";
import Register from "./AuthenticaitonElements.jsx/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<h1>"404 – Sorry, we couldn’t find this page."</h1>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
    ]
  },
]);

export default router;
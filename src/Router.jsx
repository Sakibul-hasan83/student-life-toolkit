import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Elements/Home";
import Login from "./AuthenticaitonElements.jsx/Login";
import Register from "./AuthenticaitonElements.jsx/Register";
import ClassScheduleTracker from "./ClassScheduleTracker/ClassScheduleTracker";
import BudgetTracker from "./BudgetTracker/BudgetTracker";

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
        {
            path:"/classscheduletracker",
            element:<ClassScheduleTracker></ClassScheduleTracker>
        },
        {
            path:"/budgetracker",
            element:<BudgetTracker></BudgetTracker>
        },
   
    ]
  },
]);

export default router;
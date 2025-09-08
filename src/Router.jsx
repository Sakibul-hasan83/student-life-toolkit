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
import PrecticeQuestions from "./PrecticeQuestions/PrecticeQuestions";

import MotivationalSystem from "./MotivationalSystem/MotivationalSystem";
import StudyTime from "./StudyTime/StudyTime";
import StudyPlanne from "./StudyPlanner/StudyPlanne";
import Dashboard from "./BudgetTracker/Dashboard";
import Transactions from "./BudgetTracker/Transactions";
import Budgets from "./BudgetTracker/Budgets";
import Savings from "./BudgetTracker/Savings";


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
        {
            path:"/precticequestion",
            element:<PrecticeQuestions></PrecticeQuestions>
        },

        {
            path:"/motivation",
            element:<MotivationalSystem></MotivationalSystem>
        },
        {
            path:"/studytime",
            element:<StudyTime></StudyTime>
        },
        {
            path:"/studyplanne",
            element: <StudyPlanne></StudyPlanne>
        },
        {
            path:"/dashboard",
            element: <Dashboard></Dashboard>
        },
        {
            path:"/transactions",
            element: <Transactions></Transactions>
        },
        {
            path:"/budget",
            element: <Budgets></Budgets>
        },
        {
            path:"/savings",
            element: <Savings></Savings>
        },
    ]
  },
]);

export default router;
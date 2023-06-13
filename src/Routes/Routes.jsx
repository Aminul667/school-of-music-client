import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ManageUsers from "../pages/ManageUsers/ManageUsers";
import AdminRoutes from "./AdminRoutes";
import Instructors from "../pages/Instructors/Instructors";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"instructor",
        element: <Instructors></Instructors>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'manageusers',
        element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
      }
    ],
  },
]);

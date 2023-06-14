import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ManageUsers from "../pages/ManageUsers/ManageUsers";
import AdminRoutes from "./AdminRoutes";
import Instructors from "../pages/Instructors/Instructors";
import AddClass from "../pages/AddClass/AddClass";
import InstructorRoutes from "./InstructorRoutes";
import MyClasses from "../pages/MyClasses/MyClasses";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructor",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "manageusers",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoutes>
            <AddClass></AddClass>
          </InstructorRoutes>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoutes>
            <MyClasses></MyClasses>
          </InstructorRoutes>
        ),
      },
    ],
  },
]);

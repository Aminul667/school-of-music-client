import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
const Main = () => {
    return (
        <div className="mx-5 mt-2">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
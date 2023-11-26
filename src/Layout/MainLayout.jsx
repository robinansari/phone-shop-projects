import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="mt-20">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;
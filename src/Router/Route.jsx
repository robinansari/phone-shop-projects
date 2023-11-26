import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Login/Login";
import CardShow from "../Pages/Cardshow/CardShow";

const MyRouters = createBrowserRouter([{
    path:"/",
    element:<MainLayout></MainLayout>,
    children:[
        {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch('mobile.json')
    },
    {
        path:"/favorite",
        element:<Favorite></Favorite>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/:id",
        element:<CardShow></CardShow>,
        loader:()=> fetch('mobile.json')
    }
]
}]);

export default MyRouters;
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ShareTip from "../pages/ShareTip";
import ExploreGarden from "../pages/ExploreGarden";
import MyTip from "../pages/MyTip";

export const router =createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                path:'/',
                Component:Home
            },
            {
                path:'/shareTip',
                Component:ShareTip
            },
            {
                path:'/exploreGarden',
                Component:ExploreGarden
            },
            {
                path:'/myTip',
                Component:MyTip
            }
        ]
    }
])
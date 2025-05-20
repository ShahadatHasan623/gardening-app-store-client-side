import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ShareTip from "../pages/ShareTip";
import ExploreGarden from "../pages/ExploreGarden";
import MyTip from "../pages/MyTip";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import BrowsTips from "../components/BrowsTips";
import TipDetailsPage from "../pages/TipDetailsPage";
import Update from "../pages/Update";
import PrivateRoute from "../context/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/shareTip",
        element:<PrivateRoute><ShareTip></ShareTip></PrivateRoute> ,
      },
      {
        path: "/browseTips",
        Component: BrowsTips,
        hydrateFallbackElement: (
          <div className="flex items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
        loader: () => fetch("http://localhost:3000/garden"),
      },
      {
        path: "/exploreGarden",
        Component: ExploreGarden,
      },
      {
        path: "/myTip",
        element:<PrivateRoute><MyTip></MyTip></PrivateRoute>,
        loader: () => fetch("http://localhost:3000/garden"),
        hydrateFallbackElement: (
          <div className="flex items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/tipDetails/:id",
        element: <PrivateRoute><TipDetailsPage></TipDetailsPage></PrivateRoute>,
        hydrateFallbackElement: (
          <div className="flex items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/garden/${params.id}`),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/garden/${params.id}`),
        hydrateFallbackElement: (
          <div className="flex items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
        element: <PrivateRoute><Update></Update></PrivateRoute>,
      },
    ],
  },
]);

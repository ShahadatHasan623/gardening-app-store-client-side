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
        Component: ShareTip,
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
        Component: MyTip,
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
        Component: TipDetailsPage,
        hydrateFallbackElement: (
          <div className="flex items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/garden/${params.id}`),
      },
    ],
  },
]);

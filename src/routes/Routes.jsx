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
import GardenersDetails from "../components/GardenersDetails";
import Loading from "../components/Loading";
import DashBoardLayouts from "../layouts/DashBoardLayout/DashBoardLayouts";
import DashBoardHome from "../layouts/DashBoardLayout/DashBoardHome";
import DashBoardProfile from "../layouts/DashBoardLayout/DashBoardProfile";

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
        loader: () =>
          fetch("https://gardening-store-server.vercel.app/gardeners"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/browseTips",
        Component: BrowsTips,
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("https://gardening-store-server.vercel.app/garden"),
      },
      {
        path: "/exploreGarden",
        Component: ExploreGarden,
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
        element: (
          <PrivateRoute>
            <TipDetailsPage></TipDetailsPage>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(
            `https://gardening-store-server.vercel.app/garden/${params.id}`
          ),
      },
      {
        path: "/gardenersDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://gardening-store-server.vercel.app/gardeners/${params.id}`
          ),
        Component: GardenersDetails,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayouts></DashBoardLayouts>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashBoardHome,
      },
      {
        path: "myprofile",
        Component: DashBoardProfile,
      },
      {
        path: "shareTip",
        element: (
          <PrivateRoute>
            <ShareTip></ShareTip>
          </PrivateRoute>
        ),
      },
      {
        path: "myTip",
        element: (
          <PrivateRoute>
            <MyTip></MyTip>
          </PrivateRoute>
        ),
        loader: () => fetch("https://gardening-store-server.vercel.app/garden"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(
            `https://gardening-store-server.vercel.app/garden/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
        element: <Update></Update>,
      },
    ],
  },
]);

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
        path: "/shareTip",
        element: (
          <PrivateRoute>
            <ShareTip></ShareTip>
          </PrivateRoute>
        ),
      },
      {
        path: "/browseTips",
        Component: BrowsTips,
        hydrateFallbackElement:<Loading></Loading>,
        loader: () => fetch("https://gardening-store-server.vercel.app/garden"),
      },
      {
        path: "/exploreGarden",
        Component: ExploreGarden,
      },
      {
        path: "/myTip",
        element: (
          <PrivateRoute>
            <MyTip></MyTip>
          </PrivateRoute>
        ),
        loader: () => fetch("https://gardening-store-server.vercel.app/garden"),
        hydrateFallbackElement:<Loading></Loading>,
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
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://gardening-store-server.vercel.app/garden/${params.id}`
          ),
        hydrateFallbackElement:<Loading></Loading>,
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path:'/gardenersDetails/:id',
        loader:({params})=>fetch(`https://gardening-store-server.vercel.app/gardeners/${params.id}`),
        Component:GardenersDetails
      }
    ],
  },
]);

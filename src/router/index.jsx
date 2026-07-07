import { createBrowserRouter } from "react-router";
import HomePage from "../pages/home/HomePage";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "./../components/ProtectedRoute ";
import LoginPage from "../pages/login/LoginPage";
import FavoritesPage from "../pages/favorites/FavoritesPage";
import MoviePage from "../pages/movie/MoviePage";
import TvPage from "../pages/tv/TvPage";
import MoviesPage from "../pages/movie/MoviesPage";
import TvsPage from "../pages/tv/TvsPage";
import GenrePage from "../pages/genre/GenrePage";
import SearchPage from "../pages/search/SearchPage";
import UserAccountPage from "../pages/userAccount/UserAccountPage";
import AdminPage from "../pages/admin/AdminPage";
import AdminRoute from "../components/admin/AdminRoute";
import SubscriptionsPage from "../pages/subscription/SubscriptionsPage";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/subscriptions",
        element: <SubscriptionsPage />
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/account",
        element: <UserAccountPage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
      {
        path: "/series",
        element: <TvsPage />,
      },
      {
        path: "/genre/:type/:id/:genre",
        element: <GenrePage />,
      },
      {
        path: "/movie/detail/:id/:play",
        element: <MoviePage />,
      },
      {
        path: "/tv/detail/:id/:play",
        element: <TvPage />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <RootLayout />
      </AdminRoute>
    ),
    children: [{ index: true, element: <AdminPage /> }],
  },
]);

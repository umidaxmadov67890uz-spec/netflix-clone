import { createBrowserRouter} from "react-router"
import HomePage from "../pages/home/HomePage"
import RootLayout from "../layouts/RootLayout"
import AuthLayout from "../layouts/AuthLayout"
import ProtectedRoute from './../components/ProtectedRoute ';
import LoginPage from "../pages/login/LoginPage";
import FavoritesPage from "../pages/favorites/FavoritesPage";
import MoviePage from "../pages/movie/MoviePage";
import TvPage from "../pages/tv/TvPage";
 

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: 
      <ProtectedRoute >
        <RootLayout/>
      </ProtectedRoute>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/favorites",
        element: <FavoritesPage />
      },
      {
        path: "/movie/detail/:id",
        element: <MoviePage/>
      },
      {
        path: "/tv/detail/:id",
        element: <TvPage />
      }
    ]
  }, {
    path: "/login",
    element: <AuthLayout/>,
    children: [
      {index: true, element: <LoginPage/>}
    ]
  }
])


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Routers } from "./router/index";
import "./index.css";
import MoviesDataProvider from "./context/MoviesDataProvider";
import TvDataProvider from "./context/TvDataProvider";
import UserFavoritesProvider from "./context/UserFavoritesProvider";
import GenresDataProvider from "./context/GenresDataProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserFavoritesProvider>
      <MoviesDataProvider>
        <TvDataProvider>
          <GenresDataProvider>
            <RouterProvider router={Routers} />
          </GenresDataProvider>
        </TvDataProvider>
      </MoviesDataProvider>
    </UserFavoritesProvider>
  </StrictMode>,
);

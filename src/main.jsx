import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Routers } from "./router/index";
import "./index.css";
import MoviesDataProvider from "./context/MoviesDataProvider";
import TvDataProvider from "./context/TvDataProvider";
import UserFavoritesProvider from "./context/UserFavoritesProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserFavoritesProvider>
      <MoviesDataProvider>
        <TvDataProvider>
          <RouterProvider router={Routers} />
        </TvDataProvider>
      </MoviesDataProvider>
    </UserFavoritesProvider>
  </StrictMode>,
);

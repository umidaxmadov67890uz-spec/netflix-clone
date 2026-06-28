import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Routers } from "./router/index";
import "./index.css";
import MoviesDataProvider from "./context/MoviesDataProvider";
import TvDataProvider from "./context/TvDataProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoviesDataProvider>
      <TvDataProvider>
        <RouterProvider router={Routers} />
      </TvDataProvider>
    </MoviesDataProvider>
  </StrictMode>
);

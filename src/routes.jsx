import React from "react";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BreedersPage from "./pages/BreedersPage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/breeders",
    element: <BreedersPage />,
  },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;

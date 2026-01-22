import React from "react";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BreedersPage from "./pages/BreedersPage";

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
];

export default routes;

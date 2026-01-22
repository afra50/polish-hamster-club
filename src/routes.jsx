import React from "react";

import Home from "./pages/Home";
import BreedersPage from "./pages/BreedersPage";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/breeders",
    element: <BreedersPage />,
  },
];

export default routes;

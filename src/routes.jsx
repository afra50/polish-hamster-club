import React from "react";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BreedersPage from "./pages/BreedersPage";
import NotFoundPage from "./pages/NotFoundPage";
import JoinUsPage from "./pages/JoinUsPage";
import ContactPage from "./pages/ContactPage";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/o-nas",
    element: <AboutPage />,
  },
  {
    path: "/hodowcy",
    element: <BreedersPage />,
  },
  {
    path: "/dolacz",
    element: <JoinUsPage />,
  },
  {
    path: "/kontakt",
    element: <ContactPage />,
  },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;

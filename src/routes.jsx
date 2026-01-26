import React from "react";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BreedersPage from "./pages/BreedersPage";
import NotFoundPage from "./pages/NotFoundPage";
import JoinUsPage from "./pages/JoinUsPage";
import ContactPage from "./pages/ContactPage";
import BuildPage from "./pages/BuildPage";
import EventsPage from "./pages/EventsPage";

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
  {
    path: "/wiedza",
    element: <BuildPage />,
  },
  {
    path: "wydarzenia",
    element: <EventsPage />,
  },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;

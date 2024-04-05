import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing page/LandingPage";
import AboutPage from "./pages/About Page/AboutPage";
import ErrorPage from "./pages/Error Page/ErrorPage";
import WorkPage from "./pages/Work Page/WorkPage";
import { Parallax } from "./hooks/useParallaxAnimation";
import "./index.css";
import ContactPage from "./pages/Contact Page/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/work",
    element: <WorkPage />,
    children: [
      {
        path: "/work/:id",
        element: <WorkPage />,
      },
    ],
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Parallax>
      <RouterProvider router={router} />
    </Parallax>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing page/LandingPage";
import AboutPage from "./pages/About Page/AboutPage";
import ErrorPage from "./pages/Error Page/ErrorPage";
import ContactPage from "./pages/Contact Page/ContactPage";
import BookPage from "./pages/Book Page/BookPage";
import BlogPage from "./pages/Blog Page/BlogPage";
import { Parallax } from "./hooks/useParallaxAnimation";
import "./index.css";

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
    path: "/work/:id",
    element: <BookPage />,
  },
  {
    path: "/blog/:id",
    element: <BlogPage />,
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

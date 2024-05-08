import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./Pages/NotFoundPage";
import ExercisesPage from "./Pages/ExercisesPage";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Exercises",
        element: <ExercisesPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

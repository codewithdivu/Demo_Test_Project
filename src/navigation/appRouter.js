// react-router-dom
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ShowDetails, ShowList } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/shows" />,
  },
  {
    path: "/shows",
    element: <ShowList />,
  },
  {
    path: "/shows/:id",
    element: <ShowDetails />,
  },
]);

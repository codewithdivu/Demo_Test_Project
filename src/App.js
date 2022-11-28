import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { router } from "./navigation/appRouter";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

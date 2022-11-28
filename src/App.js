// react
import React from "react";
// react-router-dom
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/appRouter";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./pages/First";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Allproducts from "./pages/Allproducts";
import Logout from "./pages/Logout";

const router = createBrowserRouter([
   {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
    path:"/home/allproducts",
    element:<Allproducts/>
  }
    ],
  },
 
  {
    path: "/register",
    element: <Register />,
  },{
    path:"/logout",
    element:<Logout/>
  }
]);
function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;

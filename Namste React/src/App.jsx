import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
//Routing
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //Outlet each time the children changes it will update the Outlet component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

//Routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // make children element to main block so that entire page wontr be refreshed here header is set common to all so rest of things will be rendering(client side Rendering)   also known as single page applications
      {
        path: "/",
        element: <Body />, //config for about page
      },
      ,
      {
        path: "/about",
        element: <About />, //config for about page
      },
      {
        path: "/contact",
        element: <Contact />, //config for about page
      },
    ],
    errorElement: <Error />, //Error Handling
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

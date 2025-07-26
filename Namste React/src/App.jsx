import React, { lazy, Suspense, useState, useEffect } from "react"; //lazy and suspence for the lazy loading
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";
import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
//Routing
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //Outlet each time the children changes it will update the Outlet component
const Grocery = lazy(() => import("./components/Grocery")); //so whats happening here is we are using lazy loading or code splitting. so that when it bundles and render this part of code wont be loaded in a single file. this chunk will be only laoded when the need is there. so the main importyant thing thios makes our apps lighter and more optimised when we are working on big prod heavuy applications
const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "",
    };
    setUserName(data.name);
  }, []);
  //we will be wrapping the entire thing with the UserContext.Provider so that each component can access the context we acn also use multiple context as well
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app ">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
      {
        path: "/restaurants/:resId", //Dynamic
        element: <RestaurantMenu />,
      }, //Wrappping im suspence willl give a fallback by the gtime the other componet is loading what need to be displayed
      {
        path: "/grocery", //Dynamic
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />, //Error Handling
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

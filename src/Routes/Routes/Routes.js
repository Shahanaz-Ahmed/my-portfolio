import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ConatctMe from "../../Pages/Home/ContactMe/ConatctMe";
import Home from "../../Pages/Home/Home/Home";
import Project2 from "../../Pages/Project2/Project2";
import Project3 from "../../Pages/Project3/Project3";
import Project1 from "../../Pages/Projects1/Project1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contactme",
        element: <ConatctMe></ConatctMe>,
      },
      {
        path: "/project1",
        element: <Project1></Project1>,
      },
      {
        path: "/project2",
        element: <Project2></Project2>,
      },
      {
        path: "/project3",
        element: <Project3></Project3>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx";
import Contact from "./pages/contact/contact.jsx";
import Confidentiel from "./pages/confidentiel/confidentiel.jsx";
import Mention from "./pages/mention/mention.jsx";
import Error from "./pages/error/error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      {path:"contact", element: <Contact /> },
      {path: "about", element: <About /> },
      {path : "confidentiel",element:<Confidentiel/>},
      {path: "mention", element:<Mention/>},
      { path:"*",element:<Error/>}
    ],
  },
]);

export default router;

import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import AboutUsPage from "./component/About us ";
import ContactUsPage from "./component/ContactUsPage";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <Home />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <NavBar />
          <AboutUsPage />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <NavBar />
          <ContactUsPage />
        </div>
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
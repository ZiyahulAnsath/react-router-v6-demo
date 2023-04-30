import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
import Dashboard from "./Components/Dashboard";
import Leads from "./Components/Leads";
import Settings from "./Components/Settings";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "dashboard",
          element: <Dashboard/>,
        },
        {
          path: "leads",
          element: <Leads/>,
        },
        {
          path: "settings",
          element: <Settings/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

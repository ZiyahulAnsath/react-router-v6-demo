import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Leads from "../Components/Leads";
import Settings from "../Components/Settings";
import Main from "../Components/Main";

const index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "leads",
          element: <Leads />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default index;

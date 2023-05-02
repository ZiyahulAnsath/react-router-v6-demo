import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
import Dashboard from "./Components/Dashboard";
import Leads from "./Components/Leads";
import Settings from "./Components/Settings";
import Reports from "./Components/Reports";
import CurrentStocks from "./Components/CurrentStocks";
import Error from "./Components/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<Error/>,
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
          path: "reports",
          element: <Reports/>,
        },
        {
          path: "currentstocks",
          element: <CurrentStocks/>,
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

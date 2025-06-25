import { createBrowserRouter, RouterProvider } from "react-router";
import AdminLayout from "./ui/AdminLayout";
import Dashboard from "./pages/Dashboard";
import TripsPage from "./pages/TripsPage";
import Users from "./pages/Users";
import Trips from "./pages/Trips";

import ClientLayout from "./ui/ClientLayout";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "trips",
        element: <Trips />,
      },
    ],
  },
  {
    path: "/client",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <TripsPage />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

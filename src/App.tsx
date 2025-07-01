import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AdminLayout from "./ui/AdminLayout";
import Dashboard from "./pages/Dashboard";
import TripsPage from "./pages/TripsPage";
import Users from "./pages/Users";
import Trips from "./pages/Trips";

import ClientLayout from "./ui/ClientLayout";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import AuthCallback from "./features/Auth/AuthCallback";
const router = createBrowserRouter([
  {
    path: "auth-callback",
    element: <AuthCallback />,
  },
  {
    index: true,
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
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
        path: "tripspage",
        element: <TripsPage />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

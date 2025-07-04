import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AdminLayout from "./ui/AdminLayout";
import Dashboard from "./pages/Dashboard";
import TripsPage from "./pages/TripsPage";
import Users from "./pages/Users";
import Trips from "./pages/Trips";
import { Toaster } from "react-hot-toast";
import ClientLayout from "./ui/ClientLayout";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import AuthCallback from "./features/Auth/AuthCallback";
import Trip from "./features/tirps/Trip";
const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Login />,
  },
  {
    path: "auth-callback",
    element: <AuthCallback />,
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
      {
        path: "trips/:tripId",
        element: <Trip />,
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
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#fff",
            color: "#black",
          },

          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

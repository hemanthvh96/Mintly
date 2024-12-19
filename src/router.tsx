import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Payments from "./pages/Payments";
import AppLayout from "./components/custom/AppLayout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/pay", element: <Payments /> },
      ],
    },
  ],
  { future: { v7_fetcherPersist: true } }
);

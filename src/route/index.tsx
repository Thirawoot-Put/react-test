import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layouts/Container";
import HomePage from "../pages/HomePage";
import LayoutStylePage from "../pages/LayoutStylePage";
import "../translation/i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/layout-style", element: <LayoutStylePage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

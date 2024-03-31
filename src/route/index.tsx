import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layouts/Container";
import HomePage from "../pages/HomePage";
import LayoutStylePage from "../pages/LayoutStylePage";
import "../translation/i18n";
import FormTablePage from "../pages/FormTablePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      { path: "/react-test/", element: <HomePage /> },
      { path: "/react-test/layout-style", element: <LayoutStylePage /> },
      { path: "/react-test/form", element: <FormTablePage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

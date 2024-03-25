import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layouts/Container";
import TestList from "../components/TestList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [{ path: "/", element: <TestList /> }],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

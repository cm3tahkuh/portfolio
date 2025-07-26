import { MainPage, Page404 } from "@/pages";
import { Layout } from "@/widgets/Layout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

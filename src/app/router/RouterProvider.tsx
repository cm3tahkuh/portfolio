import { RouterProvider as ReactRouterProvider } from "react-router";
import { router } from "./appRouter";

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

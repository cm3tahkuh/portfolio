import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import { RouterProvider } from "../router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>
);

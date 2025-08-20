import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import { RouterProvider } from "../router";
import { ThemeProvider } from "../providers";
import 'react-photo-view/dist/react-photo-view.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider />
    </ThemeProvider>
  </StrictMode>
);

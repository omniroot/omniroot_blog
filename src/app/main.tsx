import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/app/router.tsx";
import "@/shared/i18n/i18n.js";
import { MaterialThemeProvider } from "@components/MaterialTheme/MaterialTheme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MaterialThemeProvider>
      <RouterProvider router={router} />
    </MaterialThemeProvider>
  </StrictMode>
);

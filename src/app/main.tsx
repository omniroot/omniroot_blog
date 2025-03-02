import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/app/router.tsx";
import "@/shared/i18n/i18n.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

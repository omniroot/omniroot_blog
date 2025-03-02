import { rootRoute } from "@/app/router.tsx";
import { createRoute } from "@tanstack/react-router";

export const RouteAbout = createRoute({
  path: "/about",
  getParentRoute: () => rootRoute,
}).lazy(() => import("@pages/about/about.page.tsx").then((c) => c.Route));

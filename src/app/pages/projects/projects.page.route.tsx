import { rootRoute } from "@/app/router.tsx";
import { createRoute } from "@tanstack/react-router";

export const RouteProjects = createRoute({
  path: "/projects",
  getParentRoute: () => rootRoute,
}).lazy(() => import("@pages/projects/projects.page.tsx").then((c) => c.Route));

import { rootRoute } from "@/app/router.tsx";
import { createRoute } from "@tanstack/react-router";

export const RoutePosts = createRoute({
  path: "/posts",
  getParentRoute: () => rootRoute,
}).lazy(() => import("@pages/posts/posts.page.tsx").then((c) => c.Route));

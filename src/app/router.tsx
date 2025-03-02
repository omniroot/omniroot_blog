import { GlobalLayout } from "@/app/layouts/global/global.layout.tsx";
import { RouteAbout } from "@pages/about/about.page.route.tsx";
import { RouteHome } from "@pages/home/home.page.route.tsx";
import { NotFoundPage } from "@pages/notfound/notfound.page.tsx";
import { RoutePosts } from "@pages/posts/posts.page.route.tsx";
import { RouteProjects } from "@pages/projects/projects.page.route.tsx";
import { createRootRoute, createRouter } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
  component: () => <GlobalLayout />,
});

const routeTree = rootRoute.addChildren([
  RouteHome,
  RouteProjects,
  RoutePosts,
  RouteAbout,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultNotFoundComponent: () => <NotFoundPage />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

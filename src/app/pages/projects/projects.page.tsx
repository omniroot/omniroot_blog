import { createLazyRoute } from "@tanstack/react-router";

export const ProjectsPage = () => {
  return (
    <>
      <span>projects page</span>
      <span>projects page</span>
      <span>projects page</span>
      <span>projects page</span>
    </>
  );
};

export const Route = createLazyRoute("/projects")({
  component: ProjectsPage,
});

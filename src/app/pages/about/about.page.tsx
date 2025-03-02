import { createLazyRoute } from "@tanstack/react-router";

export const AboutPage = () => {
  return (
    <>
      <span>about page;</span>
      <span>about page;</span>
      <span>about page;</span>
      <span>posts page;</span>
    </>
  );
};

export const Route = createLazyRoute("/about")({
  component: AboutPage,
});

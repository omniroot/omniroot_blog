import { createLazyRoute } from "@tanstack/react-router";

export const PostsPage = () => {
  return (
    <>
      <span>posts page;</span>
      <span>posts page;</span>
      <span>posts page;</span>
      <span>posts page;</span>
    </>
  );
};

export const Route = createLazyRoute("/posts")({
  component: PostsPage,
});

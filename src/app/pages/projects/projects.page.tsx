import { Project } from "@components/Project/Project.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import styles from "./projects.page.module.css";

export const ProjectsPage = () => {
  return (
    <div className={styles.page}>
      <Project
        title="Oku"
        description="Site for tracking and watching anime"
        link="https://github.com/omniroot/oku"
      />
      <Project
        title="Flowday"
        description="Site for task management"
        link="https://github.com/omniroot/flowday-client"
      />
      <Project
        title="UIKit submodule"
        description="UIKIT - UI submodule for my React projects"
        link="https://github.com/omniroot/uikit"
      />
      <Project
        title="v2ray-subs"
        description="V2ray subscription"
        link="https://github.com/omniroot/v2ray-subs"
      />
      <Project
        title="Zenify uBlock list"
        description="List for zenify weird sites"
        link="https://github.com/omniroot/zenify-ublock-list"
      />
    </div>
  );
};

export const Route = createLazyRoute("/projects")({
  component: ProjectsPage,
});

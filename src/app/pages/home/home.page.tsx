import { useLanguage } from "@/shared/stores/language.store.tsx";
import { Stack } from "@components/Stack/Stack.tsx";
import { Link } from "@tanstack/react-router";
import { FC, ReactNode } from "react";
import styles from "./home.page.module.css";

interface IProps {
  children?: ReactNode;
}

export const HomePage: FC<IProps> = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <img src="/omniroot.svg" className={styles.logo} />
        <span className={styles.name}>Omniroot</span>
        <span className={styles.field}>React Frontend Developer</span>
        <div className={styles.contacts}>
          <a
            href="https://github.com/omniroot"
            target="_blank"
            rel="noreferrer"
            className={styles.contact}
            style={{ backgroundColor: "var(--color-github)" }}
          >
            <img src="/github.svg" />
            github
          </a>
          <a
            href="mailto:omnirootofc@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.contact}
            style={{ backgroundColor: "var(--color-gmail)" }}
          >
            <img src="/gmail.svg" />
            gmail
          </a>
          <a
            href="https://t.me/omniroot"
            target="_blank"
            rel="noreferrer"
            className={styles.contact}
            style={{ backgroundColor: "var(--color-telegram)" }}
          >
            <img src="/telegram.svg" />
            telegram
          </a>
        </div>
        <span className={styles.hint}>
          {t("home_page_hint_1")}
          <Link to="/projects" className={styles.hint_link}>
            {t("home_page_hint_2")}
          </Link>
        </span>
      </div>
      <div className={styles.right}>
        <Stack
          title="Core / JS"
          description="Javascript / Typescript / Webpack / Vite"
        />
        <Stack title="UI" description="React" />

        <Stack title="Styles" description="CSS / SCSS / POSTCSS" />

        <Stack
          title="Tools"
          description="React Query / React Router / Tanstack Stack / i18N / Redux Toolkit / Zustand / Jotai"
        />
        <Stack
          title="Learn (but hate) it"
          description="NEXTJS / TAILWIND / MUI"
        />
      </div>
    </div>
  );
};

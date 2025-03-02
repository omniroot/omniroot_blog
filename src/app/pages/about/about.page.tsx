import { useLanguage } from "@/shared/stores/language.store.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import styles from "./about.page.module.css";

export const AboutPage = () => {
  const { t } = useLanguage();
  return (
    <div className={styles.content}>
      <span className={styles.title}>{t("iam")}</span>
      <span className={styles.body}>{t("iam_content")}</span>
      <span className={styles.title}>{t("experience")}</span>
      <span className={styles.body}>{t("experience_content_1")}</span>
      <span className={styles.body}>{t("experience_content_2")}</span>
      <span className={styles.body}>{t("experience_content_3")}</span>
      <span className={styles.title}>{t("background")}</span>
      <span className={styles.body}>{t("background_content")}</span>
      <span className={styles.title}>{t("interests")}</span>
      <span className={styles.body}>{t("interests_content")}</span>
      <span className={styles.title}>{t("careerGoal")}</span>
      <span className={styles.body}>{t("careerGoal_content")}</span>
    </div>
  );
};

export const Route = createLazyRoute("/about")({
  component: AboutPage,
});

import { createLazyRoute } from "@tanstack/react-router";
import styles from "./about.page.module.css";
import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.content}>
      <span>{t("iam")}</span>
      <span>&nbsp; {t("iam_content")}</span>
      <span>{t("experience")}</span>
      <span>&nbsp; {t("experience_content_1")}</span>
      <span>&nbsp; {t("experience_content_2")}</span>
      <span>&nbsp; {t("experience_content_3")}</span>
      <span>{t("background")}</span>
      <span>&nbsp; {t("background_content")}</span>
      <span>{t("interests")}</span>
      <span>&nbsp; {t("interests_content")}</span>
      <span>{t("careerGoal")}</span>
      <span>&nbsp; {t("careerGoal_content")}</span>
    </div>
  );
};

export const Route = createLazyRoute("/about")({
  component: AboutPage,
});

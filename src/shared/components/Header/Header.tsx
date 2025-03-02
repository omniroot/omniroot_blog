import { MoonIcon } from "@/shared/icons/moon-icon.tsx";
import { SunIcon } from "@/shared/icons/sun-icon.tsx";
import { useTheme } from "@/shared/stores/theme.store.tsx";
import { NavItem } from "@/shared/ui/NavItem/NavItem.tsx";
import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const indicatorRef = useRef<HTMLDivElement>(null);
  const path = useLocation().pathname;

  const drawIndicator = () => {
    if (indicatorRef.current) {
      const activeLink = document.getElementById("active-link");
      if (activeLink) {
        indicatorRef.current.style.left = `${activeLink.offsetLeft}px`;
        indicatorRef.current.style.width = `${activeLink.offsetWidth}px`;
        indicatorRef.current.style.height = `${activeLink.offsetHeight}px`;
      }
    }
  };

  useEffect(() => {
    drawIndicator();
  }, [path]);

  useEffect(() => {
    // Функция для обновления размеров окна
    const handleResize = () => {
      drawIndicator();
    };

    // Создаем объект AbortController
    const controller = new AbortController();

    // Добавляем обработчик события resize
    window.addEventListener("resize", handleResize, {
      signal: controller.signal,
    });

    // Удаляем обработчик события при размонтировании компонента
    return () => {
      controller.abort();
    };
  }, []);

  const onToggleLanguageClick = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    setTimeout(() => {
      drawIndicator();
    }, 1);
  };

  return (
    <motion.div
      initial={{ y: -20, scale: 0.8 }}
      animate={{ y: 0, scale: 1 }}
      className={styles.header}
    >
      <div className={styles.left}>
        <span className={styles.title}>{t("title")}</span>
      </div>
      <div className={styles.center}>
        <nav className={styles.nav}>
          <motion.div
            layout
            transition={{ duration: 0.2 }}
            style={{ position: "absolute" }}
            className={styles.indicator}
            ref={indicatorRef}
          />
          <NavItem>
            <Link to="/" activeProps={{ id: "active-link" }}>
              {t("home")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/projects" activeProps={{ id: "active-link" }}>
              {t("projects")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/posts" activeProps={{ id: "active-link" }}>
              {t("posts")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" activeProps={{ id: "active-link" }}>
              {t("about")}
            </Link>
          </NavItem>
        </nav>
      </div>
      <div className={styles.right}>
        <motion.button
          className={styles.language_toggle_button}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 1 }}
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={onToggleLanguageClick}
        >
          {i18n.language}
        </motion.button>
        <motion.button
          className={styles.theme_toggle_button}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 1 }}
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={toggleTheme}
        >
          {theme == "dark" ? <SunIcon /> : <MoonIcon />}
        </motion.button>
      </div>
    </motion.div>
  );
};

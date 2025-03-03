import { useState, useRef } from "react";
import styles from "./Project.module.css";
import { AnimatePresence, motion } from "motion/react";

interface IProps {
  title?: string;
  description?: string;
  link?: string;
}
export const Project = ({
  title,
  description,
  link = "https://github.com/omniroot",
}: IProps) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const projectRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopupVisible(false);
  };

  return (
    <div
      className={styles.project}
      ref={projectRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.title}>{title}</span>
      <AnimatePresence>
        {isPopupVisible && (
          <motion.div
            key={description}
            className={styles.popup}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <a href={link} target="_blank" className={styles.github_button}>
        <img src="/github.svg" /> Github
      </a>
    </div>
  );
};

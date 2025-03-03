import { FC } from "react";
import styles from "./Stack.module.css";
import { motion } from "motion/react";
interface IProps {
  title?: string;
  description?: string;
  variant?: "default" | "ghost" | "filled";
}
export const Stack: FC<IProps> = ({
  title,
  description,
  // variant = "default",
}) => {
  return (
    <motion.div
      className={styles.stack}
      initial={{ x: 100 }}
      animate={{ x: 0 }}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </motion.div>
  );
};

import { FC } from "react";
import styles from "./Stack.module.css";
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
    <div className={styles.stack}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

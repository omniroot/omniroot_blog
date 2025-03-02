import { FC, ReactNode } from "react";
import styles from "./NavItem.module.css";

interface IProps {
  children?: ReactNode;
}

export const NavItem: FC<IProps> = ({ children }) => {
  return <div className={styles.navitem}>{children}</div>;
};

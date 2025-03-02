import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  children?: ReactNode;
}

export const HomePage: FC<IProps> = () => {
  const { t, i18n } = useTranslation();

  return <>{t("welcome")}</>;
};

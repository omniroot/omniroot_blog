import { Header } from "@components/Header/Header.tsx";
import { Outlet } from "@tanstack/react-router";
import styles from "./global.layout.module.css";
import { useMedia } from "@/shared/hooks/useMediaQuery.tsx";
import { HeaderMobile } from "@components/HeaderMobile/HeaderMobile.tsx";
import { Footer } from "@components/Footer/Footer.tsx";

export const GlobalLayout = () => {
  const { isDesktop, isMobile } = useMedia();
  return (
    <>
      {isDesktop && <Header />}
      {isMobile && <HeaderMobile />}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

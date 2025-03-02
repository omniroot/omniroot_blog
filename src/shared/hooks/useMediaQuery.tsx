import { useMediaQuery } from "@uidotdev/usehooks";

export const useMedia = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return {
    isMobile,
    isDesktop,
  };
};

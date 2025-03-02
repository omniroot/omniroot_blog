import { useTranslation } from "react-i18next";

// export const languageStore = atomWithStorage<"en" | "ru">("language", "en");

export function useLanguage() {
  const { t, i18n } = useTranslation();
  // const [language, setLanguage] = useAtom(languageStore);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //   } else {
  //     document.documentElement.setAttribute("data-theme", "light");
  //   }
  // }, [theme]);

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  };

  return { t, i18n, toggleLanguage };
}

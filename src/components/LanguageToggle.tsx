import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "nl" ? "en" : "nl";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      title={i18n.language === "nl" ? "Switch to English" : "Wissel naar Nederlands"}
    >
      <Languages size={20} />
      <span className="text-sm font-medium uppercase">{i18n.language}</span>
    </button>
  );
};

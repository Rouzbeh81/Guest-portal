import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { useTranslation } from "react-i18next";
import { LogIn } from "lucide-react";

export const Login = () => {
  const { instance } = useMsal();
  const { t } = useTranslation();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="bg-blue-600 p-4 rounded-full mb-6 text-white">
        <LogIn size={48} />
      </div>
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        {t("login.title")}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        {t("login.subtitle")}
      </p>
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
      >
        <LogIn size={20} />
        {t("login.button")}
      </button>
    </div>
  );
};

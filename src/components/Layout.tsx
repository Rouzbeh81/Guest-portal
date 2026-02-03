import React from "react";
import { useMsal, AuthenticatedTemplate } from "@azure/msal-react";
import { LanguageToggle } from "./LanguageToggle";
import { LogOut, User } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { instance, accounts } = useMsal();
  const { t } = useTranslation();

  const handleLogout = () => {
    instance.logoutPopup().catch((e) => console.error(e));
  };

  const userAccount = accounts[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col">
      <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
              G
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">Guest Portal</span>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />

            <AuthenticatedTemplate>
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 mx-1"></div>
              <div className="flex items-center gap-3">
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-xs font-semibold text-gray-900 dark:text-white leading-none">
                    {userAccount?.name}
                  </span>
                  <span className="text-[10px] text-gray-500 truncate max-w-[150px]">
                    {userAccount?.username}
                  </span>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full text-blue-600">
                  <User size={18} />
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                  title={t("nav.logout")}
                >
                  <LogOut size={20} />
                </button>
              </div>
            </AuthenticatedTemplate>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 py-12">
        <div className="w-full max-w-4xl">
          {children}
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-gray-500 border-t border-gray-200 dark:border-gray-800">
        &copy; {new Date().getFullYear()} Entra Guest Invite Portal. Secure by Design.
      </footer>
    </div>
  );
};

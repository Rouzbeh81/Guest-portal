import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { UserPlus, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

interface InvitationFormProps {
  onInvite: (name: string, email: string, message: string) => Promise<void>;
  isLoading: boolean;
}

export const InvitationForm: React.FC<InvitationFormProps> = ({ onInvite, isLoading }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    await onInvite(name, email, message);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <UserPlus className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("form.title")}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("form.guestName")} *
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:bg-gray-800 dark:text-white"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("form.guestEmail")} *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:bg-gray-800 dark:text-white"
            placeholder="john.doe@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("form.customMessage")}
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:bg-gray-800 dark:text-white resize-none"
            placeholder="..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !name || !email}
          className={cn(
            "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-all flex items-center justify-center gap-2 shadow-md",
            (isLoading || !name || !email) && "opacity-70 cursor-not-allowed"
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              {t("form.sending")}
            </>
          ) : (
            <>
              <UserPlus size={20} />
              {t("form.submit")}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

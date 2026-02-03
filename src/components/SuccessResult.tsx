import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle, Copy, Check, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface SuccessResultProps {
  inviteRedeemUrl: string;
  invitedUserId: string;
  onReset: () => void;
}

export const SuccessResult: React.FC<SuccessResultProps> = ({
  inviteRedeemUrl,
  invitedUserId,
  onReset,
}) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inviteRedeemUrl);
      setCopied(true);
      toast.success(t("success.copied"));
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-green-100 dark:border-green-900/30 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="text-green-500" size={64} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {t("success.title")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {t("success.message")}
      </p>

      <div className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            {t("success.redemptionLink")}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={inviteRedeemUrl}
              className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-sm text-gray-600 dark:text-gray-300 overflow-ellipsis"
            />
            <button
              onClick={copyToClipboard}
              className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
              title={t("success.copyLink")}
            >
              {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            {t("success.userId")}
          </label>
          <div className="px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-sm text-gray-600 dark:text-gray-300 font-mono">
            {invitedUserId}
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-10 w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
      >
        <RefreshCw size={18} />
        {t("success.inviteAnother")}
      </button>
    </div>
  );
};

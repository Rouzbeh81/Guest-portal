import { useState } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { InvitationForm } from "./components/InvitationForm";
import { SuccessResult } from "./components/SuccessResult";
import { inviteGuest } from "./lib/graph";
import type { InvitationResponse } from "./lib/graph";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

function App() {
  const { instance, accounts } = useMsal();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<InvitationResponse | null>(null);

  const handleInvite = async (name: string, email: string, message: string) => {
    setIsLoading(true);
    try {
      const response = await inviteGuest(
        instance,
        accounts[0],
        name,
        email,
        message
      );
      setResult(response);
      toast.success(t("success.title"));
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || t("errors.general"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <Layout>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <div className="animate-in fade-in duration-500">
          {!result ? (
            <InvitationForm onInvite={handleInvite} isLoading={isLoading} />
          ) : (
            <SuccessResult
              inviteRedeemUrl={result.inviteRedeemUrl}
              invitedUserId={result.invitedUser.id}
              onReset={handleReset}
            />
          )}
        </div>
      </AuthenticatedTemplate>
    </Layout>
  );
}

export default App;

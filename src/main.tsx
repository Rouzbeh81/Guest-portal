import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import "./index.css";
import "./i18n"; // Import i18n configuration
import App from "./App.tsx";
import { Toaster } from "sonner";

const msalInstance = new PublicClientApplication(msalConfig);

// Default to login if not already initialized
msalInstance.initialize().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <MsalProvider instance={msalInstance}>
        <App />
        <Toaster position="top-right" richColors />
      </MsalProvider>
    </StrictMode>
  );
});

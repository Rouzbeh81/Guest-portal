import type { Configuration, PopupRequest } from "@azure/msal-browser";

const clientId = import.meta.env.VITE_AZURE_CLIENT_ID;
const tenantId = import.meta.env.VITE_AZURE_TENANT_ID;

if (!clientId) {
  console.error("VITE_AZURE_CLIENT_ID is not defined. Please check your environment variables.");
}

// MSAL configuration
export const msalConfig: Configuration = {
  auth: {
    clientId: clientId || "",
    authority: `https://login.microsoftonline.com/${tenantId || "common"}`,
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "sessionStorage", // Use sessionStorage for security as requested
  },
};

// Scopes for Graph API
export const loginRequest: PopupRequest = {
  scopes: ["User.Read", "User.Invite.All"],
};

// Graph API endpoint
export const graphConfig = {
  graphInvitationEndpoint: "https://graph.microsoft.com/v1.0/invitations",
};

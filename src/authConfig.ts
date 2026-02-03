import type { Configuration, PopupRequest } from "@azure/msal-browser";

// MSAL configuration
export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID || "",
    authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AZURE_TENANT_ID || "common"}`,
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

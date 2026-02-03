import axios from "axios";
import type { IPublicClientApplication, AccountInfo } from "@azure/msal-browser";
import { loginRequest, graphConfig } from "../authConfig";

export interface InvitationResponse {
  inviteRedeemUrl: string;
  invitedUser: {
    id: string;
  };
}

export const inviteGuest = async (
  instance: IPublicClientApplication,
  account: AccountInfo,
  guestName: string,
  guestEmail: string,
  customMessage: string
): Promise<InvitationResponse> => {
  try {
    // Get access token
    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });

    const accessToken = response.accessToken;

    const invitation = {
      invitedUserDisplayName: guestName,
      invitedUserEmailAddress: guestEmail,
      inviteRedirectUrl: import.meta.env.VITE_INVITE_REDIRECT_URL,
      sendInvitationMessage: true,
      invitedUserMessageInfo: {
        customMessage: customMessage || undefined,
      },
    };

    const graphResponse = await axios.post(
      graphConfig.graphInvitationEndpoint,
      invitation,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return graphResponse.data;
  } catch (error: any) {
    console.error("Error calling Microsoft Graph:", error);
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error.message);
    }
    throw error;
  }
};

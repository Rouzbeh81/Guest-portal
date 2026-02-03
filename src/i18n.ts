import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      login: {
        title: "Guest Invite Portal",
        subtitle: "Frontline employee access for inviting guests to Entra ID",
        button: "Sign In with Microsoft",
      },
      form: {
        title: "Invite Guest",
        guestName: "Guest Name",
        guestEmail: "Guest Email",
        customMessage: "Custom Message (Optional)",
        submit: "Send Invitation",
        sending: "Sending...",
        required: "Required",
        invalidEmail: "Invalid email address",
      },
      success: {
        title: "Invitation Sent!",
        message: "The guest has been invited successfully.",
        redemptionLink: "Redemption Link",
        copyLink: "Copy Link",
        copied: "Copied!",
        userId: "Invited User ID",
        inviteAnother: "Invite Another Guest",
      },
      nav: {
        logout: "Logout",
        language: "Language",
      },
      errors: {
        general: "An error occurred. Please try again.",
        unauthorized: "You do not have permission to invite guests.",
      }
    },
  },
  nl: {
    translation: {
      login: {
        title: "Gast Uitnodigingsportaal",
        subtitle: "Toegang voor eerstelijnsmedewerkers om gasten uit te nodigen voor Entra ID",
        button: "Inloggen met Microsoft",
      },
      form: {
        title: "Gast Uitnodigen",
        guestName: "Naam Gast",
        guestEmail: "E-mail Gast",
        customMessage: "Aangepast Bericht (Optioneel)",
        submit: "Uitnodiging Verzenden",
        sending: "Verzenden...",
        required: "Verplicht",
        invalidEmail: "Ongeldig e-mailadres",
      },
      success: {
        title: "Uitnodiging Verzonden!",
        message: "De gast is succesvol uitgenodigd.",
        redemptionLink: "Inwisselingslink",
        copyLink: "Link Kopiëren",
        copied: "Gekopieerd!",
        userId: "ID Uitgenodigde Gebruiker",
        inviteAnother: "Nog een Gast Uitnodigen",
      },
      nav: {
        logout: "Uitloggen",
        language: "Taal",
      },
      errors: {
        general: "Er is een fout opgetreden. Probeer het opnieuw.",
        unauthorized: "U heeft geen toestemming om gasten uit te nodigen.",
      }
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "nl", // Default language as requested
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

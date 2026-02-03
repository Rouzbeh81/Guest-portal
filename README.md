# Entra Guest Invite Portal

A simple, secure, standalone React application for frontline employees to send Entra ID Guest Invites. This portal allows non-technical staff to provide temporary access to internal SaaS applications by inviting guests directly into the company's Entra ID tenant.

## 🚀 Features

- **Secure by Design**: Authentication handled via Microsoft SSO (MSAL.js) using delegated tokens.
- **Pure Client-Side (SPA)**: No backend required; interacts directly with Microsoft Graph API.
- **Multi-language Support**: Toggle between English and Dutch (Nederlands).
- **Simplified Workflow**: Clean, minimalist, and mobile-responsive layout (Login -> Invitation Form -> Success/Result screen).
- **Manual Redemption**: Displays the `inviteRedeemUrl` so employees can copy and send it manually if needed.

## 🛠 Technical Specifications

- **Framework**: React 19 + Vite + TypeScript
- **Authentication**: `@azure/msal-react` and `@azure/msal-browser`
- **Styling**: Tailwind CSS
- **Icons**: Lucide-react
- **Notifications**: Sonner

---

## 🔐 Entra ID App Registration Guide

Follow these steps to register the application in your Entra ID tenant:

### 1. Create Registration
1. Go to the [Azure Portal](https://portal.azure.com) > **Microsoft Entra ID** > **App registrations** > **New registration**.
2. **Name**: `Entra Guest Invite Portal`.
3. **Supported account types**: `Accounts in this organizational directory only (Single tenant)`.

### 2. Configure Platform
1. Under **Authentication**, click **Add a platform** and select **Single-page application (SPA)**.
2. **Redirect URIs**:
   - For development: `http://localhost:5173`
   - For production: Your hosting URL (e.g., `https://guest-portal.vercel.app`)

### 3. API Permissions
1. Go to **API permissions** > **Add a permission** > **Microsoft Graph** > **Delegated permissions**.
2. Search for and add:
   - `User.Read` (to sign the user in).
   - `User.Invite.All` (to send invitations).
3. **Important**: Click **Grant admin consent for [Your Tenant]** to authorize these permissions for all users.

### 4. User Roles
Ensure that the frontline employees using this portal have the **Guest Inviter** role assigned to them in Entra ID.

---

## ⚙️ Environment Configuration

Create a `.env` file in the root directory (use `.env.example` as a template):

```env
VITE_AZURE_CLIENT_ID=your-client-id-here
VITE_AZURE_TENANT_ID=your-tenant-id-here
VITE_INVITE_REDIRECT_URL=https://your-target-saas-app.com
```

### ⚠️ Important Note for Production (Vercel/Netlify)
Vite inlines environment variables at **build time**. If you update environment variables in your hosting provider's dashboard, you **must redeploy** the application for the changes to take effect in the browser.

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd guest-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Copy `.env.example` to `.env` and fill in your Entra ID details.

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

---

## 🏗 Build and Deployment

### Build for Production
```bash
npm run build
```
The production-ready files will be in the `dist` folder.

### Deploy to Vercel
This project is optimized for Vercel. Connect your repository, add the `VITE_` environment variables in the Vercel dashboard, and deploy.

## 🇳🇱 Localization
The application defaults to **Dutch (Nederlands)**. Users can switch to **English** using the language toggle in the header. All UI elements, labels, and error messages are fully localized.

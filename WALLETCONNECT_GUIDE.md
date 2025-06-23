# Detailed Guide: How to Get a WalletConnect Project ID

This guide provides detailed steps to obtain a WalletConnect Project ID for your Klik Finance fork.

## Step 1: Access WalletConnect Cloud

1. Open your web browser and navigate to [WalletConnect Cloud](https://cloud.walletconnect.com/)

2. You'll see the WalletConnect Cloud homepage with a "Sign In" button in the top-right corner

## Step 2: Create an Account

1. Click on the "Sign In" button in the top-right corner

2. You'll be presented with options to sign in:
   - **Option A**: Sign in with GitHub
   - **Option B**: Sign in with email address

3. **For GitHub sign-in**:
   - Click the "Sign in with GitHub" button
   - Authorize the WalletConnect application if prompted
   - You may need to confirm your email address

4. **For email sign-in**:
   - Enter your email address in the field provided
   - Click "Continue with Email"
   - Check your email for a verification code
   - Enter the verification code on the website to complete sign-in

## Step 3: Create a New Project

1. After signing in, you'll be taken to the WalletConnect Cloud dashboard

2. Look for the "Create New Project" button, typically located in the main dashboard area
   - If you already have projects, it may appear as a "+ New Project" button

3. Click the "Create New Project" button

4. You'll be asked to enter project details:
   - **Project Name**: Enter "Klik Finance Fork" (or your preferred name)
   - **Website URL**: Enter your website URL (for local development, you can use `http://localhost:3000`)
   - **App Description**: Enter a brief description like "A fork of Klik Finance for Ethereum token creation"
   - **Category**: Select "DeFi" from the dropdown menu

5. Click "Create" or "Submit" to create your project

## Step 4: Retrieve Your Project ID

1. After creating the project, you'll be redirected to the project dashboard

2. Look for a section labeled "Project ID" or "Keys" (typically displayed prominently)

3. Your Project ID will be shown as a long alphanumeric string (e.g., `1a2b3c4d5e6f7g8h9i0j`)

4. Click the "Copy" button next to the Project ID to copy it to your clipboard

## Step 5: Configure App Settings (Important)

1. In your project dashboard, look for "App Settings" or "Settings" tab

2. Configure the following settings:
   
   - **App Domain**: This must match where your app will be hosted
     - For local development: `localhost:3000`
     - For production: Your actual domain (e.g., `your-app.com`)
   
   - **Redirect URLs**: Add all URLs that your app might redirect to after wallet connection
     - For local development: `http://localhost:3000`
     - For production: `https://your-app.com`

3. Save your changes

## Step 6: Add the Project ID to Your .env File

1. Open your project's `.env.local` file

2. Find or add the WalletConnect Project ID line:
   ```
   NEXT_PUBLIC_WALLET_CONNECT_ID=your_project_id_here
   ```

3. Replace `your_project_id_here` with the Project ID you copied in Step 4

4. Save the file

## Step 7: Verify Your Integration

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Open your app in a browser at `http://localhost:3000`

3. Click the "Connect Wallet" button

4. If everything is configured correctly, you should see the WalletConnect modal with wallet options

## Troubleshooting

### If the wallet connection modal doesn't appear:

1. Check your browser console for errors

2. Verify that your Project ID is correctly set in your `.env.local` file

3. Make sure you've configured the correct domain/localhost in your WalletConnect project settings

4. Check that you've installed all required dependencies:
   ```bash
   pnpm install @rainbow-me/rainbowkit wagmi viem
   ```

5. Verify that your WalletConnect Project ID is being correctly imported in your code

### API Rate Limits

- WalletConnect has rate limits on free accounts
- If you're experiencing issues, check the rate limit information in your dashboard
- For production apps, consider upgrading to a paid plan if needed

## Additional Resources

- [WalletConnect Documentation](https://docs.walletconnect.com/)
- [WalletConnect v2 Migration Guide](https://docs.walletconnect.com/2.0/advanced/migration-from-v1.0)
- [WalletConnect Discord for Support](https://discord.com/invite/cB54BwPGru) 
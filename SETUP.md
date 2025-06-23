# Setup Guide for Klik Finance Fork

This guide will walk you through all the steps needed to set up your Klik Finance fork with the required environment variables.

## Prerequisites

- Node.js 18+ installed
- PNPM or NPM installed
- GitHub account (optional, but recommended for obtaining API keys)

## Step 1: Clone and Install Dependencies

```bash
# Clone the repository (or your fork)
git clone https://github.com/your-username/klik-finance-fork.git
cd klik-finance-fork

# Install dependencies
pnpm install
```

## Step 2: Environment Variables Setup

Create a `.env.local` file in the root of your project by copying the example file:

```bash
cp .env.example .env.local
```

Now you'll need to fill in the values for each environment variable:

### WalletConnect Project ID

To obtain a WalletConnect Project ID:

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Sign up or log in with your GitHub or email
3. Create a new project (e.g., "Klik Finance Fork")
4. From your project dashboard, copy the "Project ID"
5. Open your `.env.local` file and replace `your_wallet_connect_project_id` with your actual Project ID:

```
NEXT_PUBLIC_WALLET_CONNECT_ID=abc123def456ghi789jkl
```

**For detailed step-by-step instructions with screenshots, see our [WalletConnect Setup Guide](WALLETCONNECT_GUIDE.md).**

### Ethereum RPC Provider Keys (Optional)

For better performance and reliability, you can use your own RPC endpoints instead of the public ones:

#### Option 1: Using Infura

1. Go to [Infura](https://infura.io/)
2. Sign up or log in
3. Create a new API key from your dashboard
4. Copy your API key
5. Uncomment and update the Infura ID in your `.env.local` file:

```
NEXT_PUBLIC_INFURA_ID=your_infura_api_key_here
```

#### Option 2: Using Alchemy

1. Go to [Alchemy](https://www.alchemy.com/)
2. Sign up or log in
3. Create a new app for each network (Ethereum, Optimism, Base)
4. Copy your API key
5. Uncomment and update the Alchemy ID in your `.env.local` file:

```
NEXT_PUBLIC_ALCHEMY_ID=your_alchemy_api_key_here
```

### Default Chain Configuration (Optional)

Set your default blockchain network:

```
NEXT_PUBLIC_DEFAULT_CHAIN=ethereum
```

Options are: `ethereum`, `optimism`, or `base`.

## Step 3: Verify Setup

To verify your setup is correct:

1. Start the development server:

```bash
pnpm dev
```

2. Open your browser to `http://localhost:3000`
3. Click the "Connect Wallet" button
4. If your configuration is correct, you should see the wallet selection modal appear without any errors

## Step 4: Advanced Configuration (Optional)

### Custom API Endpoint

If you're building a full clone with backend functionality, you'll need to set up your API endpoint:

1. Set up your backend API service (separate from this repository)
2. Get your API endpoint URL
3. Update your `.env.local` file:

```
NEXT_PUBLIC_KLIK_API_URL=https://your-api-domain.com/api/klik
```

## Troubleshooting

### Wallet Connection Issues

- Ensure your `NEXT_PUBLIC_WALLET_CONNECT_ID` is correct
- Check the browser console for any errors
- Verify that you've created your project correctly on WalletConnect Cloud
- Make sure your domain is whitelisted in the WalletConnect project settings
- See the [WalletConnect Setup Guide](WALLETCONNECT_GUIDE.md) for detailed troubleshooting

### RPC Provider Issues

If you're using custom RPC providers:
- Ensure your API keys are correctly entered in the `.env.local` file
- Verify that your Infura or Alchemy subscriptions are active
- Check for any rate limiting issues in your provider dashboard

## Resources

- [WalletConnect Docs](https://docs.walletconnect.com/)
- [Infura Documentation](https://docs.infura.io/)
- [Alchemy Documentation](https://docs.alchemy.com/)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)

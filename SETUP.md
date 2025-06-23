# Klik Finance Fork Setup Guide

This guide provides step-by-step instructions to set up your Klik Finance fork application.

## Prerequisites

- Node.js v16+ and npm
- A code editor (VS Code recommended)
- Git

## Step 1: Clone the Repository

```bash
git clone https://github.com/smickey040404/Finaceproject1
cd Finaceproject1
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Set Up Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Required: WalletConnect Project ID
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id_here

# Optional: Custom RPC URLs for different networks
# If not provided, public RPC endpoints will be used as fallbacks
VITE_RPC_URL_MAINNET=https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY
VITE_RPC_URL_POLYGON=https://polygon-mainnet.g.alchemy.com/v2/YOUR_API_KEY
VITE_RPC_URL_OPTIMISM=https://opt-mainnet.g.alchemy.com/v2/YOUR_API_KEY
VITE_RPC_URL_ARBITRUM=https://arb-mainnet.g.alchemy.com/v2/YOUR_API_KEY
VITE_RPC_URL_BASE=https://mainnet.base.org

# Optional: Application environment
VITE_APP_ENV=development
```

### How to get a WalletConnect Project ID:

1. Visit [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Sign up for an account or log in
3. Create a new project
4. Copy the Project ID
5. Paste it as the value for `VITE_WALLET_CONNECT_PROJECT_ID` in your `.env` file

### RPC Provider Options:

You can obtain API keys for premium RPC access from:
- [Alchemy](https://www.alchemy.com/) - Higher rate limits and reliability
- [Infura](https://infura.io/) - Good option for Ethereum and L2s
- [QuickNode](https://www.quicknode.com/) - Fast and reliable nodes

For development, you can use public RPC providers which are configured as fallbacks:
- Ethereum: https://eth.llamarpc.com
- Polygon: https://polygon.llamarpc.com
- Optimism: https://optimism.llamarpc.com
- Arbitrum: https://arbitrum.llamarpc.com
- Base: https://base.llamarpc.com

## Step 4: Run the Development Server

```bash
npm run dev
```

This will start the development server at http://localhost:3000.

## Step 5: Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Environment Variable Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| VITE_WALLET_CONNECT_PROJECT_ID | WalletConnect Project ID | Yes | `3a8b...f42` |
| VITE_RPC_URL_MAINNET | Ethereum Mainnet RPC URL | No | `https://eth-mainnet.g.alchemy.com/v2/KEY` |
| VITE_RPC_URL_POLYGON | Polygon RPC URL | No | `https://polygon-mainnet.g.alchemy.com/v2/KEY` |
| VITE_RPC_URL_OPTIMISM | Optimism RPC URL | No | `https://opt-mainnet.g.alchemy.com/v2/KEY` |
| VITE_RPC_URL_ARBITRUM | Arbitrum RPC URL | No | `https://arb-mainnet.g.alchemy.com/v2/KEY` |
| VITE_RPC_URL_BASE | Base RPC URL | No | `https://mainnet.base.org` |
| VITE_APP_ENV | Application environment | No | `development`, `production` |

## Troubleshooting

### Wallet Connection Issues

If you see errors related to WalletConnect:

1. Make sure you have set up the `VITE_WALLET_CONNECT_PROJECT_ID` in your `.env` file
2. Check that your WalletConnect Project ID is valid
3. Try clearing your browser cache and restarting the application

### RPC Connection Issues

If transactions are failing or blockchain data isn't loading:

1. Check that your RPC URLs are valid
2. Try using different RPC providers
3. For development, you can rely on the fallback public RPCs

### Build Errors

If you encounter build errors:

1. Delete the `node_modules` folder and the `package-lock.json` file
2. Run `npm install` again
3. Start the development server with `npm run dev`

## Adding Smart Contract Functionality

To implement actual token creation (instead of the current simulation):

1. Install ethers.js or viem:
   ```bash
   npm install ethers
   # or
   npm install viem
   ```

2. Create a new directory for smart contracts:
   ```bash
   mkdir -p src/contracts
   ```

3. Create token deployment functionality in `src/contracts/tokenDeployer.ts`

4. Update the `TokenCreator.tsx` component to call the actual deployment function

## Customizing the Application

To customize the application name, logo, and other branding:

1. Update the `appName` in `src/lib/wallet.ts`
2. Replace logo images in the Header component
3. Update the color scheme in `tailwind.config.js` 
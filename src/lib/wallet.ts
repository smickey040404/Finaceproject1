import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

// IMPORTANT: You need to obtain a projectId from WalletConnect Cloud
// Create an account at: https://cloud.walletconnect.com/sign-up
// Then get your project ID from: https://cloud.walletconnect.com/app
const projectId = 'YOUR_WALLET_CONNECT_PROJECT_ID'; 

export const config = getDefaultConfig({
  appName: 'KLIK Finance',
  projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
  ssr: true,
}); 
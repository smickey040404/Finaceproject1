import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

// Get WalletConnect Project ID from environment variable
// You need to obtain a projectId from https://cloud.walletconnect.com/
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

// If projectId is not provided, show a helpful error
if (!projectId) {
  console.error(
    'You need to provide a VITE_WALLET_CONNECT_PROJECT_ID environment variable. Get it from https://cloud.walletconnect.com/'
  );
}

// Get RPC URLs from environment variables or use default public endpoints
const getRpcUrl = (chain: string, defaultRpc?: string): string => {
  const envVarName = `VITE_RPC_URL_${chain.toUpperCase()}`;
  return import.meta.env[envVarName] || defaultRpc || '';
};

export const config = getDefaultConfig({
  appName: 'KLIK Finance',
  projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  transports: {
    [mainnet.id]: http(getRpcUrl('mainnet', 'https://eth.llamarpc.com')),
    [polygon.id]: http(getRpcUrl('polygon', 'https://polygon.llamarpc.com')),
    [optimism.id]: http(getRpcUrl('optimism', 'https://optimism.llamarpc.com')),
    [arbitrum.id]: http(getRpcUrl('arbitrum', 'https://arbitrum.llamarpc.com')),
    [base.id]: http(getRpcUrl('base', 'https://base.llamarpc.com')),
  },
  ssr: true,
}); 
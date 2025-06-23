/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * WalletConnect Project ID from cloud.walletconnect.com
   * Required for wallet connections via WalletConnect protocol
   */
  readonly VITE_WALLET_CONNECT_PROJECT_ID: string;
  
  /**
   * RPC URL for Ethereum Mainnet
   * Example: https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY
   */
  readonly VITE_RPC_URL_MAINNET?: string;
  
  /**
   * RPC URL for Polygon
   * Example: https://polygon-mainnet.g.alchemy.com/v2/YOUR_API_KEY
   */
  readonly VITE_RPC_URL_POLYGON?: string;
  
  /**
   * RPC URL for Optimism
   * Example: https://opt-mainnet.g.alchemy.com/v2/YOUR_API_KEY
   */
  readonly VITE_RPC_URL_OPTIMISM?: string;
  
  /**
   * RPC URL for Arbitrum
   * Example: https://arb-mainnet.g.alchemy.com/v2/YOUR_API_KEY
   */
  readonly VITE_RPC_URL_ARBITRUM?: string;
  
  /**
   * RPC URL for Base
   * Example: https://mainnet.base.org
   */
  readonly VITE_RPC_URL_BASE?: string;
  
  /**
   * Optional Alchemy API key for mainnet RPC
   */
  readonly VITE_ALCHEMY_MAINNET_KEY?: string;
  
  /**
   * Optional Infura API key for RPC connections
   */
  readonly VITE_INFURA_API_KEY?: string;
  
  /**
   * Application environment (development, staging, production)
   */
  readonly VITE_APP_ENV?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 
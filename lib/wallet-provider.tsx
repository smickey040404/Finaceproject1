'use client'

import { ReactNode } from 'react'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { mainnet, optimism, base } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { getDefaultWallets, RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || 'YOUR_PROJECT_ID'

// Configure chains & providers
const { chains, provider } = configureChains(
  [mainnet, optimism, base],
  [
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID || "" }),
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID || "" }),
    publicProvider()
  ]
)

// Set up wagmi config
const { connectors } = getDefaultWallets({
  appName: 'Klik Finance Fork',
  projectId,
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

interface WalletProviderProps {
  children: ReactNode
}

export function WalletProvider({ children }: WalletProviderProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains}
        theme={{
          lightMode: lightTheme({
            accentColor: '#4f46e5',
            borderRadius: 'large',
          }),
          darkMode: darkTheme({
            accentColor: '#8b5cf6',
            borderRadius: 'large',
          }),
        }}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
} 
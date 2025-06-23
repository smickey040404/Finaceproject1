import React, { useState } from 'react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import TokenTable from './components/TokenTable';
import Footer from './components/Footer';
import { useAccount } from 'wagmi';

interface TokenData {
  name: string;
  symbol: string;
  initialSupply: string;
  maxSupply: string;
  creator: string;
  createdAt: string;
  contractAddress: string;
  marketCap?: string;
  id?: string;
}

function App() {
  const { isConnected } = useAccount();
  const [tokens, setTokens] = useState<TokenData[]>([]);

  // Handle token creation
  const handleCreateToken = (newToken: TokenData) => {
    const tokenWithMarketCap = {
      ...newToken,
      id: `token-${Date.now()}`,
      marketCap: `$${(parseFloat(newToken.initialSupply) * 0.01).toLocaleString()}`,
    };
    
    setTokens(prevTokens => [tokenWithMarketCap, ...prevTokens]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Ticker tokens={tokens} />
      
      <main className="flex min-h-screen flex-col items-center p-4 dark:bg-gray-900">
        <div className="w-full max-w-5xl mx-auto">
          <Hero onCreateToken={handleCreateToken} />
          
          <div className="transition-all duration-500 ease-in-out w-full mb-[-120px] opacity-0 h-40 pointer-events-none"></div>
          
          <TokenTable tokens={tokens} isConnected={isConnected} />
          
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
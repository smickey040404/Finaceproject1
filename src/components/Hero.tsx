import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import TokenCreator from './TokenCreator';

interface TokenData {
  name: string;
  symbol: string;
  initialSupply: string;
  maxSupply: string;
  creator: string;
  createdAt: string;
  contractAddress: string;
}

interface HeroProps {
  onCreateToken: (tokenData: TokenData) => void;
}

const Hero: React.FC<HeroProps> = ({ onCreateToken }) => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const [showTokenCreator, setShowTokenCreator] = useState(false);

  const handleCreateToken = (tokenData: TokenData) => {
    onCreateToken(tokenData);
    // In a real app, you would save this to a database or blockchain
    console.log('Token created:', tokenData);
  };

  const handleButtonClick = () => {
    if (!isConnected) {
      if (openConnectModal) {
        openConnectModal();
      }
    } else {
      setShowTokenCreator(true);
    }
  };

  return (
    <div className="text-center mt-8 mb-8">
      <h1 
        className="dark:!text-white"
        style={{
          fontSize: '3.5rem',
          fontWeight: '900',
          letterSpacing: '-0.04em',
          color: '#0a0a23',
          lineHeight: '1.1'
        }}
      >
        Launch an Ethereum coin in seconds
      </h1>
      <div style={{ color: '#6b7280', fontSize: '1.1rem', marginTop: '8px' }}>
        Create, launch, and share your own token in a few kliks. No code. No hassle.
      </div>
      <button 
        onClick={handleButtonClick}
        className="dark:bg-gray-800 dark:text-white dark:border dark:border-gray-600 hover:shadow-lg transition-all duration-200"
        style={{
          width: '100%',
          maxWidth: '420px',
          margin: '32px auto 0',
          display: 'block',
          padding: '15px 0',
          borderRadius: '10px',
          fontWeight: '700',
          fontSize: '18px',
          background: 'linear-gradient(90deg, #84B9FD 0%, #E8DCE8 33%, #DDB9F5 66%, #A19CF4 100%)',
          color: '#18181b',
          boxShadow: '0 2px 16px #b6c7f522',
          border: 'none',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        {isConnected ? 'Launch Your Token' : 'Connect Wallet'}
      </button>

      {/* Display Token Creator Modal */}
      {showTokenCreator && (
        <TokenCreator 
          onClose={() => setShowTokenCreator(false)} 
          onCreateToken={handleCreateToken} 
        />
      )}
    </div>
  );
};

export default Hero;
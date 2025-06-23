import React, { useState } from 'react';
import { useAccount } from 'wagmi';

interface TokenData {
  name: string;
  symbol: string;
  initialSupply: string;
  maxSupply: string;
  creator: string;
  createdAt: string;
  contractAddress: string;
}

interface TokenCreatorProps {
  onClose: () => void;
  onCreateToken: (tokenData: TokenData) => void;
}

const TokenCreator: React.FC<TokenCreatorProps> = ({ onClose, onCreateToken }) => {
  const { address } = useAccount();
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [initialSupply, setInitialSupply] = useState('1000000');
  const [maxSupply, setMaxSupply] = useState('1000000');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleCreateToken = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!address) {
      setError('Please connect your wallet first');
      return;
    }
    
    if (!tokenName || !tokenSymbol || !initialSupply) {
      setError('Please fill in all required fields');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // In a real implementation, here you would:
      // 1. Call a smart contract to deploy the token
      // 2. Wait for transaction confirmation
      // 3. Get the token contract address
      
      // For the demo, we're simulating a successful token creation
      setTimeout(() => {
        const newToken: TokenData = {
          name: tokenName,
          symbol: tokenSymbol,
          initialSupply,
          maxSupply,
          creator: address || '',
          createdAt: new Date().toISOString(),
          contractAddress: `0x${Math.random().toString(16).substr(2, 40)}` // Random address for demo
        };
        
        onCreateToken(newToken);
        setIsLoading(false);
        onClose();
      }, 2000);
    } catch (err) {
      setError('Failed to create token. Please try again.');
      setIsLoading(false);
      console.error(err);
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Create Your Token</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleCreateToken}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Token Name *
            </label>
            <input
              type="text"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="e.g. My Awesome Token"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Token Symbol *
            </label>
            <input
              type="text"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="e.g. MAT"
              maxLength={8}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Initial Supply *
            </label>
            <input
              type="number"
              value={initialSupply}
              onChange={(e) => setInitialSupply(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="e.g. 1000000"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Maximum Supply *
            </label>
            <input
              type="number"
              value={maxSupply}
              onChange={(e) => setMaxSupply(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="e.g. 1000000"
              required
            />
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 rounded-md font-bold transition-colors"
              style={{
                background: 'linear-gradient(90deg, #84B9FD 0%, #E8DCE8 33%, #DDB9F5 66%, #A19CF4 100%)',
                color: '#18181b',
              }}
            >
              {isLoading ? 'Creating...' : 'Create Token'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TokenCreator; 
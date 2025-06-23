import React from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';

const ConnectWalletButton: React.FC = () => {
  const { openConnectModal } = useConnectModal();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  const handleClick = () => {
    if (isConnected) {
      disconnect();
    } else if (openConnectModal) {
      openConnectModal();
    }
  };

  // Format address for display (0x1234...5678)
  const formatAddress = (address: string | undefined) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
      type="button"
      onClick={handleClick}
    >
      {isConnected ? formatAddress(address) : 'Connect Wallet'}
    </button>
  );
};

export default ConnectWalletButton; 
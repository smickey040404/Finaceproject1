  import React from 'react';

interface TokenData {
  name: string;
  symbol: string;
  initialSupply?: string;
  maxSupply?: string;
  creator: string;
  createdAt?: string;
  contractAddress: string;
  marketCap?: string;
  id?: string;
  image?: string;
}

interface TickerProps {
  tokens: TokenData[];
}

const getRandomColor = () => {
  const colors = [
    'rgb(139, 143, 255)', 
    'rgb(242, 184, 255)', 
    'rgb(127, 218, 146)',
    'rgb(255, 191, 133)',
    'rgb(149, 208, 240)',
    'rgb(255, 151, 187)'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getTimeAgo = (dateString?: string) => {
  if (!dateString) return 'just now';
  
  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now.getTime() - past.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  
  const diffHrs = Math.floor(diffMins / 60);
  if (diffHrs < 24) return `${diffHrs}h ago`;
  
  const diffDays = Math.floor(diffHrs / 24);
  return `${diffDays}d ago`;
};

const Ticker: React.FC<TickerProps> = ({ tokens }) => {
  // Default ticker items when no user tokens exist
  const defaultTickerItems = [
    {
      id: '1',
      name: 'WW3',
      symbol: 'WW3',
      creator: '0x99A...9bd',
      timeAgo: '2m ago',
      backgroundColor: 'rgb(139, 143, 255)',
      image: 'https://dweb.link/ipfs/QmRsJS14pRVD4iQFe3gjfTH4x5b11ZXaaAs8f6gRH498Nn',
      contractAddress: '0xe21530a1BABCC099406e46217e1701e889EB8848'
    },
    {
      id: '2',
      name: 'btc',
      symbol: 'btc',
      creator: '0x262...B14',
      timeAgo: '4m ago',
      backgroundColor: 'rgb(242, 184, 255)',
      image: 'https://dweb.link/ipfs/QmfQ7mSQzLQNVK1QzUi9cNixUEqYbi8NrvkfwUoAknaSm6',
      contractAddress: '0x58935085Eb88aF869709F2dD6de50cFD94c5F5B2'
    },
    {
      id: '3',
      name: 'KOKO',
      symbol: 'KOKO',
      creator: '0xD31...c4f',
      timeAgo: '8m ago',
      backgroundColor: 'rgb(127, 218, 146)',
      image: null,
      contractAddress: '0x9C3B25D3D5C974e8b23298A564cD74EF11Da8191'
    }
  ];

  // Prepare display items - use user tokens if available
  const displayItems = tokens.length > 0 
    ? tokens.slice(0, 3).map(token => ({
        id: token.id || `token-${Date.now()}`,
        name: token.name,
        symbol: token.symbol,
        creator: `${token.creator.substring(0, 5)}...${token.creator.substring(token.creator.length - 3)}`,
        timeAgo: getTimeAgo(token.createdAt),
        backgroundColor: getRandomColor(),
        image: token.image,
        contractAddress: token.contractAddress
      }))
    : defaultTickerItems;

  return (
    <div className="w-full flex justify-center dark:bg-gray-900 z-40 pt-8" style={{ minHeight: '60px' }}>
      <div className="w-full max-w-[1085px] px-4 mx-auto">
        <div className="flex flex-row gap-3 mb-6 flex-wrap">
          {displayItems.map((item) => (
            <div 
              key={item.id}
              className="flex items-center justify-between rounded-xl p-2 border min-w-[220px] flex-1 bg-transparent"
              style={{ background: item.backgroundColor, borderColor: 'transparent' }}
            >
              <div className="flex items-center gap-2">
                {item.image ? (
                  <img 
                    alt={item.name}
                    className="object-cover rounded-2xl"
                    src={item.image}
                    style={{ width: '40px', height: '40px' }}
                  />
                ) : (
                  <div 
                    className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-700 text-xl font-bold text-gray-600 dark:text-gray-300"
                    style={{ width: '40px', height: '40px', fontSize: '22px' }}
                  >
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="text-sm min-w-0" style={{ fontWeight: 'bold' }}>
                  <a 
                    href={`https://etherscan.io/address/${item.creator}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'black' }}
                  >
                    {item.creator}
                  </a>
                  <span style={{ color: 'black' }}> created </span>
                  <a 
                    href={`https://dexscreener.com/ethereum/${item.contractAddress}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'black' }}
                  >
                    ${item.symbol}
                  </a>
                </div>
              </div>
              <div className="text-xs" style={{ color: 'white', fontWeight: 'bold' }}>
                {item.timeAgo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
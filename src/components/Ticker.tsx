import React from 'react';

interface TickerItem {
  id: string;
  name: string;
  symbol: string;
  creator: string;
  timeAgo: string;
  backgroundColor: string;
  image?: string;
}

const Ticker = () => {
  const tickerItems: TickerItem[] = [
    {
      id: '1',
      name: 'WW3',
      symbol: 'WW3',
      creator: '0x99A...9bd',
      timeAgo: '2m ago',
      backgroundColor: 'rgb(139, 143, 255)',
      image: 'https://dweb.link/ipfs/QmRsJS14pRVD4iQFe3gjfTH4x5b11ZXaaAs8f6gRH498Nn'
    },
    {
      id: '2',
      name: 'btc',
      symbol: 'btc',
      creator: '0x262...B14',
      timeAgo: '4m ago',
      backgroundColor: 'rgb(242, 184, 255)',
      image: 'https://dweb.link/ipfs/QmfQ7mSQzLQNVK1QzUi9cNixUEqYbi8NrvkfwUoAknaSm6'
    },
    {
      id: '3',
      name: 'KOKO',
      symbol: 'KOKO',
      creator: '0xD31...c4f',
      timeAgo: '8m ago',
      backgroundColor: 'rgb(127, 218, 146)',
      image: null
    }
  ];

  return (
    <div className="w-full flex justify-center dark:bg-gray-900 z-40 pt-8" style={{ minHeight: '60px' }}>
      <div className="w-full max-w-[1085px] px-4 mx-auto">
        <div className="flex flex-row gap-3 mb-6 flex-wrap">
          {tickerItems.map((item) => (
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
                    href={`https://dexscreener.com/ethereum/${item.creator}`}
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
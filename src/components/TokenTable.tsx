import React, { useState } from 'react';
import { ChevronDown, Search, Coins, ShoppingCart } from 'lucide-react';

interface Token {
  id: string;
  name: string;
  symbol: string;
  marketCap: string;
  creator: string;
  createdTime: string;
  image?: string;
  contractAddress: string;
}

const TokenTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Newest');

  const tokens: Token[] = [
    {
      id: '1',
      name: 'WW3',
      symbol: 'WW3',
      marketCap: '$6k',
      creator: '0x99AAdCa0da3A87CdC55a45A5Bfb8f78913d9A9bd',
      createdTime: '2m ago',
      image: 'https://dweb.link/ipfs/QmRsJS14pRVD4iQFe3gjfTH4x5b11ZXaaAs8f6gRH498Nn',
      contractAddress: '0xe21530a1BABCC099406e46217e1701e889EB8848'
    },
    {
      id: '2',
      name: 'btc',
      symbol: 'btc',
      marketCap: '$3k',
      creator: '0x262Ab7f48434eCe8e99d1aB750Bb560C9D686B14',
      createdTime: '4m ago',
      image: 'https://dweb.link/ipfs/QmfQ7mSQzLQNVK1QzUi9cNixUEqYbi8NrvkfwUoAknaSm6',
      contractAddress: '0x58935085Eb88aF869709F2dD6de50cFD94c5F5B2'
    },
    {
      id: '3',
      name: 'KOKO',
      symbol: 'KOKO',
      marketCap: '$42k',
      creator: '0xD311eCe5d377695910d8603F2277BE90f85DEc4f',
      createdTime: '8m ago',
      contractAddress: '0x9C3B25D3D5C974e8b23298A564cD74EF11Da8191'
    },
    {
      id: '4',
      name: 'test',
      symbol: 'test',
      marketCap: '$3k',
      creator: '0xe23F15b80A473Eb01B6e979B23930c6Ca751551d',
      createdTime: '8m ago',
      contractAddress: '0xEEdeF938529F0E5035Be144ffb4D2d0E18230375'
    },
    {
      id: '5',
      name: 'Cactuar',
      symbol: 'CACTI',
      marketCap: '$5k',
      creator: '0x268a54504ef14038d48079283996d31EBBA038A1',
      createdTime: '9m ago',
      contractAddress: '0x17731448B1c5087Ec74A0E81C4b713e6B62251f7'
    }
  ];

  const DexScreenerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fillRule="evenodd" viewBox="0 0 252 300" focusable="false" className="text-gray-500 dark:text-gray-400" fill="currentColor">
      <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"></path>
      <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"></path>
    </svg>
  );

  const filteredTokens = tokens.filter(token =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <button 
            className="whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 min-w-[140px] flex justify-between items-center bg-white/50 dark:bg-white/5 border-gray-300 dark:border-gray-600 hover:bg-white/60 dark:hover:bg-white/10"
            type="button"
          >
            {sortBy}
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          
          <div className="relative">
            <input 
              type="text"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/50 dark:bg-white/5 border-gray-300 dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-white"
              placeholder="Search tokens"
              style={{ width: '180px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <button 
          className="justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 flex items-center gap-2 text-[#18181b] font-bold border-none dark:bg-gray-800 dark:text-white dark:border dark:border-gray-600"
          style={{
            background: 'linear-gradient(90deg, #84B9FD 0%, #E8DCE8 33%, #DDB9F5 66%, #A19CF4 100%)',
            boxShadow: '0 2px 16px #b6c7f522'
          }}
        >
          <Coins className="h-4 w-4" />
          <span className="hidden sm:inline">Collect Fees</span>
        </button>
      </div>

      {/* Table */}
      <div className="space-y-2">
        {/* Table Header */}
        <div className="px-1.5 py-1.5">
          <div 
            className="grid items-center justify-items-center w-full"
            style={{ gridTemplateColumns: '1fr auto auto 0.8fr 0.8fr', gap: '8px 2px' }}
          >
            <div className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 justify-self-start">
              Token
            </div>
            <div></div>
            <div className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 text-center">
              Mkt Cap
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 text-center">
              Creator
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 text-center">
              Created
            </div>
          </div>
        </div>

        {/* Token Rows */}
        {filteredTokens.map((token) => (
          <div 
            key={token.id}
            className="bg-white/20 dark:bg-white/5 rounded-lg border border-cyan-600 dark:border-cyan-600 p-1.5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors shadow-sm"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 4px 4px 8px' }}
          >
            <div 
              className="grid items-center justify-items-center w-full"
              style={{ gridTemplateColumns: '1fr auto auto 0.8fr 0.8fr', gap: '8px 2px' }}
            >
              {/* Token Info */}
              <div className="flex items-center gap-1 sm:gap-2 justify-self-start">
                <a 
                  href={`https://dexscreener.com/ethereum/${token.contractAddress}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {token.image ? (
                    <img 
                      alt={token.name}
                      className="object-cover rounded-lg w-12 h-12 sm:w-[78px] sm:h-[78px]"
                      src={token.image}
                    />
                  ) : (
                    <div className="flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-sm sm:text-lg font-bold text-gray-600 dark:text-gray-300 w-12 h-12 sm:w-[78px] sm:h-[78px]">
                      {token.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </a>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-xs sm:text-base text-gray-900 dark:text-white">
                    <span className="sm:hidden" style={{ whiteSpace: 'nowrap' }}>
                      {token.name.length > 8 ? `${token.name.substring(0, 8)}...` : token.name}
                    </span>
                    <span className="hidden sm:block" style={{ whiteSpace: 'nowrap' }}>
                      {token.name}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    <span className="sm:hidden" style={{ whiteSpace: 'nowrap' }}>
                      ${token.symbol}
                    </span>
                    <span className="hidden sm:block" style={{ whiteSpace: 'nowrap' }}>
                      ${token.symbol}
                    </span>
                  </div>
                  <div className="flex items-center mt-1 gap-1">
                    <a 
                      href={`https://dexscreener.com/ethereum/${token.contractAddress}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="View chart on DexScreener"
                      className="hover:opacity-80 transition-opacity ml-1"
                    >
                      <DexScreenerIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* Shopping Cart Button */}
              <div className="flex justify-center">
                <button 
                  className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 p-1 text-gray-700 transition-colors rounded-md border-none"
                  title="Choose trading bot"
                  style={{
                    backgroundColor: 'rgb(221, 201, 238)',
                    color: 'white',
                    minWidth: '24px',
                    height: '24px',
                    marginRight: '2px'
                  }}
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>

              {/* Market Cap */}
              <div className="text-xs sm:text-base font-semibold text-gray-900 dark:text-white text-center">
                {token.marketCap}
              </div>

              {/* Creator */}
              <div className="font-mono text-xs sm:text-sm text-gray-900 dark:text-white text-center">
                <b>
                  <a 
                    href={`https://etherscan.io/address/${token.creator}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="View on Etherscan"
                    className="hover:opacity-80 transition-opacity"
                  >
                    {token.creator.substring(0, 5)}...{token.creator.substring(token.creator.length - 3)}
                  </a>
                </b>
              </div>

              {/* Created Time */}
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                {token.createdTime}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-4">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Load more
        </button>
      </div>
    </div>
  );
};

export default TokenTable;
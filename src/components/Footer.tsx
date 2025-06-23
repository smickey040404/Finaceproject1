import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center mt-32 mb-6">
      {/* Stats Section */}
      <div style={{ marginBottom: '50px' }} className="flex justify-center gap-6 mb-6">
        <div 
          className="bg-white/70 dark:bg-white/20 rounded-xl border border-cyan-600/30 p-4 text-center min-w-[160px]"
          style={{ boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            Total KLIK's
          </div>
          <div 
            className="text-2xl font-extrabold dark:text-white"
            style={{
              background: 'linear-gradient(90deg, #84B9FD 0%, #E8DCE8 33%, #DDB9F5 66%, #A19CF4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <span className="dark:bg-none dark:text-white dark:[background:none!important] dark:[color:white!important] dark:[webkit-text-fill-color:white!important]">
              1,258
            </span>
          </div>
        </div>
        
        <div 
          className="bg-white/70 dark:bg-white/20 rounded-xl border border-cyan-600/30 p-4 text-center min-w-[160px]"
          style={{ boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            Ecosystem Marketcap
          </div>
          <div 
            className="text-2xl font-extrabold dark:text-white"
            style={{
              background: 'linear-gradient(90deg, #84B9FD 0%, #E8DCE8 33%, #DDB9F5 66%, #A19CF4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <span className="dark:bg-none dark:text-white dark:[background:none!important] dark:[color:white!important] dark:[webkit-text-fill-color:white!important]">
              $13.90M
            </span>
          </div>
        </div>
      </div>

      {/* Logo */}
      <img 
        src="https://i.ibb.co/gL1LBpLt/Untitled-removebg-preview.png" 
        alt="Footer Logo" 
        className="max-w-40 w-full h-auto mb-2" 
      />
      
      {/* Footer Links */}
      <div className="flex items-center gap-4 mt-2">
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-semibold hover:underline flex items-center text-sm sm:text-base hover:text-blue-600 transition-colors"
        >
          What's KLIK
        </a>
        <a 
          href="https://docs.klik.finance" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-semibold hover:underline flex items-center text-sm sm:text-base hover:text-blue-600 transition-colors"
        >
          Airdrop
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-semibold hover:underline flex items-center text-sm sm:text-base hover:text-blue-600 transition-colors"
        >
          Custom RPC
        </a>
        <a 
          href="https://t.me/klikdeploys" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-semibold hover:underline flex items-center text-sm sm:text-base hover:text-blue-600 transition-colors"
        >
          Deploys channel
        </a>
      </div>
    </div>
  );
};

export default Footer;
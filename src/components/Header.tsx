import React, { useState } from 'react';
import { HelpCircle as CircleHelp, PartyPopper, Moon, Sun, Menu, X } from 'lucide-react';
import ConnectWalletButton from './ConnectWalletButton';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full flex flex-col justify-center sticky top-0 z-50 transition-all duration-300 bg-white/60 backdrop-blur-sm shadow-md dark:bg-gray-900/80" style={{ minHeight: '80px' }}>
      <div className="flex justify-between items-center max-w-[1085px] w-full px-4 mx-auto" style={{ minHeight: '80px' }}>
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img 
            src="https://i.ibb.co/bMP1WSNV/image-removebg-preview.png" 
            alt="Klik Logo" 
            className="h-[50px] sm:h-[70px]" 
          />
          
          {/* Desktop Navigation Icons */}
          <div className="hidden sm:flex items-center gap-2">
            <button 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 !h-8 sm:!h-10 !w-8 sm:!w-10 !p-0 hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#f1f1f1', border: '2px solid white', borderRadius: '12px' }}
              title="What's KLIK?"
            >
              <CircleHelp className="!h-4 !w-4 text-gray-700" />
            </button>
            
            <button 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 !h-8 sm:!h-10 !w-8 sm:!w-10 !p-0 hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#f1f1f1', border: '2px solid white', borderRadius: '12px' }}
              title="Airdrop"
            >
              <PartyPopper className="!h-4 !w-4 text-gray-700" />
            </button>
            
            <button 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 !h-8 sm:!h-10 !w-8 sm:!w-10 !p-0 hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#f1f1f1', border: '2px solid white', borderRadius: '12px' }}
              title="Follow us on X"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"></path>
              </svg>
            </button>
            
            <button 
              onClick={toggleTheme}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 !h-8 sm:!h-10 !w-8 sm:!w-10 !p-0 hover:opacity-80 transition-opacity"
              aria-label="Toggle theme"
              style={{ backgroundColor: '#f1f1f1', border: '2px solid white', borderRadius: '12px' }}
            >
              {isDark ? <Sun className="!h-4 !w-4 text-gray-700" /> : <Moon className="!h-4 !w-4 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden relative">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 !h-8 !w-8 !p-0 hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#f1f1f1', border: '2px solid white', borderRadius: '12px' }}
              title="Menu"
            >
              {isMobileMenuOpen ? <X className="!h-4 !w-4 text-gray-700" /> : <Menu className="!h-4 !w-4 text-gray-700" />}
            </button>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                  <CircleHelp className="h-4 w-4" />
                  What's KLIK?
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                  <PartyPopper className="h-4 w-4" />
                  Airdrop
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"></path>
                  </svg>
                  Follow on X
                </button>
                <button onClick={toggleTheme} className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  Toggle Theme
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Connect Wallet Button */}
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <ConnectWalletButton />
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <hr className="dark:!border-t-gray-700" style={{ border: 'none', borderTop: '1.5px solid #E5E7EB', width: '100%', margin: '0' }} />
    </header>
  );
};

export default Header;
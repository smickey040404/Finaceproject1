import React from 'react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import TokenTable from './components/TokenTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Ticker />
      
      <main className="flex min-h-screen flex-col items-center p-4 dark:bg-gray-900">
        <div className="w-full max-w-5xl mx-auto">
          <Hero />
          
          <div className="transition-all duration-500 ease-in-out w-full mb-[-120px] opacity-0 h-40 pointer-events-none"></div>
          
          <TokenTable />
          
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
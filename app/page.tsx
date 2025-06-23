"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Twitter, Globe } from "lucide-react"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { useToast } from "@/components/ui/use-toast"
import { ConnectButton } from '@rainbow-me/rainbowkit'

const recentTokens = [
  {
    id: 1,
    name: "ethereum summer...",
    symbol: "$ethereum summer...",
    icon: "E",
    iconClass: "token-icon-e",
    marketCap: "$4k",
    creator: "0xa7...d07",
    created: "26s ago",
  },
  {
    id: 2,
    name: "USBEE",
    symbol: "$USBEE",
    icon: "USBEE",
    iconClass: "token-icon-usbee",
    marketCap: "$4k",
    creator: "0xa4...bf9",
    created: "5m ago",
  },
]

const notifications = [
  { 
    text: "0xA75...d07 created $ethereum s...",
    time: "26s ago", 
    color: "notification-purple",
    icon: "E" 
  },
  { 
    text: "0xA4B...Df9 created $USBEE",
    time: "5m ago", 
    color: "notification-pink",
    icon: "USBE" 
  },
  { 
    text: "0x194...07b created $ES",
    time: "6m ago", 
    color: "notification-green",
    icon: "E" 
  },
]

const walletOptions = [
  { name: "Rainbow", icon: "🌈" },
  { name: "Coinbase Wallet", icon: "🔵" },
  { name: "MetaMask", icon: "🦊" },
  { name: "WalletConnect", icon: "🔗" },
]

export default function KlikFinance() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("Newest")
  const { toast } = useToast()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Notification Bar */}
      <div className="flex gap-2 p-4 overflow-x-auto">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm whitespace-nowrap ${notification.color}`}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">
                {notification.icon}
              </div>
              <span>{notification.text}</span>
              <span className="opacity-75">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Launch an Ethereum coin in seconds
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Create, launch, and share your own token in a few kliks. No code. No hassle.
        </p>

        <div className="flex justify-center">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== 'loading'
              const connected = ready && account && chain

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    style: {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {!connected ? (
                    <Button
                      onClick={openConnectModal}
                      className="klik-button-gradient text-white px-12 py-6 rounded-full text-lg font-medium h-auto"
                    >
                      Connect Wallet
                    </Button>
                  ) : (
                    <Button
                      onClick={openAccountModal}
                      className="klik-button-gradient text-white px-12 py-6 rounded-full text-lg font-medium h-auto"
                    >
                      {account.displayName}
                    </Button>
                  )}
                </div>
              )
            }}
          </ConnectButton.Custom>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 mb-6 max-w-5xl mx-auto w-full gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Select defaultValue="Newest">
            <SelectTrigger className="w-full md:w-32 rounded-full bg-white border-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Newest">Newest</SelectItem>
              <SelectItem value="Oldest">Oldest</SelectItem>
              <SelectItem value="MarketCap">Market Cap</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Search tokens"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 rounded-full border-0"
          />
        </div>

        <Button 
          className="flex gap-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-full"
          onClick={() => toast({
            title: "Collecting fees",
            description: "Processing your fee collection request...",
          })}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V12C2 9.79086 3.79086 8 6 8H18C20.2091 8 22 9.79086 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 14.5C18.8284 14.5 19.5 13.8284 19.5 13C19.5 12.1716 18.8284 11.5 18 11.5C17.1716 11.5 16.5 12.1716 16.5 13C16.5 13.8284 17.1716 14.5 18 14.5Z" fill="white"/>
            <path d="M16 8V13.5C16 14.8807 14.8807 16 13.5 16H6C4.61929 16 3.5 14.8807 3.5 13.5V6C3.5 4.61929 4.61929 3.5 6 3.5H13.5C14.8807 3.5 16 4.61929 16 6V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 12H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Collect Fees
        </Button>
      </div>

      {/* Token Table */}
      <div className="max-w-5xl mx-auto px-4 mb-12 w-full">
        <div className="token-table bg-white">
          <div className="grid grid-cols-4 gap-4 p-4 text-sm font-medium text-gray-500 border-b border-gray-100">
            <div>Token</div>
            <div>Mkt Cap</div>
            <div>Creator</div>
            <div>Created</div>
          </div>

          {recentTokens.map((token) => (
            <div
              key={token.id}
              className="grid grid-cols-4 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={token.iconClass}>
                  {token.icon}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{token.name}</div>
                  <div className="text-sm text-gray-500">{token.symbol}</div>
                  <div className="flex gap-1 mt-1">
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                    <Twitter className="w-3 h-3 text-gray-400" />
                    <Globe className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Badge className="bg-purple-100 text-purple-700 font-medium rounded-full px-2">
                  {token.marketCap}
                </Badge>
              </div>
              <div className="flex items-center text-gray-500 text-sm">{token.creator}</div>
              <div className="flex items-center text-gray-500 text-sm">{token.created}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

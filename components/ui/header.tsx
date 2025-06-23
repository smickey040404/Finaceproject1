"use client"

import Link from "next/link"
import { Send, HelpCircle, RefreshCw, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ConnectButton } from '@rainbow-me/rainbowkit'

export function Header() {
  const { toast } = useToast()

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <div className="w-9 h-9 bg-[#3b82f6] rounded-lg flex items-center justify-center transform -rotate-12">
              <Send className="w-5 h-5 text-white transform rotate-12" />
            </div>
            <div className="absolute -top-2 -left-2">
              <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
            </div>
            <div className="absolute -top-1 -left-0.5">
              <div className="w-1 h-1 bg-[#3b82f6] rounded-full" />
            </div>
          </div>
          <span className="text-2xl font-bold">klik</span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100"
          onClick={() => toast({
            title: "Help Center",
            description: "Access guides and documentation for Klik Finance.",
          })}
        >
          <HelpCircle className="w-4 h-4 text-gray-500" />
        </button>
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100"
          onClick={() => toast({
            title: "Refreshing data",
            description: "Getting the latest blockchain data...",
          })}
        >
          <RefreshCw className="w-4 h-4 text-gray-500" />
        </button>
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100"
        >
          <Moon className="w-4 h-4 text-gray-500" />
        </button>
        <ConnectButton
          showBalance={false}
          chainStatus="icon"
          accountStatus="address"
        />
      </div>
    </header>
  )
} 
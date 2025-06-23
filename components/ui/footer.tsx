"use client"

import Link from "next/link"
import { Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-6 text-center">
      <div className="mx-auto px-4">
        <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          klik
        </div>
        <div className="flex justify-center gap-8 text-sm text-gray-500">
          <Link href="#" className="hover:text-gray-700">What's KLIK</Link>
          <Link href="#" className="hover:text-gray-700">Airdrop</Link>
          <Link href="#" className="hover:text-gray-700">Custom RPC</Link>
          <Link href="#" className="hover:text-gray-700">Deploys channel</Link>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          <Link href="https://twitter.com/klikdotfinance" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
            <Twitter className="h-4 w-4 text-gray-500" />
          </Link>
          <Link href="https://github.com/klik-finance" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
            <Github className="h-4 w-4 text-gray-500" />
          </Link>
        </div>
      </div>
    </footer>
  )
} 
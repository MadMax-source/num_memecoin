"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Twitter, Send, Instagram, Music, Globe, Menu, Copy, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { Connection, PublicKey } from "@solana/web3.js"

export function HeroSection() {

    const contractAddress = "6BcKLX6yhkcfoc36KgeM2Mm1R4ARPCA1qvfB9TkYTfLQ"
    const [holders, setHolders] = useState<number | null>(null)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress)
    }

     useEffect(() => {
    const fetchHolders = async () => {
      try {
        const RPC_URL = "https://mainnet.helius-rpc.com/?api-key=77aae9b3-ad37-4523-8caf-dea409d5519e"
        const connection = new Connection(RPC_URL, "confirmed")
        const mintPubkey = new PublicKey(contractAddress)

        const tokenAccounts = await connection.getTokenLargestAccounts(mintPubkey)
        const nonZero = tokenAccounts.value.filter(acc => acc.uiAmount !== null && acc.uiAmount > 0)
        setHolders(nonZero.length)
      } catch (error) {
        console.error("Failed to fetch token holders:", error)
      }
    }

    fetchHolders()
  }, [])

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="mb-8">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 mb-4 tracking-tight">
                        The Infinite (NUM1)
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight">
                    NUM1 is not just a token – it's a digital asset backed by a real-world ecosystem.
                </h2>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                    <p className="text-sm text-gray-300 mb-2">Contract:</p>
                    <div className="flex items-center justify-center space-x-2">
                        <code className="text-white font-mono text-sm break-all">{contractAddress}</code>
                        <Button size="sm" variant="ghost" onClick={copyToClipboard} className="text-cyan-400 hover:text-cyan-300">
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    
                    <Link
  href="https://jup.ag/swap/6BcKLX6yhkcfoc36KgeM2Mm1R4ARPCA1qvfB9TkYTfLQ-So11111111111111111111111111111111111111112"
  target="_blank"
  rel="noopener noreferrer"
>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg px-8 py-4"
                    >
                        BUY $NUM
                    </Button>
                    </Link>

                    <Link 
                    href="https://dexscreener.com/solana/6BcKLX6yhkcfoc36KgeM2Mm1R4ARPCA1qvfB9TkYTfLQ"
  target="_blank"
  rel="noopener noreferrer"
                    >
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8 py-4 bg-transparent"
                    >
                        CHART
                    </Button>
                    </Link>
                </div>

                <div className="flex justify-center space-x-6 mb-12">
                    <Link href="https://x.com/numtoken_?t=Byor5U1IeJsSZZRedaTAhw&s=09" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400">
                            <Twitter className="h-6 w-6" />
                        </Button>
                    </Link>
                    <Link href="https://t.me/num1coin" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400">
                            <Send className="h-6 w-6" />
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400">
                        <Instagram className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400">
                        <Music className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400">
                        <Globe className="h-6 w-6" />
                    </Button>
                </div>

                <Card className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-400/30 backdrop-blur-sm max-w-md mx-auto">
                    <div className="p-6 text-center">
                        <div className="text-4xl font-black text-yellow-400 mb-2"> {holders !== null ? `+${holders.toLocaleString()}` : "Loading..."}</div>
                        <div className="text-white font-semibold">Number Of Holders</div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Twitter, Send, Instagram, Music, Globe, Copy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Connection, PublicKey } from "@solana/web3.js"
import { Fade, Zoom } from "react-awesome-reveal";
import WaveBackground from "@/components/background/headerBg"


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
                const nonZero = tokenAccounts.value.filter((acc: { uiAmount: number | null }) => acc.uiAmount !== null && acc.uiAmount > 0)
                setHolders(nonZero.length)
            } catch (error) {
                console.error("Failed to fetch token holders:", error)
            }
        }

        fetchHolders()
    }, [])

    return (
        <section className="bg-[url('/background/heroimg.svg')] bg-cover bg-no-repeat bg-center  relative py-20 overflow-hidden flex flex-row items-center">
           
           
           {/*
            <div className="absolute inset-0  "/>
           */}
           <WaveBackground />
            {/*bg-[#8a4e23] */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
                <Fade>
                    <div className=" relative z-10 container mx-auto px-4 lg:px-0 xl:px-4 w-full ">
                        <div className="mb-8">
                            <h1 className="text-4xl text-center lg:text-left text-[#432818] lg:text-5xl font-black  mb-4 tracking-tight">
                                Secure Transactions with Complete Trust | $NUM
                            </h1>
                            <div className="w-32 h-1  bg-[#a1673a] mx-auto lg:mx-0  mb-8" />
                        </div>

                        <h2 className="text-lg text-center  lg:text-left md:text-base text-[#a1673a] bg-[#e0d6cd]	 mb-6 leading-tight">
                            NUM is not just a token—it's a digital asset powering a global sustainable activewear brand crafted in Riyadh. Backed by a real-world ecosystem, NUM supports high-quality sportswear made entirely from recycled materials for modern, eco-conscious consumers.
                        </h2>
                        <div className="bg-[#a1673a]/10 backdrop-blur-sm	 rounded-lg p-4 mb-8 max-w-fit mx-auto lg:mx-0">
                            <p className="text-sm text-[#a1673a] mb-2 text-center">Contract:</p>
                            <div className="flex items-center justify-center space-x-2">
                                <code className="text-[#432818] font-mono text-sm break-all">{contractAddress}</code>
                                <Button size="sm" variant="ghost" onClick={copyToClipboard} className="text-[#a1673a] hover:text-[#432818]">
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12 mx-auto max-w-fit lg:mx-0">
  <Link
    href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=6BcKLX6yhkcfoc36KgeM2Mm1R4ARPCA1qvfB9TkYTfLQ"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <Button
      size="lg"
      className="w-full sm:w-auto rounded-md border-gray-300 bg-gradient-to-br from-[#432818] via-[#6e3c26] to-[#8a4e23] 
      hover:from-[#5a2f1f] hover:via-[#7f412a] hover:to-[#b35a28] 
      text-white font-bold text-lg px-8 py-4 shadow-md hover:shadow-lg transition-all duration-200"
    >
      BUY $NUM
    </Button>
  </Link>

  <Link
    href="https://dexscreener.com/solana/6BcKLX6yhkcfoc36KgeM2Mm1R4ARPCA1qvfB9TkYTfLQ"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <Button
      size="lg"
      variant="outline"
      className="w-full sm:w-auto border-gray-300 rounded-md text-[#432818] hover:bg-[#432818] hover:text-white font-bold text-lg px-8 py-4 bg-transparent shadow-md"
    >
      VIEW CHART
    </Button>
  </Link>
</div>


                        <div className="flex max-w-fit  space-x-6 mb-12 mx-auto lg:mx-0">
                            <Link href="https://x.com/numtoken_?t=Byor5U1IeJsSZZRedaTAhw&s=09" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" className="text-[#a1673a] hover:text-[#432818]">
                                    <Twitter className="h-6 w-6" />
                                </Button>
                            </Link>
                            <Link href="https://t.me/num1coin" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" className="text-[#a1673a] hover:text-[#432818]">
                                    <Send className="h-6 w-6" />
                                </Button>
                            </Link>
                            <Button variant="ghost" size="icon" className="text-[#a1673a] hover:text-[#432818]">
                                <Instagram className="h-6 w-6" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-[#a1673a] hover:text-[#432818]">
                                <Music className="h-6 w-6" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-[#a1673a] hover:text-[#432818]">
                                <Globe className="h-6 w-6" />
                            </Button>
                        </div>

                        <Zoom>
                            <Card className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-400/30 backdrop-blur-sm max-w-md mx-auto">
                                <div className="p-6 text-center">
                                    <div className="text-4xl font-black text-[#a1673a] mb-2"> {holders !== null ? `+${holders.toLocaleString()}` : "Loading..."}</div>
                                    <div className="text-[#432818] font-semibold">Number Of Holders</div>
                                </div>
                            </Card>
                        </Zoom>
                    </div>
                </Fade>
                <Fade>
                    <div className="h-[500px] sm:h-[600px] w-full relative">
                        <div className=" absolute  " />
                        <Image
                            src={"/background/numlogo.png"}
                            fetchPriority="high"
                            alt="Jumo Image "
                            fill
                            className={"object-contain object-top w-ful h-full bg-[#e0d6cd] rounded-full"}
                        />
                    </div>
                </Fade>
            </div>
        </section>
    )
}

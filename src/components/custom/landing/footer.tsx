
import { Button } from "@/components/ui/button"
import { Twitter, Send, Instagram, Copy, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    const contractAddress = "HGR2HkBpZBKb5Cr6TXPR9KgU2FbxVsAA54zm7DmQLNGQ"

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress)
    }

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-black py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className=" h-20 w-40 relative">
                            <Image src="/jumo-2.png" alt="NUM∞ Logo" fill className="rounded-full object-contain" />
                        </div>
                        <p className="text-gray-300 text-lg mb-6 max-w-md">
                            Your number, your identity. Represent your number. Be unique.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <p className="text-sm text-gray-400 mb-2">Contract Address:</p>
                            <div className="flex items-center space-x-2">
                                <code className="text-cyan-400 font-mono text-sm break-all">{contractAddress}</code>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={copyToClipboard}
                                    className="text-cyan-400 hover:text-cyan-300"
                                >
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#tokenomics" className="text-gray-300 hover:text-cyan-400 transition-colors">
                                    Tokenomics
                                </Link>
                            </li>
                            <li>
                                <Link href="#roadmap" className="text-gray-300 hover:text-cyan-400 transition-colors">
                                    Roadmap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Community</h3>
                        <div className="space-y-3">
                            <Link
                                href="https://t.me/num1coin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                                <Send className="h-4 w-4" />
                                <span>Telegram</span>
                            </Link>
                            <Link
                                href="https://x.com/numtoken_?t=Byor5U1IeJsSZZRedaTAhw&s=09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                                <Twitter className="h-4 w-4" />
                                <span>Twitter</span>
                            </Link>
                            <div className="flex items-center space-x-2 text-gray-300">
                                <Instagram className="h-4 w-4" />
                                <span>Instagram</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-400">@{new Date().getFullYear()} NUM∞ Token. All rights reserved.</p>
                        </div>
                        <div className="flex items-center space-x-6">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Terms of Service
                            </Link>
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
                                <TrendingUp className="h-5 w-5 text-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

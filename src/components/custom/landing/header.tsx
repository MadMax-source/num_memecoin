import { Button } from "@/components/ui/button"
import { Twitter, Send, Menu } from "lucide-react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export function Header() {
    return (
        <header className="overflow-hidden sticky top-0 z-50 border-b border-gray-300 bg-blue-600">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20"></div> */}
            <div className="container mx-auto px-4 py-6 relative z-10">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image src="/jumo.jpeg" alt="NUM∞ Logo" width={48} height={48} className="rounded-full" />
                        <span className="text-white font-bold text-xl">numtoken</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="https://t.me/num1coin" target="_blank" rel="noopener noreferrer" className="relative group">
                            <Button className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 border-0 text-white hover:from-cyan-500 hover:via-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                                <Send className="mr-2 h-4 w-4" />
                                TELEGRAM
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-md blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            </Button>
                        </Link>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="bg-gradient-to-b from-blue-900 to-black border-l border-cyan-400/30"
                            >
                                <div className="flex flex-col space-y-6 mt-8">
                                    <div className="flex items-center space-x-3 mb-8">
                                        <Image
                                            src="/jumo.jpeg"
                                            alt="NUM∞ Logo"
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <span className="text-white font-bold text-lg">NUM∞</span>
                                    </div>
                                    <Link href="#home" className="text-white hover:text-cyan-400 text-lg font-medium transition-colors">
                                        Home
                                    </Link>
                                    <Link href="#about" className="text-white hover:text-cyan-400 text-lg font-medium transition-colors">
                                        About
                                    </Link>
                                    <Link
                                        href="#tokenomics"
                                        className="text-white hover:text-cyan-400 text-lg font-medium transition-colors"
                                    >
                                        Tokenomics
                                    </Link>
                                    <Link href="#roadmap" className="text-white hover:text-cyan-400 text-lg font-medium transition-colors">
                                        Roadmap
                                    </Link>
                                    <Link
                                        href="#community"
                                        className="text-white hover:text-cyan-400 text-lg font-medium transition-colors"
                                    >
                                        Community
                                    </Link>
                                    <div className="border-t border-gray-600 pt-6 mt-8">
                                        <div className="flex space-x-4">
                                            <Link href="https://t.me/num1coin" target="_blank" rel="noopener noreferrer">
                                                <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400">
                                                    <Send className="h-5 w-5" />
                                                </Button>
                                            </Link>
                                            <Link
                                                href="https://x.com/numtoken_?t=Byor5U1IeJsSZZRedaTAhw&s=09"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400">
                                                    <Twitter className="h-5 w-5" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </header>

    )
}

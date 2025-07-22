import { Button } from "@/components/ui/button"
import { Twitter, Send, Menu } from "lucide-react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export function Header() {
    return (
        <header className="bg-[url('/background/headerimg.svg')] bg-cover bg-no-repeat bg-center overflow-hidden sticky top-0 z-50 border-b border-gray-400 shadow-md">
            {/*bg-[#e0d6cd]*/}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20"></div> */}
    
            <div className="container mx-auto px-4  relative z-10">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 h-20 w-40 relative">
                        <Image src="/jumo-2.png" alt="NUM∞ Logo" fill className="rounded-full object-contain" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="https://t.me/num1coin" target="_blank" rel="noopener noreferrer" className="relative group">
                            <Button className="rounded-md bg-gradient-to-r from-[#8a4e23] to-[#b06a33] text-white shadow-md hover:shadow-lg transition-all duration-200">
                                <Send className="mr-2 h-4 w-4" />
                                TELEGRAM
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-md blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            </Button>
                        </Link>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-[#b06a33] hover:bg-white/10">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="bg-[#8a4e23] border-l border-cyan-400/30"
                            >
                                <div className="flex flex-col space-y-6 mt-8">
                                    <div className="flex justify-start h-20 w-40 relative mb-8">
                                        <Image
                                            src="/jumo-2.png"
                                            alt="NUM∞ Logo"
                                            fill
                                            fetchPriority="high"
                                            className="rounded-full object-contain"
                                        />
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

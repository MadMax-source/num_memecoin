import { Card } from "@/components/ui/card"
import { Package, Globe, BadgeDollarSign } from "lucide-react"

export function Stats() {
    return (
        <section className="py-16   bg-[url('/background/aboutBg.svg')]  backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="bg-gradient-to-br from-[#a1673a] via-[#b77b4d] to-[#432818] text-white shadow-xl backdrop-blur-md border border-white/10">
                        <div className="p-6 text-center">
                            <Package className="h-12 w-12 text-[#e0d6cd] mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Real-World Utility</h3>
                            <p className="text-gray-300">NUM is integrated into a functioning e-commerce ecosystem offering real products</p>
                        </div>
                    </Card>
                    <Card className="bg-gradient-to-br from-[#a1673a] via-[#b77b4d] to-[#432818] text-white shadow-xl backdrop-blur-md border border-white/10">
                        <div className="p-6 text-center">
                            <Globe className="h-12 w-12 text-[#e0d6cd] mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Global Brand Development</h3>
                            <p className="text-gray-300">Focused on global expansion through online sales and visibility</p>
                        </div>
                    </Card>
                    <Card className="bg-gradient-to-br from-[#a1673a] via-[#b77b4d] to-[#432818] text-white shadow-xl backdrop-blur-md border border-white/10">
                        <div className="p-6 text-center">
                            <BadgeDollarSign className="h-12 w-12 text-[#e0d6cd] mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Digital Currency Use</h3>
                            <p className="text-gray-300">NUM token unlocks discounts, loyalty rewards, and access to exclusive pre-orders and limited drops.</p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

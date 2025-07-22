import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Zap } from "lucide-react"

export function Stats() {
    return (
        <section className="py-16   bg-[url('/background/aboutBg.svg')]  backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="bg-gradient-to-br from-[#a1673a] via-[#b77b4d] to-[#432818] text-white shadow-xl backdrop-blur-md border border-white/10">
                        <div className="p-6 text-center">
                            <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Real-World Utility</h3>
                            <p className="text-gray-300">Backed by a real-world ecosystem</p>
                        </div>
                    </Card>
                    <Card className="bg-gradient-to-br from-[#a1673a] via-[#b77b4d] to-[#432818] text-white shadow-xl backdrop-blur-md border border-white/10">
                        <div className="p-6 text-center">
                            <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Global Expansion</h3>
                            <p className="text-gray-300">Clubs launching in major cities Q1 2026</p>
                        </div>
                    </Card>
                    <Card className="bg-gradient-to-br from-[#a1673a] via-[#b77b4d] to-[#432818] text-white shadow-xl backdrop-blur-md border border-white/10">
                        <div className="p-6 text-center">
                            <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">AI Integration</h3>
                            <p className="text-gray-300">AI-powered shopping assistant in 2025</p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

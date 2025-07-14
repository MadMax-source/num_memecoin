import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Zap } from "lucide-react"

export function Stats() {
    return (
        <section className="py-16 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-400/30 backdrop-blur-sm">
                        <div className="p-6 text-center">
                            <TrendingUp className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Real-World Utility</h3>
                            <p className="text-gray-300">Backed by a real-world ecosystem</p>
                        </div>
                    </Card>
                    <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border-yellow-400/30 backdrop-blur-sm">
                        <div className="p-6 text-center">
                            <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Global Expansion</h3>
                            <p className="text-gray-300">Clubs launching in major cities Q1 2026</p>
                        </div>
                    </Card>
                    <Card className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border-purple-400/30 backdrop-blur-sm">
                        <div className="p-6 text-center">
                            <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">AI Integration</h3>
                            <p className="text-gray-300">AI-powered shopping assistant in 2025</p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

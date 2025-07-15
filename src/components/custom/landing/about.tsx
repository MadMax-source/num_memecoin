import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
    return (
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
            <div className="container mx-auto px-4">
                <div className="mx-auto">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                            <span className="w-4 h-1 bg-cyan-400 rounded-full" />
                            <span className="w-8 h-1 bg-cyan-400 rounded-full" />
                            <span className="w-4 h-1 bg-cyan-400 rounded-full" />
                            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-black">ABOUT THE NUM PROJECT</h2>
                    </div>

                    {/* Project Intro */}
                    <div className="sm:p-6 mb-10">
                        <p className="text-black text-sm md:text-base text-center  leading-relaxed mb-6 max-w-2xl mx-auto">
                            NUM is not just a token – it's a digital asset backed by a real-world ecosystem. It’s the official token
                            powering the fashion-tech brand NUM1, which already operates an online activewear store at{" "}
                            <Link
                                href="https://www.num1.shop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-blue-700 hover:text-blue-900"
                            >
                                www.num1.shop
                            </Link>
                            .
                        </p>
                        <p className="text-black text-sm md:text-base  text-center leading-relaxed max-w-2xl mx-auto">
                            <strong>Our Mission:</strong> To connect fashion, fitness, and blockchain in one seamless lifestyle
                            experience. NUM is built to integrate with both the e-commerce store and our upcoming fitness club network.
                        </p>
                    </div>

                    {/* Ecosystem Highlights */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <Section title="Ecosystem Highlights">
                        <li>
                            Activewear fashion brand with online presence at{" "}
                            <Link
                                href="https://www.num1.shop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-blue-700 hover:text-blue-900"
                            >
                                www.num1.shop
                            </Link>
                        </li>
                        <li>Future gamification modules for online users</li>
                        <li>Real-world Pilates & fitness club launches in Riyadh, Dubai, London, New York, Paris, Geneva, Kuwait, and Hong Kong starting Q1 2026</li>
                        <li>Integration with Apple Pay passkey for seamless club access</li>
                        <li>AI-powered shopping assistant launching in 2025 to personalize experience</li>
                        <li>Loyalty reward system tied directly to NUM holders</li>
                        <li>Smart access cards for project-wide services and upcoming strategic partnerships</li>
                        <li>Mobile application integrating all services</li>
                    </Section>

                    {/* Utility */}
                    <Section title="Utility of the Token">
                        <li>Discounted or free club memberships</li>
                        <li>Special product drops & early access</li>
                        <li>AI-driven e-commerce perks</li>
                        <li>Global club pass integration</li>
                        <li>Passive earning through future revenue-based rewards</li>
                    </Section>

                    {/* Roadmap */}
                    <Section title="Roadmap">
                        <li><strong>Q3 2025:</strong> Launch landing page and Telegram growth</li>
                        <li><strong>Q4 2025:</strong> Launch NUM token on major exchanges</li>
                        <li><strong>Q1 2026:</strong> Launch clubs in Riyadh, Dubai, London, New York, Paris, Geneva, Kuwait, and Hong Kong</li>
                        <li><strong>Q1 2026:</strong> Launch AI assistant & global pass system</li>
                        <li><strong>Q2 2026:</strong> Begin further international club expansion & reward system rollout</li>
                    </Section>

                    {/* Transparency */}
                    <div className="mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">Transparency</h3>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-md">
                            <p className="text-white text-sm md:text-base leading-relaxed">
                                Our project is real and verifiable – from the e-commerce store to the planned physical locations.
                                Investors can track development milestones and participate actively in shaping the future of NUM.
                            </p>
                        </div>
                    </div>

                   </div>
                    {/* Call to Action */}
                    <div className="text-center">
                        <div className="inline-block bg-white rounded-lg p-4 shadow-lg mb-6">
                            <span className="text-black font-bold text-xl">BUY $NUM</span>
                        </div>
                        <div className="max-w-2xl mx-auto w-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center">
                            <Image
                                src="/jumo-image.png"
                                alt="Family Token Character"
                                width={400}
                                height={200}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

// Reusable section component
function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">{title}</h3>
            <ul className="list-disc list-inside text-white text-sm md:text-base leading-relaxed space-y-3 bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-md">
                {children}
            </ul>
        </div>
    )
}

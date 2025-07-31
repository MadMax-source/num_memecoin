import AnimatedSolanaBackground from "@/components/background/animationSolBg";
import Image from "next/image"
import Link from "next/link"
import { Fade, Zoom } from "react-awesome-reveal";

export default function AboutUs() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-[#a1673a] via-[#b77b4d] to-[#432818]">
            <AnimatedSolanaBackground />
            <div className="relative z-10 container mx-auto px-4">
                <div className="mx-auto">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center space-x-2 bg-[#e0d6cd] text-white px-6 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 bg-[#432818] rounded-full" />
                            <span className="w-4 h-1 bg-[#432818] rounded-full" />
                            <span className="w-8 h-1 bg-[#432818] rounded-full" />
                            <span className="w-4 h-1 bg-[#432818] rounded-full" />
                            <span className="w-2 h-2 bg-[#432818] rounded-full" />
                        </div>
                        <Zoom>
                            <h2 className="text-4xl md:text-5xl font-black text-[#432818]">ABOUT THE NUM PROJECT</h2>
                        </Zoom>
                    </div>

                    {/* Project Intro */}
                    <Fade>
                        <div className="sm:p-6 mb-10">
                            <p className="text-white text-sm md:text-base text-center  leading-relaxed mb-6 max-w-2xl mx-auto">
                                 NUM is a digital asset powering a global sustainable activewear brand—crafted in Riyadh from 100% recycled materials. Backed by a real-world ecosystem, it supports a growing fashion-tech platform committed to affordability, innovation, and environmental responsibility.{" "}
                                <Link
                                    href="https://www.num1.shop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-200 hover:text-yellow-300"
                                >
                                    www.num1.shop
                                </Link>
                                .
                            </p>
                            <p className="text-white text-sm md:text-base  text-center leading-relaxed max-w-2xl mx-auto">
                                <strong>Our Mission:</strong> To become a global leader in sustainable fashion—blending modern design, advanced technology, and eco-conscious manufacturing through a multi-phase strategy.
                            </p>
                        </div>
                    </Fade>

                    {/* Ecosystem Highlights */}
                    <div className="gap-10">
                        <Section title="Ecosystem Highlights" image="/system.svg" reverse={false}>
                             <li><strong>Phase 1 (2025 – End of 2026):</strong> Sell ready-made activewear via the online store while building global brand visibility. No in-house manufacturing in this phase.</li>
    <li><strong>Phase 2 (Starting 2027):</strong> Launch NUM’s in-house factory in Riyadh to serve as a global production and logistics hub. Logistics company will be merged into NUM’s brand structure.</li>
    <li><strong>Phase 3 (2027+):</strong> Expand logistics and manufacturing capabilities with international partnerships for global reach and faster distribution.</li>
   
                        </Section>

                        {/* Utility */}
                        <Section title="Utility of the Token" image="/utility.svg" reverse>
                        <li>Discounts, loyalty rewards, and engagement systems on the e-commerce store</li>
                        <li>Access to exclusive pre-orders and limited edition drops</li>
                        <li>Future integration with gamified loyalty and reward models</li>
                        </Section>

                        {/* Roadmap */}
                        <Section title="What Makes NUM Different" image="/road-map.svg" reverse={false}> 
                        <li>All products made from 100% recycled materials</li>
                        <li>Affordable pricing without compromising on quality</li>
                        <li>Modern design with sustainability at the core</li>
                        <li>Future integration of AI and smart manufacturing technology</li>
                        </Section>

                        {/* Transparency */}
                        <div className="mb-12 max-w-xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold  mb-6 text-[#432818]">Transparency</h3>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-md">
                                <p className="text-white text-sm md:text-base leading-relaxed">
                                     Our project is grounded in real operations—from our online activewear store to our upcoming in-house manufacturing launch. All phases and developments are fully trackable, with community involvement at every step.
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* Call to Action */}
                    <div className="text-center">
                        <Link href="https://jup.ag/swap/6BcKLX6yhkcfoc36KgeM2Mm1R4ARPCA1qvfB9TkYTfLQ-So11111111111111111111111111111111111111112" target="_blank" rel="noopener noreferrer">
                        <div className="inline-block bg-[#e0d6cd] rounded-lg p-4 shadow-lg mb-6 text-[#432818] text-center hover:bg-[#d0c2b5] transition-colors duration-200">
                            <span className=" font-bold text-xl">BUY $NUM</span>
                        </div>
                        </Link>
                        
                        <div className="max-w-2xl mx-auto w-full rounded-2xl flex items-center justify-center">
                            <Image
                                src="/background/coin.png"
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
function Section({ title, reverse, children, image }: { title: string, reverse: boolean, image: string, children: React.ReactNode }) {
    return (
        <Fade>
            <div className={`flex flex-col  ${reverse ? " flex-row-reverse" : "lg:flex-row"} justify-between gap-10 mx-auto max-w-6xl my-3`}>
                <div className="mb-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#432818] mb-6">{title}</h3>
                    <ul className="list-disc list-inside text-white text-sm md:text-base leading-relaxed space-y-3 ">
                        {children}
                    </ul>
                </div>

                <div className="w-full">
                    <Image src={image}
                        alt="Family Token Character"
                        width={400}
                        height={200}
                        className="rounded-lg" />
                </div>
            </div>
        </Fade>
    )
}

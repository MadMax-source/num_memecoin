"use client"

import AboutUs from "./about"
import Footer from "./footer"
import { Header } from "./header"
import { HeroSection } from "./hero"
import Network from "./network"
import { Stats } from "./stats"


export default function FamilyTokenLanding() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
            {/* Header */}
            <Header />
            {/* Hero Section */}
            <HeroSection />

            {/* Stats Section */}
            <Stats />

            {/* About Section */}
            <AboutUs />

            {/* Network Visualization */}
            <Network />

            {/* Footer */}
            <Footer />
        </div>
    )
}



export default function Network() {
    return (
          <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a1673a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a1673a" stopOpacity="0.2" />
              </radialGradient>
            </defs>
            {/* Network nodes and connections */}
            <g stroke="#a1673a" strokeWidth="1" fill="none" opacity="0.6">
              <line x1="100" y1="100" x2="200" y2="150" />
              <line x1="200" y1="150" x2="300" y2="100" />
              <line x1="300" y1="100" x2="400" y2="200" />
              <line x1="400" y1="200" x2="500" y2="150" />
              <line x1="500" y1="150" x2="600" y2="250" />
              <line x1="200" y1="150" x2="400" y2="300" />
              <line x1="400" y1="300" x2="600" y2="350" />
              <line x1="100" y1="300" x2="300" y2="400" />
              <line x1="300" y1="400" x2="500" y2="450" />
            </g>
            <g fill="url(#nodeGradient)">
              <circle cx="100" cy="100" r="4" />
              <circle cx="200" cy="150" r="6" />
              <circle cx="300" cy="100" r="4" />
              <circle cx="400" cy="200" r="8" />
              <circle cx="500" cy="150" r="5" />
              <circle cx="600" cy="250" r="6" />
              <circle cx="400" cy="300" r="7" />
              <circle cx="600" cy="350" r="4" />
              <circle cx="100" cy="300" r="5" />
              <circle cx="300" cy="400" r="6" />
              <circle cx="500" cy="450" r="4" />
            </g>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">JOIN THE MOVEMENT</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              This isn’t just a crypto project. It’s your number, your identity. Represent your number. Be unique.
            </p>
          </div>
        </div>
      </section>
    )
}

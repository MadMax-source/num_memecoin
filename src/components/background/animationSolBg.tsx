export default function AnimatedSolanaBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => {
        const delay = Math.random() * 5;
        const duration = 6 + Math.random() * 6;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 40 + 24; // 24px to 64px

        return (
          <img
            key={i}
            src="/background/solana.png"
            alt="Solana Logo"
            className="absolute opacity-10"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `floatSolana ${duration}s ease-in-out ${delay}s infinite alternate`,
            }}
          />
        );
      })}

      <style jsx>{`
        @keyframes floatSolana {
          0% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          100% {
            transform: translate(30px, -20px) rotate(8deg);
          }
        }
      `}</style>
    </div>
  );
}

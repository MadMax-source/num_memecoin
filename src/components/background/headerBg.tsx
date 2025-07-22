export default function WaveBackground() {
  return (
    <div className="py-10 absolute inset-0 z-0 pointer-events-none">
      <div
        className="w-full h-full opacity-40 text-white text-4xl font-extrabold tracking-widest"
        style={{
          backgroundImage: `
            repeating-linear-gradient(transparent 0, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 60px),
            repeating-linear-gradient(90deg, transparent 0, transparent 100px, rgba(255,255,255,0.05) 100px, rgba(255,255,255,0.05) 200px)
          `,
          maskImage: "none",
          WebkitMaskImage: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          fontFamily: "monospace",
          letterSpacing: "0.5em",
        }}
      >
        <div className="w-full h-full grid grid-cols-6 gap-2 text-center">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i}>NUM</div>
          ))}
        </div>
      </div>
    </div>
  );
}

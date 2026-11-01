// Candle-like light spots: each flickers on its own cycle so the pulse never looks synchronized
export function WarmGlows() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-base">
      <div className="absolute -top-40 -left-32 size-96 rounded-full bg-radial from-glow/25 to-transparent blur-3xl motion-safe:animate-flicker sm:size-160" />
      <div className="absolute top-1/3 right-0 size-80 rounded-full bg-radial from-coral/15 to-transparent blur-3xl motion-safe:animate-flicker-slow sm:size-128" />
      <div className="absolute -bottom-32 left-1/3 size-96 rounded-full bg-radial from-gold/20 to-transparent blur-3xl motion-safe:animate-flicker" />
    </div>
  );
}

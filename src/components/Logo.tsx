/**
 * earKART wordmark. Placeholder text-mark approximating the brand lockup
 * (navy "ear" + lighter "KART"). Replace with the official SVG asset when
 * available — do not ship a guessed logo file (WDS A-010, skill: correct brand logos).
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-2xl font-bold leading-none tracking-tight ${className}`}
      aria-label="earKART — Redefining Hearing Care"
    >
      <span className="text-charcoal">ear</span>
      <span className="text-teal">KART</span>
    </span>
  );
}

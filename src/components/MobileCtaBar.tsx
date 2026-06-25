import Link from "next/link";

/**
 * Persistent mobile booking bar — primary action reachable without hunting
 * (WDS A-019, skill §5 fixed-element-offset). Hidden on lg+ where the header
 * CTA is always visible.
 */
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-2 backdrop-blur lg:hidden">
      <Link
        href="/book"
        className="flex min-h-[52px] w-full items-center justify-center rounded-sm bg-teal text-base font-medium text-white"
      >
        Book a Free Hearing Test
      </Link>
    </div>
  );
}

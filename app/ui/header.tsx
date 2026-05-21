import Link from "next/link";
import { navItems, site } from "../data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5 text-[13px] text-neutral-900 md:px-8">
        <Link href="/" className="font-semibold tracking-tight">
          {site.shortName}
        </Link>
        <div className="flex items-center gap-5 md:gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-neutral-700 transition hover:text-black">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

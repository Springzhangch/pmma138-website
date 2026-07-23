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
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <span className="cursor-pointer text-neutral-700 transition hover:text-black">
                  {item.label}
                  <svg className="ml-0.5 inline-block size-3 fill-neutral-500 transition group-hover:fill-black" viewBox="0 0 12 12">
                    <path d="M6 8L2 4h8z" />
                  </svg>
                </span>
                <div className="invisible absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-lg border border-black/8 bg-white py-2 opacity-0 shadow-lg shadow-black/8 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block whitespace-nowrap px-5 py-2 text-neutral-700 transition hover:bg-neutral-100 hover:text-black"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href!} href={item.href!} className="text-neutral-700 transition hover:text-black">
                {item.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}

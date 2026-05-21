import Link from "next/link";
import { navItems, site } from "../data";

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm text-neutral-600 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <p className="text-base font-semibold text-neutral-950">{site.name}</p>
          <p className="mt-3 max-w-md leading-7">
            专业亚克力、有机玻璃展示用品制造商，为品牌陈列、零售终端与礼品包装项目提供从打样到量产的一体化交付。
          </p>
        </div>
        <div>
          <p className="font-semibold text-neutral-950">快速链接</p>
          <div className="mt-3 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-black">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-black">
              隐私政策
            </Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-neutral-950">联系方式</p>
          <div className="mt-3 grid gap-2">
            <a href={`tel:${site.phone}`} className="hover:text-black">
              电话：{site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-black">
              邮箱：{site.email}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-black/10 px-5 py-5 text-xs text-neutral-500 md:px-8">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

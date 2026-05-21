import Image from "next/image";
import Link from "next/link";
import { capabilities, products } from "../data";
import { Section } from "../ui/section";

export const metadata = {
  title: "产品与加工能力",
  description: "香港粤丰亚克力展示架、珠宝钟表展示、零售 POP、办公家居用品与复合结构加工能力。",
};

export default function ProductsPage() {
  return (
    <main className="pt-12">
      <Section
        tone="gray"
        eyebrow="PRODUCTS"
        title="展示架、陈列道具与定制结构。"
        copy="产品覆盖台面展示、柜台陈列、标识牌、包装盒、相框收纳与复合展示结构，可按品牌视觉、门店场景和运输要求定制。"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.title} className="overflow-hidden rounded-[8px] bg-white">
              <div className="relative aspect-[16/10]">
                <Image src={product.image} alt={product.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-semibold tracking-tight">{product.title}</h2>
                <p className="mt-3 leading-7 text-neutral-600">{product.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="核心加工能力" copy="支持多材料复合结构，兼顾外观、耐用、运输和批量生产效率。">
        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item} className="rounded-[8px] border border-black/10 px-5 py-4 font-semibold text-neutral-800">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-flex rounded-full bg-[#0071e3] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0077ed]">
            获取产品报价
          </Link>
        </div>
      </Section>
    </main>
  );
}

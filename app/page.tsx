import Image from "next/image";
import Link from "next/link";
import { capabilities, process, products, site } from "./data";
import { Section } from "./ui/section";

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-black pt-12 text-white">
        <Image
          src="/hero.png"
          alt="亚克力展示用品定制场景"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-78"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/72" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 text-center md:px-8 md:pb-24">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-white/75">ACRYLIC DISPLAY SOLUTIONS</p>
          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
            香港粤丰展示用品有限公司
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/86 md:text-2xl">
            让透明材料成为品牌陈列里的主角。亚克力展示、零售 POP、珠宝钟表托架与礼品包装，从打样到量产稳定交付。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/products" className="rounded-full bg-[#0071e3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0077ed]">
              查看产品能力
            </Link>
            <Link href="/contact" className="rounded-full bg-white/16 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/34 backdrop-blur transition hover:bg-white/24">
              获取定制报价
            </Link>
          </div>
        </div>
      </section>

      <Section
        eyebrow="WHAT WE MAKE"
        title="为零售空间，定制更清透的展示秩序。"
        copy="围绕品牌视觉、产品承托、门店耐用和批量交付四个关键点，提供结构设计、材料加工、表面处理和包装出货。"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.title} className="overflow-hidden rounded-[8px] bg-[#f5f5f7]">
              <div className="relative aspect-[16/10]">
                <Image src={product.image} alt={product.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">{product.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{product.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="gray"
        eyebrow="CAPABILITY"
        title="加工能力覆盖项目的每一步。"
        copy="从透明板材切割、热弯成型到灯光复合结构，适配品牌柜台、快闪活动、连锁门店和出口包装。"
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {capabilities.map((item) => (
            <div key={item} className="rounded-[8px] bg-white px-4 py-5 text-center text-sm font-semibold text-neutral-800 shadow-sm shadow-black/5">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-28">
          <div>
            <p className="text-sm font-semibold text-white/56">CUSTOM PROCESS</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">从一句需求，到一批稳定出货。</h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              我们把复杂定制拆成清晰节点，让客户能及时确认效果、成本和交期。
            </p>
          </div>
          <div className="grid gap-3">
            {process.map(([title, copy], index) => (
              <div key={title} className="grid grid-cols-[48px_1fr] gap-4 rounded-[8px] bg-white/9 p-5 ring-1 ring-white/10">
                <div className="flex size-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 leading-7 text-white/64">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        title="准备开始一个展示项目？"
        copy={`电话 ${site.phone}，或发送需求到 ${site.email}。建议附上用途、尺寸、数量、交期、参考图片和预算范围。`}
      >
        <div className="text-center">
          <Link href="/contact" className="inline-flex rounded-full bg-[#0071e3] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0077ed]">
            联系我们
          </Link>
        </div>
      </Section>
    </main>
  );
}

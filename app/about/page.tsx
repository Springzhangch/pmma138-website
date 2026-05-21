import Image from "next/image";
import { Section } from "../ui/section";

export const metadata = {
  title: "关于我们",
  description: "了解香港粤丰展示用品有限公司的定制能力、交付原则与核心优势。",
};

export default function AboutPage() {
  return (
    <main className="pt-12">
      <section className="bg-[#f5f5f7]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-28">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#0071e3]">ABOUT YUEFENG</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-neutral-950 md:text-7xl">专注展示用品制造。</h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              香港粤丰展示用品有限公司专注亚克力、有机玻璃展示用品的研发与生产，服务覆盖化妆品、珠宝钟表、3C 数码、家居礼品等多个行业。
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[8px] bg-white">
            <Image src="/aboutus.png" alt="香港粤丰展示用品工艺与产品" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <Section
        title="质量稳定、交期可控、沟通顺畅。"
        copy="我们关注透明度、抛光品质与结构稳定性，以精益制造和严格质检为基础，帮助客户在零售终端实现更高的品牌可见度与转化率。"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["专业团队", "拥有展示用品行业经验，能从结构、材料、工艺和包装角度协助客户落地。"],
            ["设备与工艺", "支持切割、雕刻、热弯、粘接、抛光、丝印、UV 等常用展示用品工艺。"],
            ["完整服务", "从需求沟通、打样确认到批量生产、质检包装和出货跟进，流程清晰。"],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-[8px] bg-[#f5f5f7] p-7">
              <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-3 leading-7 text-neutral-600">{copy}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}

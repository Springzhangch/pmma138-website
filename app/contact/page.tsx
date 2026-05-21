import { site } from "../data";

export const metadata = {
  title: "联系我们",
  description: "联系香港粤丰展示用品有限公司，获取亚克力展示用品定制报价与打样服务。",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f5f5f7] pt-12">
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold text-[#0071e3]">CONTACT</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.08] tracking-tight text-neutral-950 md:whitespace-nowrap md:text-6xl lg:text-[68px]">告诉我们你的项目需求。</h1>
          <p className="mt-5 text-lg leading-8 text-neutral-600">
            如需打样或批量定制，建议注明用途、尺寸、数量、交期、预算和参考图片。我们会在工作时间内尽快回复。
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[8px] bg-white p-7">
            <h2 className="text-2xl font-semibold tracking-tight">直接联系</h2>
            <div className="mt-5 grid gap-3 text-neutral-700">
              <a href={`tel:${site.phone}`} className="rounded-[8px] bg-[#f5f5f7] p-4 hover:text-black">
                电话：{site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="rounded-[8px] bg-[#f5f5f7] p-4 hover:text-black">
                邮箱：{site.email}
              </a>
            </div>
          </aside>

          <form action={`https://formsubmit.co/${site.email}`} method="POST" className="rounded-[8px] bg-white p-7">
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value={`网站联系表单 - ${site.name}`} />
            <input type="hidden" name="_template" value="table" />
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-neutral-800">
                您的姓名 *
                <input name="name" type="text" required className="rounded-[8px] border border-black/10 px-4 py-3 text-base font-normal outline-none transition focus:border-[#0071e3]" placeholder="请输入您的姓名" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-800">
                您的邮箱 *
                <input name="email" type="email" required className="rounded-[8px] border border-black/10 px-4 py-3 text-base font-normal outline-none transition focus:border-[#0071e3]" placeholder="your.email@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-800">
                您的电话
                <input name="phone" type="tel" className="rounded-[8px] border border-black/10 px-4 py-3 text-base font-normal outline-none transition focus:border-[#0071e3]" placeholder="方便我们联系您" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-800">
                需求描述 *
                <textarea name="message" required rows={6} className="resize-y rounded-[8px] border border-black/10 px-4 py-3 text-base font-normal outline-none transition focus:border-[#0071e3]" placeholder="请描述产品类别、用途、尺寸、数量、交期、预算等" />
              </label>
            </div>
            <button type="submit" className="mt-6 w-full rounded-full bg-[#0071e3] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0077ed]">
              提交留言
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

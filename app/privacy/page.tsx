import { site } from "../data";

export const metadata = {
  title: "隐私政策",
  description: "香港粤丰展示用品有限公司官网隐私与数据使用说明。",
};

export default function PrivacyPage() {
  return (
    <main className="pt-12">
      <article className="mx-auto max-w-3xl px-5 py-20 leading-8 text-neutral-700 md:px-8 md:py-28">
        <h1 className="text-5xl font-semibold tracking-tight text-neutral-950">隐私政策</h1>
        <p className="mt-5">生效日期：2026 年 5 月</p>

        {[
          ["信息收集", "我们仅在您主动提交联系表单，或通过邮件、电话沟通时收集必要信息，包括姓名、电子邮箱、电话和项目需求描述。"],
          ["信息使用", "这些信息仅用于回复咨询、处理报价请求、提供产品与服务信息，以及在必要时改进网站体验。"],
          ["信息保护", "我们采取合理的技术与管理措施保护您的个人信息，防止未经授权的访问、使用或泄露。"],
          ["您的权利", "您可以请求访问、更正或删除我们持有的相关个人信息。请通过邮箱联系我们。"],
          ["政策更新", "本政策可能不时更新，更新后的内容会发布在本页面。"],
        ].map(([title, copy]) => (
          <section key={title} className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">{title}</h2>
            <p className="mt-3">{copy}</p>
          </section>
        ))}

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">联系我们</h2>
          <p className="mt-3">
            {site.name}
            <br />
            邮箱：<a className="text-[#0071e3]" href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            电话：<a className="text-[#0071e3]" href={`tel:${site.phone}`}>{site.phone}</a>
          </p>
        </section>
      </article>
    </main>
  );
}

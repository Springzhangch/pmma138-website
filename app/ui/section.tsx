import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  copy,
  children,
  tone = "white",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
  tone?: "white" | "gray";
}) {
  return (
    <section className={tone === "gray" ? "bg-[#f5f5f7]" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? <p className="mb-3 text-sm font-semibold text-[#0071e3]">{eyebrow}</p> : null}
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">{title}</h2>
          {copy ? <p className="mt-5 text-lg leading-8 text-neutral-600 md:text-xl">{copy}</p> : null}
        </div>
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}

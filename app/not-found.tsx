import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f7] px-5 text-center">
      <div>
        <h1 className="text-5xl font-semibold tracking-tight">页面未找到</h1>
        <p className="mt-4 text-neutral-600">请返回首页继续浏览香港粤丰展示用品。</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[#0071e3] px-6 py-3 text-sm font-semibold text-white">
          返回首页
        </Link>
      </div>
    </main>
  );
}

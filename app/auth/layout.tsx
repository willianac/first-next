import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-indigo-700 flex justify-center items-center relative">
      <Link href="/" className="absolute top-16 text-7xl font-bold text-white tracking-tighter">Next Blog</Link>
      { children }
    </div>
  )
}
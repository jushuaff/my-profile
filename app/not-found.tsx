import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
        The page you are looking for does not exist or has moved.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-blue-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800">
        Return home
      </Link>
    </main>
  );
}

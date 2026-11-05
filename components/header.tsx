import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          mhalikosen
        </Link>
      </div>
    </header>
  );
}

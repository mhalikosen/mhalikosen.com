import { CurrentYear } from "@/components/current-year";

export function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pb-8">
      <p className="text-xs text-[var(--text-secondary)]/60">
        &copy; <CurrentYear /> Muhammed Ali Kösen
      </p>
    </footer>
  );
}

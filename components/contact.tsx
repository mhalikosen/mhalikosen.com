const linkClassName =
  "text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]";

export function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-20">
      <h2 className="mb-6 text-sm font-semibold tracking-widest text-[var(--accent)] uppercase">
        Contact
      </h2>
      <div className="flex items-center gap-5">
        <a href="mailto:hello@mhalikosen.com" className={linkClassName}>
          Email
        </a>
        <a
          href="https://github.com/mhalikosen"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mhalikosen/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

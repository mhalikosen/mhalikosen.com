import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Muhammed Ali Kösen",
    jobTitle: "Developer",
    url: "https://mhalikosen.com",
    sameAs: [
      "https://github.com/mhalikosen",
      "https://www.linkedin.com/in/mhalikosen/",
    ],
    knowsAbout: [
      "Full-Stack Development",
      ".NET",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

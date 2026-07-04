import type { ReactNode } from "react";

const images = [
  "/images/WhatsApp Image 2026-07-03 at 6.08.13 PM.jpeg",
  "/images/WhatsApp Image 2026-07-03 at 6.08.13 PM (1).jpeg",
  "/images/WhatsApp Image 2026-07-03 at 6.08.14 PM.jpeg",
  "/images/WhatsApp Image 2026-07-03 at 6.08.14 PM (1).jpeg",
  "/images/WhatsApp Image 2026-07-03 at 6.08.14 PM (2).jpeg",
  "/images/WhatsApp Image 2026-07-03 at 6.08.14 PM (3).jpeg",
  "/images/WhatsApp Image 2026-07-03 at 6.08.14 PM (4).jpeg",
  "/images/WhatsApp Image 2026-07-03 at 6.08.15 PM.jpeg",
  "/images/WhatsApp Image 2026-07-03 at 6.08.15 PM (1).jpeg",
];

const events = [
  { title: "Ceremony", time: "4:00 PM", detail: "The Garden Chapel" },
  { title: "Cocktails", time: "5:30 PM", detail: "Courtyard Terrace" },
  { title: "Reception", time: "7:00 PM", detail: "The Grand Hall" },
];

function RotatingBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-stone-950">
      {images.map((src, index) => (
        <div
          className="bg-slide absolute inset-0 bg-cover bg-center opacity-0 blur-[3px] scale-105"
          key={src}
          style={{
            backgroundImage: `url("${src}")`,
            animationDelay: `${index * 5}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,237,0.38),rgba(44,24,19,0.76))]" />
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="snap-start min-h-svh px-6 py-10 flex items-center justify-center">
      <div className="invite-card w-full max-w-3xl rounded-[2.5rem] border border-white/45 bg-cream/78 px-7 py-10 text-center shadow-2xl backdrop-blur-md md:px-14 md:py-14">
        <p className="tracking-[0.45em] text-xs uppercase text-rosewood/70">{eyebrow}</p>
        <h2 className="font-script mt-4 text-5xl leading-none text-rosewood md:text-7xl">{title}</h2>
        <div className="mx-auto my-7 h-px w-28 bg-gold/80" />
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="h-svh snap-y snap-mandatory overflow-y-scroll scroll-smooth text-rosewood">
      <RotatingBackground />

      <section className="relative flex min-h-svh snap-start items-center justify-center px-6 text-center">
        <div className="invite-card max-w-4xl rounded-[3rem] border border-white/40 bg-cream/72 px-8 py-14 shadow-2xl backdrop-blur-md md:px-20">
          <p className="tracking-[0.55em] text-xs uppercase text-rosewood/70">Together with their families</p>
          <h1 className="font-script mt-7 text-7xl leading-[0.82] text-rosewood md:text-9xl">
            Rose
            <span className="block text-5xl md:text-7xl">&</span>
            Ray
          </h1>
          <p className="mt-8 font-serif text-2xl italic text-gold md:text-3xl">invite you to celebrate their wedding</p>
          <p className="mt-8 text-sm tracking-[0.35em] uppercase">Saturday · 14 February 2027</p>
        </div>
      </section>

      <Section id="story" eyebrow="Our story" title="A love written slowly">
        <p className="mx-auto max-w-xl font-serif text-xl leading-9 text-rosewood/82">
          From a chance hello to a lifetime promise, we are grateful for every mile that brought us here. Please join us for an evening of prayers, laughter, dinner, dancing, and memories beneath warm lights.
        </p>
      </Section>

      <Section id="details" eyebrow="Save the date" title="Wedding Day">
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((event) => (
            <article className="rounded-3xl border border-gold/30 bg-white/35 p-6" key={event.title}>
              <h3 className="font-serif text-2xl italic">{event.title}</h3>
              <p className="mt-3 text-3xl font-semibold text-gold">{event.time}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-rosewood/65">{event.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="location" eyebrow="Venue" title="The Garden Estate">
        <p className="font-serif text-xl leading-8 text-rosewood/82">123 Blossom Avenue, Your City</p>
        <a className="mt-8 inline-flex rounded-full border border-rosewood/30 px-7 py-3 text-sm uppercase tracking-[0.25em] transition hover:bg-rosewood hover:text-cream" href="https://maps.google.com" target="_blank" rel="noreferrer">
          Open Map
        </a>
      </Section>

      <Section id="rsvp" eyebrow="Kindly respond" title="RSVP">
        <p className="mx-auto max-w-lg font-serif text-xl leading-8 text-rosewood/82">A connected RSVP form will be added when the backend API is ready. For now, this button can be wired to any endpoint or form provider.</p>
        <button className="mt-8 rounded-full bg-rosewood px-9 py-4 text-sm uppercase tracking-[0.28em] text-cream shadow-lg transition hover:-translate-y-1 hover:bg-gold">
          Reserve Your Seat
        </button>
      </Section>
    </main>
  );
}

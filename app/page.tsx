const backgroundImages = [
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

function RotatingBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {backgroundImages.map((src, index) => (
        <div
          className="bg-slide absolute inset-0 bg-cover bg-center opacity-0 blur-[6px] scale-110"
          key={src}
          style={{
            backgroundImage: `url("${src}")`,
            animationDelay: `${index * 5}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-white/88" />
    </div>
  );
}

function ChurchIcon() {
  return (
    <svg aria-hidden="true" className="mx-auto h-20 w-20" viewBox="0 0 96 96" fill="currentColor">
      <path d="M47 11h2v9h7v4H40v-4h7z" />
      <path d="M48 24 20 42v40h20V62a8 8 0 0 1 16 0v20h20V42L48 24Zm-14 45H25V55h9v14Zm19-26H43V33h10v10Zm18 26h-9V55h9v14Z" />
      <path d="M14 82h68v5H14z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" className="mx-auto h-24 w-24" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M48 87S22 58 22 35a26 26 0 0 1 52 0c0 23-26 52-26 52Z" />
      <circle cx="48" cy="35" r="12" />
    </svg>
  );
}

function LocationButton({ children }: { children: string }) {
  return (
    <a
      className="mx-auto mt-5 block w-[82%] rounded-2xl border-2 border-black px-6 py-3 text-center font-serif text-lg leading-none transition hover:bg-black hover:text-white"
      href="https://maps.google.com"
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function GuestRow() {
  return (
    <div className="border-b-2 border-black py-3">
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 text-left">
        <span className="font-serif text-base">Guest Name</span>
        <button className="rounded-full border-2 border-black px-4 py-0.5 font-serif text-sm leading-none">Accept</button>
        <button className="rounded-full border-2 border-black px-4 py-0.5 font-serif text-sm leading-none">Decline</button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="h-svh snap-y snap-mandatory overflow-y-scroll scroll-smooth text-black">
      <RotatingBackground />
      <div className="mx-auto min-h-svh w-full max-w-[430px] bg-white/94 shadow-2xl backdrop-blur-sm">
        <section className="flex min-h-svh snap-start flex-col items-center border-b-4 border-black px-4 pb-5 pt-8 text-center">
          <p className="font-script text-[3.15rem] leading-none md:text-[3.55rem]">We are getting married</p>
          <h1 className="mt-7 font-serif text-[4rem] font-bold leading-none tracking-[-0.08em]">MR</h1>
          <p className="mt-7 font-serif text-xl font-semibold">Sunday, August 23,2026</p>

          <blockquote className="mt-4 border-y-4 border-black py-2 font-serif text-lg font-semibold leading-7">
            &quot;And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them&quot; - 1 John 4:16
          </blockquote>

          <div className="mt-9 font-script text-[3.35rem] leading-[1.05] md:text-[3.85rem]">
            <p>Ramy Karam</p>
            <p className="my-5 text-[3rem]">&amp;</p>
            <p>Mary Haddad</p>
          </div>

          <p className="mt-8 max-w-[23rem] font-serif text-xl font-semibold leading-7">
            With joyful hearts, together with our families, invite you to celebrate our love and witness our marriage.
          </p>
          <p className="mt-auto pt-6 font-serif text-lg font-semibold">Sunday, August 23,2026</p>
        </section>

        <section className="flex min-h-svh snap-start flex-col items-center border-b-4 border-black px-6 pt-9 text-center">
          <h2 className="font-script text-[3.45rem] leading-none md:text-[3.8rem]">Wedding Ceremony</h2>
          <p className="mt-5 font-serif text-lg font-semibold">Sunday, August 23,2026</p>

          <div className="mt-5 text-black">
            <ChurchIcon />
          </div>
          <p className="mt-4 font-serif text-[1.65rem] leading-8">Saint Georges church - Kfour</p>
          <p className="font-serif text-2xl leading-8">5:30 PM</p>
          <LocationButton>Church Location</LocationButton>

          <div className="mt-8 text-black">
            <PinIcon />
          </div>
          <p className="mt-2 font-serif text-[1.65rem] leading-8">Hotel Francis - Ghineh</p>
          <p className="font-serif text-2xl leading-8">7:00 PM</p>
          <LocationButton>Venue Location</LocationButton>
        </section>

        <section className="min-h-svh snap-start text-center">
          <div className="border-b-4 border-black px-4 pb-9 pt-8">
            <h2 className="font-script text-[3.55rem] leading-none md:text-[3.95rem]">Gift Registry</h2>
            <p className="mx-auto mt-8 max-w-[24rem] font-serif text-lg font-medium leading-6">
              Your presence is the greatest gift we could ask for. For those who wish, our wedding registry is available at Whish Money:
            </p>
            <p className="mt-8 font-serif text-lg leading-6">
              Wedding Account: 20359232-03
              <br />
              or
              <br />
              Phone numbers: 70 270 760
              <br />
              71 962 885
            </p>
          </div>

          <div className="border-b-4 border-black px-8 pb-6 pt-7">
            <p className="font-script text-[2rem] leading-tight">We would be honored by your presence!</p>
            <p className="mt-5 font-serif text-base">Appreciate your kind reply before 9 August 2026.</p>
            <div className="mx-auto mt-5 h-px w-32 bg-black" />
            <p className="mt-5 font-serif text-base">Number of guests:</p>

            <div className="mt-8">
              <GuestRow />
              <GuestRow />
            </div>
            <button className="mt-4 w-[70%] rounded-full border-2 border-black py-1 font-serif text-sm leading-none transition hover:bg-black hover:text-white">
              Press to confirm
            </button>
          </div>

          <div className="px-6 pt-5">
            <p className="font-script text-[2rem] leading-tight">We can&apos;t wait to celebrate with you.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

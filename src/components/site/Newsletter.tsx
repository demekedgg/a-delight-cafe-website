import { useState, type FormEvent } from "react";

export function Newsletter({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };

  const dark = variant === "dark";

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <div
        className={`flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-stretch border-b ${
          dark ? "border-cream/30" : "border-espresso/30"
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`flex-1 bg-transparent py-4 px-1 outline-none text-base font-sans placeholder:opacity-50 ${
            dark ? "text-cream" : "text-espresso-deep"
          }`}
        />
        <button type="submit" className="btn-gold whitespace-nowrap">
          {done ? "Welcome ✦" : "Join the List"}
        </button>
      </div>
      {done && (
        <p className={`mt-3 text-xs tracking-wider ${dark ? "text-gold-soft" : "text-espresso/70"}`}>
          You're on the list. We'll be in touch as launch nears.
        </p>
      )}
    </form>
  );
}

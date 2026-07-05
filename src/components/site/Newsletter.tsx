import { useState, type FormEvent } from "react";

// A Delight Coffee — Kit (ConvertKit) form
// Account: a-delight-coffee · Form UID: aa4f0141e2
const KIT_FORM_UID = "aa4f0141e2";
const KIT_ENDPOINT = `https://app.kit.com/forms/${KIT_FORM_UID}/subscriptions`;

export function Newsletter({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch(KIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email_address: email }),
      });

      if (res.ok) {
        setStatus("done");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const dark = variant === "dark";
  const done = status === "done";

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
          disabled={status === "loading" || done}
          className={`flex-1 bg-transparent py-4 px-1 outline-none text-base font-sans placeholder:opacity-50 ${
            dark ? "text-cream" : "text-espresso-deep"
          }`}
        />
        <button type="submit" disabled={status === "loading" || done} className="btn-gold whitespace-nowrap">
          {done ? "Welcome ✦" : status === "loading" ? "Joining…" : "Join the List"}
        </button>
      </div>
      {done && (
        <p className={`mt-3 text-xs tracking-wider ${dark ? "text-gold-soft" : "text-espresso/70"}`}>
          You're on the list. We'll be in touch as launch nears.
        </p>
      )}
      {status === "error" && (
        <p className={`mt-3 text-xs tracking-wider ${dark ? "text-gold-soft" : "text-espresso/70"}`}>
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}

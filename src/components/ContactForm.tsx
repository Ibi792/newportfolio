"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactForm({ ink, accent }: { ink: string; accent: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORMSPREE_ID) {
      // No Formspree endpoint configured yet — fall back to opening a
      // pre-filled email client so the form still "works" out of the box.
      const subject = encodeURIComponent(String(data.get("subject") || "Portfolio contact"));
      const body = encodeURIComponent(
        `From: ${data.get("firstName")} ${data.get("lastName")} (${data.get("email")})\n\n${data.get("message") ?? ""}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none transition focus:ring-2";

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2" style={{ color: ink }}>
      <Field label="First Name" name="firstName" required className={fieldClass} ink={ink} />
      <Field label="Last Name" name="lastName" required className={fieldClass} ink={ink} />
      <Field label="Email" name="email" type="email" required className={fieldClass} ink={ink} />
      <Field label="Subject" name="subject" className={fieldClass} ink={ink} />

      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={fieldClass}
          style={{ borderColor: `${ink}55` }}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={status === "sending"}
        className="sm:col-span-2 w-full max-w-xs rounded-full px-8 py-3 font-display text-base font-bold text-white shadow-sm disabled:opacity-60"
        style={{ backgroundColor: accent }}
      >
        {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Submit"}
      </motion.button>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-red-600">
          Something went wrong — email me directly at {site.email}.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
  ink,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className: string;
  ink: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium" htmlFor={name}>
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={className}
        style={{ borderColor: `${ink}55` }}
      />
    </div>
  );
}

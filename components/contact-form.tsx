"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const initialState = {
  name: "",
  email: "",
  company: "",
  projectType: "Business Website",
  budget: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");

    const body = {
      ...form,
      website: String(new FormData(event.currentTarget).get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error || "Unable to send inquiry.");
      }

      setForm(initialState);
      setStatus("success");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "The message could not be sent right now. Please try again later.",
      );
      setStatus("error");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-700">
          <span className="mb-2 block">Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            minLength={2}
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500"
            required
            maxLength={80}
          />
        </label>

        <label className="block text-sm text-slate-700">
          <span className="mb-2 block">Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500"
            required
            maxLength={254}
          />
        </label>
      </div>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block">Company / Organization (optional)</span>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500"
          maxLength={120}
        />
      </label>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block">Project Type</span>
        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500"
          required
        >
          <option value="Business Website">Business Website</option>
          <option value="Website Redesign">Website Redesign</option>
          <option value="Dynamic Website">Dynamic Website</option>
          <option value="Custom Web System">Custom Web System</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block">Budget Range (optional)</span>
        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500"
        >
          <option value="">Select a range</option>
          <option value="Below ₱10,000">Below ₱10,000</option>
          <option value="₱10,000 – ₱20,000">₱10,000 – ₱20,000</option>
          <option value="₱20,000 – ₱40,000">₱20,000 – ₱40,000</option>
          <option value="₱40,000+">₱40,000+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block">Message</span>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500"
          required
          minLength={10}
          maxLength={2000}
        />
      </label>

      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      <p className="text-center text-sm text-slate-600">
        Prefer email?{" "}
        <a href={`mailto:${profile.email}`} className="font-medium text-blue-700 underline underline-offset-4">
          {profile.email}
        </a>
      </p>

      {status === "success" && (
        <p role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-800">
          Your inquiry has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}
    </form>
  );
}

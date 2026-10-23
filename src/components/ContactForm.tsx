import React, { useState } from "react";
import confetti from "canvas-confetti";
import { siteConfig } from "../data/site";

interface ContactFormProps {
  theme?: "dark" | "light";
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please provide your name";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a message before sending";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters long";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Surya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl p-6 md:p-8 rounded-lg border-2 border-[#BAE6FD] bg-[#FFFFFF] text-[#0F172A] shadow-[0_8px_30px_rgba(56,189,248,0.12)] font-ubuntu"
    >
      <h3 className="text-xl md:text-2xl font-karla font-bold mb-4 text-[#0F172A]">
        Send a Message
      </h3>

      {submitted ? (
        <div className="p-4 rounded border border-[#38BDF8] bg-[#F0F9FF] text-sm">
          <p className="font-semibold text-[#0284C7] mb-1">
            ✓ Mail client opened!
          </p>
          <p className="text-[#475569]">
            If your mail app didn&apos;t open automatically, write directly to:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline font-bold text-[#0284C7] hover:text-[#38BDF8]"
            >
              {siteConfig.email}
            </a>
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-3 text-xs underline text-[#0284C7] hover:text-[#38BDF8]"
          >
            Send another note
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider mb-1 font-karla font-semibold text-[#475569]">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="e.g. Alex Chen"
              className="w-full px-3 py-2 text-sm rounded border border-[#BAE6FD] bg-[#F0F9FF] text-[#0F172A] outline-none transition-colors focus:border-[#0284C7] focus:bg-[#FFFFFF]"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider mb-1 font-karla font-semibold text-[#475569]">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="name@domain.com"
              className="w-full px-3 py-2 text-sm rounded border border-[#BAE6FD] bg-[#F0F9FF] text-[#0F172A] outline-none transition-colors focus:border-[#0284C7] focus:bg-[#FFFFFF]"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider mb-1 font-karla font-semibold text-[#475569]">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              placeholder="Collaboration / Project / Question"
              className="w-full px-3 py-2 text-sm rounded border border-[#BAE6FD] bg-[#F0F9FF] text-[#0F172A] outline-none transition-colors focus:border-[#0284C7] focus:bg-[#FFFFFF]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider mb-1 font-karla font-semibold text-[#475569]">
              Message *
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Write your note here..."
              className="w-full px-3 py-2 text-sm rounded border border-[#BAE6FD] bg-[#F0F9FF] text-[#0F172A] outline-none transition-colors resize-none focus:border-[#0284C7] focus:bg-[#FFFFFF]"
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 font-karla font-bold text-sm rounded bg-[#38BDF8] text-[#FFFFFF] hover:bg-[#0284C7] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.01]"
          >
            Send via Mail Client ✉
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;

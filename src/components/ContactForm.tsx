import React, { useState } from "react";
import confetti from "canvas-confetti";
import { siteConfig } from "../data/site";

interface ContactFormProps {
  theme?: "dark" | "light";
}

const ContactForm: React.FC<ContactFormProps> = ({ theme = "light" }) => {
  const isDark = theme === "dark";
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

    // Construct legitimate mailto link to verified email
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
      className={`w-full max-w-xl p-6 md:p-8 rounded-lg border backdrop-blur-sm transition-all duration-300 font-ubuntu ${
        isDark
          ? "border-[#FCF6F4]/30 bg-black/40 text-[#FCF6F4]"
          : "border-black/30 bg-[#FCF6F4]/80 text-black"
      }`}
    >
      <h3 className="text-xl md:text-2xl font-karla font-bold mb-4">
        Send a Message
      </h3>

      {submitted ? (
        <div className="p-4 rounded border border-green-500/50 bg-green-500/10 text-sm">
          <p className="font-semibold text-green-500 mb-1">
            ✓ Mail client opened!
          </p>
          <p className="opacity-80">
            If your mail app didn&apos;t open automatically, feel free to write directly to:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline font-bold"
            >
              {siteConfig.email}
            </a>
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-3 text-xs underline opacity-80 hover:opacity-100"
          >
            Send another note
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider mb-1 font-karla font-medium">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="e.g. Alex Chen"
              className={`w-full px-3 py-2 text-sm rounded border outline-none transition-colors ${
                isDark
                  ? "bg-black/60 border-[#FCF6F4]/30 focus:border-[#FCF6F4]"
                  : "bg-white border-black/30 focus:border-black"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider mb-1 font-karla font-medium">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="name@domain.com"
              className={`w-full px-3 py-2 text-sm rounded border outline-none transition-colors ${
                isDark
                  ? "bg-black/60 border-[#FCF6F4]/30 focus:border-[#FCF6F4]"
                  : "bg-white border-black/30 focus:border-black"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider mb-1 font-karla font-medium">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              placeholder="Collaboration / Project / Question"
              className={`w-full px-3 py-2 text-sm rounded border outline-none transition-colors ${
                isDark
                  ? "bg-black/60 border-[#FCF6F4]/30 focus:border-[#FCF6F4]"
                  : "bg-white border-black/30 focus:border-black"
              }`}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider mb-1 font-karla font-medium">
              Message *
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Write your note here..."
              className={`w-full px-3 py-2 text-sm rounded border outline-none transition-colors resize-none ${
                isDark
                  ? "bg-black/60 border-[#FCF6F4]/30 focus:border-[#FCF6F4]"
                  : "bg-white border-black/30 focus:border-black"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2.5 px-4 font-karla font-semibold text-sm rounded transition-all duration-200 cursor-pointer ${
              isDark
                ? "bg-[#FCF6F4] text-black hover:bg-white hover:scale-[1.01]"
                : "bg-black text-[#FCF6F4] hover:bg-neutral-800 hover:scale-[1.01]"
            }`}
          >
            Send via Mail Client ✉
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;

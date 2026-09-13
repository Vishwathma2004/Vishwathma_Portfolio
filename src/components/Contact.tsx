import { useState } from "react";
import { Github, Linkedin, Mail, ArrowDownToLine, Loader2, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_wo5rp3d";
const TEMPLATE_ID = "template_xbflhsj";
const PUBLIC_KEY  = "sc4yi0jG01V6XZqPl";

const Contact = () => {
  const [formData, setFormData]     = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.08);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Something went wrong. Please try again or email me directly.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? "is-visible" : ""}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ── LEFT: Contact info ── */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-400">
                  Contact
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  Let's build<br />something useful.
                </h2>
                <p className="text-slate-400 text-[15px] leading-relaxed pt-1 max-w-sm">
                  Open to full-stack roles, AI application projects, and engineering challenges where I can contribute from day one.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3">
                <a
                  href="mailto:vishwathman@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-950 transition-all">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    vishwathman@gmail.com
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/vishwathma-n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-950 transition-all">
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    linkedin.com/in/vishwathma-n
                  </span>
                </a>

                <a
                  href="https://github.com/Vishwathma2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-slate-400 group-hover:bg-slate-700 transition-all">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    github.com/Vishwathma2004
                  </span>
                </a>
              </div>

              {/* Resume download */}
              <a
                href="/Vishwathma_N_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-600 text-slate-300 text-sm font-medium hover:border-white hover:text-white transition-all"
              >
                <ArrowDownToLine className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* ── RIGHT: Contact form ── */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8 space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-[11px] font-semibold uppercase tracking-wider text-slate-400"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3.5 rounded-lg bg-slate-900/70 border border-slate-700 text-slate-100 text-sm placeholder:text-slate-600
                                 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-[11px] font-semibold uppercase tracking-wider text-slate-400"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3.5 rounded-lg bg-slate-900/70 border border-slate-700 text-slate-100 text-sm placeholder:text-slate-600
                                 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-[11px] font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-3 rounded-lg bg-slate-900/70 border border-slate-700 text-slate-100 text-sm placeholder:text-slate-600
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed
                             text-white text-sm font-semibold flex items-center justify-center gap-2
                             transition-all active:scale-[0.99] shadow-lg shadow-blue-900/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_wo5rp3d";
const TEMPLATE_ID = "template_xbflhsj";
const PUBLIC_KEY = "sc4yi0jG01V6XZqPl";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Something went wrong. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com/in/vishwathma-n" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/Vishwathma2004" },
  ];

  const directContact = [
    { icon: <Mail className="h-4 w-4 text-blue-600" />, value: "vishwathman@gmail.com", href: "mailto:vishwathma@gmail.com" },
    { icon: <Phone className="h-4 w-4 text-emerald-600" />, value: "+91 9496178462", href: "tel:+919496178462" },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50/60 transition-colors duration-300">
      <div className="container max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT SIDE: Clean contextual typography & direct communication channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Get In Touch</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Let's discuss your next project.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed pt-2 max-w-sm">
                I'm always open to discussing full-stack opportunities, machine learning collaborations, or interesting software challenges.
              </p>
            </div>

            {/* Micro-strip inline links for phone/email */}
            <div className="space-y-3 pt-2">
              {directContact.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors w-max group"
                >
                  <div className="p-2 rounded-lg bg-white border border-slate-100 shadow-sm">
                    {item.icon}
                  </div>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>

            {/* Floating horizontal pill badges for main networks */}
            <div className="flex flex-wrap gap-3 pt-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200/80 hover:border-slate-300 hover:text-slate-900 rounded-xl transition-all shadow-sm hover:shadow-md"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: The Form Panel */}
          <div className="lg:col-span-7">
            <Card className="border border-slate-100 bg-white shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden">
              <CardContent className="p-8 sm:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-50/50 border-slate-200/80 focus-visible:ring-blue-500 focus-visible:bg-white h-11 rounded-xl transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-50/50 border-slate-200/80 focus-visible:ring-blue-500 focus-visible:bg-white h-11 rounded-xl transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project ideas..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-slate-50/50 border-slate-200/80 focus-visible:ring-blue-500 focus-visible:bg-white min-h-[140px] rounded-xl resize-none transition-all"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium tracking-wide transition-all shadow-lg shadow-slate-900/10 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
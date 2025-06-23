import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "emailjs-com"; // ✅ Added EmailJS

const SERVICE_ID = "service_091xzgk";
const TEMPLATE_ID = "template_xbflhsj";
const PUBLIC_KEY = "sc4yi0jG01V6XZqPl"; // aka user ID

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Something went wrong. Please try again later.");
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "vishwathman@gmail.com",
      href: "mailto:vishwathma@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9496178462",
      href: "tel:+919496178462",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "LinkedIn",
      href: "https://linkedin.com/in/vishwathma-n",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "GitHub",
      href: "https://github.com/Vishwathma2004",
    },
  ];

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="card-hover">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-theme-primary hover:bg-theme-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-theme-secondary">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <div className="p-2 bg-theme-primary/10 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="text-gray-800">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

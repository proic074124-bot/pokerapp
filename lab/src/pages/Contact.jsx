import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Health Avenue, Bangkok 10110" },
  { icon: Phone, label: "Phone", value: "+66 2 123 4567" },
  { icon: Mail, label: "Email", value: "info@ppluslab.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 7:00 AM – 6:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setSending(false);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-primary text-xs font-inter font-medium mb-4">Contact</span>
          <h1 className="font-inter font-bold text-4xl sm:text-5xl tracking-tight text-primary">
            Get in Touch
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed font-jakarta">
            Have questions or want to book a test? Reach out to our team — we're here to help.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-inter font-medium text-primary text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-sm font-jakarta mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-8 rounded-xl border border-border bg-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-inter font-medium text-primary mb-1.5 block">Name</label>
                <Input
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-inter font-medium text-primary mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-inter font-medium text-primary mb-1.5 block">Phone</label>
              <Input
                placeholder="+66 XX XXX XXXX"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-inter font-medium text-primary mb-1.5 block">Message</label>
              <Textarea
                placeholder="How can we help you?"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-inter font-semibold"
            >
              {sending ? "Sending..." : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
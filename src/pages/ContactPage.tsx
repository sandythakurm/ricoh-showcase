import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-16 bg-surface-warm">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-heading font-bold mb-4"
        >
          Contact <span className="text-primary">Us</span>
        </motion.h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl">
          Get in touch for product inquiries, quotes, and technical support
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 rounded-2xl overflow-hidden border shadow-sm"
        >
          <iframe
            title="Bytes Distribution FZCO - Dubai Silicon Oasis"
            src="https://www.google.com/maps?q=Dubai+Silicon+Oasis+DDP+Building+A1,+Dubai,+UAE&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Phone, title: "Phone", info: "(+971) 56 180 1396", href: "tel:+97156180396" },
              { icon: Mail, title: "Email", info: "info@bytes-me.com", href: "mailto:info@bytes-me.com" },
              { icon: MapPin, title: "Address", info: "Dubai Silicon Oasis, DDP, Building A1, Dubai, UAE" },
              { icon: Clock, title: "Hours", info: "Sun - Thu: 9:00 AM - 6:00 PM" },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border rounded-2xl p-6"
              >
                <item.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.info}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{item.info}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card border rounded-2xl p-8"
          >
            <h3 className="font-heading font-semibold text-xl mb-6">Send us a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                window.location.href = `mailto:info@bytes-me.com?subject=Website Inquiry from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
              }}
              className="flex flex-col gap-4"
            >
              <input name="name" type="text" placeholder="Your Name" required className="px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <input name="email" type="email" placeholder="Your Email" required className="px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <input name="phone" type="tel" placeholder="Phone Number" className="px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <textarea name="message" placeholder="Your Message" rows={4} required className="px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" />
              <button type="submit" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ContactPage;

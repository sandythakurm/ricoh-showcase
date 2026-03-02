import { motion } from "framer-motion";
import flexibilityBg from "@/assets/monitors/highlights/flexibility-bg.jpg";

const flexibilityItems = [
  {
    title: "Work remotely",
    text: "RICOH Portable Monitors make you feel limitless — even outside your usual work setup.",
  },
  {
    title: "Present boldly",
    text: "Present or project your work in the room for easier collaboration, viewing, and interaction.",
  },
  {
    title: "Create freely",
    text: "The 15.6\" OLED touchscreen with rapid response time allows creators' and entrepreneurs' imaginations to run wild.",
  },
  {
    title: "Write naturally",
    text: "Use the RICOH Stylus (sold separately) to take notes, annotate documents, draw and write, so no great idea goes missing.",
  },
  {
    title: "Travel-ready",
    text: "At just over 1lb, the RICOH Portable Monitor is designed for portability. With an ultra-slim 5mm profile, integrated kickstand, and built-in speakers, it's ready to work wherever you go.",
  },
];

const MonitorFlexibilitySection = () => (
  <section className="relative w-full overflow-hidden bg-ricoh-dark">
    {/* Background image */}
    <img
      src={flexibilityBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-ricoh-dark/90 via-ricoh-dark/70 to-transparent" />

    <div className="container relative z-10 py-16 md:py-24">
      <div className="max-w-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-10"
        >
          Flexibility wherever you go
        </motion.h2>

        <div className="space-y-8">
          {flexibilityItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3 className="text-xl font-heading font-bold text-primary-foreground mb-1.5">
                {item.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MonitorFlexibilitySection;

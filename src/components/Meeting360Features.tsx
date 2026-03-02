import { motion } from "framer-motion";
import smarterMeetingImg from "@/assets/meeting/highlights/smarter-meeting.jpg";
import activeSpeakerImg from "@/assets/meeting/highlights/active-speaker.jpg";
import flexibleLayoutsImg from "@/assets/meeting/highlights/flexible-layouts.jpg";
import multiPlatformImg from "@/assets/meeting/highlights/multi-platform-hero.png";

const smarterFeatures = [
  {
    title: "See the whole room",
    text: "360° panoramic video ensures remote attendees never miss a thing.",
  },
  {
    title: "Hear every voice",
    text: "Omnidirectional audio captures and projects every voice clearly, making remote participants feel like they're in the room.",
  },
  {
    title: "Always know who's speaking",
    text: "Meeting 360 intelligently identifies and highlights active speakers as the conversation flows.",
  },
  {
    title: "Start meetings on time",
    text: "USB-C connectivity simplifies setup—just connect and start collaborating.",
  },
];

const featureHighlights = [
  {
    title: "Active speaker focus",
    text: "Meeting 360 quickly and accurately identifies and displays those who are actively speaking.",
    video: "https://www.youtube.com/embed/K9FAjKlIN7g?rel=0&start=17",
  },
  {
    title: "Flexible screen layouts",
    text: "Effortlessly switch between multiple screen layouts with a simple tap, adjusting views to fit your team's needs.",
    image: flexibleLayoutsImg,
  },
];

const platforms = ["Microsoft Teams®", "Google Meet®", "Cisco Webex®", "Zoom®"];

const Meeting360Features = () => {
  return (
    <>
      {/* A Smarter Way to Meet */}
      <section className="relative overflow-hidden bg-muted/30">
        <div className="container py-14">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-12"
            >
              A smarter way to meet
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-10">
              {smarterFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="font-heading font-bold text-lg mb-1.5">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Platform Compatibility */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[420px] md:min-h-[500px] flex items-center justify-center">
          <img
            src={multiPlatformImg}
            alt="RICOH Meeting 360 multi-platform compatibility"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
          <div className="relative z-10 text-center px-6 py-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-heading font-bold mb-3"
            >
              Multi-platform compatibility
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-lg mx-auto mb-8"
            >
              Certified for Zoom® and works seamlessly with most video conferencing platforms.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-6 py-2.5 text-sm font-medium text-foreground"
                >
                  {platform}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights - Alternating */}
      <section className="bg-background">
        <div className="container py-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading font-bold mb-10 text-center"
          >
            Features designed for hybrid collaboration
          </motion.h2>
        </div>
        {featureHighlights.map((feature, i) => {
          return (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 min-h-[360px] ${i % 2 === 0 ? "bg-surface-warm" : "bg-background"}`}
            >
              {/* Media - always left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative min-h-[280px] lg:min-h-0"
              >
                {"video" in feature && feature.video ? (
                  <iframe
                    src={feature.video}
                    title={feature.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </motion.div>
              {/* Text - always right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-14"
              >
                <div className="w-10 h-1 bg-primary mb-5" />
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">{feature.text}</p>
              </motion.div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Meeting360Features;

import { motion } from "framer-motion";
import awardsBg from "@/assets/monitors/highlights/awards-beach.jpg";

const awards = [
  {
    title: "2024 TWICE VIP Awards",
    subtitle: "Computer and Gaming Category (Monitor) — Winner",
    link: "https://www.twice.com/vip-awards/announcing-the-winners-of-the-2024-twice-vip-awards",
  },
  {
    title: "2025 BIG Innovation Awards",
    subtitle: "Transformative Products (Computer) — Winner",
    link: "https://www.bintelligence.com/posts/innovation-unleashed-meet-the-visionaries-and-game-changers-of-the-2025-big-innovation-awards",
  },
  {
    title: "2024 Best in Biz Awards",
    subtitle: "Consumer Product of the Year — Gold Winner",
    link: "https://bestinbiz.awardsplatform.com/gallery/NwNoabjd",
  },
];

const MonitorAwardsSection = () => (
  <section className="relative w-full overflow-hidden">
    <img
      src={awardsBg}
      alt="Woman using RICOH Portable Monitor outdoors by the beach"
      className="w-full h-auto object-cover min-h-[300px] max-h-[500px]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 pb-8 md:pb-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {awards.map((award) => (
            <a
              key={award.title}
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/80 backdrop-blur-sm border rounded-xl p-4 hover:bg-card transition-colors group"
            >
              <h4 className="font-heading font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                {award.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{award.subtitle}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default MonitorAwardsSection;

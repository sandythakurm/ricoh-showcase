import { motion } from "framer-motion";

interface Highlight {
  title: string;
  text: string;
  image?: string;
}

interface ProductHighlightsProps {
  highlights: Highlight[];
}

const ProductHighlights = ({ highlights }: ProductHighlightsProps) => {
  return (
    <section>
      <div className="bg-background py-10">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center">
            Key Features
          </h2>
        </div>
      </div>
      {highlights.map((h, i) => {
        const isReversed = i % 2 !== 0;
        const bgClass = i % 2 === 0 ? "bg-surface-warm" : "bg-secondary";

        return (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${bgClass} py-14`}
          >
            <div
              className={`container flex flex-col ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              {h.image && (
                <div className="w-full lg:w-1/2 shrink-0">
                  <div className="relative overflow-hidden rounded-2xl border-b-4 border-primary">
                    <img
                      src={h.image}
                      alt={h.title}
                      className="w-full h-auto object-cover aspect-[16/10]"
                    />
                  </div>
                </div>
              )}

              {/* Text */}
              <div className={`w-full ${h.image ? "lg:w-1/2" : ""}`}>
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                  {h.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {h.text}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default ProductHighlights;

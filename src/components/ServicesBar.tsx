import ricohLogo from "@/assets/ricoh-logo.png";

const ServicesBar = () => (
  <section className="bg-primary py-4">
    <div className="container flex items-center justify-center gap-4">
      <img src={ricohLogo} alt="Ricoh" className="h-7 brightness-0 invert" />
      <span className="text-primary-foreground font-heading font-semibold text-sm md:text-base tracking-wide">
        Official Ricoh Distributor — MEA &amp; Africa
      </span>
    </div>
  </section>
);

export default ServicesBar;

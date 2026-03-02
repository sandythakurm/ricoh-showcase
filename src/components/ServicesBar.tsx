import ricohLogo from "@/assets/ricoh-logo.png";

const ServicesBar = () => (
  <section className="bg-primary py-6">
    <div className="container flex items-center justify-center gap-6">
      <img src={ricohLogo} alt="Ricoh" className="h-14 brightness-0 invert" />
      <span className="text-primary-foreground font-heading font-semibold text-lg md:text-2xl tracking-wide">
        Official Ricoh Distributor — MEA &amp; Africa
      </span>
    </div>
  </section>
);

export default ServicesBar;

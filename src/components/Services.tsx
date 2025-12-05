import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Target, FileText, Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import serviceDiagnostic from "@/assets/service-diagnostic.jpg";
import serviceBlueprint from "@/assets/service-blueprint.jpg";
import serviceFractional from "@/assets/service-fractional.jpg";

const services = [
  {
    icon: Target,
    title: "Diagnostic d'Architecture & Trajectoire 90 jours",
    description:
      "Voir clairement ce qui bloque structurellement le business et définir quoi attaquer en priorité sur 90 jours.",
    features: [
      "2 à 3 entretiens clés",
      "Analyse organisation et flux",
      "Roadmap 90 jours",
    ],
    price: "2 000 - 5 000 €",
    tag: "Point d'entrée",
    number: "01",
    image: serviceDiagnostic,
  },
  {
    icon: FileText,
    title: "Blueprint & Operating Playbook",
    description:
      "Dessiner la machine entière et livrer le mode d'emploi pour la faire tourner de façon lisible, scalable et pilotable.",
    features: [
      "Carte des capacités",
      "Operating model complet",
      "Architecture processus & données",
    ],
    price: "Sur devis",
    tag: "Offre cœur",
    number: "02",
    image: serviceBlueprint,
  },
  {
    icon: Users,
    title: "Fractional Business Architect",
    description:
      "Faire vivre l'architecture dans le temps : garder la cohérence, les priorités, la gouvernance et la qualité des décisions.",
    features: [
      "1 à 4 jours par mois",
      "Engagement 6 à 12 mois",
      "Arbitrage et accompagnement",
    ],
    price: "12 000 - 35 000 €",
    tag: "Accompagnement",
    number: "03",
    image: serviceFractional,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const activeService = services[activeIndex];

  return (
    <section id="offres" className="section-padding bg-muted">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-3xl p-8 lg:p-12 shadow-lg"
        >
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block text-sm font-medium text-muted-foreground border border-border rounded-full px-4 py-1.5 mb-4">
              Mes Offres
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-tight">
              Solutions d'Architecture Business
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Trois offres complémentaires pour transformer votre organisation de façon
              structurée et pérenne.
            </p>
          </div>

          {/* Main Content - Carousel Style */}
          <div className="grid lg:grid-cols-[1fr_2fr_auto] gap-8 items-start">
            {/* Left - Service Info */}
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                      <activeService.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {activeService.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {activeService.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {activeService.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <span className="font-bold text-foreground">{activeService.price}</span>
                    <a
                      href="#contact"
                      className="flex items-center gap-1 text-gold font-medium hover:gap-2 transition-all text-sm"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 mt-6">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Center - Image */}
            <div className="order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-3xl font-bold text-foreground">{activeService.number}</span>
                    <p className="text-xs text-muted-foreground">{activeService.tag}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right - Vertical Tabs */}
            <div className="order-3 flex lg:flex-col gap-4 justify-center">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-center gap-3 transition-all duration-300 ${
                    index === activeIndex ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <span
                    className={`text-4xl lg:text-5xl font-bold transition-colors ${
                      index === activeIndex ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span
                    className={`hidden lg:block text-xs uppercase tracking-widest font-medium whitespace-nowrap transition-colors writing-vertical ${
                      index === activeIndex ? "text-foreground" : "text-muted-foreground"
                    }`}
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {service.tag}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

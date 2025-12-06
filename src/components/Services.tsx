import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "diagnostic d'architecture",
    subtitle: "& trajectoire 90 jours",
    description:
      "voir clairement ce qui bloque structurellement le business et définir quoi attaquer en priorité sur 90 jours.",
    features: [
      "2 à 3 entretiens clés",
      "analyse organisation et flux",
      "roadmap 90 jours",
    ],
    price: "2 000 – 5 000 €",
    tag: "point d'entrée",
  },
  {
    number: "02",
    title: "blueprint",
    subtitle: "& operating playbook",
    description:
      "dessiner la machine entière et livrer le mode d'emploi pour la faire tourner de façon lisible, scalable et pilotable.",
    features: [
      "carte des capacités",
      "operating model complet",
      "architecture processus & données",
    ],
    price: "sur devis",
    tag: "offre cœur",
  },
  {
    number: "03",
    title: "fractional",
    subtitle: "business architect",
    description:
      "faire vivre l'architecture dans le temps : garder la cohérence, les priorités, la gouvernance et la qualité des décisions.",
    features: [
      "1 à 4 jours par mois",
      "engagement 6 à 12 mois",
      "arbitrage et accompagnement",
    ],
    price: "12 000 – 35 000 €",
    tag: "accompagnement",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="offres" className="section-padding border-t border-border">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="mono text-xs text-muted-foreground tracking-wider">offres</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mt-4">
            solutions d'architecture
            <br />
            <span className="text-muted-foreground">business</span>
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-border py-12 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="mono text-xs text-muted-foreground">{service.number}</span>
                </div>

                {/* Title */}
                <div className="col-span-10 md:col-span-4">
                  <h3 className="text-xl md:text-2xl font-light text-foreground leading-tight">
                    {service.title}
                    <br />
                    <span className="text-muted-foreground">{service.subtitle}</span>
                  </h3>
                  <span className="inline-block mt-4 mono text-xs text-muted-foreground border border-border px-3 py-1">
                    {service.tag}
                  </span>
                </div>

                {/* Description - Hidden on mobile, shown on hover area */}
                <div className="col-span-12 md:col-span-4 mt-6 md:mt-0">
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground text-xs mono flex items-center gap-2">
                        <span className="w-1 h-1 bg-muted-foreground" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="col-span-12 md:col-span-3 mt-6 md:mt-0 flex flex-col items-start md:items-end">
                  <span className="text-foreground font-light text-lg">{service.price}</span>
                  <a
                    href="#contact"
                    className={`mt-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 ${
                      hoveredIndex === index ? 'translate-x-2' : ''
                    }`}
                  >
                    en savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

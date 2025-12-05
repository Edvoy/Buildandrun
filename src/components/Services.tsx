import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, FileText, Users, ArrowRight } from "lucide-react";

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
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group card-elevated p-8 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
          <service.icon className="w-7 h-7 text-gold" />
        </div>
        <span className="text-6xl font-bold text-muted/50 group-hover:text-gold/20 transition-colors">
          {service.number}
        </span>
      </div>

      <span className="inline-block text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full mb-4 w-fit">
        {service.tag}
      </span>

      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
        {service.title}
      </h3>

      <p className="text-muted-foreground mb-6 flex-grow">
        {service.description}
      </p>

      <ul className="space-y-2 mb-6">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-border flex items-center justify-between">
        <span className="font-bold text-foreground">{service.price}</span>
        <a
          href="#contact"
          className="flex items-center gap-1 text-gold font-medium hover:gap-2 transition-all"
        >
          En savoir plus
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offres" className="section-padding bg-muted">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-medium mb-3">Mes Offres</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Solutions d'Architecture
            <br />
            <span className="text-gradient">Business</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trois offres complémentaires pour transformer votre organisation de façon
            structurée et pérenne.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

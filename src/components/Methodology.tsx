import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Map,
  Cog,
  BarChart3,
  GitBranch,
  Shield,
} from "lucide-react";

const deliverables = [
  {
    icon: Map,
    title: "Business Capabilities Map",
    description: "Carte des capacités essentielles de l'entreprise",
  },
  {
    icon: Cog,
    title: "Operating Model",
    description: "Comment on produit la valeur de bout en bout",
  },
  {
    icon: GitBranch,
    title: "Architecture Processus",
    description: "Le squelette des processus core, support et management",
  },
  {
    icon: BarChart3,
    title: "Architecture Données",
    description: "Quelles données produisent quelles décisions",
  },
  {
    icon: Shield,
    title: "Matrice Rôles & Décisions",
    description: "Qui décide quoi, où se situe la responsabilité",
  },
  {
    icon: Lightbulb,
    title: "Blueprint Transformation",
    description: "Séquence des chantiers et roadmap 6 à 18 mois",
  },
];

const Methodology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="methode" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-medium mb-3">Ma Méthode</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Du Chaos à la
              <br />
              <span className="text-gradient">Clarté Opérationnelle</span>
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Clarifier</h3>
                  <p className="text-muted-foreground">
                    La stratégie en principes opératoires : ce qu'on veut produire, comment, à quelles conditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Modéliser</h3>
                  <p className="text-muted-foreground">
                    L'entreprise en systèmes : flux, rôles, règles, ressources, métriques.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Orchestrer</h3>
                  <p className="text-muted-foreground">
                    La transformation pour que les modèles deviennent réalité.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy text-primary-foreground">
              <p className="text-lg font-medium">
                "Transformer un business chaotique en machine opérationnelle lisible, scalable et pilotable."
              </p>
            </div>
          </motion.div>

          {/* Right - Deliverables Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card-elevated p-5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

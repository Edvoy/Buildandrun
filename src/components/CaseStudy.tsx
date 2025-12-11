import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="etude-de-cas" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mono text-muted-foreground text-sm mb-4">03</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            étude de cas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Context & Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-medium mb-4 text-foreground">contexte</h3>
              <p className="text-foreground font-light leading-relaxed">
                Description du contexte initial du projet, des enjeux rencontrés par le client 
                et des objectifs à atteindre.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-foreground">démarche</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mono text-muted-foreground text-sm mt-1">01</span>
                  <p className="text-foreground font-light">
                    Première étape de la démarche appliquée
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono text-muted-foreground text-sm mt-1">02</span>
                  <p className="text-foreground font-light">
                    Deuxième étape de la démarche appliquée
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono text-muted-foreground text-sm mt-1">03</span>
                  <p className="text-foreground font-light">
                    Troisième étape de la démarche appliquée
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right column - Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-medium mb-4 text-foreground">résultats</h3>
              <p className="text-foreground font-light leading-relaxed mb-6">
                Description des résultats obtenus grâce à l'intervention.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l border-muted-foreground/30 pl-4">
                  <p className="text-3xl font-light text-foreground mb-1">+40%</p>
                  <p className="text-sm text-muted-foreground font-light">indicateur clé</p>
                </div>
                <div className="border-l border-muted-foreground/30 pl-4">
                  <p className="text-3xl font-light text-foreground mb-1">-25%</p>
                  <p className="text-sm text-muted-foreground font-light">indicateur clé</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-muted-foreground/20">
              <blockquote className="text-foreground font-light italic leading-relaxed">
                "Témoignage du client sur la qualité de l'accompagnement et les résultats obtenus."
              </blockquote>
              <p className="mono text-muted-foreground text-sm mt-4">
                — Nom du client, Fonction
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

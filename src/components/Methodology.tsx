import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "clarifier",
    description: "la stratégie en principes opératoires : ce qu'on veut produire, comment, à quelles conditions.",
  },
  {
    number: "02",
    title: "modéliser",
    description: "l'entreprise en systèmes : flux, rôles, règles, ressources, métriques.",
  },
  {
    number: "03",
    title: "orchestrer",
    description: "la transformation pour que les modèles deviennent réalité.",
  },
];

const deliverables = [
  "business capabilities map",
  "operating model",
  "architecture processus",
  "architecture données",
  "matrice rôles & décisions",
  "blueprint transformation",
];

const Methodology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="methode" className="section-padding border-t border-border">
      <div className="container-wide" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left - Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mono text-xs text-muted-foreground tracking-wider">méthode</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mt-4 mb-16">
              du chaos à la
              <br />
              <span className="text-muted-foreground">clarté opérationnelle</span>
            </h2>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-8"
                >
                  <span className="mono text-xs text-muted-foreground pt-1">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-light text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pt-20"
          >
            <span className="mono text-xs text-muted-foreground tracking-wider">livrables</span>
            
            <div className="mt-8 border-t border-border">
              {deliverables.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="py-4 border-b border-border group hover:bg-secondary/50 transition-colors -mx-4 px-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-light">{item}</span>
                    <span className="mono text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 border-l border-foreground pl-6"
            >
              <p className="text-foreground font-light text-lg leading-relaxed">
                "transformer un business chaotique en machine opérationnelle lisible, scalable et pilotable."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

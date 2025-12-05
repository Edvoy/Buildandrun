import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Calendar } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const perimeter = [
    { from: "Vision stratégique", to: "Capacités nécessaires" },
    { from: "Capabilities", to: "Processus" },
    { from: "Processus", to: "Flux opérationnels" },
    { from: "Flux", to: "Outils / Données" },
    { from: "Données", to: "Tableaux de bord" },
    { from: "Rôles", to: "Décisions" },
    { from: "Décisions", to: "Performance" },
  ];

  return (
    <section id="apropos" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - About */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-medium mb-3">À Propos</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Edouard Voyer
              <br />
              <span className="text-gradient">Business Architect</span>
            </h2>

            <div className="prose prose-lg text-muted-foreground mb-8">
              <p>
                Si l'entreprise est une machine, je dessine la machine, les flux, les interfaces, les règles, les leviers, puis je garantis que tout fonctionne ensemble.
              </p>
              <p>
                Mon rôle n'est pas cosmétique. Il est structurel. Je navigue sur toute la chaîne, du haut au bas, mais je ne fais pas le travail des équipes. Je conçois et je cadre.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border hover:border-gold transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gold" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:contact@buildandrun.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border hover:border-gold transition-colors"
              >
                <Mail className="w-5 h-5 text-gold" />
                <span className="font-medium">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Perimeter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Mon Périmètre d'Action
            </h3>

            <div className="space-y-3">
              {perimeter.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <span className="font-medium text-foreground group-hover:text-gold transition-colors">
                    {item.from}
                  </span>
                  <span className="flex-grow border-t border-dashed border-border" />
                  <span className="text-muted-foreground">{item.to}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

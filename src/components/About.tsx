import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const perimeter = [
    { from: "vision stratégique", to: "capacités nécessaires" },
    { from: "capabilities", to: "processus" },
    { from: "processus", to: "flux opérationnels" },
    { from: "flux", to: "outils / données" },
    { from: "données", to: "tableaux de bord" },
    { from: "rôles", to: "décisions" },
    { from: "décisions", to: "performance" },
  ];

  return (
    <section id="apropos" className="section-padding border-t border-border">
      <div className="container-wide" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left - About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mono text-xs text-muted-foreground tracking-wider">à propos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mt-4 mb-8">
              edouard voyer
              <br />
              <span className="text-muted-foreground">business architect</span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-muted-foreground font-light leading-relaxed">
                si l'entreprise est une machine, je dessine la machine, les flux, les interfaces, les règles, les leviers, puis je garantis que tout fonctionne ensemble.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                mon rôle n'est pas cosmétique. il est structurel. je navigue sur toute la chaîne, du haut au bas, mais je ne fais pas le travail des équipes. je conçois et je cadre.
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-sm">linkedin</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="mailto:contact@buildandrun.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-sm">email</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right - Perimeter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mono text-xs text-muted-foreground tracking-wider">périmètre d'action</span>

            <div className="mt-8 border-t border-border">
              {perimeter.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="py-4 border-b border-border flex items-center gap-4 group hover:bg-secondary/50 transition-colors -mx-4 px-4"
                >
                  <span className="text-foreground font-light flex-1">{item.from}</span>
                  <span className="flex-grow border-t border-dashed border-border max-w-[100px]" />
                  <span className="text-muted-foreground font-light flex-1 text-right">{item.to}</span>
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

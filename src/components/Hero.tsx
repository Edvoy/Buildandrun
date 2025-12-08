import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-32 pb-12"
    >
      <div className="flex-1 flex flex-col justify-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm mono mb-8 tracking-wider">
            edouard voyer — business architect
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-[0.95] mb-12"
        >
          transformer votre
          <br />
          business en système
          <br />
          <span className="text-muted-foreground">performant.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-foreground text-lg md:text-xl max-w-xl font-light leading-relaxed"
        >
          j'aligne stratégie, opérations, données et organisation en un système cohérent, lisible et scalable.
        </motion.p>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex items-end justify-between pt-20"
      >
        <div className="flex gap-16 mono text-xs text-muted-foreground">
          <div>
            <span className="block text-foreground text-2xl font-light mb-1">10+</span>
            <span>années d'expérience</span>
          </div>
          <div>
            <span className="block text-foreground text-2xl font-light mb-1">50+</span>
            <span>projets réalisés</span>
          </div>
          <div className="hidden sm:block">
            <span className="block text-foreground text-2xl font-light mb-1">95%</span>
            <span>clients satisfaits</span>
          </div>
        </div>

        <a 
          href="#offres" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-sm mono">découvrir</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

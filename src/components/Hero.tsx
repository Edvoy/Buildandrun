import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-new.jpg";
import logo from "@/assets/logo-build-run.png";

const Hero = () => {
  const stats = [
    { value: "10+", label: "Années d'expérience" },
    { value: "50+", label: "Projets réalisés" },
    { value: "95%", label: "Clients satisfaits" },
  ];

  return (
    <section
      id="accueil"
      className="min-h-screen bg-muted pt-24 pb-12 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-navy min-h-[600px] lg:min-h-[700px]"
        >
          {/* Background Image */}
          <img
            src={heroBg}
            alt="Business Architecture Office"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-between min-h-[600px] lg:min-h-[700px]">
            <div className="max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
              >
                Transformez votre
                <br />
                <span className="text-gold">Business</span> en
                <br />
                Système Performant
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-primary-foreground/80 mb-8 max-w-md"
              >
                J'aligne stratégie, opérations, données et organisation en un système cohérent, lisible et scalable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="#offres"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-navy font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
                >
                  Découvrir les offres
                  <span className="w-6 h-6 rounded-full bg-navy flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-8 md:gap-16 mt-auto pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/60 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom Right Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-primary-foreground rounded-xl p-4 flex items-center gap-3 shadow-lg"
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-navy/20 border-2 border-primary-foreground flex items-center justify-center">
                  <span className="text-xs font-semibold text-navy">B&R</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">Build&Run</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">5/5</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

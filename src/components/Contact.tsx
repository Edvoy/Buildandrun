import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("message envoyé avec succès", {
      description: "je vous répondrai dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding border-t border-border" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mono text-xs text-muted-foreground tracking-wider">contact</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mt-4 mb-8">
              prêt à transformer
              <br />
              <span className="text-muted-foreground">votre organisation ?</span>
            </h2>

            <p className="text-foreground font-light leading-relaxed mb-12 max-w-md">
              commencez par un diagnostic d'architecture pour identifier ce qui bloque vraiment votre business et définir les priorités des 90 prochains jours.
            </p>

            <div className="space-y-4 mono text-xs text-foreground">
              <div className="flex items-center gap-4">
                <span className="w-1 h-1 bg-foreground" />
                <span>entretien initial gratuit de 30 minutes</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-1 h-1 bg-foreground" />
                <span>approche structurée et méthodique</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-1 h-1 bg-foreground" />
                <span>résultats mesurables sous 90 jours</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mono text-xs text-muted-foreground mb-3"
                  >
                    nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:border-foreground outline-none transition-colors font-light"
                    placeholder="votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mono text-xs text-muted-foreground mb-3"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:border-foreground outline-none transition-colors font-light"
                    placeholder="vous@entreprise.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block mono text-xs text-muted-foreground mb-3"
                >
                  entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:border-foreground outline-none transition-colors font-light"
                  placeholder="nom de votre entreprise"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mono text-xs text-muted-foreground mb-3"
                >
                  votre besoin
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:border-foreground outline-none transition-colors resize-none font-light"
                  placeholder="décrivez brièvement votre situation et vos enjeux..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "envoi en cours..."
                ) : (
                  <>
                    envoyer ma demande
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

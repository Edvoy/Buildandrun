import logo from "@/assets/logo-build-run.png";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-wide section-padding !py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#accueil" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Build&Run" className="h-10 w-auto" />
              <span className="font-bold text-lg text-foreground">Build&Run</span>
            </a>
            <p className="text-muted-foreground mb-4">
              Business Architecture pour entreprises ambitieuses.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@buildandrun.com"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#offres", label: "Offres" },
                { href: "#methode", label: "Méthode" },
                { href: "#apropos", label: "À propos" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Offres</h4>
            <ul className="space-y-2">
              {[
                "Diagnostic d'Architecture",
                "Blueprint & Playbook",
                "Fractional Business Architect",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#offres"
                    className="text-muted-foreground hover:text-gold transition-colors flex items-center gap-1 group"
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Edouard Voyer • Build&Run. Tous droits réservés.
          </p>
          <p className="text-muted-foreground text-sm">
            Business Architect
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

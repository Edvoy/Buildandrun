import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="px-6 md:px-12 lg:px-20 py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#accueil" className="inline-block mb-6">
                <span className="text-foreground text-lg font-light">build&run</span>
              </a>
              <p className="text-muted-foreground font-light max-w-sm leading-relaxed">
                business architecture pour entreprises ambitieuses. transformer le chaos en clarté opérationnelle.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <span className="mono text-xs text-muted-foreground tracking-wider block mb-6">navigation</span>
              <ul className="space-y-3">
                {[
                  { href: "#accueil", label: "accueil" },
                  { href: "#offres", label: "offres" },
                  { href: "#methode", label: "méthode" },
                  { href: "#apropos", label: "à propos" },
                  { href: "#contact", label: "contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors font-light link-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <span className="mono text-xs text-muted-foreground tracking-wider block mb-6">contact</span>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.linkedin.com/in/edouardvoyer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors font-light flex items-center gap-1 group"
                  >
                    linkedin
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="mono text-xs text-muted-foreground">
              © {currentYear} edouard voyer — build&run
            </p>
            <p className="mono text-xs text-muted-foreground">
              business architect
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

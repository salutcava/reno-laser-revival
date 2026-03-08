import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Votre demande a bien été envoyée ! Nous vous rappelons sous 24h.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const inputClasses =
    "w-full border-2 border-border/50 rounded-2xl px-4 py-3.5 bg-background/80 text-foreground font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none placeholder:text-muted-foreground/60";

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-2xl px-5 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <motion.span
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-5 backdrop-blur-sm border border-primary/15"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Réponse garantie sous 24h
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Demandez votre devis gratuit
            </h2>
            <p className="text-muted-foreground text-lg">Sans engagement • Estimation précise et rapide</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <motion.div className="bg-card/80 backdrop-blur-md rounded-3xl shadow-2xl shadow-primary/5 p-7 md:p-10 border border-border/40">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block font-bold text-sm mb-2 text-foreground">
                    Votre nom <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    placeholder="Jean Dupont"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block font-bold text-sm mb-2 text-foreground">
                    Téléphone <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    pattern="^[0-9+ ()-]{8,}$"
                    placeholder="06 12 34 56 78"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="adresse" className="block font-bold text-sm mb-2 text-foreground">
                  Adresse d'intervention <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  required
                  placeholder="12 rue de la Marne, Épernay"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-bold text-sm mb-2 text-foreground">
                  Décrivez votre projet <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Je souhaite faire décaper 4 volets en bois..."
                  defaultValue="Bonjour, j'aimerais faire appel à vos services pour"
                  className={`${inputClasses} resize-y min-h-[120px]`}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="rgpd"
                  required
                  className="mt-1 w-5 h-5 accent-primary rounded-lg"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                  J'accepte d'être recontacté pour mon devis <span className="text-destructive">*</span>
                  <br />
                  <a href="/mentions-legales" className="underline text-xs opacity-70 hover:opacity-100">
                    Politique de confidentialité
                  </a>
                </span>
              </label>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-extrabold text-lg transition-all disabled:opacity-60 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                {sending ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Envoi en cours…
                  </span>
                ) : (
                  "Envoyer ma demande — C'est gratuit"
                )}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-border/60" />
              <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">ou directement</span>
              <div className="flex-1 h-px bg-border/60" />
            </div>

            {/* Quick contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: "📞", label: "Téléphone", value: "07 61 46 68 23", href: "tel:+33761466823" },
                { icon: "✉️", label: "Email", value: "contact@renovlaser.fr", href: "mailto:contact@renovlaser.fr" },
                { icon: "💬", label: "WhatsApp", value: "Discuter", href: "https://wa.me/33761466823" },
              ].map((m) => (
                <motion.a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener" : undefined}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center bg-muted/50 backdrop-blur-sm rounded-2xl py-5 hover:shadow-lg transition-all no-underline border-2 border-transparent hover:border-primary/20"
                >
                  <span className="text-2xl mb-2">{m.icon}</span>
                  <span className="font-bold text-sm text-foreground">{m.label}</span>
                  <span className="text-primary text-xs font-semibold mt-0.5">{m.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContactSection;

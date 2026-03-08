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

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-2xl px-5">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
              ⏰ Réponse garantie sous 24h
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2">Demander un devis gratuit</h2>
            <p className="text-muted-foreground">Sans engagement • Estimation précise sous 24h</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <motion.div
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
            className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border/50"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block font-semibold text-sm mb-1.5">👤 Votre nom <span className="text-destructive">*</span></label>
                  <input type="text" id="nom" name="nom" required placeholder="Ex: Jean Dupont" className="w-full border border-input rounded-xl px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none" />
                </div>
                <div>
                  <label htmlFor="telephone" className="block font-semibold text-sm mb-1.5">📞 Téléphone <span className="text-destructive">*</span></label>
                  <input type="tel" id="telephone" name="telephone" required pattern="^[0-9+ ()-]{8,}$" placeholder="Ex: 06 12 34 56 78" className="w-full border border-input rounded-xl px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="adresse" className="block font-semibold text-sm mb-1.5">📍 Adresse de l'intervention <span className="text-destructive">*</span></label>
                <input type="text" id="adresse" name="adresse" required placeholder="Ex: 12 rue de la Marne, Épernay" className="w-full border border-input rounded-xl px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold text-sm mb-1.5">💬 Décrivez votre projet <span className="text-destructive">*</span></label>
                <textarea id="message" name="message" required rows={4} placeholder="Ex: Je souhaite faire décaper 4 volets en bois..." defaultValue="Bonjour, j'aimerais faire appel à vos services pour" className="w-full border border-input rounded-xl px-4 py-3 bg-background text-foreground resize-y focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none" />
              </div>
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" name="rgpd" required className="mt-1 w-5 h-5 accent-primary rounded" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    J'accepte d'être recontacté pour mon devis <span className="text-destructive">*</span>
                    <br /><a href="/mentions-legales" className="underline text-xs">Politique de confidentialité</a>
                  </span>
                </label>
              </div>
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-extrabold text-lg hover:opacity-90 transition-opacity disabled:opacity-60 shadow-lg animate-pulse-glow"
              >
                {sending ? "Envoi en cours…" : "📧 Envoyer ma demande — C'est gratuit !"}
              </motion.button>
            </form>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-sm font-bold uppercase tracking-wider">ou directement</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: "📞", label: "Téléphone", value: "07 61 46 68 23", href: "tel:+33761466823" },
                { icon: "✉️", label: "Email", value: "contact@renovlaser.fr", href: "mailto:contact@renovlaser.fr" },
                { icon: "💬", label: "WhatsApp", value: "Discuter maintenant", href: "https://wa.me/33761466823" },
              ].map((m) => (
                <motion.a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener" : undefined}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center bg-muted rounded-xl py-4 hover:shadow-md transition-all no-underline border border-transparent hover:border-primary/20"
                >
                  <span className="text-2xl mb-1">{m.icon}</span>
                  <span className="font-bold text-sm text-foreground">{m.label}</span>
                  <span className="text-primary text-xs font-semibold">{m.value}</span>
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

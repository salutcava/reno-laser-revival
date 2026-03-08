import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      toast.success("Votre demande a bien été envoyée ! Nous vous rappelons sous 24h.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 bg-muted/30">
      <div className="container mx-auto max-w-2xl px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">📝 Demander un devis gratuit</h2>
        <p className="text-center text-muted-foreground mb-6">Remplissez ce formulaire, nous vous rappelons sous 24h</p>

        <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nom" className="block font-semibold text-sm mb-1">👤 Votre nom <span className="text-destructive">*</span></label>
              <input type="text" id="nom" name="nom" required placeholder="Ex: Jean Dupont" className="w-full border border-input rounded-lg px-3 py-2.5 bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="adresse" className="block font-semibold text-sm mb-1">📍 Adresse de l'intervention <span className="text-destructive">*</span></label>
              <input type="text" id="adresse" name="adresse" required placeholder="Ex: 12 rue de la Marne, Épernay" className="w-full border border-input rounded-lg px-3 py-2.5 bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="telephone" className="block font-semibold text-sm mb-1">📞 Votre téléphone <span className="text-destructive">*</span></label>
              <input type="tel" id="telephone" name="telephone" required pattern="^[0-9+ ()-]{8,}$" placeholder="Ex: 06 12 34 56 78" className="w-full border border-input rounded-lg px-3 py-2.5 bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold text-sm mb-1">💬 Décrivez votre projet <span className="text-destructive">*</span></label>
              <textarea id="message" name="message" required rows={5} placeholder="Ex: Je souhaite faire décaper 4 volets en bois..." defaultValue="Bonjour, j'aimerais faire appel à vos services pour" className="w-full border border-input rounded-lg px-3 py-2.5 bg-background text-foreground resize-y" />
              <p className="text-muted-foreground text-xs mt-1">Précisez le type de surface et l'état actuel</p>
            </div>
            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" name="rgpd" required className="mt-1 accent-primary" />
                <span className="text-sm">J'accepte d'être recontacté pour mon devis <span className="text-destructive">*</span></span>
              </label>
              <p className="text-muted-foreground text-xs mt-1">
                Vos données sont protégées — <a href="/mentions-legales" className="underline">Politique de confidentialité</a>
              </p>
            </div>
            <button type="submit" disabled={sending} className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-extrabold text-lg hover:opacity-90 transition-opacity disabled:opacity-60">
              {sending ? "Envoi en cours…" : "📧 Envoyer ma demande de devis"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-muted-foreground text-sm font-bold">OU CONTACTEZ-NOUS DIRECTEMENT</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a href="tel:+33761466823" className="flex flex-col items-center bg-muted rounded-xl py-4 hover:shadow-md transition-shadow no-underline">
              <span className="text-2xl">📞</span>
              <span className="font-bold text-sm text-foreground">Téléphone</span>
              <span className="text-primary text-sm font-semibold">07 61 46 68 23</span>
            </a>
            <a href="mailto:contact@renovlaser.fr" className="flex flex-col items-center bg-muted rounded-xl py-4 hover:shadow-md transition-shadow no-underline">
              <span className="text-2xl">✉️</span>
              <span className="font-bold text-sm text-foreground">Email</span>
              <span className="text-primary text-sm font-semibold">contact@renovlaser.fr</span>
            </a>
            <a href="https://wa.me/33761466823" target="_blank" rel="noopener" className="flex flex-col items-center bg-muted rounded-xl py-4 hover:shadow-md transition-shadow no-underline">
              <span className="text-2xl">💬</span>
              <span className="font-bold text-sm text-foreground">WhatsApp</span>
              <span className="text-primary text-sm font-semibold">Discuter maintenant</span>
            </a>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-4">
            ⏰ Réponse garantie sous 24h • Intervention dans un rayon de 30 km autour de Dormans
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

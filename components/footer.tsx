import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-navy text-white">
      {/* Wavy top edge */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Contact Info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow">
                <span className="text-lg font-bold text-foreground">AS</span>
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold">Creche Auta de Souza</h3>
                <p className="text-sm text-white/70">Educação com amor</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal-light" />
                <p className="text-sm text-white/80">
                  Avenida dos Andradas, 850 - Jardim Marchesi
                  <br />
                  Ribeirão Preto - SP, 14000-000
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-light" />
                <p className="text-sm text-white/80">(16) 3902-6088</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-light" />
                <p className="text-sm text-white/80">crecheautadesouza@gmail.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-light transition-colors hover:bg-teal"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-light transition-colors hover:bg-teal"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Location Map */}
          <div>
            <h3 className="mb-6 font-sans text-lg font-bold">Localização</h3>
            <div className="aspect-square overflow-hidden rounded-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000.1419173914575!2d-47.83409553040005!3d-21.20581469878051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf00726973fd%3A0xdfaa44d337faa1fc!2sCreche%20Auta%20de%20Souza!5e1!3m2!1spt-BR!2sbr!4v1775046983654!5m2!1spt-BR!2sbr" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 3: About Auta de Souza */}
          <div>
            <h3 className="mb-6 font-sans text-lg font-bold">Sobre Auta de Souza</h3>
            <div className="rounded-xl bg-navy-light p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lavender">
                  <Heart className="h-5 w-5 text-lavender-dark" />
                </div>
                <span className="font-semibold text-lavender-light">1876 - 1901</span>
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                <strong className="text-white">Auta de Souza</strong> foi uma poetisa e professora brasileira, 
                nascida em Macaíba, Rio Grande do Norte. Conhecida por sua profunda sensibilidade 
                e dedicação à caridade, ela deixou um legado de amor ao próximo e à educação. 
                Sua obra é marcada pela espiritualidade e pelo compromisso com os mais necessitados.
              </p>
              <p className="mt-4 text-sm italic text-lavender-light">
                &quot;A caridade é a chama que ilumina o caminho dos que sofrem.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white/60">
              © 2026 Creche Auta de Souza. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="transition-colors hover:text-white">
                Política de Privacidade
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

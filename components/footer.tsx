"use client";

import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-navy text-white">
      {/* Wavy top edge */}
      <div className="absolute -top-12 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-12 w-full rotate-180"
          fill="var(--navy)"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
        </svg>
      </div>

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
                  Rua Exemplo, 123 - Jardim Marchesi
                  <br />
                  Ribeirão Preto - SP, 14000-000
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-light" />
                <p className="text-sm text-white/80">(16) 1234-5678</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-light" />
                <p className="text-sm text-white/80">contato@crecheautadesouza.org.br</p>
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
            <div className="aspect-video overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14859.5!2d-47.8358!3d-21.1775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf5a5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sJardim%20Marchesi%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Creche Auta de Souza"
                className="h-full w-full"
              />
            </div>
            <a 
              href="https://www.google.com/maps/search/Jardim+Marchesi+Ribeirão+Preto+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-xs text-white/60 transition-colors hover:text-teal-light"
            >
              Abrir no Google Maps
            </a>
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

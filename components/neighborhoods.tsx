"use client";

import { useState } from "react";
import { MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const neighborhoods = [
  { 
    name: "Jardim Marchesi", 
    families: 85, 
    primary: true,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14859.5!2d-47.8358!3d-21.1775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf5a5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sJardim%20Marchesi%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr"
  },
  { 
    name: "Progresso", 
    families: 42, 
    primary: false,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14859.5!2d-47.8200!3d-21.1650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf0000000000%3A0x0000000000000000!2sProgresso%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr"
  },
  { 
    name: "Parque Ribeirão", 
    families: 38, 
    primary: false,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14859.5!2d-47.8450!3d-21.1900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf0000000000%3A0x0000000000000000!2sParque%20Ribeir%C3%A3o%20Preto%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr"
  },
  { 
    name: "João Rossi", 
    families: 25, 
    primary: false,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14859.5!2d-47.8100!3d-21.2000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf0000000000%3A0x0000000000000000!2sJardim%20Jo%C3%A3o%20Rossi%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr"
  },
  { 
    name: "Vila Virgínia", 
    families: 31, 
    primary: false,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14859.5!2d-47.8250!3d-21.2100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf0000000000%3A0x0000000000000000!2sVila%20Virg%C3%ADnia%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr"
  },
];

export function Neighborhoods() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(neighborhoods[0]);

  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-lavender-light px-4 py-2 text-sm font-semibold text-lavender-dark">
            Nossa Comunidade
          </span>
          <h2 className="font-sans text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
            Bairros Atendidos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            Servindo famílias de diversos bairros da região de Ribeirão Preto com dedicação e carinho.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Neighborhood List */}
          <Card className="border-0 bg-card p-8 shadow-xl">
            <h3 className="mb-6 flex items-center gap-2 font-sans text-xl font-bold text-foreground">
              <MapPin className="h-5 w-5 text-teal" />
              Regiões Atendidas
            </h3>
            
            <div className="space-y-4">
              {neighborhoods.map((neighborhood, index) => {
                const isSelected = selectedNeighborhood.name === neighborhood.name;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedNeighborhood(neighborhood)}
                    className={`flex w-full items-center justify-between rounded-xl p-4 transition-all hover:scale-[1.02] ${
                      isSelected
                        ? "bg-teal text-white ring-2 ring-teal ring-offset-2"
                        : "bg-cream-dark hover:bg-cream-dark/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          isSelected
                            ? "bg-white/20"
                            : "bg-teal-light"
                        }`}
                      >
                        <MapPin
                          className={`h-5 w-5 ${
                            isSelected
                              ? "text-white"
                              : "text-teal-dark"
                          }`}
                        />
                      </div>
                      <span className="font-semibold">{neighborhood.name}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${
                        isSelected
                          ? "bg-white/20 text-white hover:bg-white/30"
                          : "bg-teal-light text-teal-dark hover:bg-teal-light"
                      }`}
                    >
                      <Users className="mr-1 h-3 w-3" />
                      {neighborhood.families} famílias
                    </Badge>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl bg-yellow-light p-4">
              <p className="text-center text-sm font-medium text-yellow-dark">
                <strong>Total:</strong> {neighborhoods.reduce((acc, n) => acc + n.families, 0)} famílias atendidas
              </p>
            </div>
          </Card>

          {/* Right: Google Maps */}
          <Card className="relative overflow-hidden border-0 bg-card p-4 shadow-xl">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              <iframe
                key={selectedNeighborhood.name}
                src={selectedNeighborhood.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${selectedNeighborhood.name} em Ribeirão Preto`}
                className="absolute inset-0"
              />
            </div>

            {/* Map Legend */}
            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal" />
                <span className="text-sm font-medium text-foreground">{selectedNeighborhood.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">Ribeirão Preto - SP</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Users, Clock, MapPin, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const statsInfo = [
  {
    icon: Users,
    value: "250",
    label: "Crianças atendidas",
    description: "Acolhimento diário com carinho e dedicação",
    iconBg: "bg-teal-light",
    iconColor: "text-teal-dark",
  },
  {
    icon: Clock,
    value: "Integral",
    label: "Atendimento",
    description: "Período completo para apoiar as famílias",
    iconBg: "bg-yellow-light",
    iconColor: "text-yellow-dark",
  },
  {
    icon: MapPin,
    value: "5",
    label: "Bairros atendidos",
    description: "Impacto regional significativo",
    iconBg: "bg-lavender-light",
    iconColor: "text-lavender-dark",
  },
  {
    icon: Heart,
    value: "15+",
    label: "Anos de história",
    description: "Tradição em educação infantil",
    iconBg: "bg-teal-light",
    iconColor: "text-teal-dark",
  },
];

export function Hero() {
  return (
    <section className="relative">
      {/* Hero Image Section */}
      <div className="relative min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-children.jpg"
            alt="Crianças brincando na creche"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 pt-20 pb-16">
          {/* Logo/Badge */}
          <div className="mb-6 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow">
              <span className="text-sm font-bold text-foreground">AS</span>
            </div>
            <span className="text-sm font-medium text-white">Creche Auta de Souza</span>
          </div>

          {/* Main Title */}
          <h1 className="mb-4 max-w-4xl text-center font-sans text-4xl font-bold leading-tight text-white text-balance md:text-5xl lg:text-6xl">
            Promovendo o futuro no Jardim Marchesi
          </h1>

          <p className="mb-8 max-w-2xl text-center text-lg text-white/90 text-pretty md:text-xl">
            Educação infantil com amor, dedicação e compromisso com o desenvolvimento integral de cada criança.
          </p>

          {/* CTA Button */}
          <button className="rounded-full bg-yellow px-8 py-4 font-semibold text-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            Conheça Nossa História
          </button>
        </div>

        {/* Wavy bottom edge */}

      </div>

      {/* Stats Cards Section - Below Hero */}
      <div className="relative z-20 px-4 md:-mt-12 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {statsInfo.map((stat, index) => (
            <Card
              key={index}
              className="group border-0 bg-white p-4 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl md:p-6"
            >
              <div className="mb-3 flex justify-center">
                <div className={`rounded-xl p-3 ${stat.iconBg}`}>
                  <stat.icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.iconColor}`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm font-semibold text-foreground">{stat.label}</div>
              <p className="mt-2 hidden text-xs text-muted-foreground md:block">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

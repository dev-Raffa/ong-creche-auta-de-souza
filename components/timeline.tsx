import { Sparkles, Building, Award, Heart } from "lucide-react";

const timelineEvents = [
  {
    year: "2009",
    title: "O Início",
    description:
      "Fundação da Creche Auta de Souza com o sonho de transformar vidas através da educação.",
    icon: Sparkles,
    color: "bg-teal",
  },
  {
    year: "2016",
    title: "Expansão",
    description:
      "Ampliação das instalações para atender mais famílias da comunidade.",
    icon: Building,
    color: "bg-yellow",
  },
  {
    year: "2017",
    title: "Reconhecimento",
    description:
      "Certificação de excelência em educação infantil pela Secretaria de Educação.",
    icon: Award,
    color: "bg-lavender",
  },
  {
    year: "Hoje",
    title: "Compromisso Contínuo",
    description:
      "Mais de 200 crianças atendidas anualmente, com dedicação e amor incondicionais.",
    icon: Heart,
    color: "bg-teal-dark",
  },
];

export function Timeline() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-32">
      {/* Watercolor texture overlay */}
      <div className="watercolor-bg pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-teal-light px-4 py-2 text-sm font-semibold text-teal-dark">
            Nossa Jornada
          </span>
          <h2 className="font-sans text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
            Uma História de Amor e Dedicação
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-teal via-yellow to-lavender md:block" />

          {/* Mobile Line */}
          <div className="absolute top-0 left-6 h-full w-0.5 bg-gradient-to-b from-teal via-yellow to-lavender md:hidden" />

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon Circle - Mobile */}
                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${event.color} text-white shadow-lg md:hidden`}
                >
                  <event.icon className="h-5 w-5" />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="rounded-2xl bg-card p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                    <span
                      className={`mb-2 inline-block rounded-full px-3 py-1 text-sm font-bold ${event.color} text-white`}
                    >
                      {event.year}
                    </span>
                    <h3 className="mb-2 font-sans text-xl font-bold text-foreground">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                {/* Icon Circle - Desktop */}
                <div
                  className={`absolute left-1/2 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full ${event.color} text-white shadow-lg md:flex`}
                >
                  <event.icon className="h-6 w-6" />
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

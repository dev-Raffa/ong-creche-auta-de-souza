import Image from "next/image";
import { Card } from "@/components/ui/card";

const activities = [
  {
    image: "/images/artes-e-criatividade.jpeg",
    title: "Artes e Criatividade",
    date: "Março 2024",
    description: "Oficina de pintura e expressão artística",
  },
  {
    image: "/images/brincadeiras-ao-ar-livre.jpeg",
    title: "Brincadeiras ao Ar Livre",
    date: "Fevereiro 2024",
    description: "Momentos de lazer no parquinho",
  },
  {
    image: "/images/contato-com-a-natureza.jpeg",
    title: "Contato com a Natureza",
    date: "Janeiro 2024",
    description: "Explorando o ambiente natural e desenvolvendo consciência ecológica",
  },
  {
    image: "/images/descobrindo-o-mundo.jpeg",
    title: "Descobrindo o Mundo",
    date: "Dezembro 2023",
    description: "Descobertas e aprendizados sobre a natureza",
  },
  {
    image: "/images/alimentacao-saudavel.jpeg",
    title: "Alimentação Saudável",
    date: "Novembro 2023",
    description: "Aprendendo sobre nutrição",
  },
  {
    image: "/images/desenvolvimento-motor.jpeg",
    title: "Desenvolvimento Motor",
    date: "Outubro 2023",
    description: "Brincadeiras educativas",
  },
];

function WavyCard({ activity }: { activity: (typeof activities)[0] }) {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 bg-card shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
      {/* Image with wavy top border */}
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Wavy overlay at bottom of image */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute -bottom-1 left-0 right-0 h-8 w-full"
          fill="var(--card)"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="p-6 pt-2">
        <span className="mb-2 inline-block rounded-full bg-lavender-light px-3 py-1 text-xs font-medium text-lavender-dark">
          {activity.date}
        </span>
        <h3 className="mb-2 font-sans text-lg font-bold text-foreground">
          {activity.title}
        </h3>
        <p className="text-sm text-muted-foreground">{activity.description}</p>
      </div>
    </Card>
  );
}

export function Activities() {
  return (
    <section className="relative overflow-hidden bg-cream-dark py-20 md:py-32">
      {/* Wavy top edge */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-12 w-full rotate-180"
          fill="var(--cream)"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
        </svg>
      </div>

      {/* Paper texture overlay */}
      <div className="watercolor-bg pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 pt-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-yellow-light px-4 py-2 text-sm font-semibold text-yellow-dark">
            Momentos Especiais
          </span>
          <h2 className="font-sans text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
            Atividades Recentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            Acompanhe as experiências de aprendizado e diversão que proporcionamos às nossas crianças.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <WavyCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}

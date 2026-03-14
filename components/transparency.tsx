"use client";

import { FileText, Download, PieChart, Scale, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const documents = [
  {
    icon: FileText,
    title: "Planos de Trabalho",
    description: "Planejamento anual e metas educacionais",
    year: "2024",
    color: "bg-teal-light text-teal-dark",
    iconBg: "bg-teal",
  },
  {
    icon: PieChart,
    title: "Prestação de Contas",
    description: "Relatórios financeiros e aplicação de recursos",
    year: "2024",
    color: "bg-yellow-light text-yellow-dark",
    iconBg: "bg-yellow",
  },
  {
    icon: Scale,
    title: "Estatuto",
    description: "Regimento interno e normas institucionais",
    year: "Vigente",
    color: "bg-lavender-light text-lavender-dark",
    iconBg: "bg-lavender",
  },
  {
    icon: BarChart3,
    title: "Demonstrações Financeiras",
    description: "Balanços e demonstrativos contábeis",
    year: "2024",
    color: "bg-teal-light text-teal-dark",
    iconBg: "bg-teal",
  },
];

export function Transparency() {
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

      <div className="relative mx-auto max-w-6xl px-4 pt-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-teal-light px-4 py-2 text-sm font-semibold text-teal-dark">
            Compromisso com a Comunidade
          </span>
          <h2 className="font-sans text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
            Portal da Transparência
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            Acesse nossos documentos e relatórios. Transparência e prestação de contas fazem parte dos nossos valores.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {documents.map((doc, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 bg-card p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${doc.iconBg} text-white shadow-md`}
                >
                  <doc.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="font-sans text-lg font-bold text-foreground">
                      {doc.title}
                    </h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${doc.color}`}
                    >
                      {doc.year}
                    </span>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {doc.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-teal text-teal transition-all hover:bg-teal hover:text-white"
                  >
                    <Download className="h-4 w-4" />
                    Baixar Documento
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-2xl bg-card p-8 shadow-lg">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-yellow">
              <FileText className="h-8 w-8 text-foreground" />
            </div>
            <div>
              <h3 className="mb-2 font-sans text-xl font-bold text-foreground">
                Precisa de mais informações?
              </h3>
              <p className="text-muted-foreground">
                Entre em contato conosco para solicitar documentos específicos ou esclarecer dúvidas sobre nossa gestão.
              </p>
            </div>
            <Button className="shrink-0 bg-teal hover:bg-teal-dark">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ContentGeneratorForm } from "@/components/content-generator-form";

export default function ContentGeneratorPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Ferramenta de Conteúdo IA
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
          Crie notícias e anúncios para o site de forma rápida e eficiente. Descreva os eventos e deixe a IA cuidar da redação.
        </p>
      </div>
      <ContentGeneratorForm />
    </div>
  );
}

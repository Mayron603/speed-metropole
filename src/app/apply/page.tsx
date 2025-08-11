import { ApplyForm } from "@/components/apply-form";

export default function ApplyPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Inscrição para a S.P.E.E.D
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
          Este é o primeiro passo para se juntar à força tática de elite de Grande Metrópole. Preencha com atenção. O futuro da segurança da cidade pode depender de você.
        </p>
      </div>
      <ApplyForm />
    </div>
  );
}

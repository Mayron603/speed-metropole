
export default function ManualsPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Doutrina Operacional
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          O conhecimento da nossa doutrina é o que separa uma perseguição caótica de um acompanhamento tático preciso. Estude, entenda e aplique.
        </p>
      </div>

      <div className="mt-12">
        <div className="aspect-w-16 aspect-h-9" style={{ height: '100vh' }}>
          <iframe
            src="https://docs.google.com/document/d/1pnktdv9MlPxurFyz7S0Y7Ze-TMH6KDazHjkuBojvPQA/preview?usp=sharing"
            className="w-full h-full border-0 rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

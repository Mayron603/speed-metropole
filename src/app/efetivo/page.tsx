
export default function EfetivoPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Efetivo da S.P.E.E.D
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Relação de todos os operadores da unidade, suas patentes e status operacional, diretamente da nossa planilha oficial.
        </p>
      </div>

      <div className="mt-12">
        <div className="aspect-w-16 aspect-h-9" style={{ height: '100vh' }}>
          <iframe
            src="https://docs.google.com/spreadsheets/d/1TpIpIWRdOyamx4TMuZmnbUDBhT4R_NV5/edit?usp=sharing&ouid=103137215518625883697&rtpof=true&sd=true"
            className="w-full h-full border-0 rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

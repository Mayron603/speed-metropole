
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
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSDBj-y4PGo3yL2XzW2wT3zCst40frNaSFs3v3G-e6A_uJ0SAZ1vH_C_M-wzH0i_g-vH-n_bE_wE-2k/pubhtml?widget=true&amp;headers=false"
            className="w-full h-full border-0 rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

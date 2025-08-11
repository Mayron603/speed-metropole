import { Shield } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src="/img/logo.png" alt="SPEED Logo" width={24} height={24} />
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            © {currentYear} S.P.E.E.D - Special Police Emergency Enforcement Division. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

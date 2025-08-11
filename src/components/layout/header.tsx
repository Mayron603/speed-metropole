"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Shield } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/hierarchy", label: "Hierarquia" },
  { href: "/efetivo", label: "Efetivo" },
  { href: "/manuals", label: "Manuais" },
  { href: "/apply", label: "Inscreva-se" },
  { href: "/contact", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-card p-1 rounded-full border">
            <Image src="/img/logo.png" alt="SPEED Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
          </div>
          <span className="font-bold text-lg font-headline">S.P.E.E.D.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
           <Link href="/dashboard">
              <Button variant="outline" size="sm">Painel do Membro</Button>
            </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link
                  href="/"
                  className="flex items-center gap-3 text-lg font-semibold"
                >
                  <div className="bg-card p-1 rounded-full border">
                    <Image src="/img/logo.png" alt="SPEED Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
                  </div>
                  <span className="font-bold">S.P.E.E.D.</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "transition-colors hover:text-primary",
                      pathname === item.href ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                 <Link href="/dashboard" className="text-muted-foreground transition-colors hover:text-primary">
                    Painel do Membro
                 </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

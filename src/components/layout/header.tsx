
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, LogOut, LayoutDashboard } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton";
import { LoginButton } from "@/components/login-button";


const navItems = [
  { href: "/", label: "Início" },
  { href: "/hierarchy", label: "Hierarquia" },
  { href: "/efetivo", label: "Efetivo" },
  { href: "/manuals", label: "Manuais" },
  { href: "/apply", label: "Inscreva-se" },
  { href: "/contact", label: "Contato" },
];

function UserNav() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Skeleton className="h-10 w-28" />;
  }

  if (status === "unauthenticated") {
    return (
       <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-headline text-3xl text-center">Acesso Restrito</DialogTitle>
            <DialogDescription className="text-center pt-2">
              O acesso ao painel de membros é exclusivo para operadores e é feito através do Discord.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <LoginButton />
          </div>
          <DialogFooter className="text-sm text-center w-full justify-center">
             Ainda não é um membro?{" "}
            <Link href="/apply" className="underline text-primary hover:text-primary/80">
              Inscreva-se
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={session?.user?.image ?? undefined} alt={session?.user?.name ?? ""} />
            <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Painel</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="bg-card p-1 rounded-full border">
            <Image src="/img/logo.png" alt="SPEED Logo" width={64} height={64} className="h-16 w-16 rounded-full" />
          </div>
          <span className="font-bold text-2xl font-headline">S.P.E.E.D.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 uppercase text-sm font-semibold rounded-md transition-colors border-2 border-transparent hover:border-border hover:bg-accent/50 hover:text-accent-foreground",
                pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
           <div className="hidden md:block">
            <UserNav />
          </div>
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
                 <div className="mt-4">
                  <UserNav />
                 </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

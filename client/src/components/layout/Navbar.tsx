import { Link, useLocation } from "wouter";
import { ShoppingCart, Candy, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <Link href="/">
        <a className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}>
          Home
        </a>
      </Link>
      <Link href="/admin">
        <a className={`text-sm font-medium transition-colors hover:text-primary ${location === "/admin" ? "text-primary" : "text-muted-foreground"}`}>
          Admin
        </a>
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 mx-auto">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <Candy className="h-6 w-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">Sugar Rush</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavItems />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative hover:bg-secondary/20 hover:text-secondary-foreground">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
              0
            </span>
          </Button>
          
          <Link href="/auth">
            <Button variant="ghost" size="sm" className="hidden md:flex gap-2 hover:bg-primary/10 hover:text-primary">
              <User className="h-4 w-4" />
              Sign In
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/">
                  <a className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                    <Candy className="h-6 w-6 text-primary" />
                    <span className="font-display font-bold text-xl">Sugar Rush</span>
                  </a>
                </Link>
                <div className="flex flex-col gap-4">
                  <Link href="/">
                    <a className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Home</a>
                  </Link>
                  <Link href="/admin">
                    <a className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Admin Dashboard</a>
                  </Link>
                  <Link href="/auth">
                    <a className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Sign In</a>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SweetGrid from "@/components/sweets/SweetGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SweetGrid />
      </main>
      <footer className="bg-white border-t py-12 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tight text-foreground">Sugar Rush</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Sugar Rush. All rights reserved. Made with 🍭.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

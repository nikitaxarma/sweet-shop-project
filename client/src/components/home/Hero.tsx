import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/pastel_candy_store_hero_background.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-secondary/30 px-3 py-1 text-sm font-semibold text-secondary-foreground backdrop-blur-sm border border-secondary/20">
                New Seasonal Flavors Available! 🍬
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-foreground drop-shadow-sm">
                Life is short. <br />
                <span className="text-primary">Make it sweet.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-medium">
                Handcrafted confections, gourmet chocolates, and nostalgic treats delivered straight to your door. Indulge in a little happiness today.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95">
                Shop Sweets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 hover:bg-accent/10 hover:text-accent-foreground hover:border-accent">
                Our Story
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <p>Loved by 5,000+ sweet tooths</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative mx-auto lg:ml-auto"
          >
            <div className="relative h-[400px] w-[400px] sm:h-[500px] sm:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
              <img
                alt="Sweet Shop Hero"
                className="relative mx-auto h-full w-full object-cover rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white"
                src={heroImage}
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-secondary/20 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✨</span>
                  <p className="font-bold text-sm text-foreground">Premium Quality</p>
                </div>
                <p className="text-xs text-muted-foreground">Made with organic ingredients and love.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

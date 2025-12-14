import { Sweet } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface SweetCardProps {
  sweet: Sweet;
}

export default function SweetCard({ sweet }: SweetCardProps) {
  const { toast } = useToast();

  const handlePurchase = () => {
    toast({
      title: "Added to cart!",
      description: `1x ${sweet.name} has been added to your cart.`,
      className: "bg-white border-secondary/50 text-foreground",
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-white rounded-xl group">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={sweet.image}
            alt={sweet.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur-sm shadow-sm font-bold">
              ${sweet.price.toFixed(2)}
            </Badge>
          </div>
          {sweet.stock === 0 && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
              <Badge variant="destructive" className="text-lg px-4 py-2 rotate-12">
                Sold Out
              </Badge>
            </div>
          )}
        </div>
        
        <CardHeader className="p-4 pb-0">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="text-xs text-muted-foreground border-muted-foreground/30 bg-transparent">
              {sweet.category}
            </Badge>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="h-3 w-3 fill-current" />
              <span className="text-xs font-bold text-muted-foreground">{sweet.rating}</span>
            </div>
          </div>
          <h3 className="font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors">
            {sweet.name}
          </h3>
        </CardHeader>
        
        <CardContent className="p-4 pt-2 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {sweet.description}
          </p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full rounded-full bg-secondary/20 text-secondary-foreground hover:bg-secondary/40 font-bold shadow-none"
            onClick={handlePurchase}
            disabled={sweet.stock === 0}
            data-testid={`button-purchase-${sweet.id}`}
          >
            {sweet.stock > 0 ? (
              <>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </>
            ) : (
              "Out of Stock"
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

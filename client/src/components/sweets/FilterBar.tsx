import { Button } from "@/components/ui/button";
import { categories } from "@/lib/mockData";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function FilterBar({ 
  selectedCategory, 
  onSelectCategory, 
  searchQuery, 
  onSearchChange 
}: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 sticky top-20 z-40 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border/50 shadow-sm">
      <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onSelectCategory(category)}
            className={`rounded-full transition-all ${
              selectedCategory === category 
                ? "bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary/90" 
                : "hover:bg-primary/10 hover:text-primary hover:border-primary/50"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="relative w-full md:w-[300px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search for treats..." 
          className="pl-9 rounded-full bg-white border-border/50 focus-visible:ring-primary/50"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}

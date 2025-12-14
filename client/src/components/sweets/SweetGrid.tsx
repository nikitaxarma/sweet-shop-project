import { useState } from "react";
import { sweets } from "@/lib/mockData";
import SweetCard from "./SweetCard";
import FilterBar from "./FilterBar";
import { motion, AnimatePresence } from "framer-motion";

export default function SweetGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSweets = sweets.filter((sweet) => {
    const matchesCategory = selectedCategory === "All" || sweet.category === selectedCategory;
    const matchesSearch = sweet.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sweet.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 bg-muted/30" id="shop">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Our Sweet Collection
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Browse our curated selection of handcrafted delights.
          </p>
        </div>

        <FilterBar 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          <AnimatePresence>
            {filteredSweets.length > 0 ? (
              filteredSweets.map((sweet) => (
                <motion.div
                  layout
                  key={sweet.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <SweetCard sweet={sweet} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-12 text-center"
              >
                <div className="text-6xl mb-4">🍪</div>
                <h3 className="text-xl font-bold text-muted-foreground">No sweets found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

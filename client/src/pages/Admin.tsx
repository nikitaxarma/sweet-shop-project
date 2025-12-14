import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { sweets } from "@/lib/mockData";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSweets = sweets.filter(sweet => 
    sweet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAction = (action: string) => {
    toast({
      title: "Action Triggered",
      description: `You clicked ${action}. This is a mockup.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your sweet inventory.</p>
          </div>
          <Button onClick={() => handleAction("Add New Sweet")} className="gap-2 shadow-lg shadow-primary/20">
            <Plus className="h-4 w-4" /> Add New Sweet
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
          <div className="p-4 border-b flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search inventory..." 
              className="max-w-xs border-none shadow-none focus-visible:ring-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30 hover:bg-muted/30">
                  <TableHead className="w-[80px]">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSweets.map((sweet) => (
                  <TableRow key={sweet.id}>
                    <TableCell>
                      <div className="h-10 w-10 rounded-md overflow-hidden bg-muted">
                        <img src={sweet.image} alt={sweet.name} className="h-full w-full object-cover" />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{sweet.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-white">
                        {sweet.category}
                      </Badge>
                    </TableCell>
                    <TableCell>${sweet.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={sweet.stock === 0 ? "destructive" : sweet.stock < 10 ? "secondary" : "outline"}
                        className={sweet.stock > 10 ? "bg-green-50 text-green-700 border-green-200" : ""}
                      >
                        {sweet.stock === 0 ? "Out of Stock" : `${sweet.stock} units`}
                      </Badge>
                    </TableCell>
                    <TableCell>{sweet.rating} ⭐</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleAction(`Edit ${sweet.name}`)}>
                          <Edit className="h-4 w-4 text-muted-foreground hover:text-primary" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleAction(`Delete ${sweet.name}`)}>
                          <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

import macaronImage from '@assets/generated_images/gourmet_macarons.png';
import truffleImage from '@assets/generated_images/chocolate_truffles.png';
import lollipopImage from '@assets/generated_images/rainbow_lollipops.png';
import gummyImage from '@assets/generated_images/gummy_bears.png';

export interface Sweet {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
}

export const sweets: Sweet[] = [
  {
    id: 1,
    name: "Parisian Macarons",
    description: "Delicate almond meringue cookies with creamy ganache filling. Assorted flavors including Raspberry, Pistachio, and Salted Caramel.",
    price: 24.99,
    image: macaronImage,
    category: "Gourmet",
    stock: 15,
    rating: 4.8
  },
  {
    id: 2,
    name: "Golden Truffles",
    description: "Hand-crafted dark chocolate truffles dusted with edible 24k gold. The ultimate luxury treat for chocolate lovers.",
    price: 32.50,
    image: truffleImage,
    category: "Chocolate",
    stock: 8,
    rating: 4.9
  },
  {
    id: 3,
    name: "Rainbow Swirls",
    description: "Classic jumbo lollipops with mesmerizing rainbow swirls. Fruit flavored and perfect for parties.",
    price: 4.50,
    image: lollipopImage,
    category: "Hard Candy",
    stock: 50,
    rating: 4.5
  },
  {
    id: 4,
    name: "Gummy Bear Mountain",
    description: "A mountain of our signature soft and chewy gummy bears. Made with real fruit juice.",
    price: 12.99,
    image: gummyImage,
    category: "Gummies",
    stock: 25,
    rating: 4.7
  },
  {
    id: 5,
    name: "Sour Watermelon Slices",
    description: "Tangy and sweet watermelon gummy slices coated in sour sugar. A refreshing burst of flavor.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=1000",
    category: "Gummies",
    stock: 0,
    rating: 4.6
  },
  {
    id: 6,
    name: "Rock Candy Geodes",
    description: "Crystalline sugar formations on a stick. Beautiful to look at and delicious to eat.",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&q=80&w=1000",
    category: "Hard Candy",
    stock: 12,
    rating: 4.3
  }
];

export const categories = ["All", "Gourmet", "Chocolate", "Hard Candy", "Gummies"];

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const graniteProducts = [
  "Aspen White",
  "Azul Noveau",
  "Black Forest",
  "Black Galaxy",
  "Black Pearl",
  "Coffee Brown",
  "Dambulla White",
  "Forest White",
  "Kuppam White",
  "Moon White",
  "Orion White",
  "Steel Grey",
  "Prada Gold",
  "River White",
  "Sapphire Blue",
  "Lapthora",
];

const quartzProducts = [
  "Arctic White",
  "Calacutta Cosmos",
  "Calacutta Grey",
  "Calacutta Magnum",
  "Calacutta Quintess",
  "Calacutta Ultra",
  "Calacatta Valentine",
  "Carrara Aurous",
  "Carrara Grey",
  "Frost White",
  "Grey Speckle",
  "Iced White",
  "Nexa Sparkling White",
  "Neo Pure White",
];

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const ProductCard = ({ name }: { name: string }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 bg-muted h-64 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted/50 group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-secondary/90 to-transparent">
        <h3 className="font-display text-lg font-bold text-white">{name}</h3>
      </div>
    </div>
  );

  return (
    <section id="products" className="section-container bg-muted/30">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">Our Premium Collection</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our extensive range of premium granite and quartz products, each carefully selected for quality and
          beauty.
        </p>
      </div>

      <Tabs defaultValue="granite" className="w-full animate-slide-up">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <TabsTrigger value="granite">Granite Collection</TabsTrigger>
          <TabsTrigger value="quartz">Quartz Collection</TabsTrigger>
        </TabsList>

        <TabsContent value="granite" className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {graniteProducts.map((product) => (
              <ProductCard key={product} name={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quartz" className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quartzProducts.map((product) => (
              <ProductCard key={product} name={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProductShowcase;

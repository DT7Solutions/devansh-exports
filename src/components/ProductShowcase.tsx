import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Granite Products: [name, imagePath]
const graniteProducts: [string, string][] = [
  ["Aspen White", "/src/assets/products/granites/aspen-white.png"],
  ["Azul Noveau", "/src/assets/products/granites/azul-noveau.png"],
  ["Black Forest", "/src/assets/products/granites/black-forest.png"],
  ["Black Galaxy", "/src/assets/products/granites/black-galaxy.png"],
  ["Black Pearl", "/src/assets/products/granites/black-pearl.png"],
  ["Coffee Brown", "/src/assets/products/granites/coffee-brown.png"],
  ["Dambulla White", "/src/assets/products/granites/dambulla-white.png"],
  ["Forest White", "/src/assets/products/granites/forest-white.png"],
  ["Kuppam White", "/src/assets/products/granites/kuppam-white.png"],
  ["Moon White", "/src/assets/products/granites/moon-white.png"],
  ["Orion White", "/src/assets/products/granites/orion-white.png"],
  ["Steel Grey", "/src/assets/products/granites/steel-grey.png"],
  ["Prada Gold", "/src/assets/products/granites/prada-gold.png"],
  ["River White", "/src/assets/products/granites/river-white.png"],
  ["Sapphire Blue", "/src/assets/products/granites/sapphire-blue.png"],
  ["Lapthora", "/src/assets/products/granites/lapthora.png"],
];

// Quartz Products: [name, imagePath]
const quartzProducts: [string, string][] = [
  ["Arctic White", "/src/assets/products/quartzs/arctic-white.png"],
  ["Calacutta Cosmos", "/src/assets/products/quartzs/calacutta-cosmos.png"],
  ["Calacutta Grey", "/src/assets/products/quartzs/calacutta-grey.png"],
  ["Calacutta Magnum", "/src/assets/products/quartzs/calacutta-magnum.png"],
  ["Calacutta Quintess", "/src/assets/products/quartzs/calacutta-quintess.png"],
  ["Calacutta Ultra", "/src/assets/products/quartzs/calacutta-ultra.png"],
  ["Calacatta Valentine", "/src/assets/products/quartzs/calacatta-valentine.png"],
  ["Carrara Aurous", "/src/assets/products/quartzs/carrara-aurous.png"],
  ["Carrara Grey", "/src/assets/products/quartzs/carrara-grey.png"],
  ["Frost White", "/src/assets/products/quartzs/frost-white.png"],
  ["Grey Speckle", "/src/assets/products/quartzs/grey-speckle.png"],
  ["Iced White", "/src/assets/products/quartzs/iced-white.png"],
  ["Nexa Sparkling White", "/src/assets/products/quartzs/nexa-sparkling-white.png"],
  ["Neo Pure White", "/src/assets/products/quartzs/neo-pure-white.png"],
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

  const ProductCard = ({ name, image }: { name: string; image: string }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 h-64 cursor-pointer">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted/50 group-hover:scale-105 transition-transform duration-300 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Product Name Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-secondary/90 to-transparent">
        <h3 className="font-display text-lg font-bold text-white">{name}</h3>
      </div>
    </div>
  );

  return (
    <section id="products" className="section-container bg-muted/30">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">
          Our <span className="text-highlight">Premium Collection</span>
        </h2>
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
            {graniteProducts.map(([name, image]) => (
              <ProductCard key={name} name={name} image={image} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quartz" className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quartzProducts.map(([name, image]) => (
              <ProductCard key={name} name={name} image={image} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProductShowcase;

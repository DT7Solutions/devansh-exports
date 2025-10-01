import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Granite image imports
import aspenWhite from "@/assets/products/granites/aspen-white.png";
import azulNoveau from "@/assets/products/granites/azul-noveau.png";
import blackForest from "@/assets/products/granites/black-forest.png";
import blackGalaxy from "@/assets/products/granites/black-galaxy.png";
import blackPearl from "@/assets/products/granites/black-pearl.png";
import coffeeBrown from "@/assets/products/granites/coffee-brown.png";
import dambullaWhite from "@/assets/products/granites/dambulla-white.png";
import forestWhite from "@/assets/products/granites/forest-white.png";
import kuppamWhite from "@/assets/products/granites/kuppam-white.png";
import moonWhite from "@/assets/products/granites/moon-white.png";
import orionWhite from "@/assets/products/granites/orion-white.png";
import steelGrey from "@/assets/products/granites/steel-grey.png";
import pradaGold from "@/assets/products/granites/prada-gold.png";
import riverWhite from "@/assets/products/granites/river-white.png";
import sapphireBlue from "@/assets/products/granites/sapphire-blue.png";
import lapthora from "@/assets/products/granites/lapthora.png";

// Quartz image imports
import arcticWhite from "@/assets/products/quartzs/arctic-white.png";
import calacuttaCosmos from "@/assets/products/quartzs/calacutta-cosmos.png";
import calacuttaGrey from "@/assets/products/quartzs/calacutta-grey.png";
import calacuttaMagnum from "@/assets/products/quartzs/calacutta-magnum.png";
import calacuttaQuintess from "@/assets/products/quartzs/calacutta-quintess.png";
import calacuttaUltra from "@/assets/products/quartzs/calacutta-ultra.png";
import calacattaValentine from "@/assets/products/quartzs/calacatta-valentine.png";
import carraraAurous from "@/assets/products/quartzs/carrara-aurous.png";
import carraraGrey from "@/assets/products/quartzs/carrara-grey.png";
import frostWhite from "@/assets/products/quartzs/frost-white.png";
import greySpeckle from "@/assets/products/quartzs/grey-speckle.png";
import icedWhite from "@/assets/products/quartzs/iced-white.png";
import nexaSparklingWhite from "@/assets/products/quartzs/nexa-sparkling-white.png";
import neoPureWhite from "@/assets/products/quartzs/neo-pure-white.png";

// Granite Products: [name, image]
const graniteProducts: [string, string][] = [
  ["Aspen White", aspenWhite],
  ["Azul Noveau", azulNoveau],
  ["Black Forest", blackForest],
  ["Black Galaxy", blackGalaxy],
  ["Black Pearl", blackPearl],
  ["Coffee Brown", coffeeBrown],
  ["Dambulla White", dambullaWhite],
  ["Forest White", forestWhite],
  ["Kuppam White", kuppamWhite],
  ["Moon White", moonWhite],
  ["Orion White", orionWhite],
  ["Steel Grey", steelGrey],
  ["Prada Gold", pradaGold],
  ["River White", riverWhite],
  ["Sapphire Blue", sapphireBlue],
  ["Lapthora", lapthora],
];

// Quartz Products: [name, image]
const quartzProducts: [string, string][] = [
  ["Arctic White", arcticWhite],
  ["Calacutta Cosmos", calacuttaCosmos],
  ["Calacutta Grey", calacuttaGrey],
  ["Calacutta Magnum", calacuttaMagnum],
  ["Calacutta Quintess", calacuttaQuintess],
  ["Calacutta Ultra", calacuttaUltra],
  ["Calacatta Valentine", calacattaValentine],
  ["Carrara Aurous", carraraAurous],
  ["Carrara Grey", carraraGrey],
  ["Frost White", frostWhite],
  ["Grey Speckle", greySpeckle],
  ["Iced White", icedWhite],
  ["Nexa Sparkling White", nexaSparklingWhite],
  ["Neo Pure White", neoPureWhite],
];

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

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
          Explore our extensive range of premium granite and quartz products, each carefully selected for quality and beauty.
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
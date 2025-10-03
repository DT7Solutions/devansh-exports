import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import sectionBg from "@/assets/products-bg.png";

// Granite image imports
import aspenwhite from "@/assets/products/granites/aspen-white.png";
import azulnoveau from "@/assets/products/granites/azul-noveau.png";
import blackforest from "@/assets/products/granites/black-forest.png";
import blackgalaxy from "@/assets/products/granites/black-galaxy.png";
import blackpearl from "@/assets/products/granites/black-pearl.png";
import coffeebrown from "@/assets/products/granites/coffee-brown.png";
import dambullawhite from "@/assets/products/granites/dambulla-white.png";
import forestwhite from "@/assets/products/granites/forest-white.png";
import kuppamwhite from "@/assets/products/granites/kuppam-white.png";
import moonwhite from "@/assets/products/granites/moon-white.png";
import orionwhite from "@/assets/products/granites/orion-white.png";
import steelgrey from "@/assets/products/granites/steel-grey.png";
import pradagold from "@/assets/products/granites/prada-gold.png";
import riverwhite from "@/assets/products/granites/river-white.png";
import sapphireblue from "@/assets/products/granites/sapphire-blue.png";
import steelgreylapthora from "@/assets/products/granites/steel-grey-lapthora.png";

// Quartz image imports
import arcticwhite from "@/assets/products/quartzs/arctic-white.png";
import calacuttacosmos from "@/assets/products/quartzs/calacutta-cosmos.png";
import calacuttagrey from "@/assets/products/quartzs/calacutta-grey.png";
import calacuttamagnum from "@/assets/products/quartzs/calacutta-magnum.png";
import calacuttaquintess from "@/assets/products/quartzs/calacutta-quintess.png";
import calacuttaultra from "@/assets/products/quartzs/calacutta-ultra.png";
import calacattavalentine from "@/assets/products/quartzs/calacatta-valentine.png";
import carraraaurous from "@/assets/products/quartzs/carrara-aurous.png";
import carraragrey from "@/assets/products/quartzs/carrara-grey.png";
import frostwhite from "@/assets/products/quartzs/frost-white.png";
import greyspeckle from "@/assets/products/quartzs/grey-speckle.png";
import icedwhite from "@/assets/products/quartzs/iced-white.png";
import nexa from "@/assets/products/quartzs/nexa.png";
import sparklingwhiteneo from "@/assets/products/quartzs/sparkling-white-neo.png";
import purewhite from "@/assets/products/quartzs/pure-white.png";

// Granite Products: [name, image]
const graniteProducts: [string, string][] = [
  ["Aspen White", aspenwhite],
  ["Azul Noveau", azulnoveau],
  ["Black Forest", blackforest],
  ["Black Galaxy", blackgalaxy],
  ["Black Pearl", blackpearl],
  ["Coffee Brown", coffeebrown],
  ["Dambulla White", dambullawhite],
  ["Forest White", forestwhite],
  ["Kuppam White", kuppamwhite],
  ["Moon White", moonwhite],
  ["Orion White", orionwhite],
  ["Steel Grey", steelgrey],
  ["Prada Gold", pradagold],
  ["River White", riverwhite],           
  ["Sapphire Blue", sapphireblue],
  ["Steel Grey Lapthora", steelgreylapthora],
];

// Quartz Products: [name, image]
const quartzProducts: [string, string][] = [
  ["Arctic White", arcticwhite],
  ["Calacutta Cosmos", calacuttacosmos],
  ["Calacutta Grey", calacuttagrey],
  ["Calacutta Magnum", calacuttamagnum],
  ["Calacutta Quintess", calacuttaquintess],
  ["Calacutta Ultra", calacuttaultra],
  ["Calacatta Valentine", calacattavalentine],
  ["Carrara Aurous", carraraaurous],
  ["Carrara Grey", carraragrey],
  ["Frost White", frostwhite],
  ["Grey Speckle", greyspeckle],
  ["Iced White", icedwhite],
  ["Nexa", nexa],
  ["Sparkling White Neo", sparklingwhiteneo],
  ["Pure White", purewhite],
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
    <section id="products" className="bg-muted/30" style={{ backgroundImage: `url(${sectionBg})`, backgroundSize: "cover", backgroundPosition: "center", }}>
      <div className="section-container">
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
      </div>
    </section>
  );
};

export default ProductShowcase;
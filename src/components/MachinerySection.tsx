import { useState, useEffect } from "react";
import { Settings, Shield, Handshake, Factory, ChevronLeft, ChevronRight } from "lucide-react";
import machinery1 from "@/assets/machinery-1.jpg";
import machinery2 from "@/assets/machinery-2.jpg";
import machinery3 from "@/assets/machinery-3.jpg";

const machineryImages = [
  { image: machinery1, caption: "Artheya D - Precision Cutting" },
  { image: machinery2, caption: "Kartiki - Advanced Polishing" },
  { image: machinery3, caption: "GB-142 DUAD - Conveyor Systems" },
];

const features = [
  {
    icon: Settings,
    title: "Advanced Technology",
    description: "Cutting-edge machinery for precision cutting and polishing",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control at every stage of production",
  },
  {
    icon: Handshake,
    title: "Expert Partnership",
    description: "Collaboration with Swastik Engineering Company",
  },
  {
    icon: Factory,
    title: "High Capacity",
    description: "State-of-the-art conveyor and tensioner systems",
  },
];

const MachinerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % machineryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % machineryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + machineryImages.length) % machineryImages.length);
  };

  return (
    <section id="machinery" className="section-container bg-background">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">
          State-of-the-Art Manufacturing
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our advanced machinery and expert craftsmanship ensure precision and quality in every stone we produce.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Features Column */}
        <div className="space-y-6 animate-slide-up">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-soft transition-all"
            >
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Machinery Image Slider */}
        <div
          className="relative overflow-hidden rounded-lg shadow-strong animate-fade-in"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {machineryImages.map((item, index) => (
            <div
              key={index}
              className={`transition-opacity duration-800 ${index === currentImage ? "opacity-100" : "opacity-0 absolute inset-0"}`}
            >
              <img src={item.image} alt={item.caption} className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 p-4">
                <p className="text-white font-semibold text-center">{item.caption}</p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {machineryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentImage ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachinerySection;

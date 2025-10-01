import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: heroImage1,
    heading: "Devansh Exports",
    subheading: "Delivering Excellence in Granite Since 2017",
    tagline: "Strength in Every Stone",
  },
  {
    image: heroImage2,
    heading: "Premium Quality Granite & Quartz",
    subheading: "For Every Space",
    tagline: "Strength in Every Stone",
  },
  {
    image: heroImage3,
    heading: "Trusted by Builders, Architects & Homeowners",
    subheading: "Across India and Beyond",
    tagline: "Strength in Every Stone",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`text-center px-4 max-w-4xl transition-all duration-700 ${
                index === currentSlide ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                {slide.heading}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-2">{slide.subheading}</p>
              <p className="text-lg md:text-xl text-primary font-semibold mb-8">{slide.tagline}</p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="lg" onClick={() => scrollToSection("products")}>
                  Explore Products
                </Button>
                <Button variant="cta" size="lg" onClick={() => scrollToSection("contact")}>
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? "w-12 bg-primary" : "w-3 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
